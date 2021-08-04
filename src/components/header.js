import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import * as style from "./header.module.css";

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <div className={style.wrapper}>
      <h1>
        <Link to="/" className={style.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
