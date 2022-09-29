import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
// import styled from "styled-components";
// import { useAxios } from "../../hooks/useAxios";
import { apis } from "../../shared/api";

type IChartData = {
  count: number;
  categoryName: string;
};
const WordChart = () => {
  const [chartData, setChartData] = useState<IChartData[]>();
  const [category, setCategory] = useState<string[]>([]);
  const [series, setSeries] = useState<number[]>([]);

  const getChartData = async () => {
    await apis.getChartData().then(data => {
      console.log(data.data);
      setChartData(data.data);
    });
  };
  useEffect(() => {
    getChartData();
  }, []);

  useEffect(() => {
    if (chartData) {
      for (const x of chartData) {
        setCategory(category => category.concat(x.categoryName));
        setSeries(series => series.concat(x.count));
      }
    }
    return () => {
      setCategory([]);
      setSeries([]);
    };
  }, [chartData]);

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
          width="350"
        />
      </div>
    </div>
  );
};

export default WordChart;
