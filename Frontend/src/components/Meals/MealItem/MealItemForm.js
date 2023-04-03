
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

  const redirectHandler = (event) => {
    window.open(props.permalink, '_blank').focus();
  };

  const details = () => {};

  return (
    <span className={classes.form}>
      <button onClick={details}>Detalhes</button>
      <button className={classes.visit} onClick={redirectHandler}>Visitar</button>
    </span>
  );
};

export default MealItemForm;
