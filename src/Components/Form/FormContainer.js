import React from "react";
import'./FormContainer.css';



function FormContainer(props) {

  return (
    <div className="container">
       
  {props.children}
    </div>
  );
}

export default FormContainer;