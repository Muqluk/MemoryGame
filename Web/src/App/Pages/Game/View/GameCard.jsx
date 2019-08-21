export const GameCard = (props) => {
  const imageStyle = props.isVisible
    ? { backgroundImage: `url(${props.icon}` }
    : {};
  const cssClass = props.isVisible
    ? 'card'
    : 'card hiddencard';

  const cardClicked = () => {
    if (props.cardClicked) {
      props.cardClicked(props);
    }
  };

  return (
    <div className="gamecard" onClick={cardClicked}>
      <div className={cssClass} style={imageStyle} />
    </div>
  );
};
