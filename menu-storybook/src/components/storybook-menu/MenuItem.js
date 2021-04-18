import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { IFrameContainer } from '../IFrameContainer';

const detailsStyle = {
  position: "absolute",
  left:"60%",
  overflow: "hidden",
  width:"40%",
};

const childrenStyle = {
  position: "relative",
  left: 20
};

export function MenuItem({slug, url, title, children, ...props }) {
  return (
    <Router>
      <div
        {...props}
      >
        <Link to={`/${slug}`}>{title}</Link>
        {children &&
          <div style={childrenStyle}>
            {children.map(item => MenuItem(item))}
          </div>
        }
        <Switch>
          <Route path={`/${slug}`}>
            <div style={detailsStyle}>
                <IFrameContainer src={url} title={slug}/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

MenuItem.propTypes = {
  slug: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(Object)
};
