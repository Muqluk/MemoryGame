/*
  eslint-disable
*/
// no-console,

import { GameCard } from './GameCard';

import { minionIcons } from '../Model/minionIcons';

export class GameBoardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      cards: [],
    };
  }

  getCards = (rowIdx) => {
    const { Layout, Cards } = this.props;
    const cards = [];
    for (let c = 0; c < Layout.columns; c += 1) {
      const cardId = `R${rowIdx}C${c}`;
      const card = Cards[cardId];
      const gameCard = (
        <GameCard
          key={cardId}
          cardId={cardId}
          cardClicked={this.cardClicked}
          icon={card.icon}
          isVisible={card.isVisible}
        />
      );
      cards.push(gameCard);
    }
    return cards;
  };

  generateRows = () => {
    const { Layout, Cards } = this.props;
    const rows = [];
    for (let r = 0; r < Layout.rows; r += 1) {
      rows.push(<div key={r} className="cardrow">{this.getCards(r)}</div>);
    }
    return rows;
  };

  cardClicked = () => {
    this.setState((pState) => {
      const oCards = pState.cards;
      return {
        cards: oCards,
      };
    });
  };

  render() {
    return (
      <div className="content">
        <div className="throwaway2 panel-flowControl">
          <div>[GameBoard Controls]</div>
          <div>&nbsp;&nbsp;&nbsp;[sub menu]</div>
        </div>
        <div className="panel-board">{this.generateRows()}</div>
      </div>
    );
  }
}
