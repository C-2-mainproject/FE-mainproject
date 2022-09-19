import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styled from "styled-components";

const data = [
  { categoryName: "토익", count: 232 },
  {
    categoryName: "토플",
    count: 112,
  },
  {
    categoryName: "영어",
    count: 128,
  },
];

const WordChart = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [series, setSeries] = useState<number[]>([]);

  useEffect(() => {
    for (const x of data) {
      setCategory(category => category.concat(x.categoryName));
      setSeries(series => series.concat(x.count));
    }
    return () => {
      setCategory([]);
      setSeries([]);
    };
  }, []);
  console.log(category, series);
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    series: series,
    labels: category,
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    colors: ["#2B98BE", "#00B4DB", "#AEE3EE", "#00819D", "#5CD5FF", "#CFE4E9"],
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={options.series}
          type="donut"
          width="500"
        />
      </div>
    </div>
  );
};

export default WordChart;

const ChartBox = styled.div`
  
`