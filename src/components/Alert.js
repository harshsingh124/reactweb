import React from 'react'

 function Alert(props) {

const captalise =(word)=>{
    const letter = word.toLowerCase()
    return letter.charAt(0).toUpperCase() + letter.slice(1)
}


  return (
    <div style={{height:'20px'}}>
       { props.alert && 
  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captalise(props.alert.type)}</strong> {props.alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>}
      </div>
  );
}

export default Alert