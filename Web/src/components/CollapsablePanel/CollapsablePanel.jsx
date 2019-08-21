import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import './CollapsablePanel.scss';

const HiddenState = (props) => (
  <div onClick={props.onClick} className="indicator-bar">
    <FontAwesomeIcon icon={faPlusSquare} className="indicator" />
    <div className="subject">{props.subject}</div>
  </div>
);

const ExpandedState = (props) => (
  <div className="collapsable-panel">
    <div onClick={props.onClick} className="indicator-bar">
      <FontAwesomeIcon icon={faMinusSquare} className="indicator" />
      <div className="subject">{props.subject}</div>
    </div>
    {props.children}
  </div>
);


export class CollapsablePanel extends React.PureComponent {
  state = { isHidden: !this.props.expanded }

  onClick = () => this.setState((prevState) => ({ isHidden: !prevState.isHidden }));

  render() {
    console.log('expanded', this.state);
    const result = this.state.isHidden
      ? (<HiddenState onClick={this.onClick} {...this.props} />)
      : (<ExpandedState onClick={this.onClick} {...this.props} />);
    return (
      <div className="collapsable-panel">
        {result}
      </div>
    );
  }
}

CollapsablePanel.defaultProps = {
  expanded: true,
};

CollapsablePanel.propTypes = {
  expanded: PropTypes.bool,
};
