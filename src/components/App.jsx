import React from "react";
import Icon from "./Icon";
import Emoji from "../emojipedia";

console.log(Emoji);

function createIcon(emojiIcon) {
  return (
    <Icon
      key={emojiIcon.id}
      Icon={emojiIcon.emoji}
      IconName={emojiIcon.name}
      IconDescription={emojiIcon.meaning}
    />
  );
}

function App(props) {
  return (
    <div>
      <h1>
        <span>Emoji Dictionary</span>
      </h1>
      <dl className="dictionary">{Emoji.map(createIcon)}</dl>
    </div>
  );
}

export default App;
