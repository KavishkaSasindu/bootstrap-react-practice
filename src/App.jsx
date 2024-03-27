import React from "react";

const App = () => {
  return (
    <div>
      <div className="container border">
        <div className="row">
          <div className="col-9 border ">Card 1</div>
          <div className="col border ">Card2</div>
          <div className="col border ">Card3</div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-between">
          <div className="col"> Logo Here</div>
          <div className="col">
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
