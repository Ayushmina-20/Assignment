import { useState } from "react";
import './tab.css'
import Page from "./Page";
import Details from "./Details";
function Home() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container mt-2">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          LIST
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          DETAILS
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          <Page/>
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Details/>
        </div>

        
      </div>
    </div>
  );
}

export default Home;