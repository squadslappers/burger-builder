import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const BuildControls = props => {
  return (<div className={styles.BuildControls}>
    <p>CURRENT TOTAL: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control =>
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
      )}
    <button className={styles.OrderButton}
    onClick={()=>props.ordered()}
    disabled={!props.purchasable}>
      ORDER NOW
    </button>
  </div>);
};

export default BuildControls;
