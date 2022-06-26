import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./Snackbar.css";

/*
call the winn popup
<Snackbar
        ref={snackbarRef}
        message="Sie haben Verloren!!"
        type={SnackbarType.success}
      />
    </div>

*/
const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));
  return (
    <div
      className="snackbar"
      id={showSnackbar ? "show" : "hide"}
      style={{
        backgroundColor: props.type === "danger" ? "#00F593" : "#FF0033",
        color: props.type === "success" ? "black" : "white",
      }}
    >
      <div className="symbol">
        {props.type === "danger" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Snackbar;
