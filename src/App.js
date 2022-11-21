import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { usersThunk } from './service/slicers/placeholderSlice';
import { clear, decrease, increase } from './service/slicers/sliceCount';
function App() {
  const {count} = useSelector(state => state.count)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(usersThunk())
  },[dispatch])
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(clear())}>clear</button>
    </div>
  )
}

export default App;
