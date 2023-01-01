import logo from './logo.svg';
import './App.css';
import Progress from "./components/Progress";
import React from "react";

function App() {
  return (
<React.Fragment>
  <Progress percentage={40} />
</React.Fragment>
  );
}

export default App;
