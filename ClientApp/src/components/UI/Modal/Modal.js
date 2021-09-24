import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const innerModal = (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </Fragment>
  );

  return ReactDOM.createPortal(
    innerModal,
    document.getElementById("modals-root")
  );
};

export default Modal;
