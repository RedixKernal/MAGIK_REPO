import ZODFormik from "./components/ZODFormik";
import ZODFormikFieldArray from "./components/ZODFormikFieldArray";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        width: `100%`,
        height: `100vh`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <button onClick={() => setShow(false)} style={{ margin: "0px 10px" }}>
          Formik Basic
        </button>
        <button onClick={() => setShow(true)} style={{ margin: "0px 10px" }}>
          Formik FieldArray
        </button>
        <h1>Hello Zod Formik</h1>
      </div>
      {!show ? <ZODFormik /> : <ZODFormikFieldArray />}
    </div>
  );
}

export default App;
