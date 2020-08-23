import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const burger = props => {
  // Converting object to array
  let transformedIngredients = Object.keys(props.ingredients)
    // Here we used spread an ingredient, by defined number of times, just like creating spaces for them
    .map(igKey => {
      return (
        [...Array(props.ingredients[igKey])]
          // then we fill all the spaces, by that particular burger ingredient, defined number of times
          .map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
          })
      );
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
