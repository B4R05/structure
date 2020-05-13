import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import classes from './UploadButton.module.css';

const UploadButton = ({buttonText, onFileUpload, ...restProps}) => {
  const inputRef = useRef();
  useEffect(() => {
    const {current} = inputRef;
    const onChange = e => {
      onFileUpload(e.target.files);
    };
    current.addEventListener('change', onChange, false);
    return () => {
      current.removeEventListener('change', onChange, false);
    };
  });
  return (
    <div className={classes.wrapper}>
      <Button {...restProps}>
        <input ref={inputRef} className={classes.input} type="file" />
        <div>{buttonText}</div>
      </Button>
    </div>
  );
};

UploadButton.propTypes = {
  buttonText: PropTypes.string,
  onFileUpload: PropTypes.func.isRequired,
};

UploadButton.defaultProps = {
  buttonText: 'Upload',
};

export default UploadButton;
