import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import styled from "styled-components";
import { apis } from "../../shared/api";

const WordChart = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [series, setSeries] = useState<number[]>([]);

  const getWordChart = async () => {
    try {
      await apis.getChartData().then(res => {
        console.log(res.data);
        for (const x of res.data) {
          setCategory(category => category.concat(x.categoryName));
          setSeries(series => series.concat(Number(x.count)));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWordChart();
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
      <ChartBox id="chart">
        <ReactApexChart
          options={options}
          series={options.series}
          type="donut"
          width="350"
        />
      </ChartBox>
    </div>
  );
};

export default WordChart;

const ChartBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
