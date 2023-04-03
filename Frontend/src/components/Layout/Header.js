import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import groupImage from '../../assets/group.jpg';
import classes from './Header.module.css';
import SearchBar from '../Search/SearchBar';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BoostCamp Price</h1>
        <SearchBar />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={groupImage} alt='We made it' />
      </div>
    </Fragment>
  );
};

export default Header;
