import "./ChartBar.css";

const ChartBar = ({ label, value, max, total }) => {
  //   const x = Math.round((value / total) * 100) + "%";
  const x = Math.round((value / max) * 100);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: `${x}%` }}></div>
      </div>
      <label className="chart-bar__label">{label}</label>
    </div>
  );
};

export default ChartBar;
