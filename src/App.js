import React from "react";
import FullName from "./profile/FullName";
import Bio from "./profile/Bio";
import Profession from "./profile/Profession";
import HandleName from "./profile/HandleName";

function App() {
  const handleEvent = (name) => {
    alert(`Name: ${name}`);
  };

  return (
    <div className="App">
      <body style={{ margin: "150px 100px", fontSize: "1.2rem" }}>
        <h1>My Profile</h1>
        <FullName FirstName="Wael" LastName="Louati">
          <p>Hi, I am Wael Louati</p>
        </FullName>
        <br />
        <Bio />
        <div id="profession">
          <Profession />
        </div>
        <HandleName handleEvent={handleEvent} FirstName="Wael" />
      </body>
    </div>
  );
}

export default App;

