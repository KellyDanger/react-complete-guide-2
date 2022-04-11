import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const dataPoints = props.dataPoints;

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
      ;
    </div>
  );
};
export default Chart;
