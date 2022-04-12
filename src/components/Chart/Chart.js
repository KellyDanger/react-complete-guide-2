import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const dataPoints = props.dataPoints;
  //DATAPOINTVALUES MAPS THROUGH THE DATAPOINTS ARRAY AND FOR EACH OBJECT, CONVERTS IT TO JUST THE VALUE THAT'S THERE...CREATING THIS NEW ARRAY
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //THE SPREAD OPERATOR PULLS THE VALUES OUT OF THE DATAPOINTVALUES ARRAY INTO A LIST OF ARGUMENTS FOR MATH.MAX
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
      ;
    </div>
  );
};
export default Chart;
