import { GameCard } from './GameCard';

export const GameBoardView = (props) => {
  const { CurrentGame } = props;

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
    const { Layout } = props;
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
      <div className="flowControl__container">
        <div className="flowControl__menu">
          <div>
            Player:&nbsp;&nbsp;
            {CurrentGame.Players[CurrentGame.currentPlayer].Name}
          </div>
          <div>
            Flipped:&nbsp;&nbsp;
            {CurrentGame.flipCount}
          </div>
        </div>
      </div>
      <div className="panel-board">{generateRows()}</div>
    </div>
  );
};
