import React, { useState } from "react";
import "./Voting.scss";
const Voting = ({
  onChange = () => {},
  selected,
}) => {
  const [vote, setVote] = useState(selected);

  const EMOJI = {
    cry: "0x1F62D",
    sad: "0x1F61E",
    forcedSmile: "0x1F62C",
    smile: "0x1F601",
    love: "0x1F60D",
  };

  function handleVote(event, index) {
    event.preventDefault();

    setVote(index);
    onChange(index);
  }

  function isSelected(index) {
    return vote === index
      ? "selected"
      : "";
  }

  function getButtonConfig(index) {
    return {
      className: isSelected(index),
      onClick: (e) =>
        handleVote(e, index),
    };
  }

  function getEmoji(code) {
    return String.fromCodePoint(code);
  }

  return (
    <div className="voting-wrapper">
      <button {...getButtonConfig(1)}>
        {getEmoji(EMOJI.cry)}
      </button>
      <button {...getButtonConfig(2)}>
        {getEmoji(EMOJI.sad)}
      </button>
      <button {...getButtonConfig(3)}>
        {getEmoji(EMOJI.forcedSmile)}
      </button>
      <button {...getButtonConfig(4)}>
        {getEmoji(EMOJI.smile)}
      </button>
      <button {...getButtonConfig(5)}>
        {getEmoji(EMOJI.love)}
      </button>
    </div>
  );
};
export default Voting;
