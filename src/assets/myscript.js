
  function collapseSidebar() {
  let sidebar = document.getElementById('sidebar')
  let content = document.getElementById('content')
  let toggle = document.getElementById('toggle-button')
  let titles = sidebar.querySelectorAll('span')

  if (sidebar.classList.contains('lg:w-[240px]')) {
  //sidebar
  sidebar.classList.remove('lg:w-[240px]')
  sidebar.classList.add('w-[60px]')

  //content
  content.classList.remove('lg:w-[100wh-250px]')
  content.classList.remove('lg:ml-[240px]')
  content.classList.add('lg:w-[100wh-100px]')
  content.classList.add('ml-[60px]')

  //toggle
  toggle.classList.remove('rotate-0')
  toggle.classList.add('rotate-180')
} else {
  //sidebar
  sidebar.classList.remove('w-[60px]')
  sidebar.classList.add('lg:w-[240px]')

  //content
  content.classList.remove('lg:w-[100wh-100px]')
  content.classList.remove('ml-[60px]')
  content.classList.add('lg:w-[100wh-250px]')
  content.classList.add('lg:ml-[240px]')

  //toggle
  toggle.classList.remove('rotate-180')
  toggle.classList.add('rotate-0')
}
}

  // toggle user dropdown
  function openUserDropdown() {
  document.getElementById('user-dropdown').classList.toggle('hidden')
}


  var options = {
  chart: {
  height: 350,
  type: "line",
  stacked: false
},
  dataLabels: {
  enabled: false
},
  colors: ["#FF1654", "#247BA0"],
  series: [
{
  name: "Series A",
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
},
{
  name: "Series B",
  data: [20, 29, 37, 36, 44, 45, 50, 58]
}
  ],
  stroke: {
  width: [4, 4]
},
  plotOptions: {
  bar: {
  columnWidth: "20%"
}
},
  xaxis: {
  categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
},
  yaxis: [
{
  axisTicks: {
  show: true
},
  axisBorder: {
  show: true,
  color: "#FF1654"
},
  labels: {
  style: {
  colors: "#FF1654"
}
},
  title: {
  text: "Series A",
  style: {
  color: "#FF1654"
}
}
},
{
  opposite: true,
  axisTicks: {
  show: true
},
  axisBorder: {
  show: true,
  color: "#247BA0"
},
  labels: {
  style: {
  colors: "#247BA0"
}
},
  title: {
  text: "Series B",
  style: {
  color: "#247BA0"
}
}
}
  ],
  tooltip: {
  shared: false,
  intersect: true,
  x: {
  show: false
}
},
  legend: {
  horizontalAlign: "left",
  offsetX: 40
}
};

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();


<!-- pie chart  -->

  var options = {
  chart: {
  height: 350,
  type: "pie",
  stacked: false
},
  colors: ["#FF1654", "#247BA0"],
  series: [44, 55, 13, 33],
  labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
};

  var chart = new ApexCharts(document.querySelector("#pie_chart"), options);

  chart.render();


<!-- candle stick chart -->

  var options = {
  chart: {
  height: 350,
  type: "candlestick",
  stacked: false
},
  colors: ["#FF1654", "#247BA0"],
  series: [{
  data: [
  [1538856000000, [6593.34, 6600, 6582.63, 6600]],
  [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]
  ]
}]
};

  var chart = new ApexCharts(document.querySelector("#candle_chart"), options);

  chart.render();


<!-- heatmap chart -->

  var options = {
  chart: {
  height: 350,
  type: "heatmap",
  stacked: false
},
  colors: ["#FF1654", "#247BA0"],
  series: [
{
  name: "Series 1",
  data: [{
  x: 'W1',
  y: 22
}, {
  x: 'W2',
  y: 29
}, {
  x: 'W3',
  y: 13
}, {
  x: 'W4',
  y: 32
}]
},
{
  name: "Series 2",
  data: [{
  x: 'W1',
  y: 43
}, {
  x: 'W2',
  y: 43
}, {
  x: 'W3',
  y: 43
}, {
  x: 'W4',
  y: 43
}]
}
  ]
};

  var chart = new ApexCharts(document.querySelector("#heatmap_chart"), options);

  chart.render();
