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
}

const getDrenet = (data, drenetId) => {
    const drenet = {
        id: drenetId,
        name: drenetId
    };

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

    let drenets = Object.keys(root).map(drenetId => {
        // for now we are just interested in envType: all (rural + urban) and
        // schoolType: total (community + private + public) 
        const drenet = root[drenetId].all.total;

        return getDrenet(drenet, drenetId);
    });

    return drenets;
};
