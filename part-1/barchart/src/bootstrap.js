import * as echarts from "echarts";

var myChart = echarts.init(document.getElementById('c-barchart'));


var option = {
  title: {
    text: 'ECharts Getting Started Example 2'
  },
  tooltip: {},
  legend: {
    data: ['sales']
  },
  xAxis: {
    data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

myChart.setOption(option);