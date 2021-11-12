import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "./Map";
import ChartContainer from "./ChartContainer";
import Header from "./Header";
import Home from "./Home";
import data from "../data.json";

let schoolNames = [];
let icseaValue = [];
let latestYear = [];
let markers = [];

for (let i = 0; i < 10; i++) {
  schoolNames.push(data[i].School_name);
  icseaValue.push(data[i].ICSEA_value);
  latestYear.push(data[i].latest_year_enrolment_FTE);
  markers.push({ lat: data[i].Latitude, lng: data[i].Longitude });
}

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/charts"
              element={
                <ChartContainer
                  schoolNames={schoolNames}
                  icseaValue={icseaValue}
                  latestYear={latestYear}
                />
              }
            />
            <Route path="/map" element={<Map markers={markers} />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
