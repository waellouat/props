import React from "react";
import FullName from "./profile/FullName";
import Bio from "./profile/Bio";
import Profssion from "./profile/Profssion";
import HandleName from "./profile/HandleName";
function App() {
  const handleEvent =(t) => {
    alert('test ${t} ');
  }
  return (
    <div className="App">
     <body style= {{margin:"150px 100px",fontSize:"1.2rem"}} >
<h1> my profile</h1>
<FullName FirstName="wael" LastName="louati" >
<p>hi i am wael louati</p>
</FullName>
<br/>
<Bio/>
<div id="profession"><Profssion/></div>
<HandleName handleEvent={handleEvent} FirstName="wael">

</HandleName>
     </body>
    </div>
  );
}

export default App;
