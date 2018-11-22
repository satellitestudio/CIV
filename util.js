window.cleanupName = s => {
    if (s === undefined) return undefined;
    let res = s.replace('-', ' ');
    return res.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

window.getDomain = (drenets, indicator) => {
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
    return [domain[0] - padding, domain[1] + padding];
};