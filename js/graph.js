let timeSlider = document.querySelector('#slider-time');


let searchParams = new URLSearchParams(location.search);

// Various accessors that specify the four dimensions of data to visualize.
function x(d) { return d[searchParams.get('xAxisValue')]; }
function y(d) { return d[searchParams.get('yAxisValue')]; }
function radius(d) { return d[searchParams.get('size')]; }
function color(d) { return d.region; }
function key(d) { return d.name; }

// Chart dimensions.
let margin = { top: 10, right: 20, bottom: 20, left: 30 },
    width = 850 - margin.right,
    height = 540 - margin.top - margin.bottom;

// Various scales. These domains make assumptions of data, naturally.
let xScale = d3.scale.log().domain([300, 1e5]).range([0, width]).clamp(true),
    yScale = d3.scale.linear().domain([10, 90]).range([height, 0]).clamp(true),
    radiusScale = d3.scale.sqrt().domain([0, 5e8]).range([0, 40]).clamp(true);

// The x & y axes.
let xAxis = d3.svg.axis().orient("bottom").scale(xScale).ticks(10, d3.format(",d")),
    yAxis = d3.svg.axis().scale(yScale).orient("left");

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
    .text("GDP per Capita");

// Add a y-axis label.
svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Enrollment Rate");

// Add the year label; the value is set on transition.
var label = svg.append("text")
    .attr("class", "year label")
    .attr("text-anchor", "end")
    .attr("y", height - 24)
    .attr("x", width)
    .text(1800);

// Add the country label; the value is set on transition.
let countrylabel = svg.append("text")
    .attr("class", "country label")
    .attr("text-anchor", "start")
    .attr("y", 80)
    .attr("x", 20)
    .text(" ");

// Load the data.
d3.json("../data/nations.json", nations => {

    // A bisector since many nation's data is sparsely-defined.
    let bisect = d3.bisector(function (d) { return d[0]; });

    // Add a dot per nation. Initialize the data at 1800, and set the colors.
    let dot = svg.append("g")
        .attr("class", "dots")
        .selectAll(".dot")
        .data(interpolateData(1800))
        .enter().append("circle")
        .attr("class", "dot")
        .call(position)
        .on("mousedown", function (d, i) { })
        .on("mouseup", function (d, i) {
            dot.classed("selected", false);
            d3.select(this).classed("selected", !d3.select(this).classed("selected"));
            dragit.trajectory.display(d, i, "selected");
        })
        .on("mouseenter", function (d, i) {
            if (dragit.statemachine.current_state == "idle") {
                dragit.trajectory.display(d, i)
                dragit.utils.animateTrajectory(dragit.trajectory.display(d, i), dragit.time.current, 1000)
                countrylabel.text(d.name);
                dot.style("opacity", .4)
                d3.select(this).style("opacity", 1)
                d3.selectAll(".selected").style("opacity", 1)
            }
        })
        .on("mouseleave", function (d, i) {
            if (dragit.statemachine.current_state == "idle") {
                countrylabel.text("");
                dot.style("opacity", 1);
            }
            dragit.trajectory.remove(d, i);
        })
        .call(dragit.object.activate)

    // Add a title.
    dot.append("title")
        .text(function (d) { return d.name; });

    // Start a transition that interpolates the data based on year.
    svg.transition()
        .duration(30000)
        .ease("linear")

    // Positions the dots based on data.
    function position(dot) {
        dot.attr("cx", function (d) { return xScale(x(d)); })
            .attr("cy", function (d) { return yScale(y(d)); })
            .attr("r", function (d) { return radiusScale(radius(d)); });
    }

    // Defines a sort order so that the smallest dots are drawn on top.
    function order(a, b) {
        return radius(b) - radius(a);
    }

    // Updates the display to show the specified year.
    function displayYear(year) {
        dot.data(interpolateData(year + dragit.time.min), key).call(position).sort(order);
        label.text(dragit.time.min + Math.round(year));
    }

    // Interpolates the dataset for the given (fractional) year.
    function interpolateData(year) {
        return nations.map(function (d) {
            return {
                name: d.name,
                region: d.region,
                income: interpolateValues(d.income, year),
                population: interpolateValues(d.population, year),
                lifeExpectancy: interpolateValues(d.lifeExpectancy, year)
            };
        });
    }

    // Finds (and possibly interpolates) the value for the specified year.
    function interpolateValues(values, year) {
        var i = bisect.left(values, year, 0, values.length - 1),
            a = values[i];
        if (i > 0) {
            var b = values[i - 1],
                t = (year - a[0]) / (b[0] - a[0]);
            return a[1] * (1 - t) + b[1] * t;
        }
        return a[1];
    }

    init();

    function update(v, duration) {
        dragit.time.current = v || dragit.time.current;
        displayYear(dragit.time.current)
        timeSlider.value = dragit.time.current;
    }

    function init() {

        dragit.init(".gRoot");

        dragit.time = { min: 1800, max: 2009, step: 1, current: 1800 }
        dragit.data = d3.range(nations.length).map(function () { return Array(); })

        for (var yy = 1800; yy < 2009; yy++) {
            interpolateData(yy).filter(function (d, i) {
                dragit.data[i][yy - dragit.time.min] = [xScale(x(d)), yScale(y(d))];
            })
        }

        dragit.evt.register("update", update);

        // d3.select("#slider-time").property("value", dragit.time.current);

        timeSlider.value = dragit.time.current;

        timeSlider.addEventListener('input', (e) => {
            update(parseInt(e.target.value), 500);
        })
        update(parseInt(timeSlider.value), 0);

        var end_effect = function () {
            countrylabel.text("");
            dot.style("opacity", 1)
        }

        dragit.evt.register("dragend", end_effect);
    }

});
