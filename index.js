// TABS
let currentTab = 'graph';
let tabBtns = document.querySelectorAll('.settings .tabs button');
let settingGroups = document.querySelectorAll('.settings .settings_group');
let iframe = document.querySelector('iframe');
tabBtns.forEach(function (btn) {
    btn.addEventListener('click', changeTab);
});

function changeTab(e) {
    if (currentTab === e.target.value) return;
    currentTab = e.target.value;
    tabBtns.forEach(function (btn) {
        btn.classList.toggle('tab_selected');
    });
    settingGroups.forEach(function (settingGroup) {
        settingGroup.classList.toggle('hidden');
    });
    updateGraph();
}

function updateGraph() {
    if (currentTab === 'graph') {
        iframe.src = `graph.html?educationLevel=${graphSettings.educationLevel}&yAxisValue=${graphSettings.yAxisValue}&xAxisValue=${graphSettings.xAxisValue}&size=${graphSettings.size}`;
    } else {
        iframe.src = `map.html?educationLevel=${mapSettings.educationLevel}&boundaries=${mapSettings.boundaries}&indicator=${mapSettings.indicator}`;
    }
}


/* INDICATOR LIST*/

let options = '';
indicators.forEach(function (indicator) {
    options += `<option value="${indicator.value}">${indicator.label}</option>`
});

let yAxisSelect = document.querySelector('.settings_graph .yaxis select');
let xAxisSelect = document.querySelector('.settings_graph .xaxis select');
let mapIndicatorSelect = document.querySelector('.settings_map .indicator select');

yAxisSelect.innerHTML = xAxisSelect.innerHTML = mapIndicatorSelect.innerHTML = options;

/* GRAPH SETTINGS ----------------------------------------------------- */



// EDUCATION LEVEL

let educationLevelBtns = document.querySelectorAll('.settings_graph .education button');
educationLevelBtns.forEach(function (btn) {
    btn.addEventListener('click', setEducationLevel);
});

function setEducationLevel(e) {
    if (graphSettings.educationLevel === e.target.value) return;
    graphSettings.educationLevel = e.target.value;
    educationLevelBtns.forEach(function (btn) {
        btn.classList.remove('button_selected');
    });
    e.target.classList.add('button_selected');
    updateGraph();
}

// SIZE

let sizeBtns = document.querySelectorAll('.settings_graph .size button');
sizeBtns.forEach(function (btn) {
    btn.addEventListener('click', setSize);
});

function setSize(e) {
    if (graphSettings.size === e.target.value) return;
    graphSettings.size = e.target.value;
    sizeBtns.forEach(function (btn) {
        btn.classList.remove('button_selected');
    });
    e.target.classList.add('button_selected');
    updateGraph();
}

// Y AXIS

yAxisSelect.querySelector(`option[value="${graphSettings.yAxisValue}"]`).selected = true;
yAxisSelect.addEventListener('change', setYAxisValue);

function setYAxisValue(e) {
    if (graphSettings.yAxisValue === e.target.value) return;
    graphSettings.yAxisValue = e.target.value;
    updateGraph();
}

// X AXIS

xAxisSelect.querySelector(`option[value="${graphSettings.xAxisValue}"]`).selected = true;
xAxisSelect.addEventListener('change', setXAxisValue);

function setXAxisValue(e) {
    if (graphSettings.xAxisValue === e.target.value) return;
    graphSettings.xAxisValue = e.target.value;
    updateGraph();
}

/* MAP SETTINGS ----------------------------------------------------- */



// EDUCATION LEVEL

let mapEducationLevelBtns = document.querySelectorAll('.settings_map .education button');
mapEducationLevelBtns.forEach(function (btn) {
    btn.addEventListener('click', setMapEducationLevel);
});

function setMapEducationLevel(e) {
    if (mapSettings.educationLevel === e.target.value) return;
    mapSettings.educationLevel = e.target.value;
    mapEducationLevelBtns.forEach(function (btn) {
        btn.classList.remove('button_selected');
    });
    e.target.classList.add('button_selected');
    updateGraph();
}

// BOUNDARIES

let mapBoundariesBtns = document.querySelectorAll('.settings_map .boundaries button');
mapBoundariesBtns.forEach(function (btn) {
    btn.addEventListener('click', setMapBoundaries);
});

function setMapBoundaries(e) {
    if (mapSettings.boundaries === e.target.value) return;
    mapSettings.boundaries = e.target.value;
    mapBoundariesBtns.forEach(function (btn) {
        btn.classList.remove('button_selected');
    });
    e.target.classList.add('button_selected');
    updateGraph();
}

// INDICATOR

mapIndicatorSelect.querySelector(`option[value="${mapSettings.indicator}"]`).selected = true;
mapIndicatorSelect.addEventListener('change', setMapIndicator);

function setMapIndicator(e) {
    if (mapSettings.indicator === e.target.value) return;
    mapSettings.indicator = e.target.value;
    updateGraph();
}