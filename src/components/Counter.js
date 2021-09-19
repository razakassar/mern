import classes from './Counter.module.css';
import { incNumber, decNumber, incNumberby5, toggle } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const adder = useSelector((state) => state.changeTheNumber.initialState );
  const show = useSelector((state) => state.changeTheNumber.toggle );

  const dispatch = useDispatch();
 console.log(adder);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{adder}</div>}
      <div>
        <button onClick={() => dispatch(incNumber())}>increment</button>
        <button onClick={() => dispatch(incNumberby5(5))}>increment by 5</button>
        <button onClick={() => dispatch(decNumber())}>decrement</button>
      </div>
      <button onClick={() => dispatch(toggle())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
