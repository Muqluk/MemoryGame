import { GameCard } from './GameCard';

import { minionIcons } from '../Model/minionIcons';

export const GameBoardView = () => {
  const boardDimensions = { // in cards
    height: 5,
    width: 5,
  };

  const getRandomIcon = () => {
    const rnd = Math.floor(Math.random() * Math.floor(minionIcons.length));
    const isVisible = Math.floor(Math.random() * Math.floor(2));
    return {
      icon: minionIcons[rnd].url,
      isVisible,
    };
  };

  const getCards = () => {
    const cards = [];
    for (let i = 0; i < boardDimensions.width; i += 1) {
      cards.push(<GameCard key={i} cardClicked={cardClicked} {...getRandomIcon()} />);
    }
    return cards;
  };

  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < boardDimensions.height; i += 1) {
      rows.push(<div key={i} className="cardrow">{getCards()}</div>);
    }
    return rows;
  };

  const cardClicked = (cardProps) => {
    console.log(cardProps);
  };

  return (
    <div className="content">
      <div className="throwaway2 panel-flowControl">control</div>
      <div className="throwaway3 panel-board">{generateRows()}</div>
    </div>
  );
};
