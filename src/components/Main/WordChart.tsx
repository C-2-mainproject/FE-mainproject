import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styled from "styled-components";
import { useAxios } from "../../hooks/useAxios";

const mok = [
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
  const [chartData, setChartData] = useState();
  const [category, setCategory] = useState<string[]>([]);
  const [series, setSeries] = useState<number[]>([]);
  const { data, loading, error } = useAxios({
    url: "/api/wordstorage/statistic",
    method: "get",
  });
  useEffect(() => {
    if (data !== null) {
      setChartData(data);
    }
  }, [chartData]);
  console.log(data);

  useEffect(() => {
    for (const x of mok) {
      setCategory(category => category.concat(x.categoryName));
      setSeries(series => series.concat(x.count));
    }
    return () => {
      setCategory([]);
      setSeries([]);
    };
  }, []);
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
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
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

const ChartBox = styled.div`
  width: 150px;
`;
