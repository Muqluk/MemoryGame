import PropTypes from 'prop-types';

import './static/gamecard.scss';

export const GameCard = (props) => {
  const {
    cardClass,
    iconClass,
    imageStyle,
    isVisible,
  } = props;

  const cardClicked = () => {
    if (!isVisible) {
      if (props.cardClicked) {
        props.cardClicked({
          cardId: props.cardId,
        });
      }
    }
  };

  return (
    <div className="gamecard__container">
      <div className={cardClass} onClick={cardClicked}>
        <div className={iconClass} style={imageStyle} />
      </div>
    </div>
  );
};

GameCard.defaultProps = {
  isVisible: true,
};

GameCard.propTypes = {
  isVisible: PropTypes.bool,
};
