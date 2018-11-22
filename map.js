/* global d3, topojson */

//choropleth
let width = 800, height = 500;

let timeSlider = document.querySelector('#slider-time');

let searchParams = new URLSearchParams(location.search);
let adminLevel = searchParams.get('boundaries');
let currentIndicator = searchParams.get('indicator');
const indicatorLabel = indicators.find(i => i.value === currentIndicator).label;
document.getElementById('indicatorLabel').innerHTML = indicatorLabel;

console.log(currentIndicator)

let year = timeSlider.value;
let yearTitle = document.querySelector('.year');

let domain;
let colors = ["#D9DFE5", "#002060"];

let colorScale;

let projection = d3.geo.mercator();

let path = d3.geo.path()
    .projection(projection);

let svg = d3.select(".map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

let data;

d3.queue()
    .defer(d3.json, `./data/admin${adminLevel}.json`)
    .defer(d3.json, "./data/data_2018-11-21_plus-amenities.json")
    .await(function (error, topoJSON, data_) {
        data = window.getGraphData(data_, searchParams.get('educationLevel'));

        domain = window.getDomain(data, currentIndicator);
        colorScale = d3.scale.linear()
            .domain(domain)
            .range(colors);
        
        let topoJSONRoot = `gadm36_CIV_${adminLevel}`;
        let counties = topojson.feature(topoJSON, topoJSON.objects[topoJSONRoot]);
        // console.log(data.map(d => cleanupName(d.admin2)).sort());
        // console.log(counties.features.map(f => cleanupName(f.properties[`NAME_${adminLevel}`]).toUpperCase()).sort())

        projection.scale(1).translate([0, 0]);

        let b = path.bounds(counties);
        let s = 1 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
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
            .text(d => d.properties[`NAME_${adminLevel}`]);

        svg.append("path")
            .datum(topojson.mesh(topoJSON, topoJSON.objects[topoJSONRoot], (a, b) => a !== b))
            .attr("class", "border")
            .attr("d", path);

        timeSlider.addEventListener('input', setColors);
        setColors();
        drawLegend()
    });

setColors = () => {
    year = timeSlider.value
    yearTitle.innerHTML = year;
    d3.selectAll("path")
        .attr("d", path)
        .style("fill", d => {
            if (d.properties) {
                let featureName = d.properties[`NAME_${adminLevel}`];
                featureName = cleanupName(featureName.toUpperCase());
                console.log(featureName)
                const adminData = data.find(d => cleanupName(d[`admin${adminLevel}`]) === featureName);
                // console.log(featureName, adminData, data.map(d => d.id))
                if (adminData) {
                    const values = adminData[currentIndicator];
                    const yearValue = values[`y${year}`];
                    // console.log(adminData, values, yearValue)
                    return (yearValue === null || yearValue === undefined || isNaN(yearValue)) ? 'white' : colorScale(yearValue);
                } else {
                    return 'white'
                    console.warn('not found geojson:', featureName)
                }

            }
        });
}

const drawLegend = () => {

    //key
    let w = 50, h = 100;
    console.log(domain)
    
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
        .attr("transform", "translate(0,10)");
    
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
        .call(yAxis);
    //end key
};
