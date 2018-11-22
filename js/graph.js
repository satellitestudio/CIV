/* global d3 */

let timeSlider = document.querySelector('#slider-time');

let searchParams = new URLSearchParams(location.search);

const basePath = (window.location.hostname === 'localhost') ? 'http://localhost:8000' : 'http://satellitestud.io/CIV'; 

d3.json(`${basePath}/data/data_2018-11-21_plus-amenities.json`, data => {
    console.log(data)
    const drenets = window.getGraphData(data, searchParams.get('educationLevel'));
    // });
    // d3.json(`../data/drenets_${searchParams.get('educationLevel')}.json`, drenets => {
    console.log(drenets);
    // Chart dimensions.
    let margin = { top: 20, right: 20, bottom: 20, left: 35 },
        width = 850 - margin.right,
        height = 540 - margin.top - margin.bottom;

    // Various scales. These domains make assumptions of data, naturally.
    let xScale = d3.scale.linear().domain(getDomain(searchParams.get('xAxisValue'))).range([0, width]),
        yScale = d3.scale.linear().domain(getDomain(searchParams.get('yAxisValue'))).range([height, 0]),
        radiusScale = d3.scale.linear().domain(getDomain(searchParams.get('size'))).range([3, 35]);

    function getDomain(indicator) {
        let domain = [];
        drenets.map(d => {
            Object.keys(d[indicator]).forEach(key => {
                if (!domain[0] && d.name !== 'NATIONAL') domain[0] = Number(d[indicator][key]);
                if (!domain[1] && d.name !== 'NATIONAL') domain[1] = Number(d[indicator][key]);
                if (Number(d[indicator][key]) && Number(d[indicator][key]) < domain[0] && d.name !== 'NATIONAL') domain[0] = Number(d[indicator][key]);
                if (Number(d[indicator][key]) && Number(d[indicator][key]) > domain[1] && d.name !== 'NATIONAL') domain[1] = Number(d[indicator][key]);
            });
        });
        let padding = (domain[1] - domain[0]) / 10;
        return [domain[0] - padding, domain[1] + padding]
    }

    // The x & y axes.
    let xAxis = d3.svg.axis().orient("bottom").scale(xScale),
        yAxis = d3.svg.axis().orient("left").scale(yScale);

    // Create the SVG container and set the origin.
    let svg = d3.select(".chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("class", "gRoot")

    // Add the x-axis.
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the y-axis.
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    // Add an x-axis label.
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 6)
        .text(indicators[indicators.findIndex(d => d.value == searchParams.get('xAxisValue'))].label);

    // Add a y-axis label.
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text(indicators[indicators.findIndex(d => d.value == searchParams.get('yAxisValue'))].label);

    // Add the year label; the value is set on transition.
    var yearLabel = svg.append("text")
        .attr("class", "year label")
        .attr("text-anchor", "end")
        .attr("y", height - 24)
        .attr("x", width)
        .text(1800);

    // Add the country label; the value is set on transition.
    let drenetName = svg.append("text")
        .attr("class", "country label")
        .attr("text-anchor", "start")
        .attr("y", 40)
        .attr("x", 20)
        .text("");

    let dot = svg.append("g")
        .attr("class", "dots")
        .selectAll(".dot")
        .data(drenets)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("fill", d => d.name === 'NATIONAL' ? '#D9E0E5' : '#002060')
        .on("mouseenter", function (d) {
            drenetName.text(d.name.toLowerCase());
        })
        .on("mouseleave", function () {
            drenetName.text('');
        })
        .on("mousedown", function (d) {
            if (d.name !== 'NATIONAL') d3.select(this).classed("selected", !d3.select(this).classed("selected"));
        })

    function update() {
        dot.transition()
            .attr("cx", (d) => {
                return xScale(d[searchParams.get('xAxisValue')][`y${timeSlider.value}`]);
            })
            .attr("cy", (d) => {
                return yScale(d[searchParams.get('yAxisValue')][`y${timeSlider.value}`]);
            })
            .attr("r", (d) => {
                if (d.name === 'NATIONAL') return 100
                else return radiusScale(d[searchParams.get('size')][`y${timeSlider.value}`]);
            })

        dot.sort(function (a, b) {
            if (a.name === 'NATIONAL') return -1;
            else if (b.name === 'NATIONAL') return 1
            else return a[searchParams.get('size')][`y${timeSlider.value}`] - b[searchParams.get('size')][`y${timeSlider.value}`];
        });

        yearLabel.text(timeSlider.value);
    }
    timeSlider.addEventListener('input', update)

    update();
});
