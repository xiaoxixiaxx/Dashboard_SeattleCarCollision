// create 4 data_set for the user to interact with
// I decided to "copy and paste" the dataset here since JS will need to load first before html
// Also, D3 promise doesn't like to just load the dataset without making chart
// Since the raw dataset is small and static, this might save our time to aviod connection problem
var data2018 = [
   {month: "Jan", tick: 1125},
   {month: "Feb", tick: 912},
   {month: "Mar", tick: 998},
   {month: "Apr", tick: 919},
   {month: "May", tick: 1050},
   {month: "Jun", tick: 1008},
   {month: "Jul", tick: 1064},
   {month: "Aug", tick: 987},
   {month: "Sep", tick: 957},
   {month: "Oct", tick: 1091},
   {month: "Nov", tick: 1026},
   {month: "Dec", tick: 1062},
];

var data2019 = [
   {month: "Jan", tick: 930},
   {month: "Feb", tick: 759},
   {month: "Mar", tick: 862},
   {month: "Apr", tick: 935},
   {month: "May", tick: 1020},
   {month: "Jun", tick: 1017},
   {month: "Jul", tick: 1001},
   {month: "Aug", tick: 919},
   {month: "Sep", tick: 909},
   {month: "Oct", tick: 1070},
   {month: "Nov", tick: 934},
   {month: "Dec", tick: 853},
];

var data2020 = [
   {month: "Jan", tick: 902},
   {month: "Feb", tick: 844},
   {month: "Mar", tick: 557},
   {month: "Apr", tick: 399},
   {month: "May", tick: 452},
   {month: "Jun", tick: 542},
   {month: "Jul", tick: 556},
   {month: "Aug", tick: 581},
   {month: "Sep", tick: 548},
   {month: "Oct", tick: 651},
   {month: "Nov", tick: 543},
   {month: "Dec", tick: 603},
];

var dataAll = [
   {month: "Jan", tick: 2957},
   {month: "Feb", tick: 2515},
   {month: "Mar", tick: 2417},
   {month: "Apr", tick: 2253},
   {month: "May", tick: 2522},
   {month: "Jun", tick: 2567},
   {month: "Jul", tick: 2621},
   {month: "Aug", tick: 2487},
   {month: "Sep", tick: 2414},
   {month: "Oct", tick: 2812},
   {month: "Nov", tick: 2503},
   {month: "Dec", tick: 2518},
];

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 17, left: 60},
    width = 460 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#bar-plot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .padding(0.2);
var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")
var xLabel = svg.append("text")
  .attr("transform",
        "translate(" + (width/2) + " ," +
                       (height + margin.top + 30) + ")")
  .style("text-anchor", "middle")
  .text("Months")
  .attr("fill", "white");

// Initialize the Y axis
var y = d3.scaleLinear()
  .range([ height, 0]);
var yAxis = svg.append("g")
  .attr("class", "myYaxis")
var yLabel = svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x",0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("# of Collisions")
  .attr("fill", "white");

// A function that create / update the plot for a given variable
function update(data) {

  // Update the X axis
  x.domain(data.map(function(d) { return d.month; }))
  xAxis.call(d3.axisBottom(x))

  // Update the Y axis
  y.domain([0, d3.max(data, function(d) { return d.tick }) ]);
  yAxis.transition().duration(1000).call(d3.axisLeft(y));

  // Add the bar
  var u = svg.selectAll("rect")
    .data(data)

  u
    .enter()
    .append("rect")          // Add a new rect for each new elements
    .merge(u)               // get the already existing elements as well
    .transition()          // and apply changes to all of them
    .duration(1000)
      .attr("x", function(d) { return x(d.month); })
      .attr("y", function(d) { return y(d.tick); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.tick); })
      .attr("fill", "steelblue")

  // to remove the old bar and add new one
  //u.exit().remove();
}

// Initialize the plot with the first dataset
update(dataAll);

// to update the texts based on the user interaction with the button
function updateText(text,n) {
  $("#year-display")[0].innerHTML = text;
  $("#year-counts")[0].innerHTML = n;
}

// making multi-series bar graph for comparsion
var multi_chart = c3.generate({
    bindto: '#multi-series-polt',
    padding: {
        top: 0,
        right: 50,
        bottom: 0,
        left: 50,
    },
    data: {
        x: 'x',
        columns: [
            ['x', "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"],
            ['2018', 1125, 912, 998, 919, 1050, 1008, 1064,987,957,1091,1026,1062],
            ['2019', 930, 759, 862, 935, 1020, 1017,1001,919,909,1070,934,853],
            ['2020', 902, 844, 557, 399, 452, 542,556,581,548,651,543,603],
        ]
        ,
        type: 'bar',
    },
    bar: {
      width: 7
    },
    axis: {
        x: {
            type: 'category'
        },
        y: {
            label: {
                text: '# of Collisions',
                position: 'outer-middle'
            }
        }
    },
});
