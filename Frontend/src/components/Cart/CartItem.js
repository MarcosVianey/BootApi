import classes from './CartItem.module.css';

const CartItem = (props) => {

  const redirectHandler = (event) => {
    window.open(props.permalink, '_blank').focus();
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <button className={classes.visit} onClick={redirectHandler}>Visitar</button>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
