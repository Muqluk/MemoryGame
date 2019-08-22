/*
  eslint-disable
    no-console,
    class-methods-use-this,
*/

import PropTypes from 'prop-types';

import './static/gamecard.scss';

// consider refactor from react class to functional component and useing useEffect hook instead.
//    - https://reactjs.org/docs/hooks-effect.html
export class GameCard extends React.Component {
  state = {
    isVisible: this.props.isVisible,
    iconClass: this.props.isVisible ? 'card' : 'card hiddencard',
    cardClass: 'gamecard',
  };

  cardClicked = () => {
    this.setState((prev) => {
      const iconClass = prev.isVisible
        ? 'card hiddencard'
        : 'card';
      const cardClass = prev.isVisible
        ? 'gamecard hide'
        : 'gamecard show';
      return ({
        isVisible: !prev.isVisible,
        iconClass,
        cardClass,
      });
    }, () => {
      if (this.props.cardClicked) {
        this.props.cardClicked({ cardId: this.props.cardId, isVisible: this.state.isVisible });
      }
    });
  }

  render() {
    const imageStyle = this.state.isVisible
      ? { backgroundImage: `url(${this.props.icon}` }
      : {};

    return (
      <div className="gamecard__container">
        <div
          className={this.state.cardClass}
          onClick={this.cardClicked}
        >
          <div
            className={this.state.iconClass}
            style={imageStyle}
          />
        </div>
      </div>
    );
  }
}

GameCard.defaultProps = {
  isVisible: true,
};

GameCard.propTypes = {
  isVisible: PropTypes.bool,
};
