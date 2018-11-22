window.removeAccents = s => {
    if (s === undefined) return undefined;
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};
