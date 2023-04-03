import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';
import { BiHeart} from 'react-icons/bi'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      permalink: props.permalink
    });
  };

  return (
    <li className={classes.Meal}>
      <div className={classes.modal}>
        <div className={classes.thumb}><img src={props.thumbnail} alt="thumbnail"/></div>
          <div>
            <span style={{display: "flex"}}>
              <h3>{props.name}</h3>
              <button className={classes.favorite} onClick={addToCartHandler}><BiHeart/></button>
            </span>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
          </div>
      </div>
      <div>
        <MealItemForm id={props.id} permalink={props.permalink} />
      </div>
    </li>
  );
};

export default MealItem;
