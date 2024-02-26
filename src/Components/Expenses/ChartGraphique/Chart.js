import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ chartList }) => {
  return (
    <div className="chart">
      {chartList.map((item) => {
        return <ChartBar label={item.label} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
