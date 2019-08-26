/*
  eslint-disable
    no-console,
    no-unused-vars,
    react/no-unused-state,
*/
import { GameCard } from './GameCard';
import { minionIcons } from '../Model/minionIcons';

export const GameBoardView = (props) => {
  console.log('props', props);
  const getCards = (rowIdx) => {
    const { Layout, Cards } = props;
    const cards = [];
    for (let c = 0; c < Layout.columns; c += 1) {
      const cardId = `R${rowIdx}C${c}`;
      const card = Cards[cardId];
      const gameCard = (
        <GameCard
          key={cardId}
          cardId={cardId}
          cardClicked={cardClicked}
          icon={card.icon}
          isVisible={card.isVisible}
        />
      );
      cards.push(gameCard);
    }
    return cards;
  };

  const generateRows = () => {
    const { Layout, Cards } = props;
    const rows = [];
    for (let r = 0; r < Layout.rows; r += 1) {
      rows.push(<div key={r} className="cardrow">{getCards(r)}</div>);
    }
    return rows;
  };

  const cardClicked = (cardProps) => {
    props.cardClicked(cardProps);
  };
  return (
    <div className="content">
      <div className="panel-flowControl">
        {/* <div>[GameBoard Controls]</div>
          <div>&nbsp;&nbsp;&nbsp;[sub menu]</div> */}
      </div>
      <div className="panel-board">{generateRows()}</div>
    </div>
  );
}
