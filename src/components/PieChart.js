import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ schoolNames, latestYear }) => (
  <>
    <div>
      <Pie
        data={{
          labels: schoolNames,
          datasets: [
            {
              label: "# of Votes",
              data: latestYear,
              backgroundColor: [
                "#5bd4d2",
                "#36c3fb",
                "#e25559",
                "#925caa",
                "#628de8",
                "#ef5da8",
              ],
              borderColor: [
                "#5bd4d2",
                "#36c3fb",
                "#e25559",
                "#925caa",
                "#628de8",
                "#ef5da8",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  </>
);

export default PieChart;
