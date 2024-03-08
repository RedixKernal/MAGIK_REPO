import { useState } from "react";
import Button from "./components/button";
import Count from "./components/count";
function App() {
  const [count, setCount] = useState(0);
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
      <Count count={count} />
      <Button setCount={setCount} />
    </div>
  );
}

export default App;
