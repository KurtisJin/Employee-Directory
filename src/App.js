import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/Wrapper"
import Main from "./components/Main/main"

function App() {
  return (  
    <div>
        
      <Wrapper>
        <Navbar />
        <Main />
      </Wrapper>      
    </div>
    
  );
}

export default App;