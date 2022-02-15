import React, { useState } from "react";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import "./App.css";

const App = () => {
  const [showPhrases, setShowPhrases] = useState([]);

  const addRandomPhrase = () => {
    for (let i = 0; i < 1; i++) {
      let adjectiveFirst = adjectivesArr.reduce((_, _c, _i, arr) => {
        return arr[Math.floor(Math.random() * Math.floor(arr.length))];
      });
      let adjectiveSecond = adjectivesArr.reduce((_, _c, _i, arr) => {
        return arr[Math.floor(Math.random() * Math.floor(arr.length))];
      });
      const noun = nounsArr.reduce((_, _c, _i, arr) => {
        return arr[Math.floor(Math.random() * Math.floor(arr.length))];
      });
      setShowPhrases((prev) => [
        ...prev,
        `${adjectiveFirst} ${adjectiveSecond} ${noun}`,
      ]);
    }
  };

  const resetClickPhrases = () => {
    setShowPhrases([]);
  };

  return (
    <div className="wrapper">
      {showPhrases.length ? (
        showPhrases.map((phrase) => (
          <span key={phrase}>
            <Phrase text={phrase} />
          </span>
        ))
      ) : (
        <EmptyBlock />
      )}
      <button className="btn btn_generate" onClick={addRandomPhrase}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={resetClickPhrases}>
        Очистить
      </button>
    </div>
  );
};

export default App;

export const adjectivesArr = [
  "абсолютный",
  "адский",
  "азартный",
  "активный",
  "ангельский",
  "астрономический",
  "баснословный",
  "безбожный",
  "безбрежный",
  "безвозвратный",
  "безграничный",
  "бездонный",
  "бездушный",
  "безжалостный",
  "замечательно",
  "замечательный",
  "записной",
  "запредельный",
  "заядлый",
  "звериный",
  "зверский",
  "зеленый",
  "злой",
  "злостный",
  "значительный",
  "неоспоримый",
  "неотразимый",
  "неоценимый",
  "непередаваемый",
];

export const nounsArr = [
  "лгун",
  "день",
  "конь",
  "олень",
  "человек",
  "программист",
  "ребёнок",
  "конец",
  "город",
  "дурак",
];
