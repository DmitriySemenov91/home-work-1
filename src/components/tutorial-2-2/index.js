import React, { useState, useRef } from "react";
import "./index.css";

const Faq = () => {
  let refActiveId = useRef();
  const [active, setActive] = useState("");

  const handleClick = (e) => {
    setActive(e.target.name);
  };
  console.log(active);
  return (
    <>
      <div id="app">
        <div className="app-container">
          <h1 className="app-title">FAQ</h1>
          <div className="app-tabs">
            {tabs.length
              ? tabs.map((tabInfo) => (
                  <div
                    key={tabInfo.id}
                    ref={refActiveId}
                    id={tabInfo.id}
                    className={`tab active`}
                  >
                    <input id="tab-one" type="checkbox" name="tabs" />
                    <label htmlFor="tab-one" onClick={handleClick}>
                      {tabInfo.title}
                    </label>
                    <div className="tab-content">
                      <p>{tabInfo.description}</p>
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

const tabs = [
  {
    id: 1,
    title: "Сколько всего мест в доме?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!",
  },

  {
    id: 2,
    title: "Самая дорогая квартира?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.",
  },

  {
    id: 3,
    title: "Могу ли я отменить бронирование?",
    description:
      "Да, вы можете отменить забронированную квартиру в течение 3 дней.",
  },

  {
    id: 4,
    title: "Можно ли купить квартиру?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.",
  },
];

export default Faq;
