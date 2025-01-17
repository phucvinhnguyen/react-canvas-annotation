import { EventType } from 'interfaces/enums/EventType';
import { LabelType } from 'interfaces/enums/LabelType';
import { IEditorData } from 'interfaces/IEditorData';
import { PolygonEngine, PrimaryEngine, RectEngine, ViewPortHelper } from 'logic';
import { EditorActions } from 'logic/EditorActions';
import { ViewPortActions } from 'logic/ViewPortActions';
import { EditorModel } from 'model/EditorModel';
import { useEffect } from 'react';
import { AnnotationData, LabelsData } from 'store/labels/types';
import { CanvasUtil } from 'utils/CanvasUtil';
import { FileUtil } from 'utils/FileUtil';

interface IProps {
  annotationType: LabelType;
  imageData: AnnotationData;
  imageDragMode: boolean;
  onLabelsDataChange?: (labelsData: LabelsData) => void;
  onHover?: (id: string) => void;
  onClick?: (id: string) => void;
  onMouseOut?: (id: string) => void;
}

const NOOP = () => {};

const useCanvasListeners = ({
  imageData,
  annotationType,
  imageDragMode,
  onLabelsDataChange = NOOP,
  onHover,
  onClick,
  onMouseOut,
}: IProps) => {
  useEffect(() => {
    const update = (event: MouseEvent) => {
      const editorData: IEditorData = EditorActions.getEditorData(event);
      EditorModel.mousePositionOnViewPortContent = CanvasUtil.getMousePositionOnCanvasFromEvent(
        event,
        EditorModel.canvas,
      );

      EditorModel.primaryRenderingEngine.update(editorData);

      if (imageDragMode) {
        EditorModel.viewPortHelper.update(editorData);
      } else {
        EditorModel?.supportRenderingEngine.update(
          editorData,
          onLabelsDataChange,
          onHover,
          onClick,
          onMouseOut,
        );
      }

      EditorActions.updateMousePositionIndicator(event);
      EditorActions.fullRender();
    };

    window.addEventListener(EventType.MOUSE_MOVE, update);
    window.addEventListener(EventType.MOUSE_UP, update);
    
    EditorModel.canvas.addEventListener(EventType.MOUSE_DOWN, update);

    return () => {
      window.removeEventListener(EventType.MOUSE_MOVE, update);
      window.removeEventListener(EventType.MOUSE_UP, update);
      if (EditorModel.canvas) {
        EditorModel.canvas.removeEventListener(EventType.MOUSE_DOWN, update);
      }
    };
  }, [imageDragMode, onClick, onHover, onLabelsDataChange, onMouseOut]);

  useEffect(() => {
    const updateModelAndRender = () => {
      ViewPortActions.updateViewPortSize();
      ViewPortActions.updateDefaultViewPortImageRect();
      ViewPortActions.resizeViewPortContent();
      EditorActions.fullRender();
    };

    const saveLoadedImage = (image: HTMLImageElement, imageData: AnnotationData) => {
      imageData.loadStatus = true;

      EditorActions.setActiveImage(image);
      EditorActions.setLoadingStatus(false);
      updateModelAndRender();
    };

    // Load Image
    if (imageData.loadStatus) {
      updateModelAndRender();
    } else {
      if (!EditorModel.isLoading) {
        EditorActions.setLoadingStatus(true);
        const saveLoadedImagePartial = (image: HTMLImageElement) =>
          saveLoadedImage(image, imageData);
        FileUtil.loadImage(imageData.fileData, saveLoadedImagePartial, NOOP);
      }
    }
  }, [imageData]);

  useEffect(() => {
    EditorModel.viewPortHelper = new ViewPortHelper();
    EditorModel.primaryRenderingEngine = new PrimaryEngine(EditorModel.canvas);
    EditorModel.supportRenderingEngine =
      annotationType === LabelType.RECTANGLE
        ? new RectEngine(EditorModel.canvas)
        : new PolygonEngine(EditorModel.canvas);
  }, [annotationType]);
};

export default useCanvasListeners;
