import React, { useState } from "react";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import "./App.css";

const App = () => {
  const [showPhrases, setShowPhrases] = useState([]);

  const addRandomPhrase = () => {
    const adjectiveFirst = Math.floor(Math.random() * adjectivesArr.length);
    const adjectiveSecond = Math.floor(Math.random() * adjectivesArr.length);
    const noun = Math.floor(Math.random() * nounsArr.length);
    setShowPhrases((prev) => [
      `${adjectivesArr[adjectiveFirst]} ${adjectivesArr[adjectiveSecond]} ${nounsArr[noun]}`,
      ...prev,
    ]);
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

const adjectivesArr = [
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
const nounsArr = [
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
