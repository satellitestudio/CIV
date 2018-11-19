
//choropleth
let width = 800, height = 400;

let timeSlider = document.querySelector('#slider-time');

let searchParams = new URLSearchParams(location.search);
let adminLevel = searchParams.get('boundaries');
let currentIndicator = searchParams.get('indicator');

let year = timeSlider.value;
let yearTitle = document.querySelector('.year');

let domain = [7, 25];
let colors = ["#D9DFE5", "#002060"];

let colorScale = d3.scale.linear()
    .domain(domain)
    .range(colors);

let projection = d3.geo.mercator()

let path = d3.geo.path()
    .projection(projection);

let svg = d3.select(".map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

let data;

d3.queue()
.defer(d3.json, `../data/admin${adminLevel}.json`)
.defer(d3.json, `../data/drenets_${searchParams.get('educationLevel')}.json`)
.await(function(error, topoJSON, data_) {
    data = data_;

    let topoJSONRoot = `gadm36_CIV_${adminLevel}`;
    let counties = topojson.feature(topoJSON, topoJSON.objects[topoJSONRoot]);

    projection.scale(1).translate([0, 0]);

    let b = path.bounds(counties);
    let s = 1.1 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
    let t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
    projection.scale(s).translate(t);

    svg.selectAll("path")
        .data(counties.features)
        // .data(counties.features.filter(d => d.id))
        .enter()
        .append("path")
        .attr("class", "county")
        .attr("d", path)
        .append("title")
        .text(d => d.properties.county);

    svg.append("path")
        .datum(topojson.mesh(topoJSON, topoJSON.objects[topoJSONRoot], (a, b) => a !== b))
        .attr("class", "border")
        .attr("d", path);

    timeSlider.addEventListener('input', setColors);
    setColors();
});

setColors = () => {
    year = timeSlider.value
    yearTitle.innerHTML = year;
    d3.selectAll("path")
        .attr("d", path)
        .style("fill", d => {
            if (d.properties) {
                const name = d.properties[`NAME_${adminLevel}`];
                const adminData = data.find(d => d.name === name);
                if (adminData) {
                    const values = adminData[currentIndicator]; 
                    const yearValue = values[`y${year}`];
                    return colorScale(yearValue);
                }

            }
        });
}


//key
let w = 50, h = 100;

let key = d3.select(".info")
    .append("svg")
    .attr("class", "legend")
    .attr("width", w)
    .attr("height", h);

let legend = key.append("defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "100%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%");

legend.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", colors[1])
    .attr("stop-opacity", 1);

legend.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", colors[0])
    .attr("stop-opacity", 1);

key.append("rect")
    .attr("width", 10)
    .attr("height", h)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(0,10)")

let y = d3.scale.linear()
    .range([h, 0])
    .domain(domain);

let yAxis = d3.svg.axis()
    .scale(y)
    .orient("right")
    .ticks(4);

key.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(10,10)")
    .call(yAxis)
//end key
