import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React, { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal}></div>
}

const Modal = (props) => {
       return <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseModal}>Закрыть</Button>
        </footer>
      </Card>
}

const ErrorModal = (props) => {
  return (
    <Fragment>
     {ReactDom.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, document.getElementById('backdrop'))}
    </Fragment>
  );
};

export default ErrorModal;
