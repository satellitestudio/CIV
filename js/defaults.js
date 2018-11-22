let indicators = [
    { value: "pop_men", label: "Population in millions (men)" },
    { value: "pop_women", label: "Population in millions (women)" },
    { value: "pop", label: "Population in millions (total)" },
    { value: "men_women_ratio", label: "Men/women ratio" },
    { value: "households", label: "Number of households" },
    { value: "avg_household_size", label: "Average household size" },
    { value: "teacher_student_ratio", label: "Average students per teacher" },
    { value: "classroom_student_ratio", label: "Average students per classroom" },
    { value: "repeating_ratio", label: "% students repeating" },
    { value: "repeating_ratio_boys", label: "% students repeating (boys)" },
    { value: "repeating_ratio_girls", label: "% students repeating (girls)" },
    { value: "amenities_electricity", label: "Amenities: % schools with electricity" },
    { value: "amenities_foodhall", label: "Amenities: % schools with food hall" },
    { value: "amenities_latrine", label: "Amenities: % schools with latrines" },
    { value: "amenities_water_point", label: "Amenities: % schools with water point" },
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