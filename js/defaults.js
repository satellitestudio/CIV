let indicators = [
    { value: "teacher_student_ratio", label: "Teacher Student  Ratio" },
    { value: "classroom_student_ratio", label: "Classroom Student Ratio" },
    { value: "repeating_ratio", label: "Repeating Ratio" },
    { value: "repeating_ratio_boys", label: "Repeating Ratio (boys)" },
    { value: "repeating_ratio_girls", label: "Repeating Ratio (girls)" },
    // { value: "schools_per_school_age_children", label: "Schools per School Age Children" },
    // { value: "gdp_per_capita", label: "GDP per Capita" },
    // { value: "enrollment_rate", label: "Enrollment Rate" },
    // { value: "performance_level", label: "Performance Level" },
    // { value: "matriculation_rate", label: "Matriculation Rate" },
];

let graphSettings = {
    educationLevel: "primary",
    yAxisValue: "teacher_student_ratio",
    xAxisValue: "repeating_ratio",
    size: "number_of_schools"
};

let mapSettings = {
    educationLevel: "primary",
    boundaries: "2",
    indicator: "teacher_student_ratio"
};