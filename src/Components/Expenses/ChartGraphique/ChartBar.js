import "./ChartBar.css";

const ChartBar = ({ label, value }) => {
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: "0%" }}></div>
      </div>
      <label className="chart-bar__label">{label}</label>
    </div>
  );
};

export default ChartBar;
