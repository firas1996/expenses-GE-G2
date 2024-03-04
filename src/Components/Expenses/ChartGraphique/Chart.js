import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ chartList, max, total }) => {
  return (
    <div className="chart">
      {chartList.map((item) => {
        return (
          <ChartBar
            max={max}
            total={total}
            label={item.label}
            value={item.value}
            key={item.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
