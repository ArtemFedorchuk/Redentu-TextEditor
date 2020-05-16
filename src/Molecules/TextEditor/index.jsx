import React, { useState } from 'react';
import {
  BtnEditColor,
  BtnEditBackground,
  BtnEditFontSize
} from '../../Atoms/index';
import styles from './styles.module.scss';
import { SketchPicker, CirclePicker } from 'react-color';
import { connect } from 'react-redux';
import {
  setColorText,
  setBackgroundText,
  setFontSize,
} from '../../store/actions';
import store from '../../store/redux-store';

const TextEditor = ( props ) => {
  const {
    fontColor,
    backgroundColor,
    // eslint-disable-next-line no-unused-vars
    fontSize,
    setColorText,
    setBackgroundText,
    setFontSize,
  } = props;

  console.log( 'store ==> ', store.getState() );
  // console.log( 'fontColor ==> ', fontColor );
  // console.log( 'backgroundColor ==> ', backgroundColor );
  // console.log( 'fontSize ==> ', fontSize );

  const [ color, setColor ] = useState(false);
  const [ bg, setBg ] = useState(false);

  const colorChange = (event) => {
    setColorText(event.hex);
    setFontSize(/*  value fontSize*/)
  };

  const backgroundChange = (event) => {
    setBackgroundText(event.hex);
  };

  const validationSetStyles = (colorParam, bgParam) => {
    if(colorParam) {
      return (
        <>
          <button
            className={styles.btnClose}
            onClick={() => setColor(false)}
          >
            +
          </button>
          <SketchPicker
            onChange={(event) => colorChange(event)}
          />
        </>
      )
    }
    if(bgParam) {
      return (
        <div className={styles.circlePickerWrapper}>
          <button
            className={styles.btnCloseCirclePicker}
            onClick={() => setBg(false)}
          >
            +
          </button>
          <CirclePicker  onChange={(event) => backgroundChange(event)} />
        </div>
        )
    }
    return false
  };

  return (
    <div className={styles.wrapperEditor}>
      <h1 className={styles.h1}>Text Editor</h1>
      <div className={styles.wrapperText}>
        <span
          contentEditable={true}
          suppressContentEditableWarning={true}
          className={styles.span}
          style={{color:`${fontColor}`, background: `${backgroundColor}`, /*fontSize: `${fontSize}`*/}}
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </span>
      </div>
      <div>
        <BtnEditColor setColor={setColor} />
        <BtnEditBackground setBg={setBg} />
        <BtnEditFontSize />
      </div>
      <div>
        {validationSetStyles(color, bg)}
          </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    fontColor: state.edit.fontColor,
    backgroundColor: state.edit.backgroundColor,
    fontSize: state.edit.fontSize
  };
};

const mapDispatchToProps = {
  setColorText,
  setBackgroundText,
  setFontSize,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor)
// export default TextEditor;