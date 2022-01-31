import React, { useState } from "react";

//styles
import "./index.css";

//data
import { tabs } from "../../utils";

const Faq = () => {
  const [active, setActive] = useState("");

  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <>
      <div id="app">
        <div className="app-container">
          <h1 className="app-title">FAQ</h1>
          <div className="app-tabs">
            {tabs.length
              ? tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab ${+active === tab.id ? "active" : ""}`}
                  >
                    <input id="tab-one" type="checkbox" name="tabs" />
                    <label htmlFor="tab-one" id={tab.id} onClick={handleClick}>
                      {tab.title}
                    </label>
                    <div className="tab-content">
                      <p>{tab.description}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
