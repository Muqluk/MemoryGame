import { NavLink } from 'react-router-dom';

const Location = (location) => {
  const { name, path } = location;
  return (<li><NavLink exact to={path} activeClassName="selected">{name}</NavLink></li>);
};

export const TopMenu = (props) => (
  <div className="navigation top__nav">
    <ul>
      {props.locations && Array.isArray(props.locations)
        ? props.locations.map((location) => <Location key={location.path} {...location} />)
        : <Location path="/" name="Home" />}
    </ul>
  </div>
);
