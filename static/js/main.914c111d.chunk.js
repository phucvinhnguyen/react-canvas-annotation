(this["webpackJsonpreact-canvas-annotation-example"]=this["webpackJsonpreact-canvas-annotation-example"]||[]).push([[0],{27:function(e,n,t){e.exports=t.p+"static/media/img.c13c8705.jpg"},28:function(e,n,t){e.exports=t(54)},54:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(1);function o(){var e=Object(r.a)(["\n  body {\n    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);\n    background-blend-mode: multiply;\n  }\n  main {\n    ","\n  }\n  h1 {\n    ","\n  }\n"]);return o=function(){return e},e}var i=Object(a.a)(o(),{height:"100vh",width:"100vw",color:"#fff"},{fontSize:"1.5rem",textAlign:"center"}),c=t(0),C=t.n(c),E=t(8),u=t.n(E),l=t(11),s=t.n(l),_=t(24),d=t(3),A=t(15);function L(){var e=Object(r.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return L=function(){return e},e}var T=function(){},f=function(e){var n=e.className,t=e.children,r=e.onClick,a=void 0===r?T:r,o=e.isPressed,i=void 0!==o&&o,c=e.disabled,E=void 0!==c&&c;return C.a.createElement(O,{className:n,onClick:a,isPressed:i,disabled:E},t)},O=a.b.button(L(),{transitionProperty:"background-color, border-color, color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"},{cursor:"pointer",borderColor:"#a0aec0",borderWidth:"1px",padding:"0.5rem",":hover, :focus":{backgroundColor:"#97266d"}},{boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",borderRadius:"0.125rem"},Object(A.a)("isPressed",{backgroundColor:"#702459"}),Object(A.a)("disabled",{cursor:"not-allowed",opacity:"0.25"}));f.className=O;var m,D,v,b,p,S=f,I=(t(9),t(6)),R=(t(13),t(25),t(26),t(14));function g(){return(g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function P(e,n){return n||(n=e.slice(0)),e.raw=n,e}!function(e){e.DEFAULT="DEFAULT",e.MOVE="MOVE",e.RESIZE="RESIZE",e.ADD="ADD",e.CANCEL="CANCEL",e.CLOSE="CLOSE",e.GRAB="GRAB",e.GRABBING="GRABBING"}(m||(m={})),function(e){e.RECTANGLE="RECTANGLE",e.POLYGON="POLYGON"}(D||(D={})),function(e){e.LOAD_LABEL_NAMES="LOAD_LABEL_NAMES",e.SUGGEST_LABEL_NAMES="SUGGEST_LABEL_NAMES",e.LOAD_IMAGES="LOAD_IMAGES",e.LOAD_AI_MODEL="LOAD_AI_MODEL",e.EXPORT_LABELS="EXPORT_LABELS",e.INSERT_LABEL_NAMES="INSERT_LABEL_NAMES",e.EXIT_PROJECT="EXIT_PROJECT",e.LOADER="LOADER"}(v||(v={})),function(e){e.RESIZE="resize",e.MOUSE_UP="mouseup",e.MOUSE_DOWN="mousedown",e.MOUSE_MOVE="mousemove",e.MOUSE_WHEEL="wheel",e.KEY_DOWN="keydown",e.KEY_PRESS="keypress",e.KEY_UP="keyup",e.FOCUS="focus"}(b||(b={})),function(e){e.UPDATE_WINDOW_SIZE="@@UPDATE_WINDOW_SIZE",e.UPDATE_CUSTOM_CURSOR_STYLE="@@UPDATE_CUSTOM_CURSOR_STYLE",e.UPDATE_PREVENT_CUSTOM_CURSOR_STATUS="@@UPDATE_PREVENT_CUSTOM_CURSOR_STATUS",e.UPDATE_IMAGE_DRAG_MODE_STATUS="@@UPDATE_IMAGE_DRAG_MODE_STATUS",e.UPDATE_ZOOM="@@UPDATE_ZOOM",e.UPDATE_FILE_DATA="@@UPDATE_FILE_DATA",e.UPDATE_ACTIVE_LABEL_NAME_ID="@@UPDATE_ACTIVE_LABEL_NAME_ID",e.UPDATE_ACTIVE_LABEL_TYPE="@@UPDATE_ACTIVE_LABEL_TYPE",e.UPDATE_ACTIVE_LABEL_ID="@@UPDATE_ACTIVE_LABEL_ID",e.UPDATE_HIGHLIGHTED_LABEL_ID="@@UPDATE_HIGHLIGHTED_LABEL_ID",e.UPDATE_FIRST_LABEL_CREATED_FLAG="@@UPDATE_FIRST_LABEL_CREATED_FLAG",e.UPDATE_LABELS="@@UPDATE_LABELS_DATA"}(p||(p={}));var y=function(){};y.CANVAS_MIN_MARGIN_PX=20,y.MIN_ZOOM=1,y.MAX_ZOOM=4,y.ZOOM_STEP=.1,y.TRANSLATION_STEP_PX=20;var M={windowSize:null,customCursorStyle:m.DEFAULT,preventCustomCursor:!1,imageDragMode:!1,zoom:y.MIN_ZOOM};var U={activeLabelNameId:null,activeLabelType:null,activeLabelId:null,highlightedLabelId:null,imageData:null};var N=Object(I.b)({general:function(e,n){switch(void 0===e&&(e=M),n.type){case p.UPDATE_WINDOW_SIZE:return g(g({},e),{},{windowSize:n.payload.windowSize});case p.UPDATE_CUSTOM_CURSOR_STYLE:return g(g({},e),{},{customCursorStyle:n.payload.customCursorStyle});case p.UPDATE_PREVENT_CUSTOM_CURSOR_STATUS:return g(g({},e),{},{preventCustomCursor:n.payload.preventCustomCursor});case p.UPDATE_IMAGE_DRAG_MODE_STATUS:return g(g({},e),{},{imageDragMode:n.payload.imageDragMode});case p.UPDATE_ZOOM:return g(g({},e),{},{zoom:n.payload.zoom});default:return e}},labels:function(e,n){switch(void 0===e&&(e=U),n.type){case p.UPDATE_ACTIVE_LABEL_NAME_ID:return g(g({},e),{},{activeLabelNameId:n.payload.activeLabelNameId});case p.UPDATE_ACTIVE_LABEL_ID:return g(g({},e),{},{activeLabelId:n.payload.activeLabelId});case p.UPDATE_HIGHLIGHTED_LABEL_ID:return g(g({},e),{},{highlightedLabelId:n.payload.highlightedLabelId});case p.UPDATE_ACTIVE_LABEL_TYPE:return g(g({},e),{},{activeLabelType:n.payload.activeLabelType});case p.UPDATE_FILE_DATA:return g(g({},e),{},{imageData:g(g({},e.imageData),{},{fileData:n.payload.imageData.fileData})});case p.UPDATE_LABELS:return g(g({},e),{},{imageData:g(g({},e.imageData),n.payload.labels)});default:return e}}});var h,w=Object(I.c)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),G=function(){function e(){}return e.init=function(){e.handleResize(),window.addEventListener(b.RESIZE,e.handleResize)},e}();G.handleResize=function(){var e;w.dispatch((e={width:window.innerWidth,height:window.innerHeight},{type:p.UPDATE_WINDOW_SIZE,payload:{windowSize:e}}))};var x="M21 11H19.93C19.7068 9.23998 18.9049 7.60408 17.6504 6.34959C16.3959 5.0951 14.76 4.29319 13 4.07V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4.07C9.23998 4.29319 7.60408 5.0951 6.34959 6.34959C5.0951 7.60408 4.29319 9.23998 4.07 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H4.07C4.29319 14.76 5.0951 16.3959 6.34959 17.6504C7.60408 18.9049 9.23998 19.7068 11 19.93V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V19.93C14.76 19.7068 16.3959 18.9049 17.6504 17.6504C18.9049 16.3959 19.7068 14.76 19.93 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM17 13H17.91C17.7016 14.2264 17.1171 15.3578 16.2374 16.2374C15.3578 17.1171 14.2264 17.7016 13 17.91V17C13 16.7348 12.8946 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16C11.7348 16 11.4804 16.1054 11.2929 16.2929C11.1054 16.4804 11 16.7348 11 17V17.91C9.77356 17.7016 8.64222 17.1171 7.76256 16.2374C6.8829 15.3578 6.29842 14.2264 6.09 13H7C7.26522 13 7.51957 12.8946 7.70711 12.7071C7.89464 12.5196 8 12.2652 8 12C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11H6.09C6.29842 9.77356 6.8829 8.64222 7.76256 7.76256C8.64222 6.8829 9.77356 6.29842 11 6.09V7C11 7.26522 11.1054 7.51957 11.2929 7.70711C11.4804 7.89464 11.7348 8 12 8C12.2652 8 12.5196 7.89464 12.7071 7.70711C12.8946 7.51957 13 7.26522 13 7V6.09C14.2264 6.29842 15.3578 6.8829 16.2374 7.76256C17.1171 8.64222 17.7016 9.77356 17.91 11H17C16.7348 11 16.4804 11.1054 16.2929 11.2929C16.1054 11.4804 16 11.7348 16 12C16 12.2652 16.1054 12.5196 16.2929 12.7071C16.4804 12.8946 16.7348 13 17 13ZM12 11C11.8022 11 11.6089 11.0586 11.4444 11.1685C11.28 11.2784 11.1518 11.4346 11.0761 11.6173C11.0004 11.8 10.9806 12.0011 11.0192 12.1951C11.0578 12.3891 11.153 12.5673 11.2929 12.7071C11.4327 12.847 11.6109 12.9422 11.8049 12.9808C11.9989 13.0194 12.2 12.9996 12.3827 12.9239C12.5654 12.8482 12.7216 12.72 12.8315 12.5556C12.9414 12.3911 13 12.1978 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11Z";(h={})[m.MOVE]="M10.9873 14.1734L11.047 20.4242L10.1004 19.4938C9.94253 19.3386 9.72945 19.2525 9.50806 19.2544C9.28667 19.2563 9.0751 19.346 8.9199 19.5039C8.7647 19.6618 8.67858 19.8749 8.68049 20.0963C8.68239 20.3177 8.77217 20.5292 8.93006 20.6844L11.3114 23.0252C11.3901 23.1007 11.4829 23.1601 11.5845 23.1999C11.7893 23.2825 12.0185 23.2805 12.2219 23.1944C12.3228 23.1528 12.4145 23.0919 12.4919 23.015L14.8326 20.6337C14.9878 20.4758 15.074 20.2627 15.0721 20.0413C15.0702 19.8199 14.9804 19.6083 14.8225 19.4531C14.6646 19.2979 14.4515 19.2118 14.2301 19.2137C14.0087 19.2156 13.7972 19.3054 13.642 19.4633L12.7115 20.4099L12.6637 14.159C12.6617 13.9367 12.5716 13.7243 12.4131 13.5684C12.2545 13.4126 12.0406 13.3261 11.8183 13.328C11.596 13.33 11.3835 13.4201 11.2277 13.5786C11.0719 13.7372 10.9854 13.9511 10.9873 14.1734V14.1734ZM3.18614 11.047L4.11657 10.1004C4.27177 9.94253 4.35789 9.72945 4.35599 9.50806C4.35408 9.28667 4.26431 9.07511 4.10642 8.91991C3.94852 8.76471 3.73544 8.67859 3.51405 8.68049C3.29266 8.6824 3.0811 8.77217 2.9259 8.93007L0.58518 11.3114C0.509651 11.3901 0.450284 11.4829 0.410438 11.5845C0.327862 11.7893 0.329834 12.0185 0.415923 12.2219C0.457511 12.3228 0.518465 12.4145 0.595337 12.4919L2.97669 14.8327C3.13458 14.9879 3.34766 15.074 3.56905 15.0721C3.79044 15.0702 4.00201 14.9804 4.1572 14.8225C4.3124 14.6646 4.39852 14.4515 4.39662 14.2301C4.39471 14.0087 4.30494 13.7972 4.14705 13.642L3.20046 12.7115L9.45135 12.6637C9.56155 12.6632 9.67056 12.6409 9.77209 12.598C9.87363 12.5552 9.96568 12.4927 10.0429 12.4141C10.1202 12.3355 10.1811 12.2424 10.2222 12.1401C10.2633 12.0379 10.2837 11.9285 10.2823 11.8183C10.2818 11.7081 10.2595 11.5991 10.2167 11.4975C10.1738 11.396 10.1113 11.304 10.0327 11.2267C9.95412 11.1495 9.86101 11.0885 9.75875 11.0474C9.6565 11.0064 9.54712 10.9859 9.43693 10.9873L3.18614 11.047ZM19.4531 8.78786C19.2979 8.94575 19.2118 9.15883 19.2137 9.38022C19.2156 9.60161 19.3054 9.81318 19.4633 9.96837L20.4099 10.8988L14.159 10.9467C13.9367 10.9486 13.7243 11.0387 13.5684 11.1973C13.4126 11.3558 13.3261 11.5698 13.328 11.7921C13.33 12.0144 13.4201 12.2268 13.5786 12.3826C13.7372 12.5385 13.9511 12.6249 14.1734 12.623L20.4242 12.5633L19.4938 13.5099C19.3386 13.6678 19.2524 13.8809 19.2544 14.1023C19.2563 14.3237 19.346 14.5352 19.5039 14.6904C19.6618 14.8456 19.8749 14.9318 20.0963 14.9299C20.3177 14.928 20.5292 14.8382 20.6844 14.6803L23.0252 12.2989C23.1007 12.2202 23.1601 12.1275 23.1999 12.0259C23.2825 11.821 23.2805 11.5918 23.1944 11.3884C23.1528 11.2876 23.0919 11.1958 23.015 11.1184L20.6337 8.7777C20.4758 8.6225 20.2627 8.53638 20.0413 8.53828C19.8199 8.54019 19.6083 8.62996 19.4531 8.78786ZM12.0259 0.410442C11.821 0.327866 11.5918 0.329839 11.3884 0.415928C11.2876 0.457516 11.1958 0.518469 11.1184 0.595342L8.7777 2.97669C8.6225 3.13458 8.53638 3.34766 8.53828 3.56905C8.54019 3.79044 8.62996 4.00201 8.78785 4.15721C8.94575 4.31241 9.15883 4.39853 9.38022 4.39662C9.60161 4.39472 9.81317 4.30494 9.96837 4.14705L10.8988 3.20046L10.9467 9.45135C10.9472 9.56155 10.9695 9.67056 11.0123 9.7721C11.0552 9.87363 11.1177 9.96568 11.1963 10.0429C11.2749 10.1202 11.368 10.1811 11.4702 10.2222C11.5725 10.2633 11.6819 10.2837 11.7921 10.2823C11.9023 10.2818 12.0113 10.2595 12.1128 10.2167C12.2143 10.1738 12.3064 10.1113 12.3836 10.0327C12.4609 9.95412 12.5218 9.86101 12.5629 9.75876C12.604 9.6565 12.6244 9.54712 12.623 9.43693L12.5633 3.18614L13.5099 4.11658C13.6678 4.27178 13.8809 4.3579 14.1023 4.35599C14.3237 4.35409 14.5352 4.26431 14.6904 4.10642C14.8456 3.94853 14.9318 3.73545 14.9299 3.51406C14.9279 3.29267 14.8382 3.0811 14.6803 2.9259L12.2989 0.585184C12.2202 0.509655 12.1274 0.450288 12.0259 0.410442V0.410442Z",h[m.CANCEL]="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z",h[m.GRAB]=x,h[m.GRABBING]=x;function B(){var e=P([""]);return B=function(){return e},e}a.b.svg(B());var j=function(){};j.isLoading=!1,j.viewPortActionsDisabled=!1;var k;!function(e){e.TOP="TOP",e.BOTTOM="BOTTOM",e.LEFT="LEFT",e.RIGHT="RIGHT",e.TOP_RIGHT="TOP_RIGHT",e.TOP_LEFT="TOP_LEFT",e.BOTTOM_RIGHT="BOTTOM_RIGHT",e.BOTTOM_LEFT="BOTTOM_LEFT",e.CENTER="CENTER"}(k||(k={}));var V=function(){};V.PRIMARY_COLOR="#F8C182",V.SECONDARY_COLOR="#EC77FF",V.DARK_THEME_SECOND_COLOR="#282828",V.DARK_THEME_THIRD_COLOR="#4c4c4c",V.DARK_THEME_FORTH_COLOR="#262c2f",V.RESIZE_HANDLE_DIMENSION_PX=8,V.RESIZE_HANDLE_HOVER_DIMENSION_PX=16,V.CLOSEABLE_POPUPS=[v.LOAD_IMAGES,v.EXPORT_LABELS,v.EXIT_PROJECT];for(var H=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var t=new Uint8Array(16);e.exports=function(){return n(t),t}}else{var r=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0===(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r}}})),Z=[],F=0;F<256;++F)Z[F]=(F+256).toString(16).substr(1);var z,Y,X=function(e,n){var t=n||0,r=Z;return[r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]]].join("")},W=0,K=0;var J=function(e,n,t){var r=n&&t||0,a=n||[],o=(e=e||{}).node||z,i=void 0!==e.clockseq?e.clockseq:Y;if(null==o||null==i){var c=H();null==o&&(o=z=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==i&&(i=Y=16383&(c[6]<<8|c[7]))}var C=void 0!==e.msecs?e.msecs:(new Date).getTime(),E=void 0!==e.nsecs?e.nsecs:K+1,u=C-W+(E-K)/1e4;if(u<0&&void 0===e.clockseq&&(i=i+1&16383),(u<0||C>W)&&void 0===e.nsecs&&(E=0),E>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");W=C,K=E,Y=i;var l=(1e4*(268435455&(C+=122192928e5))+E)%4294967296;a[r++]=l>>>24&255,a[r++]=l>>>16&255,a[r++]=l>>>8&255,a[r++]=255&l;var s=C/4294967296*1e4&268435455;a[r++]=s>>>8&255,a[r++]=255&s,a[r++]=s>>>24&15|16,a[r++]=s>>>16&255,a[r++]=i>>>8|128,a[r++]=255&i;for(var _=0;_<6;++_)a[r+_]=o[_];return n||X(a)};var q=function(e,n,t){var r=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||H)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,n)for(var o=0;o<16;++o)n[r+o]=a[o];return n||X(a)},Q=q;Q.v1=J,Q.v4=q;function $(){var e=P(["\n  ","\n"]);return $=function(){return e},e}function ee(){var e=P(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return ee=function(){return e},e}function ne(){var e=P(["\n  ","\n  ","\n  ","\n"]);return ne=function(){return e},e}function te(){var e=P(["\n  ","\n"]);return te=function(){return e},e}function re(){var e=P(["\n  ","\n"]);return re=function(){return e},e}var ae,oe=a.b.div(re(),{width:"100%",height:"100%",position:"relative"}),ie=(a.b.canvas(te(),{position:"absolute",cursor:"none"}),a.b.div(ne(),{userSelect:"none",pointerEvents:"none"},{position:"absolute",color:"#fff",opacity:"0.75",padding:"0.25rem"},{backgroundColor:"#4a5568",zIndex:"50"}),a.b.div(ee(),{position:"absolute",width:"0.5rem",height:"0.5rem",color:"#fff",fill:"currentColor"},{pointerEvents:"none",zIndex:"40"},{borderColor:"#fff",backgroundColor:"#fff",borderRadius:"9999px"},{transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms"},Object(R.a)("isTransform",{borderWidth:"1px",backgroundColor:"transparent","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"3.5","--transform-scale-y":"3.5",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))"}),Object(R.a)("isGrabbing",{"--transform-scale-x":"2.5","--transform-scale-y":"2.5"})),a.b.div($(),{pointerEvents:"none",cursor:"none"}),oe);G.init();var ce=((ae={})[D.POLYGON]=D.POLYGON,ae[D.RECTANGLE]=D.RECTANGLE,ae);function Ce(){var e=Object(r.a)(["\n  ","\n  "," {\n    ","\n  }\n"]);return Ce=function(){return e},e}var Ee=[ce.RECTANGLE,ce.POLYGON],ue=a.b.div(Ce(),{display:"flex",paddingTop:"0.5rem",paddingBottom:"0.5rem",width:"100%",justifyContent:"center",alignItems:"center"},S.className,{marginLeft:"0.5rem",marginRight:"0.5rem"}),le=function(e){var n=e.onChange,t=Object(c.useState)(Ee[0]),r=Object(d.a)(t,2),a=r[0],o=r[1],i=Object(c.useCallback)((function(e){return function(){n(e),o(e)}}),[n]);return C.a.createElement(ue,null,C.a.createElement("h1",null,"Annotation Type"),Ee.map((function(e){return C.a.createElement(S,{key:e,onClick:i(e),isPressed:e===a},e)})))},se=(t(53),t(27)),_e=t.n(se);function de(){var e=Object(r.a)(["\n  ","\n"]);return de=function(){return e},e}function Ae(){var e=Object(r.a)(["\n  ","\n  > "," {\n    ","\n  }\n"]);return Ae=function(){return e},e}var Le=a.b.main(Ae(),{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden"},ie,{borderWidth:"1px",borderColor:"#a0aec0"}),Te=a.b.div(de(),{display:"grid",gridAutoFlow:"column",gap:"0.5rem",margin:"0.5rem"}),fe=function(){var e=Object(c.useState)({labelRects:[],labelPolygons:[]}),n=Object(d.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(ce.RECTANGLE),o=Object(d.a)(a,2),i=(o[0],o[1]),E=Object(c.useState)(null),u=Object(d.a)(E,2),l=(u[0],u[1]),A=Object(c.useReducer)((function(e){return!e}),!1),L=Object(d.a)(A,2),T=L[0],f=L[1],O=Object(c.useState)(1),m=Object(d.a)(O,2),D=m[0],v=m[1],b=Object(c.useMemo)((function(){return{default:function(){return v(1)},maxZoom:function(){return v(2)},zoom:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){return v((function(n){return n+.1*(e?1:-1)}))}}}}),[]);Object(c.useEffect)((function(){(function(){var e=Object(_.a)(s.a.mark((function e(){var n,t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_e.a);case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:t=e.sent,r=new File([t],"img.jpg",{type:"image/jpg"}),l(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){console.log(t)}),[t]);return C.a.createElement(Le,null,C.a.createElement(Te,null,C.a.createElement(S,{onClick:b.zoom()},"Zoom In"),C.a.createElement(S,{onClick:b.zoom(!1)},"Zoom Out"),C.a.createElement(S,{onClick:b.default},"Default Zoom"),C.a.createElement(S,{onClick:b.maxZoom},"Zoom Max"),C.a.createElement(S,{isPressed:T,onClick:f,disabled:1===D},"Drag Image (Only on zoomed image)"),C.a.createElement(S,{onClick:function(){return r({labelRects:[{id:"Rect-Example",rect:{x:697.2371134020618,y:454.26804123711344,width:717.0309278350516,height:492.1237113402062}}],labelPolygons:[{id:"Poly-Example",vertices:[{x:623.7525773195875,y:440.9072164948454},{x:1331.8762886597938,y:305.07216494845363},{x:1641.4020618556701,y:732.6185567010309},{x:882.0618556701031,y:790.5154639175258}]}]})}},"Controlled State Example"),C.a.createElement(S,{onClick:function(){return r({labelRects:[],labelPolygons:[]})}},"Clean")),C.a.createElement(le,{onChange:i}))};u.a.render(C.a.createElement(C.a.Fragment,null,C.a.createElement(i,null),C.a.createElement(fe,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.914c111d.chunk.js.map