import { GameCard } from './GameCard';

import { minionIcons } from '../Model/minionIcons';


const boardDimensions = { // in cards
  height: 5,
  width: 5,
};

const getRandomIcon = () => {
  const rnd = Math.floor(Math.random() * Math.floor(minionIcons.length));
  const isVisible = Math.floor(Math.random() * Math.floor(2));
  return {
    icon: minionIcons[rnd].url,
    isVisible: isVisible ? true : false, // eslint-disable-line
  };
};


export class GameBoardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      cards: [],
    };
  }

  componentDidMount() {
    this.generateRows();
  }

  // temporary function - this should be being supplied by the reducer and app state.
  getCards = (rowIdx) => {
    const cards = [];
    for (let i = 0; i < boardDimensions.width; i += 1) {
      const cardId = `R${rowIdx}C${i}`;
      const card = (
        <GameCard
          key={i}
          cardId={cardId}
          cardClicked={this.cardClicked}
          {...getRandomIcon()}
        />
      );
      this.setState((pState) => {
        const oldCards = pState.cards;
        oldCards[cardId] = card;
        return {
          cards: oldCards,
        };
      });

      cards.push(card);
    }
    return cards;
  };

  generateRows = () => {
    const rows = [];
    for (let i = 0; i < boardDimensions.height; i += 1) {
      rows.push(<div key={i} className="cardrow">{this.getCards(i)}</div>);
    }
    this.setState({ rows });
  };

  cardClicked = (cardProps) => {
    this.setState((pState) => {
      const oCards = pState.cards;
      return {
        cards: oCards,
      };
    });
  };

  render() {
    // setTimeout(() => console.clear(), 150); // eslint-disable-line
    return (
      <div className="content">
        <div className="throwaway2 panel-flowControl">control</div>
        <div className="throwaway3 panel-board">{this.state.rows}</div>
      </div>
    );
  }
}
