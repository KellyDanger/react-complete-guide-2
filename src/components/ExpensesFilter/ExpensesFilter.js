import './ExpensesFilter.css';
import Chart from '../Chart/Chart.js';

const ExpensesFilter = (props) => {
    const dataPoints = {};

    const dropdownChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <Chart dataPoints={dataPoints}/>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='all'>All Years</option>  
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;