//  YAMOUSSOU-KRO + YAMOUSSOUKRO
// SAN-PEDRO + SAN_PEDRO


// DRENET	Namesake department	Corresponding region	Corresponding District
const IDS = [
    [ "ABIDJAN_1", "ABIDJAN", "ABIDJAN", "ABIDJAN" ],
    [ "ABIDJAN_2", "ABIDJAN", "ABIDJAN", "ABIDJAN" ],
    [ "ABIDJAN_3", "ABIDJAN", "ABIDJAN", "ABIDJAN" ],
    [ "ABIDJAN_4", "ABIDJAN", "ABIDJAN", "ABIDJAN" ],
    [ "ABENGOUROU", "ABENGOUROU", "INDENIE-DJUABLIN", "COMOE" ],
    [ "ABOISSO", "ABOISSO", "SUD-COMOE", "COMOE" ],
    [ "ADZOPE", "ADZOPE", "LA ME", "LAGUNES" ],
    [ "AGBOVILLE", "AGBOVILLE", "AGNEBY-TIASSA", "LAGUNES" ],
    [ "BONDOUKOU", "BONDOUKOU", "GONTOUGO", "ZANZAN" ],
    [ "BONGOUANOU", "BONGOUANOU", "MORONOU", "LACS" ],
    [ "BOUAFLE", "BOUAFLE", "MARAHOUE", "SASSANDRA-MARAHOUE" ],
    [ "BOUAKE_1", "BOUAKE", "GBEKE", "LA VALLEE DU BANDAMA" ],
    [ "BOUAKE_2", "BOUAKE", "GBEKE", "LA VALLEE DU BANDAMA" ],
    [ "BOUNA", "BOUNA", "BOUNKANI", "ZANZAN" ],
    [ "BOUNDIALI", "BOUNDIALI", "BAGOUE", "SAVANES" ],
    [ "DABOU", "DABOU", "GRANDS PONTS", "LAGUNES" ],
    [ "DALOA", "DALOA", "HAUT-SASSANDRA", "SASSANDRA-MARAHOUE" ],
    [ "DAOUKRO", "DAOUKRO", "IFFOU", "LACS" ],
    [ "DIMBOKRO", "DIMBOKRO", "N'ZI", "LACS" ],
    [ "DIVO", "DIVO", "LÔH-DJIBOUA", "GÔH-DJIBOUA" ],
    [ "DUEKOUE", "DUEKOUE", "GUEMON", "MONTAGNES" ],
    [ "FERKESSEDOUGOU", "FERKESSEDOUGOU", "TCHOLOGO", "SAVANES" ],
    [ "GAGNOA", "GAGNOA", "LÔH-DJIBOUA", "GÔH-DJIBOUA" ],
    [ "GUIGLO", "GUIGLO", "CAVALLY", "MONTAGNES" ],
    [ "KATIOLA", "KATIOLA", "HAMBOL", "LA VALLEE DU BANDAMA" ],
    [ "KORHOGO", "KORHOGO", "PORO", "SAVANES" ],
    [ "MAN", "MAN", "TONKPI", "MONTAGNES" ],
    [ "MANKONO", "MANKONO", "BERE", "WOROBA" ],
    [ "MINIGNAN", "MINIGNAN", "FOLON", "DENGUELE" ],
    [ "ODIENNE", "ODIENNE", "KABADOUGOU", "DENGUELE" ],
    [ "SAN-PEDRO", "SAN-PEDRO", "SAN-PEDRO", "BAS-SASSANDRA" ],
    [ "SASSANDRA", "SASSANDRA", "GBOKLE", "BAS-SASSANDRA" ],
    [ "SEGUELA", "SEGUELA", "WORODOUGOU", "WOROBA" ],
    [ "SOUBRE", "SOUBRE", "NAWA", "BAS-SASSANDRA" ],
    [ "TOUBA", "TOUBA", "BAFING", "WOROBA" ],
    [ "YAMOUSSOUKRO", "YAMOUSSOUKRO", "YAMOUSSOUKRO", "YAMOUSSOUKRO"]
];

const logError = (msg, drenetId, year) => {
    console.warn(`${msg} for ${drenetId}, ${year}`);
};

const getNumberOfSchools = (data, drenetId, year) => {
    return data.schools;
};

const getNumberOfStudents = (data, drenetId, year) => {
    if (data.students === undefined) {
        logError("no students", drenetId, year);
        return null;
    }
    return data.students.total;
};

const getClassroomStudentRatio = (data, drenetId, year) => {
    if (data.students === undefined) {
        logError("no students", drenetId, year);
        return null;
    }
    return data.students.total / data.classrooms;
};

const getTeacherStudentRatio = (data, drenetId, year) => {
    if (data.students === undefined) {
        logError("no students", drenetId, year);
        return null;
    }
    return data.students.total / data.teachers.total;
};

const getRepeatingRatio = (data, drenetId, year) => {
    if (data.students === undefined) {
        logError("no students", drenetId, year);
        return null;
    }
    if (data.repeaters === undefined) {
        logError("no repeaters", drenetId, year);
        return null;
    }
    return data.repeaters.total / data.students.total;
};

const getRepeatingRatioBoys = (data, drenetId, year) => {
    if (data.students === undefined) {
        logError("no students", drenetId, year);
        return null;
    }
    if (data.repeaters === undefined) {
        logError("no repeaters", drenetId, year);
        return null;
    }
    return data.repeaters.boys / data.students.boys;
};

const getRepeatingRatioGirls = (data, drenetId, year) => {
    if (data.students === undefined) {
        logError("no students", drenetId, year);
        return null;
    }
    if (data.repeaters === undefined) {
        logError("no repeaters", drenetId, year);
        return null;
    }
    return data.repeaters.girls / data.students.girls;
};

// mutates
const addIndicator = (drenet, drenetId, data, year, indicatorId, method) => {
    const yearData = data[year];
    if (drenet[indicatorId] === undefined) {
        drenet[indicatorId] = {};
    }
    drenet[indicatorId][`y${year}`] = method(yearData, drenetId, year, data);
};

const getDrenet = (data, drenetId) => {
    const drenet = {
        id: drenetId,
        name: drenetId
    };
    
    const idRow = IDS.find(row => row[0] === drenetId);
    if (idRow !== undefined) {
        drenet.admin1 = idRow[3];
        drenet.admin2 = idRow[2];
    }

    Object.keys(data).forEach(year => {
        addIndicator(drenet, drenetId, data, year, "number_of_schools", getNumberOfSchools);
        addIndicator(drenet, drenetId, data, year, "number_of_students", getNumberOfStudents);
        addIndicator(drenet, drenetId, data, year, "repeating_ratio", getRepeatingRatio);
        addIndicator(drenet, drenetId, data, year, "repeating_ratio_boys", getRepeatingRatioBoys);
        addIndicator(drenet, drenetId, data, year, "repeating_ratio_girls", getRepeatingRatioGirls);
        addIndicator(drenet, drenetId, data, year, "teacher_student_ratio", getTeacherStudentRatio);
        addIndicator(drenet, drenetId, data, year, "classroom_student_ratio", getClassroomStudentRatio);
    });

    return drenet;
};


window.getGraphData = (data, educationLevel) => {
    
    const root = data[educationLevel];
    console.log(root)
    
    const drenets = Object.keys(root).map(drenetId => {
        // for now we are just interested in envType: all (rural + urban) and
        // schoolType: total (community + private + public) 
        const drenet = root[drenetId].all.total;

        return getDrenet(drenet, drenetId);
    });

    return drenets;
};
