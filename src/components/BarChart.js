import { Bar } from "react-chartjs-2";

const BarChart = ({ icseaValue, schoolNames }) => {
  return (
    <div>
      <div>
        <Bar
          data={{
            labels: schoolNames,
            datasets: [
              {
                label: "ICSEA_value",
                data: icseaValue,
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
                borderWidth: 0.5,
              },
            ],
          }}
          height={400}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
