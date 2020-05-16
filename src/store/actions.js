export const SET_COLOR = 'SET_COLOR';
export const SET_BACKGROUND = 'SET_BACKGROUND';
export const SET_FONTSIZE = 'SET_FONTSIZE';
export const SET_TEXT = 'SET_TEXT';

export const setColorText = ( fontColor ) => ({
  type: SET_COLOR,
  payload: fontColor
});

export const setBackgroundText = ( backgroundColor ) => ({
  type: SET_BACKGROUND,
  payload: backgroundColor
});

export const setFontSize = ( fontSize ) => ({
  type: SET_FONTSIZE,
  payload: fontSize
});

export const setText = ( newText ) => ({
  type: SET_TEXT,
  payload: newText
});