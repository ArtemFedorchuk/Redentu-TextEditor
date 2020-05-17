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
  setText
} from '../../store/actions';
// import store from '../../store/redux-store';

const TextEditor = ( props ) => {
  const {
    fontColor,
    backgroundColor,
    fontSize,
    setColorText,
    setBackgroundText,
    setFontSize,
    setText,
    // eslint-disable-next-line no-unused-vars
    newText,
  } = props;

  const [ color, setColor ] = useState(false);
  const [ bg, setBg ] = useState(false);
  const [ fz, setFz ] = useState(false);

  const colorChange = (event) => {
    setColorText(event.hex);
  };
  const backgroundChange = (event) => {
    setBackgroundText(event.hex);
  };
  const fzChange = (event) => {
    const number = Number(event.target.value);
    setFontSize(number)
  };
  const newTextChange = (event) => {
    setText(event.currentTarget.textContent);
  };
  const validationSetStyles = (colorParam, bgParam, fzParam) => {
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
    if(fzParam) {
      return (
        <div  className={styles.fzPickerWrapper}>
          <select
            onChange={(event) => fzChange(event)}
            name='FontSize'
            id={fontSize}
          >
            <option value='16'>16</option>
            <option value='18'>18</option>
            <option value='20'>20</option>
            <option value='22'>22</option>
          </select>
          <button
            className={styles.btnCloseFontSize}
            onClick={() => setFz(false)}
          >
            close
          </button>
        </div>
        )
    }
    return false
  };

  const setSelections = () => {
    console.log('color ==> ', color);

    if(color === true) {
      const editFontColor = document.execCommand('foreColor', false, fontColor);
      console.log('editFontColor ==> ', editFontColor);
    }
    if(bg === true) {
      const editBackground = document.execCommand ('backColor', false, backgroundColor);
      console.log('editBackground ==> ', editBackground);
    }
    if(fz === true) {
      const editFontSize = document.execCommand ('fontSize', false, fontSize);
      console.log('editFontSize ==> ', editFontSize);
    }
  };

  return (
    <div className={styles.wrapperEditor}>
      <h1 className={styles.h1}>Text Editor</h1>
      <div className={styles.wrapperText}>
        <span
          onClick={setSelections}
          contentEditable={true}
          suppressContentEditableWarning={true}
          className={styles.span}
          // style={{color:`${fontColor}`, background: `${backgroundColor}`, fontSize: fontSize}}
          onInput={(event) => newTextChange(event)}
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </span>
      </div>
      <div>
        <BtnEditColor setColor={setColor} />
        <BtnEditBackground setBg={setBg} />
        <BtnEditFontSize setFz={setFz} />
      </div>
      <div>
        {validationSetStyles(color, bg, fz)}
          </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    fontColor: state.edit.fontColor,
    backgroundColor: state.edit.backgroundColor,
    fontSize: state.edit.fontSize,
    newText: state.edit.newText
  };
};

const mapDispatchToProps = {
  setColorText,
  setBackgroundText,
  setFontSize,
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor)