let indicators = [
    { value: 'student_teacher_ratio', label: 'Student Teacher Ratio' },
    { value: 'schools_per_school_age_children', label: 'Schools per School Age Children' },
    { value: 'gdp_per_capita', label: 'GDP per Capita' },
    { value: 'enrollment_rate', label: 'Enrollment Rate' },
    { value: 'performance_level', label: 'Performance Level' },
    { value: 'matriculation_rate', label: 'Matriculation Rate' },
]

let graphSettings = {
    educationLevel: 'elementary',
    yAxisValue: 'enrollment_rate',
    xAxisValue: 'gdp_per_capita',
    size: 'number_of_schools'
}

let mapSettings = {
    educationLevel: 'elementary',
    boundaries: '2',
    indicator: 'enrollment_rate'
}