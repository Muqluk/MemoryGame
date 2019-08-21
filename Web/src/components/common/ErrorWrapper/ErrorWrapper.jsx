/*
  eslint-disable
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions,
    class-methods-use-this,
*/
// import * as ErrApi from '../../../api/LoggingApi';
// import common from '../../../utils/standardHelpers';

import styles from './ErrorWrapperStyle';


const getParentInfo = (component) => {
  const { _owner } = component;
  if (_owner) {
    return {
      name: _owner.type.name,
      component: _owner,
    };
  }
  return null;
};

export default class ErrorWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: [],
      errorInfo: [],
      showUnwind: false,
      showStack: false,
    };
  }

  // logToApi(err) {
  //   // consider refactoring to using some sort of dispatch({action typeof}_FAILED) for consistent handling
  //   ErrApi.logError(err);
  // }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error, errorInfo: info });
    // send the error to the logging service.
    this.logToApi(error, info);
  }

  userFriendlyDisplay() {
    return (
      <div>
        <div>Unexpected Error encountered.</div>
        <div>Please contact support.</div>
      </div>
    );
  }

  displayInWrapper(errMsg, errInfo) {
    const messageArr = errMsg.split('\n');
    const { showUnwind, showStack } = this.state;
    const { children } = this.props;
    const showUnwindStyle = !showUnwind ? { display: 'none' } : {};
    const showStackStyle = !showStack ? { display: 'none' } : {};
    const displayStack = errInfo.componentStack
      .split('\n').slice(0, 15)
      .filter((line) => line.length > 0)
      .map((line) => (`${line}\n`));

    if (children && children.type && children.type.name) {
      const errSrc = {
        component: children,
        name: children && children.type && children.type.name
          ? children.type.name.replace('$$1', '')
          : 'NAME_NOT_ACCESSIBLE',
      };

      const parent = getParentInfo(errSrc.component);

      return (
        <div style={{ overflow: 'auto' }}>
          <div style={styles.title}>{messageArr[0]}</div>
          <div style={styles.preContainer}>
            <pre style={{ ...styles.pre, fontSize: '14px', color: 'darkblue' }}>
              {messageArr[1]}
            </pre>
          </div>
          <div onClick={() => this.setState({ showUnwind: !showUnwind })}>
            Component trace
          </div>
          <div style={{ ...styles.preContainer, ...showUnwindStyle }}>
            <pre style={{ ...styles.componentUnwind, ...styles.pre }}>
              {`<${parent.name}>\n`}
              {`   <${errSrc.name}/>\n`}
              {`<${parent.name}>`}
            </pre>
          </div>
          <div onClick={() => this.setState({ showStack: !showStack })}>
            Stack trace:
          </div>
          <div style={{ ...styles.preContainer, ...showStackStyle }}>
            <pre>{displayStack}</pre>
          </div>
        </div>
      );
    }
    return (
      <div style={{ overflow: 'auto' }}>
        <div style={styles.title}>{messageArr[0]}</div>
        <div style={styles.preContainer}>
          <pre style={{ ...styles.pre, fontSize: '14px', color: 'darkblue' }}>
            {messageArr[1]}
          </pre>
        </div>
        <div onClick={() => this.setState({ showUnwind: !showUnwind })}>
          Component trace
        </div>
        <div style={{ ...styles.preContainer, ...showUnwindStyle }}>
          Component info not available.
        </div>
        <div onClick={() => this.setState({ showStack: !showStack })}>
          Stack trace:
        </div>
        <div style={{ ...styles.preContainer, ...showStackStyle }}>
          <pre>{displayStack}</pre>
        </div>
      </div>
    );
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const {
      children,
      // displayInWrapper
    } = this.props;

    if (hasError) {
      const errMsg = error.message;
      const errInfo = errorInfo;
      // const queryStrOverride = common.debug.checkQueryStrFor('debug');
      // You can render any custom fallback UI
      // return displayInWrapper || queryStrOverride
      //   ? this.displayInWrapper(errMsg, errInfo)
      //   : this.userFriendlyDisplay();
      return this.displayInWrapper(errMsg, errInfo);
    }
    return children;
  }
}

ErrorWrapper.defaultProps = {
  children: null,
  // displayInWrapper: false,
};


ErrorWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), PropTypes.node,
  ]),
  // displayInWrapper: PropTypes.bool,
};
