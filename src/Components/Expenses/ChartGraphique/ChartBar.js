import "./ChartBar.css";

const ChartBar = () => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"></div>
      </div>
      <label className="chart-bar__label">label</label>
    </div>
  );
};

export default ChartBar;
