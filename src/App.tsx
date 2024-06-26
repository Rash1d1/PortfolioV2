import React from 'react';
import Header from "./components/Header";
import "./index.css"
import Body from "./components/Body";

function App() {
  return (
    <div className="p-8 bg-light-white bg-cover">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
