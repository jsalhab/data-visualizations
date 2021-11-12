import BarChart from "./BarChart";
import PieChart from "./PieChart";
import "../styles/ChartContainer.css";

const ChartContainer = ({ schoolNames, icseaValue, latestYear }) => {
  return (
    <div className="chart-container">
      <BarChart schoolNames={schoolNames} icseaValue={icseaValue} />
      <PieChart schoolNames={schoolNames} latestYear={latestYear} />
    </div>
  );
};
export default ChartContainer;
