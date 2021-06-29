import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div>
      <div className="overlay" onClick={props.onError}>
        <div className="error-modal">
          <header className="header">
            <h2 className="h2">{props.title}</h2>
          </header>
          <p className="p">{props.message}</p>
          <footer className="footer">
            <button onClick={props.onError}>Okay</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
