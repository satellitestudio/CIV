//  YAMOUSSOU-KRO + YAMOUSSOUKRO ],
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
    [ "YAMOUSSOUKRO", "YAMOUSSOUKRO", "YAMOUSSOUKRO", "YAMOUSSOUKRO"],
    [ "NATIONAL", "NATIONAL", "NATIONAL", "NATIONAL"]
];

const logError = (msg, drenetId, year) => {
    //console.warn(`${msg} for ${drenetId}, ${year}`);
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
    return (data.repeaters.total / data.students.total) * 100;
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
    return (data.repeaters.boys / data.students.boys) * 100;
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
    return (data.repeaters.girls / data.students.girls) * 100;
};

const getAmenitiesElectricity = (data, drenetId, year) => {
    if (data.amenities === undefined) {
        logError("no amenities", drenetId, year);
        return null;
    }
    return (data.amenities.electricity / data.schools) * 100;
};

const getAmenitiesFoodhall = (data, drenetId, year) => {
    if (data.amenities === undefined) {
        logError("no amenities", drenetId, year);
        return null;
    }
    return (data.amenities.foodhall / data.schools) * 100;
};

const getAmenitiesLatrine = (data, drenetId, year) => {
    if (data.amenities === undefined) {
        logError("no amenities", drenetId, year);
        return null;
    }
    return (data.amenities.latrine / data.schools) * 100;
};

const getAmenitiesWaterPoint = (data, drenetId, year) => {
    if (data.amenities === undefined) {
        logError("no amenities", drenetId, year);
        return null;
    }
    return (data.amenities.water_point / data.schools) * 100;
};


// mutates
const addIndicator = (drenet, drenetId, data, year, indicatorId, methodOrValue) => {
    const yearData = data[year];
    if (drenet[indicatorId] === undefined) {
        drenet[indicatorId] = {};
    }
    drenet[indicatorId][`y${year}`] = (typeof(methodOrValue) === "function") 
        ? methodOrValue(yearData, drenetId, year, data)
        : methodOrValue;
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
    const drenetCensus = censusPerRegion[drenet.admin2];

    Object.keys(data).forEach(year => {
        addIndicator(drenet, drenetId, data, year, "number_of_schools", getNumberOfSchools);
        addIndicator(drenet, drenetId, data, year, "number_of_students", getNumberOfStudents);
        addIndicator(drenet, drenetId, data, year, "repeating_ratio", getRepeatingRatio);
        addIndicator(drenet, drenetId, data, year, "repeating_ratio_boys", getRepeatingRatioBoys);
        addIndicator(drenet, drenetId, data, year, "repeating_ratio_girls", getRepeatingRatioGirls);
        addIndicator(drenet, drenetId, data, year, "teacher_student_ratio", getTeacherStudentRatio);
        addIndicator(drenet, drenetId, data, year, "classroom_student_ratio", getClassroomStudentRatio);
        addIndicator(drenet, drenetId, data, year, "amenities_electricity", getAmenitiesElectricity);
        addIndicator(drenet, drenetId, data, year, "amenities_foodhall", getAmenitiesFoodhall);
        addIndicator(drenet, drenetId, data, year, "amenities_latrine", getAmenitiesLatrine);
        addIndicator(drenet, drenetId, data, year, "amenities_water_point", getAmenitiesWaterPoint);
        
        addIndicator(drenet, drenetId, data, year, "pop_men", drenetCensus.pop_men);
        addIndicator(drenet, drenetId, data, year, "pop_women", drenetCensus.pop_women);
        addIndicator(drenet, drenetId, data, year, "pop", drenetCensus.pop_men);
        addIndicator(drenet, drenetId, data, year, "men_women_ratio", drenetCensus.men_women_ratio);
        addIndicator(drenet, drenetId, data, year, "households", drenetCensus.households);
        addIndicator(drenet, drenetId, data, year, "avg_household_size", drenetCensus.avg_household_size);
        
    });
    
    return drenet;
};

let censusPerRegion;

const getCensusPerRegion = () => {
    const censusPerRegion = {};
    census.forEach(c => {
        const region = c[1];
        if (censusPerRegion[region] === undefined) {
            censusPerRegion[region] = {
                pop_men: 0,
                pop_women: 0,
                pop: 0,
                households: 0
            };
        }
        censusPerRegion[region].pop_men += parseInt(c[4]);
        censusPerRegion[region].pop_women += parseInt(c[5]);
        censusPerRegion[region].pop += parseInt(c[6]);
        censusPerRegion[region].households += parseInt(c[8]);
    });

    // compute national totals
    const nationalTotals = {
        pop_men: 0,
        pop_women: 0,
        pop: 0,
        households: 0
    };
    Object.keys(censusPerRegion).forEach(region => {
        nationalTotals.pop_men += censusPerRegion[region].pop_men;
        nationalTotals.pop_women += censusPerRegion[region].pop_women;
        nationalTotals.pop += censusPerRegion[region].pop;
        nationalTotals.households += censusPerRegion[region].households;
    });
    censusPerRegion.NATIONAL = nationalTotals;

    // compute averages from totals
    Object.keys(censusPerRegion).forEach(region => {
        censusPerRegion[region].men_women_ratio = censusPerRegion[region].pop_men / censusPerRegion[region].pop_women;
        censusPerRegion[region].avg_household_size = censusPerRegion[region].pop / censusPerRegion[region].households;
    });

    return censusPerRegion;
};

const mergeDrenet = (root, fromID, toID) => {
    const from = root[fromID];
    const to = root[toID];
    ["all", "rural", "urban"].forEach(envType => {
        if (from[envType]) {
            ["community", "private", "public", "total"].forEach(schoolType => {
                if (from[envType][schoolType]) {
                    const years = Object.keys(from[envType][schoolType]);
                    // console.log('adding years from ', fromID, years);
                    years.forEach(year => {
                        to[envType][schoolType][year] = from[envType][schoolType][year];
                    });
                }
            });
        }
    });
    delete root[fromID];
    return root;
};


window.getGraphData = (data, educationLevel) => {

    let root = data[educationLevel];
    
    // merge
    root = mergeDrenet(root, "SAN_PEDRO", "SAN-PEDRO");
    root = mergeDrenet(root, "YAMOUSSOU-KRO", "YAMOUSSOUKRO");

    censusPerRegion = getCensusPerRegion();

    let drenets = Object.keys(root).map(drenetId => {
        // for now we are just interested in envType: all (rural + urban) and
        // schoolType: total (community + private + public) 
        const drenet = root[drenetId].all.total;

        return getDrenet(drenet, drenetId);
    });

    return drenets;
};
 




const census = 
[
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "ABOBO", "522992", "507666", "1030658", "103.0", "208683", "4.9" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "ADJAME", "193733", "179245", "372978", "108.1", "77362", "4.8" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "ATTECOUBE", "133514", "127397", "260911", "104.8", "56952", "4.6" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "COCODY", "207382", "239673", "447055", "86.5", "105180", "4.3" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "KOUMASSI", "212500", "220639", "433139", "96.3", "92986", "4.7" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "MARCORY", "122942", "126916", "249858", "96.9", "61006", "4.1" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "PLATEAU", "3602", "3886", "7488", "92.7", "1571", "4.8" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "PORT-BOUET", "208655", "210378", "419033", "99.2", "102013", "4.1" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "TREICHVILLE", "51254", "51326", "102580", "99.9", "22963", "4.5" ],
    [ "ABIDJAN", "ABIDJAN", "Ville Abidjan", "YOPOUGON", "523952", "547591", "1071543", "95.7", "219651", "4.9" ],
    [ "ABIDJAN", "ABIDJAN", "S/P Abidjan", "ANYAMA", "75882", "73080", "148962", "103.8", "29633", "5.0" ],
    [ "ABIDJAN", "ABIDJAN", "S/P Abidjan", "BINGERVILLE", "44443", "46876", "91319", "94.8", "20355", "4.5" ],
    [ "ABIDJAN", "ABIDJAN", "S/P Abidjan", "BROFODOUME", "8192", "7650", "15842", "107.1", "3895", "4.1" ],
    [ "ABIDJAN", "ABIDJAN", "S/P Abidjan", "SONGON", "28538", "27500", "56038", "103.8", "14136", "4.0" ],
    [ "YAMOUSSOUKRO", "YAMOUSSOUKRO", "ATTIEGOUAKRO", "ATTIEGOUAKRO", "6062", "6188", "12250", "98.0", "2290", "5.3" ],
    [ "YAMOUSSOUKRO", "YAMOUSSOUKRO", "ATTIEGOUAKRO", "LOLOBO (d'attiegouakro)", "17255", "16012", "33267", "107.8", "5285", "6.3" ],
    [ "YAMOUSSOUKRO", "YAMOUSSOUKRO", "YAMOUSSOUKRO", "YAMOUSSOUKRO", "143471", "138264", "281735", "103.8", "57728", "4.9" ],
    [ "YAMOUSSOUKRO", "YAMOUSSOUKRO", "YAMOUSSOUKRO", "KOSSOU", "14712", "13609", "28321", "108.1", "5834", "4.9" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "SAN-PEDRO", "DOBA", "66402", "57128", "123530", "116.2", "21425", "5.8" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "SAN-PEDRO", "DOGBO", "21638", "15753", "37391", "137.4", "7782", "4.8" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "SAN-PEDRO", "GABIADJI", "58376", "51557", "109933", "113.2", "20616", "5.3" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "SAN-PEDRO", "GRAND-BEREBY", "54307", "44379", "98686", "122.4", "20807", "4.7" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "SAN-PEDRO", "SAN-PEDRO", "136160", "125456", "261616", "108.5", "50978", "5.1" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "TABOU", "DAPO-IBOKE", "8416", "6442", "14858", "130.6", "3265", "4.6" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "TABOU", "DJAMANDIOKE", "8348", "6658", "15006", "125.4", "2923", "5.1" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "TABOU", "DJOUROUTOU", "38805", "32846", "71651", "118.1", "13617", "5.3" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "TABOU", "GRABO", "21657", "17524", "39181", "123.6", "8056", "4.9" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "TABOU", "OLODIO", "9228", "6596", "15824", "139.9", "3345", "4.7" ],
    [ "BAS-SASSANDRA", "SAN-PEDRO", "TABOU", "TABOU", "20839", "18151", "38990", "114.8", "8063", "4.8" ],
    [ "BAS-SASSANDRA", "NAWA", "BUYO", "BUYO", "54445", "48772", "103217", "111.6", "17248", "6.0" ],
    [ "BAS-SASSANDRA", "NAWA", "BUYO", "DAPEOUA", "43100", "37558", "80658", "114.8", "13347", "6.0" ],
    [ "BAS-SASSANDRA", "NAWA", "GUEYO", "DABOUYO", "23744", "20723", "44467", "114.6", "6246", "7.1" ],
    [ "BAS-SASSANDRA", "NAWA", "GUEYO", "GUEYO", "20924", "18289", "39213", "114.4", "6296", "6.2" ],
    [ "BAS-SASSANDRA", "NAWA", "MEAGUI", "GNAMANGUI", "61312", "55163", "116475", "111.1", "18819", "6.2" ],
    [ "BAS-SASSANDRA", "NAWA", "MEAGUI", "MEAGUI", "68610", "63684", "132294", "107.7", "23940", "5.5" ],
    [ "BAS-SASSANDRA", "NAWA", "MEAGUI", "OUPOYO", "37037", "35169", "72206", "105.3", "11866", "6.1" ],
    [ "BAS-SASSANDRA", "NAWA", "SOUBRE", "GRAND-ZATTRY", "52315", "47028", "99343", "111.2", "15841", "6.3" ],
    [ "BAS-SASSANDRA", "NAWA", "SOUBRE", "LILIYO", "39971", "36711", "76682", "108.9", "12476", "6.1" ],
    [ "BAS-SASSANDRA", "NAWA", "SOUBRE", "OKROUYO", "60183", "53183", "113366", "113.2", "22424", "5.1" ],
    [ "BAS-SASSANDRA", "NAWA", "SOUBRE", "SOUBRE", "93604", "81559", "175163", "114.8", "35366", "5.0" ],
    [ "BAS-SASSANDRA", "GBOKLE", "FRESCO", "DAHIRI", "19011", "17580", "36591", "108.1", "5859", "6.2" ],
    [ "BAS-SASSANDRA", "GBOKLE", "FRESCO", "FRESCO", "21922", "19136", "41058", "114.6", "8016", "5.1" ],
    [ "BAS-SASSANDRA", "GBOKLE", "FRESCO", "GBAGBAM", "12646", "11003", "23649", "114.9", "4205", "5.6" ],
    [ "BAS-SASSANDRA", "GBOKLE", "SASSANDRA", "DAKPADOU", "24816", "21713", "46529", "114.3", "8520", "5.5" ],
    [ "BAS-SASSANDRA", "GBOKLE", "SASSANDRA", "GRIHIRI", "20848", "17004", "37852", "122.6", "7245", "5.2" ],
    [ "BAS-SASSANDRA", "GBOKLE", "SASSANDRA", "LOBAKUYA", "36256", "31713", "67969", "114.3", "11545", "5.9" ],
    [ "BAS-SASSANDRA", "GBOKLE", "SASSANDRA", "MEDON", "9368", "7207", "16575", "130.0", "3775", "4.4" ],
    [ "BAS-SASSANDRA", "GBOKLE", "SASSANDRA", "SAGO", "30616", "27738", "58354", "110.4", "10635", "5.5" ],
    [ "BAS-SASSANDRA", "GBOKLE", "SASSANDRA", "SASSANDRA", "39518", "32703", "72221", "120.8", "15526", "4.7" ],
    [ "COMOE", "INDENIE-DJUABLIN", "ABENGOUROU", "ABENGOUROU", "68806", "66829", "135635", "103.0", "26355", "5.1" ],
    [ "COMOE", "INDENIE-DJUABLIN", "ABENGOUROU", "AMELEKIA", "13188", "12050", "25238", "109.4", "5117", "4.9" ],
    [ "COMOE", "INDENIE-DJUABLIN", "ABENGOUROU", "ANIASSUE", "20987", "19511", "40498", "107.6", "8000", "5.1" ],
    [ "COMOE", "INDENIE-DJUABLIN", "ABENGOUROU", "EBILASSOKRO", "10368", "9065", "19433", "114.4", "3330", "5.8" ],
    [ "COMOE", "INDENIE-DJUABLIN", "ABENGOUROU", "NIABLE", "22737", "22230", "44967", "102.3", "8942", "5.0" ],
    [ "COMOE", "INDENIE-DJUABLIN", "ABENGOUROU", "YAKASSE-FEYASSE", "19431", "17407", "36838", "111.6", "6128", "6.0" ],
    [ "COMOE", "INDENIE-DJUABLIN", "ABENGOUROU", "ZARANOU", "18423", "15116", "33539", "121.9", "5677", "5.9" ],
    [ "COMOE", "INDENIE-DJUABLIN", "AGNIBILEKROU", "AGNIBILEKROU", "35425", "33749", "69174", "105.0", "13392", "5.2" ],
    [ "COMOE", "INDENIE-DJUABLIN", "AGNIBILEKROU", "AKOBOISSUE", "14723", "13924", "28647", "105.7", "6774", "4.2" ],
    [ "COMOE", "INDENIE-DJUABLIN", "AGNIBILEKROU", "DAME", "8151", "7769", "15920", "104.9", "2769", "5.7" ],
    [ "COMOE", "INDENIE-DJUABLIN", "AGNIBILEKROU", "DUFFREBO", "22487", "19939", "42426", "112.8", "7100", "6.0" ],
    [ "COMOE", "INDENIE-DJUABLIN", "AGNIBILEKROU", "TANGUELAN", "6135", "5886", "12021", "104.2", "2067", "5.8" ],
    [ "COMOE", "INDENIE-DJUABLIN", "BETTIE", "BETTIE", "13062", "11921", "24983", "109.6", "4898", "5.1" ],
    [ "COMOE", "INDENIE-DJUABLIN", "BETTIE", "DIAMARAKRO", "16288", "14825", "31113", "109.9", "4071", "7.6" ],
    [ "COMOE", "SUD-COMOE", "ABOISSO", "ABOISSO", "44310", "41805", "86115", "106.0", "16871", "5.1" ],
    [ "COMOE", "SUD-COMOE", "ABOISSO", "ADAOU", "28954", "28233", "57187", "102.6", "8770", "6.5" ],
    [ "COMOE", "SUD-COMOE", "ABOISSO", "ADJOUAN", "12861", "12227", "25088", "105.2", "5028", "5.0" ],
    [ "COMOE", "SUD-COMOE", "ABOISSO", "AYAME", "7575", "6620", "14195", "114.4", "2722", "5.2" ],
    [ "COMOE", "SUD-COMOE", "ABOISSO", "BIANOUAN", "21454", "19988", "41442", "107.3", "6446", "6.4" ],
    [ "COMOE", "SUD-COMOE", "ABOISSO", "KOUAKRO", "15595", "14466", "30061", "107.8", "5512", "5.5" ],
    [ "COMOE", "SUD-COMOE", "ABOISSO", "MAFERE", "17797", "16963", "34760", "104.9", "7507", "4.6" ],
    [ "COMOE", "SUD-COMOE", "ABOISSO", "YAOU", "9884", "9120", "19004", "108.4", "2453", "7.7" ],
    [ "COMOE", "SUD-COMOE", "ADIAKE", "ADIAKE", "22632", "21625", "44257", "104.7", "8308", "5.3" ],
    [ "COMOE", "SUD-COMOE", "ADIAKE", "ASSINIE-MAFIA", "8750", "7971", "16721", "109.8", "4481", "3.7" ],
    [ "COMOE", "SUD-COMOE", "ADIAKE", "ETUEBOUE", "11500", "11069", "22569", "103.9", "3613", "6.2" ],
    [ "COMOE", "SUD-COMOE", "GRAND-BASSAM", "BONGO", "13156", "11896", "25052", "110.6", "5500", "4.6" ],
    [ "COMOE", "SUD-COMOE", "GRAND-BASSAM", "BONOUA", "35612", "34371", "69983", "103.6", "15473", "4.5" ],
    [ "COMOE", "SUD-COMOE", "GRAND-BASSAM", "GRAND-BASSAM", "40180", "43848", "84028", "91.6", "17753", "4.7" ],
    [ "COMOE", "SUD-COMOE", "TIAPOUM", "NOE", "13992", "13946", "27938", "100.3", "4422", "6.3" ],
    [ "COMOE", "SUD-COMOE", "TIAPOUM", "NOUAMOU", "9471", "9677", "19148", "97.9", "3013", "6.4" ],
    [ "COMOE", "SUD-COMOE", "TIAPOUM", "TIAPOUM", "12459", "12613", "25072", "98.8", "4281", "5.9" ],
    [ "DENGUELE", "KABADOUGOU", "GBELEBAN", "GBELEBAN", "1304", "1265", "2569", "103.1", "333", "7.7" ],
    [ "DENGUELE", "KABADOUGOU", "GBELEBAN", "SAMANGO", "5746", "5469", "11215", "105.1", "1210", "9.3" ],
    [ "DENGUELE", "KABADOUGOU", "GBELEBAN", "SEYDOUGOU", "2217", "2180", "4397", "101.7", "440", "10.0" ],
    [ "DENGUELE", "KABADOUGOU", "MADINANI", "FENGOLO", "2982", "2947", "5929", "101.2", "610", "9.7" ],
    [ "DENGUELE", "KABADOUGOU", "MADINANI", "MADINANI", "12650", "12404", "25054", "102.0", "2545", "9.8" ],
    [ "DENGUELE", "KABADOUGOU", "MADINANI", "N'GOLOBLASSO", "4347", "4374", "8721", "99.4", "952", "9.2" ],
    [ "DENGUELE", "KABADOUGOU", "ODIENNE", "BAKO", "8721", "8532", "17253", "102.2", "1845", "9.4" ],
    [ "DENGUELE", "KABADOUGOU", "ODIENNE", "BOUGOUSSO", "3494", "3228", "6722", "108.2", "600", "11.2" ],
    [ "DENGUELE", "KABADOUGOU", "ODIENNE", "DIOULATIEDOUGOU", "4091", "3937", "8028", "103.9", "1019", "7.9" ],
    [ "DENGUELE", "KABADOUGOU", "ODIENNE", "ODIENNE", "26115", "24391", "50506", "107.1", "7510", "6.7" ],
    [ "DENGUELE", "KABADOUGOU", "ODIENNE", "TIEME", "4745", "4437", "9182", "106.9", "1003", "9.2" ],
    [ "DENGUELE", "KABADOUGOU", "SAMATIGUILA", "KIMBIRILA-SUD", "4373", "4177", "8550", "104.7", "814", "10.5" ],
    [ "DENGUELE", "KABADOUGOU", "SAMATIGUILA", "SAMATIGUILA", "4643", "4290", "8933", "108.2", "799", "11.2" ],
    [ "DENGUELE", "KABADOUGOU", "SEGUELON", "GBONGAHA", "5137", "5270", "10407", "97.5", "764", "13.6" ],
    [ "DENGUELE", "KABADOUGOU", "SEGUELON", "SEGUELON", "7981", "7917", "15898", "100.8", "1423", "11.2" ],
    [ "DENGUELE", "FOLON", "KANIASSO", "GOULIA", "9216", "9374", "18590", "98.3", "1518", "12.2" ],
    [ "DENGUELE", "FOLON", "KANIASSO", "KANIASSO", "6920", "6680", "13600", "103.6", "1518", "9.0" ],
    [ "DENGUELE", "FOLON", "KANIASSO", "MAHANDIANA-SOKOURAN", "12901", "13125", "26026", "98.3", "2431", "10.7" ],
    [ "DENGUELE", "FOLON", "MINIGNAN", "KIMBIRILA-NORD", "2487", "2445", "4932", "101.7", "647", "7.6" ],
    [ "DENGUELE", "FOLON", "MINIGNAN", "MINIGNAN", "7446", "7075", "14521", "105.2", "1826", "8.0" ],
    [ "DENGUELE", "FOLON", "MINIGNAN", "SOKORO", "3620", "3084", "6704", "117.4", "863", "7.8" ],
    [ "DENGUELE", "FOLON", "MINIGNAN", "TIENKO", "6067", "5975", "12042", "101.5", "1341", "9.0" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "BAYOTA", "27980", "26145", "54125", "107.0", "8015", "6.8" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "DAHIEPA-KEHI", "9654", "8519", "18173", "113.3", "3220", "5.6" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "DIGNAGO", "18047", "14340", "32387", "125.9", "6226", "5.2" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "DOUGROUPALEGNAOA", "25302", "21781", "47083", "116.2", "8185", "5.8" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "DOUKOUYO", "12028", "9333", "21361", "128.9", "4229", "5.1" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "GAGNOA", "111089", "102829", "213918", "108.0", "40146", "5.3" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "GALEBRE / GALEBOUO", "17554", "15715", "33269", "111.7", "5695", "5.8" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "GNAGBODOUGNOA", "5308", "4673", "9981", "113.6", "2147", "4.6" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "GUIBEROUA", "34095", "30189", "64284", "112.9", "10749", "6.0" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "OURAGAHIO", "19795", "16569", "36364", "119.5", "7467", "4.9" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "SERIHIO", "23772", "18773", "42545", "126.6", "7936", "5.4" ],
    [ "GÔH-DJIBOUA", "GOH", "GAGNOA", "YOPOHUE", "14830", "13777", "28607", "107.6", "3987", "7.2" ],
    [ "GÔH-DJIBOUA", "GOH", "OUME", "DIEGONEFLA", "39032", "36135", "75167", "108.0", "12014", "6.3" ],
    [ "GÔH-DJIBOUA", "GOH", "OUME", "GUEPAHOUO", "17208", "16590", "33798", "103.7", "4302", "7.9" ],
    [ "GÔH-DJIBOUA", "GOH", "OUME", "OUME", "66894", "60956", "127850", "109.7", "21770", "5.9" ],
    [ "GÔH-DJIBOUA", "GOH", "OUME", "TONLA", "19225", "17980", "37205", "106.9", "4958", "7.5" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "DIVO", "CHIEPO", "16645", "14361", "31006", "115.9", "4165", "7.4" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "DIVO", "DIDOKO", "11363", "10297", "21660", "110.4", "2662", "8.1" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "DIVO", "DIVO", "92528", "86927", "179455", "106.4", "29726", "6.0" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "DIVO", "HIRE", "26036", "24321", "50357", "107.1", "9376", "5.4" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "DIVO", "NEBO", "9772", "8901", "18673", "109.8", "3063", "6.1" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "DIVO", "OGOUDOU", "27572", "26503", "54075", "104.0", "8157", "6.6" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "DIVO", "ZEGO", "13095", "11899", "24994", "110.1", "3718", "6.7" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "GUITRY", "DAIRO-DIDIZO", "25620", "21724", "47344", "117.9", "6827", "6.9" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "GUITRY", "GUITRY", "28243", "25053", "53296", "112.7", "8155", "6.5" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "GUITRY", "LAUZOUA", "12712", "10636", "23348", "119.5", "4775", "4.9" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "GUITRY", "YOCOBOUE", "11855", "10905", "22760", "108.7", "4027", "5.7" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "LAKOTA", "DJIDJI", "6367", "6008", "12375", "106.0", "1984", "6.2" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "LAKOTA", "GAGORE", "7870", "7141", "15011", "110.2", "2340", "6.4" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "LAKOTA", "GOUDOUKO", "14157", "12484", "26641", "113.4", "5263", "5.1" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "LAKOTA", "LAKOTA", "41950", "35273", "77223", "118.9", "16243", "4.8" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "LAKOTA", "NIAMBEZARIA", "32873", "28380", "61253", "115.8", "11120", "5.5" ],
    [ "GÔH-DJIBOUA", "LÔH-DJIBOUA", "LAKOTA", "ZIKISSO", "5125", "4573", "9698", "112.1", "1597", "6.1" ],
    [ "LACS", "BELIER", "DIDIEVI", "BOLI", "6272", "7006", "13278", "89.5", "2117", "6.3" ],
    [ "LACS", "BELIER", "DIDIEVI", "DIDIEVI", "11138", "11372", "22510", "97.9", "4396", "5.1" ],
    [ "LACS", "BELIER", "DIDIEVI", "MOLONOU-BLE", "10778", "12570", "23348", "85.7", "3069", "7.6" ],
    [ "LACS", "BELIER", "DIDIEVI", "RAVIART", "7934", "9179", "17113", "86.4", "2150", "8.0" ],
    [ "LACS", "BELIER", "DIDIEVI", "TIE-N'DIEKRO", "7965", "9485", "17450", "84.0", "2906", "6.0" ],
    [ "LACS", "BELIER", "DJEKANOU", "BONIKRO", "3416", "3004", "6420", "113.7", "1033", "6.2" ],
    [ "LACS", "BELIER", "DJEKANOU", "DJEKANOU", "10352", "9738", "20090", "106.3", "3685", "5.5" ],
    [ "LACS", "BELIER", "TIEBISSOU", "LOMOKANKRO", "7255", "7580", "14835", "95.7", "2390", "6.2" ],
    [ "LACS", "BELIER", "TIEBISSOU", "MOLONOU", "10527", "9613", "20140", "109.5", "4191", "4.8" ],
    [ "LACS", "BELIER", "TIEBISSOU", "TIEBISSOU", "26268", "25271", "51539", "103.9", "9410", "5.5" ],
    [ "LACS", "BELIER", "TIEBISSOU", "YAKPABO-SAKASSOU", "5926", "6294", "12220", "94.2", "1861", "6.6" ],
    [ "LACS", "BELIER", "TOUMODI", "ANGODA", "7047", "7225", "14272", "97.5", "2116", "6.7" ],
    [ "LACS", "BELIER", "TOUMODI", "KOKOUMBO", "12575", "12075", "24650", "104.1", "5272", "4.7" ],
    [ "LACS", "BELIER", "TOUMODI", "KPOUEBO", "13669", "11804", "25473", "115.8", "4148", "6.1" ],
    [ "LACS", "BELIER", "TOUMODI", "TOUMODI", "31430", "32000", "63430", "98.2", "10855", "5.8" ],
    [ "LACS", "IFFOU", "DAOUKRO", "AKPASSANOU", "3072", "3106", "6178", "98.9", "756", "8.2" ],
    [ "LACS", "IFFOU", "DAOUKRO", "ANANDA", "5950", "6070", "12020", "98.0", "1497", "8.0" ],
    [ "LACS", "IFFOU", "DAOUKRO", "DAOUKRO", "37356", "35778", "73134", "104.4", "12351", "5.9" ],
    [ "LACS", "IFFOU", "DAOUKRO", "ETTROKRO", "8863", "7629", "16492", "116.2", "2786", "5.9" ],
    [ "LACS", "IFFOU", "DAOUKRO", "N'GATTAKRO", "7133", "6347", "13480", "112.4", "2082", "6.5" ],
    [ "LACS", "IFFOU", "DAOUKRO", "OUELLE", "13572", "13949", "27521", "97.3", "3878", "7.1" ],
    [ "LACS", "IFFOU", "DAOUKRO", "SAMANZA", "5453", "4807", "10260", "113.4", "1579", "6.5" ],
    [ "LACS", "IFFOU", "M'BAHIAKRO", "BONGUERA", "9191", "9369", "18560", "98.1", "3393", "5.5" ],
    [ "LACS", "IFFOU", "M'BAHIAKRO", "KONDOSSOU", "5532", "5788", "11320", "95.6", "1840", "6.2" ],
    [ "LACS", "IFFOU", "M'BAHIAKRO", "M'BAHIAKRO", "24876", "25012", "49888", "99.5", "7707", "6.5" ],
    [ "LACS", "IFFOU", "PRIKRO", "ANIANOU", "2957", "2857", "5814", "103.5", "1029", "5.7" ],
    [ "LACS", "IFFOU", "PRIKRO", "FAMIENKRO", "5747", "5470", "11217", "105.1", "2020", "5.6" ],
    [ "LACS", "IFFOU", "PRIKRO", "KOFFI-AMONKRO", "5977", "5916", "11893", "101.0", "2298", "5.2" ],
    [ "LACS", "IFFOU", "PRIKRO", "NAFANA", "5387", "5236", "10623", "102.9", "1668", "6.4" ],
    [ "LACS", "IFFOU", "PRIKRO", "PRIKRO", "16618", "16624", "33242", "100.0", "5710", "5.8" ],
    [ "LACS", "N'ZI", "BOCANDA", "BENGASSOU", "10998", "11893", "22891", "92.5", "2833", "8.1" ],
    [ "LACS", "N'ZI", "BOCANDA", "BOCANDA", "29701", "30482", "60183", "97.4", "8347", "7.2" ],
    [ "LACS", "N'ZI", "BOCANDA", "KOUADIOBLEKRO", "8441", "8846", "17287", "95.4", "2131", "8.1" ],
    [ "LACS", "N'ZI", "BOCANDA", "N'ZEKREZESSOU", "13124", "13425", "26549", "97.8", "3870", "6.9" ],
    [ "LACS", "N'ZI", "DIMBOKRO", "ABIGUI", "4601", "4414", "9015", "104.2", "1285", "7.0" ],
    [ "LACS", "N'ZI", "DIMBOKRO", "DIANGOKRO", "5128", "5323", "10451", "96.3", "1451", "7.2" ],
    [ "LACS", "N'ZI", "DIMBOKRO", "DIMBOKRO", "32829", "32128", "64957", "102.2", "11549", "5.6" ],
    [ "LACS", "N'ZI", "DIMBOKRO", "NOFOU", "3329", "3304", "6633", "100.8", "899", "7.4" ],
    [ "LACS", "N'ZI", "KOUASSI-KOUASSIKRO", "KOUASSI-KOUASSIKRO", "11040", "12077", "23117", "91.4", "2560", "9.0" ],
    [ "LACS", "N'ZI", "KOUASSI-KOUASSIKRO", "MEKRO", "3170", "3325", "6495", "95.3", "676", "9.6" ],
    [ "LACS", "MORONOU", "ARRAH", "ARRAH", "17119", "16253", "33372", "105.3", "5087", "6.6" ],
    [ "LACS", "MORONOU", "ARRAH", "KOTOBI", "12807", "12867", "25674", "99.5", "3843", "6.7" ],
    [ "LACS", "MORONOU", "ARRAH", "KREGBE", "10929", "10370", "21299", "105.4", "2750", "7.7" ],
    [ "LACS", "MORONOU", "BONGOUANOU", "ANDE", "26920", "24806", "51726", "108.5", "7600", "6.8" ],
    [ "LACS", "MORONOU", "BONGOUANOU", "ASSIE-KOUMASSI", "7234", "8308", "15542", "87.1", "2060", "7.5" ],
    [ "LACS", "MORONOU", "BONGOUANOU", "BONGOUANOU", "31665", "31326", "62991", "101.1", "10348", "6.1" ],
    [ "LACS", "MORONOU", "BONGOUANOU", "N'GUESSANKRO", "17903", "17145", "35048", "104.4", "4651", "7.5" ],
    [ "LACS", "MORONOU", "M'BATTO", "ANOUMABA", "10155", "9308", "19463", "109.1", "3032", "6.4" ],
    [ "LACS", "MORONOU", "M'BATTO", "ASSAHARA", "3718", "3509", "7227", "106.0", "1080", "6.7" ],
    [ "LACS", "MORONOU", "M'BATTO", "M'BATTO", "26668", "24339", "51007", "109.6", "9578", "5.3" ],
    [ "LACS", "MORONOU", "M'BATTO", "TIEMELEKRO", "15316", "13951", "29267", "109.8", "4992", "5.9" ],
    [ "LAGUNES", "GRANDS PONTS", "DABOU", "DABOU", "44463", "43967", "88430", "101.1", "18167", "4.9" ],
    [ "LAGUNES", "GRANDS PONTS", "DABOU", "LOPOU", "15945", "14324", "30269", "111.3", "6659", "4.5" ],
    [ "LAGUNES", "GRANDS PONTS", "DABOU", "TOUPAH", "15583", "14592", "30175", "106.8", "6077", "5.0" ],
    [ "LAGUNES", "GRANDS PONTS", "GRAND-LAHOU", "AHOUANOU", "18605", "16399", "35004", "113.5", "5483", "6.4" ],
    [ "LAGUNES", "GRANDS PONTS", "GRAND-LAHOU", "BACANDA", "10898", "10052", "20950", "108.4", "2768", "7.6" ],
    [ "LAGUNES", "GRANDS PONTS", "GRAND-LAHOU", "EBONOU", "13540", "11774", "25314", "115.0", "4506", "5.6" ],
    [ "LAGUNES", "GRANDS PONTS", "GRAND-LAHOU", "GRAND-LAHOU", "35869", "31614", "67483", "113.5", "11341", "6.0" ],
    [ "LAGUNES", "GRANDS PONTS", "GRAND-LAHOU", "TOUKOUZOU", "1356", "1206", "2562", "112.4", "659", "3.9" ],
    [ "LAGUNES", "GRANDS PONTS", "JACQUEVILLE", "ATTOUTOU", "12223", "11797", "24020", "103.6", "4717", "5.1" ],
    [ "LAGUNES", "GRANDS PONTS", "JACQUEVILLE", "JACQUEVILLE", "16633", "15655", "32288", "106.2", "6398", "5.0" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "ABOUDE", "10504", "9292", "19796", "113.0", "3333", "5.9" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "ANANGUIE", "7187", "6599", "13786", "108.9", "2119", "6.5" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "AGBOVILLE", "48162", "46931", "95093", "102.6", "18572", "5.1" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "ATTOBROU", "10391", "10063", "20454", "103.3", "3765", "5.4" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "AZAGUIE", "11285", "10691", "21976", "105.6", "4398", "5.0" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "CECHI", "12093", "10686", "22779", "113.2", "3855", "5.9" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "GRAND-MORIE", "9332", "8575", "17907", "108.8", "3544", "5.1" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "GUESSIGUIE", "11580", "10331", "21911", "112.1", "4599", "4.8" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "LOVIGUIE", "8632", "8416", "17048", "102.6", "3236", "5.3" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "ORESS-KROBOU", "3066", "2740", "5806", "111.9", "1273", "4.6" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "AGBOVILLE", "RUBINO", "18725", "16828", "35553", "111.3", "7338", "4.8" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "SIKENSI", "GOMON", "10738", "10142", "20880", "105.9", "3568", "5.9" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "SIKENSI", "SIKENSI", "30110", "27449", "57559", "109.7", "11127", "5.2" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "TAABO", "PACOBO", "7688", "6822", "14510", "112.7", "2858", "5.1" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "TAABO", "TAABO", "22185", "19727", "41912", "112.5", "6950", "6.0" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "TIASSALE", "GBOLOUVILLE", "16594", "12260", "28854", "135.4", "6567", "4.4" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "TIASSALE", "MOROKRO", "19851", "15939", "35790", "124.5", "6795", "5.3" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "TIASSALE", "N'DOUCI", "30321", "26669", "56990", "113.7", "11812", "4.8" ],
    [ "LAGUNES", "AGNEBY-TIASSA", "TIASSALE", "TIASSALE", "31936", "26312", "58248", "121.4", "13822", "4.2" ],
    [ "LAGUNES", "LA ME", "ADZOPE", "ADZOPE", "50809", "48037", "98846", "105.8", "17387", "5.7" ],
    [ "LAGUNES", "LA ME", "ADZOPE", "AGOU", "13673", "13019", "26692", "105.0", "6457", "4.1" ],
    [ "LAGUNES", "LA ME", "ADZOPE", "ANNEPE", "10024", "9901", "19925", "101.2", "2857", "7.0" ],
    [ "LAGUNES", "LA ME", "ADZOPE", "ASSIKOI", "5644", "5091", "10735", "110.9", "1942", "5.5" ],
    [ "LAGUNES", "LA ME", "ADZOPE", "BECEDI-BRIGNAN", "11953", "10680", "22633", "111.9", "4819", "4.7" ],
    [ "LAGUNES", "LA ME", "ADZOPE", "YAKASSE-ME", "7768", "6919", "14687", "112.3", "2672", "5.5" ],
    [ "LAGUNES", "LA ME", "AKOUPE", "AFFERY", "14954", "13153", "28107", "113.7", "6640", "4.2" ],
    [ "LAGUNES", "LA ME", "AKOUPE", "AKOUPE", "33648", "32663", "66311", "103.0", "12063", "5.5" ],
    [ "LAGUNES", "LA ME", "AKOUPE", "BECOUEFIN", "12820", "11790", "24610", "108.7", "3864", "6.4" ],
    [ "LAGUNES", "LA ME", "ALEPE", "ABOISSO-COMOE", "13211", "11398", "24609", "115.9", "3223", "7.6" ],
    [ "LAGUNES", "LA ME", "ALEPE", "ALEPE", "20882", "19598", "40480", "106.6", "6743", "6.0" ],
    [ "LAGUNES", "LA ME", "ALEPE", "ALLOSSO", "6755", "5948", "12703", "113.6", "2046", "6.2" ],
    [ "LAGUNES", "LA ME", "ALEPE", "DANGUIRA", "20099", "18318", "38417", "109.7", "6941", "5.5" ],
    [ "LAGUNES", "LA ME", "ALEPE", "OGHLWAPO", "4883", "4785", "9668", "102.0", "2157", "4.5" ],
    [ "LAGUNES", "LA ME", "YAKASSE-ATTOBROU", "ABONGOUA", "6334", "5863", "12197", "108.0", "1660", "7.3" ],
    [ "LAGUNES", "LA ME", "YAKASSE-ATTOBROU", "BIEBY", "11215", "8783", "19998", "127.7", "1925", "10.4" ],
    [ "LAGUNES", "LA ME", "YAKASSE-ATTOBROU", "YAKASSE-ATTOBROU", "22822", "21260", "44082", "107.3", "5881", "7.5" ],
    [ "MONTAGNES", "TONKPI", "BIANKOUMA", "BIANKOUMA", "26385", "24884", "51269", "106.0", "10885", "4.7" ],
    [ "MONTAGNES", "TONKPI", "BIANKOUMA", "BLAPLEU", "8352", "6398", "14750", "130.5", "3675", "4.0" ],
    [ "MONTAGNES", "TONKPI", "BIANKOUMA", "GBANGBEGOUINE", "1817", "1632", "3449", "111.3", "975", "3.5" ],
    [ "MONTAGNES", "TONKPI", "BIANKOUMA", "GBONNE", "20681", "15276", "35957", "135.4", "8262", "4.4" ],
    [ "MONTAGNES", "TONKPI", "BIANKOUMA", "GOUINE", "8916", "5993", "14909", "148.8", "4131", "3.6" ],
    [ "MONTAGNES", "TONKPI", "BIANKOUMA", "KPATA", "3406", "3335", "6741", "102.1", "1472", "4.6" ],
    [ "MONTAGNES", "TONKPI", "BIANKOUMA", "SANTA", "15573", "11652", "27225", "133.7", "6559", "4.2" ],
    [ "MONTAGNES", "TONKPI", "DANANE", "DALEU", "18795", "15513", "34308", "121.2", "6846", "5.0" ],
    [ "MONTAGNES", "TONKPI", "DANANE", "DANANE", "54388", "50284", "104672", "108.2", "18769", "5.6" ],
    [ "MONTAGNES", "TONKPI", "DANANE", "GBON-HOUYE", "7254", "6386", "13640", "113.6", "2518", "5.4" ],
    [ "MONTAGNES", "TONKPI", "DANANE", "KOUAN-HOULE", "15319", "12607", "27926", "121.5", "5269", "5.3" ],
    [ "MONTAGNES", "TONKPI", "DANANE", "MAHAPLEU", "23735", "20633", "44368", "115.0", "9803", "4.5" ],
    [ "MONTAGNES", "TONKPI", "DANANE", "SEILEU", "10282", "9436", "19718", "109.0", "3432", "5.7" ],
    [ "MONTAGNES", "TONKPI", "DANANE", "ZONNEU", "12744", "9772", "22516", "130.4", "5600", "4.0" ],
    [ "MONTAGNES", "TONKPI", "MAN", "BOGOUINE", "8244", "6928", "15172", "119.0", "3024", "5.0" ],
    [ "MONTAGNES", "TONKPI", "MAN", "FAGNAMPLEU", "1649", "1318", "2967", "125.1", "683", "4.3" ],
    [ "MONTAGNES", "TONKPI", "MAN", "GBANGBEGOUINE YATI", "5411", "4657", "10068", "116.2", "2665", "3.8" ],
    [ "MONTAGNES", "TONKPI", "MAN", "LOGOUALE", "15033", "13482", "28515", "111.5", "4922", "5.8" ],
    [ "MONTAGNES", "TONKPI", "MAN", "MAN", "98218", "90486", "188704", "108.5", "38060", "5.0" ],
    [ "MONTAGNES", "TONKPI", "MAN", "PODIAGOUINE", "11542", "10152", "21694", "113.7", "5180", "4.2" ],
    [ "MONTAGNES", "TONKPI", "MAN", "SANDOUGOU-SOBA", "4008", "3738", "7746", "107.2", "1998", "3.9" ],
    [ "MONTAGNES", "TONKPI", "MAN", "SANGOUINE", "20002", "16830", "36832", "118.8", "7484", "4.9" ],
    [ "MONTAGNES", "TONKPI", "MAN", "YAPLEU", "3966", "3769", "7735", "105.2", "1641", "4.7" ],
    [ "MONTAGNES", "TONKPI", "MAN", "ZAGOUE", "2830", "2580", "5410", "109.7", "1317", "4.1" ],
    [ "MONTAGNES", "TONKPI", "MAN", "ZIOGOUINE", "4953", "4370", "9323", "113.3", "1753", "5.3" ],
    [ "MONTAGNES", "TONKPI", "SIPILOU", "SIPILOU", "12069", "10348", "22417", "116.6", "4528", "5.0" ],
    [ "MONTAGNES", "TONKPI", "SIPILOU", "YORODOUGOU", "10679", "8772", "19451", "121.7", "3737", "5.2" ],
    [ "MONTAGNES", "TONKPI", "ZOUAN-HOUNIEN", "BANNEU", "6639", "6584", "13223", "100.8", "2679", "4.9" ],
    [ "MONTAGNES", "TONKPI", "ZOUAN-HOUNIEN", "BIN-HOUYE", "14688", "13811", "28499", "106.4", "6293", "4.5" ],
    [ "MONTAGNES", "TONKPI", "ZOUAN-HOUNIEN", "GOULALEU", "10457", "10022", "20479", "104.3", "3821", "5.4" ],
    [ "MONTAGNES", "TONKPI", "ZOUAN-HOUNIEN", "TEAPLEU", "19749", "19495", "39244", "101.3", "7261", "5.4" ],
    [ "MONTAGNES", "TONKPI", "ZOUAN-HOUNIEN", "YELLEU", "5814", "5389", "11203", "107.9", "2199", "5.1" ],
    [ "MONTAGNES", "TONKPI", "ZOUAN-HOUNIEN", "ZOUAN-HOUNIEN", "42583", "39851", "82434", "106.9", "15640", "5.3" ],
    [ "MONTAGNES", "CAVALLY", "BLOLEQUIN", "BLOLEQUIN", "40482", "31372", "71854", "129.0", "14798", "4.9" ],
    [ "MONTAGNES", "CAVALLY", "BLOLEQUIN", "DIBOKE", "3805", "2363", "6168", "161.0", "1453", "4.2" ],
    [ "MONTAGNES", "CAVALLY", "BLOLEQUIN", "DOKE", "8052", "5305", "13357", "151.8", "3228", "4.1" ],
    [ "MONTAGNES", "CAVALLY", "BLOLEQUIN", "TINHOU", "8796", "4497", "13293", "195.6", "3858", "3.4" ],
    [ "MONTAGNES", "CAVALLY", "BLOLEQUIN", "ZEAGLO", "11799", "6865", "18664", "171.9", "4946", "3.8" ],
    [ "MONTAGNES", "CAVALLY", "GUIGLO", "BEDY-GOAZON", "9252", "7620", "16872", "121.4", "3115", "5.4" ],
    [ "MONTAGNES", "CAVALLY", "GUIGLO", "GUIGLO", "61271", "52525", "113796", "116.7", "24160", "4.7" ],
    [ "MONTAGNES", "CAVALLY", "GUIGLO", "KAADE", "14123", "11130", "25253", "126.9", "4921", "5.1" ],
    [ "MONTAGNES", "CAVALLY", "GUIGLO", "NIZAHON", "11435", "9332", "20767", "122.5", "3863", "5.4" ],
    [ "MONTAGNES", "CAVALLY", "TAÏ", "TAÏ", "17185", "14743", "31928", "116.6", "5064", "6.3" ],
    [ "MONTAGNES", "CAVALLY", "TAÏ", "ZAGNE", "39030", "31990", "71020", "122.0", "13392", "5.3" ],
    [ "MONTAGNES", "CAVALLY", "TOULEPLEU", "BAKOUBLY", "2252", "1761", "4013", "127.9", "884", "4.5" ],
    [ "MONTAGNES", "CAVALLY", "TOULEPLEU", "MEO", "9054", "5701", "14755", "158.8", "3673", "4.0" ],
    [ "MONTAGNES", "CAVALLY", "TOULEPLEU", "NEZOBLY", "3256", "3423", "6679", "95.1", "1170", "5.7" ],
    [ "MONTAGNES", "CAVALLY", "TOULEPLEU", "PEHE", "5921", "4914", "10835", "120.5", "2187", "5.0" ],
    [ "MONTAGNES", "CAVALLY", "TOULEPLEU", "TIOBLY", "2479", "2486", "4965", "99.7", "1005", "4.9" ],
    [ "MONTAGNES", "CAVALLY", "TOULEPLEU", "TOULEPLEU", "8217", "7528", "15745", "109.2", "3309", "4.8" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "BANGOLO", "22135", "18085", "40220", "122.4", "7926", "5.1" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "BEOUE-ZIBIAO", "12310", "9617", "21927", "128.0", "5660", "3.9" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "BLENIMEOUIN", "12868", "11111", "23979", "115.8", "4360", "5.5" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "DIEOUZON", "18103", "12906", "31009", "140.3", "7379", "4.2" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "GOHOUO-ZAGNA", "10046", "7754", "17800", "129.6", "3957", "4.5" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "GUINGLO-TAHOUAKE", "19763", "16605", "36368", "119.0", "6453", "5.6" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "KAHIN-ZARABAON", "33232", "29223", "62455", "113.7", "9534", "6.6" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "ZEO", "5073", "4186", "9259", "121.2", "2138", "4.3" ],
    [ "MONTAGNES", "GUEMON", "BANGOLO", "ZOU", "40590", "34522", "75112", "117.6", "13576", "5.5" ],
    [ "MONTAGNES", "GUEMON", "DUEKOUE", "BAGOHOUO", "24643", "21486", "46129", "114.7", "7743", "6.0" ],
    [ "MONTAGNES", "GUEMON", "DUEKOUE", "DUEKOUE", "96690", "88654", "185344", "109.1", "33148", "5.6" ],
    [ "MONTAGNES", "GUEMON", "DUEKOUE", "GBAPLEU", "35148", "31401", "66549", "111.9", "9672", "6.9" ],
    [ "MONTAGNES", "GUEMON", "DUEKOUE", "GUEHIEBLY", "27640", "24293", "51933", "113.8", "9192", "5.6" ],
    [ "MONTAGNES", "GUEMON", "DUEKOUE", "GUEZON", "31270", "26923", "58193", "116.1", "10055", "5.8" ],
    [ "MONTAGNES", "GUEMON", "FACOBLY", "FACOBLY", "12184", "10223", "22407", "119.2", "4610", "4.9" ],
    [ "MONTAGNES", "GUEMON", "FACOBLY", "GUEZON", "4888", "3786", "8674", "129.1", "1686", "5.1" ],
    [ "MONTAGNES", "GUEMON", "FACOBLY", "KOUA", "4821", "3694", "8515", "130.5", "1718", "5.0" ],
    [ "MONTAGNES", "GUEMON", "FACOBLY", "SEMIEN", "15481", "13331", "28812", "116.1", "4619", "6.2" ],
    [ "MONTAGNES", "GUEMON", "FACOBLY", "TIENY-SEABLY", "4333", "3766", "8099", "115.1", "1793", "4.5" ],
    [ "MONTAGNES", "GUEMON", "KOUIBLY", "KOUIBLY", "23611", "19781", "43392", "119.4", "7295", "5.9" ],
    [ "MONTAGNES", "GUEMON", "KOUIBLY", "NIDROU", "5360", "4983", "10343", "107.6", "1876", "5.5" ],
    [ "MONTAGNES", "GUEMON", "KOUIBLY", "OUYABLY-GNONDROU", "27340", "22130", "49470", "123.5", "8580", "5.8" ],
    [ "MONTAGNES", "GUEMON", "KOUIBLY", "TOTRODROU", "7612", "5791", "13403", "131.4", "3104", "4.3" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "DALOA", "BEDIALA", "43842", "37351", "81193", "117.4", "11013", "7.4" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "DALOA", "DALOA", "170604", "148823", "319427", "114.6", "60728", "5.3" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "DALOA", "GADOUAN", "31762", "25708", "57470", "123.5", "10131", "5.7" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "DALOA", "GBOGUHE", "30467", "27636", "58103", "110.2", "8889", "6.5" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "DALOA", "GONATE", "18894", "18044", "36938", "104.7", "5378", "6.9" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "DALOA", "ZAÏBO", "25476", "13026", "38502", "195.6", "4279", "9.0" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ISSIA", "BOGUEDIA", "11396", "9547", "20943", "119.4", "3843", "5.4" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ISSIA", "IBOGUHE", "22550", "19218", "41768", "117.3", "7460", "5.6" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ISSIA", "ISSIA", "45627", "40100", "85727", "113.8", "14445", "5.9" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ISSIA", "NAHIO", "14233", "12801", "27034", "111.2", "3860", "7.0" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ISSIA", "NAMANE", "22171", "19006", "41177", "116.7", "6507", "6.3" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ISSIA", "SAÏOUA", "46030", "40393", "86423", "114.0", "12944", "6.7" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ISSIA", "TAPEGUIA", "12924", "11905", "24829", "108.6", "3846", "6.5" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "VAVOUA", "BAZRA-NATTIS", "20878", "18340", "39218", "113.8", "5080", "7.7" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "VAVOUA", "DANANON", "16765", "14619", "31384", "114.7", "4079", "7.7" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "VAVOUA", "DANIA", "42854", "34441", "77295", "124.4", "9817", "7.9" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "VAVOUA", "KETRO-BASSAM", "13087", "11847", "24934", "110.5", "3303", "7.5" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "VAVOUA", "SEITIFLA", "50144", "43286", "93430", "115.8", "12881", "7.3" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "VAVOUA", "VAVOUA", "71924", "62727", "134651", "114.7", "21307", "6.3" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ZOUKOUGBEU", "DOMANGBEU", "5444", "4086", "9530", "133.2", "1514", "6.3" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ZOUKOUGBEU", "GREGBEU", "10937", "7550", "18487", "144.9", "3254", "5.7" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ZOUKOUGBEU", "GUESSABO", "19649", "16653", "36302", "118.0", "6988", "5.2" ],
    [ "SASSANDRA-MARAHOUE", "HAUT-SASSANDRA", "ZOUKOUGBEU", "ZOUKOUGBEU", "25237", "20958", "46195", "120.4", "7865", "5.9" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "BOUAFLE", "BEGBESSOU", "10806", "8981", "19787", "120.3", "4549", "4.3" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "BOUAFLE", "BONON", "61146", "51483", "112629", "118.8", "18339", "6.1" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "BOUAFLE", "BOUAFLE", "88786", "78477", "167263", "113.1", "30177", "5.5" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "BOUAFLE", "N'DOUFFOUKANKRO", "14964", "14133", "29097", "105.9", "5040", "5.8" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "BOUAFLE", "PAKOUABO", "10872", "8105", "18977", "134.1", "3390", "5.6" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "BOUAFLE", "TIBEITA", "8521", "7143", "15664", "119.3", "2320", "6.8" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "BOUAFLE", "ZAGUIETA", "25320", "20946", "46266", "120.9", "7978", "5.8" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "SINFRA", "BAZRE", "18361", "16420", "34781", "111.8", "4883", "7.1" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "SINFRA", "KONONFLA", "26975", "23801", "50776", "113.3", "7483", "6.8" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "SINFRA", "KOUETINFLA", "11626", "10555", "22181", "110.1", "3433", "6.5" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "SINFRA", "SINFRA", "67496", "62781", "130277", "107.5", "18299", "7.1" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "ZUENOULA", "GOHITAFLA", "18722", "16718", "35440", "112.0", "5566", "6.4" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "ZUENOULA", "IRIEFLA", "2967", "3262", "6229", "91.0", "838", "7.4" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "ZUENOULA", "KANZRA", "14343", "13639", "27982", "105.2", "3642", "7.7" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "ZUENOULA", "MAMINIGUI", "10705", "9749", "20454", "109.8", "3216", "6.4" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "ZUENOULA", "VOUEBOUFLA", "9082", "9463", "18545", "96.0", "2633", "7.0" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "ZUENOULA", "ZANZRA", "12968", "12079", "25047", "107.4", "4435", "5.6" ],
    [ "SASSANDRA-MARAHOUE", "MARAHOUE", "ZUENOULA", "ZUENOULA", "43487", "37462", "80949", "116.1", "12800", "6.3" ],
    [ "SAVANES", "PORO", "DIKODOUGOU", "BORON", "12320", "11919", "24239", "103.4", "3418", "7.1" ],
    [ "SAVANES", "PORO", "DIKODOUGOU", "DIKODOUGOU", "19223", "20344", "39567", "94.5", "6856", "5.8" ],
    [ "SAVANES", "PORO", "DIKODOUGOU", "GUIEMBE", "7923", "8849", "16772", "89.5", "2787", "6.0" ],
    [ "SAVANES", "PORO", "KORHOGO", "DASSOUNGBOHO", "2938", "3425", "6363", "85.8", "1172", "5.4" ],
    [ "SAVANES", "PORO", "KORHOGO", "KANOROBA", "9153", "9402", "18555", "97.4", "2923", "6.3" ],
    [ "SAVANES", "PORO", "KORHOGO", "KARAKORO", "8939", "10304", "19243", "86.8", "3447", "5.6" ],
    [ "SAVANES", "PORO", "KORHOGO", "KIEMOU", "11234", "11188", "22422", "100.4", "3634", "6.2" ],
    [ "SAVANES", "PORO", "KORHOGO", "KOMBOLOKOURA", "2984", "2755", "5739", "108.3", "1002", "5.7" ],
    [ "SAVANES", "PORO", "KORHOGO", "KOMBORODOUGOU", "6152", "6795", "12947", "90.5", "2252", "5.7" ],
    [ "SAVANES", "PORO", "KORHOGO", "KONI", "5848", "6100", "11948", "95.9", "1806", "6.6" ],
    [ "SAVANES", "PORO", "KORHOGO", "KORHOGO", "147580", "138491", "286071", "106.6", "51729", "5.5" ],
    [ "SAVANES", "PORO", "KORHOGO", "LATAHA", "14195", "16550", "30745", "85.8", "4434", "6.9" ],
    [ "SAVANES", "PORO", "KORHOGO", "NAFOUN", "4042", "3948", "7990", "102.4", "1319", "6.1" ],
    [ "SAVANES", "PORO", "KORHOGO", "NAPIELEODOUGOU", "10726", "12571", "23297", "85.3", "4774", "4.9" ],
    [ "SAVANES", "PORO", "KORHOGO", "N'GANON", "2650", "2736", "5386", "96.9", "1051", "5.1" ],
    [ "SAVANES", "PORO", "KORHOGO", "NIOFOIN", "13272", "13199", "26471", "100.6", "5800", "4.6" ],
    [ "SAVANES", "PORO", "KORHOGO", "SIRASSO", "14021", "14139", "28160", "99.2", "4885", "5.8" ],
    [ "SAVANES", "PORO", "KORHOGO", "SOHOUO", "7752", "8277", "16029", "93.7", "2850", "5.6" ],
    [ "SAVANES", "PORO", "KORHOGO", "TIORONIARADOUGOU", "7013", "8472", "15485", "82.8", "3026", "5.1" ],
    [ "SAVANES", "PORO", "M'BENGUE", "BOUGOU", "7155", "7005", "14160", "102.1", "2171", "6.5" ],
    [ "SAVANES", "PORO", "M'BENGUE", "KATIALI", "4422", "4439", "8861", "99.6", "1123", "7.9" ],
    [ "SAVANES", "PORO", "M'BENGUE", "KATOGO", "7515", "7347", "14862", "102.3", "1834", "8.1" ],
    [ "SAVANES", "PORO", "M'BENGUE", "M'BENGUE", "25239", "24689", "49928", "102.2", "7011", "7.1" ],
    [ "SAVANES", "PORO", "SINEMATIALI", "BAHOUAKAHA", "2787", "2917", "5704", "95.5", "1299", "4.4" ],
    [ "SAVANES", "PORO", "SINEMATIALI", "KAGBOLODOUGOU", "4426", "4930", "9356", "89.8", "1720", "5.4" ],
    [ "SAVANES", "PORO", "SINEMATIALI", "SEDIEGO", "2701", "3056", "5757", "88.4", "1041", "5.5" ],
    [ "SAVANES", "PORO", "SINEMATIALI", "SINEMATIALI", "18298", "19497", "37795", "93.9", "6010", "6.3" ],
    [ "SAVANES", "TCHOLOGO", "FERKESSEDOUGOU", "FERKESSEDOUGOU", "60993", "59157", "120150", "103.1", "20741", "5.8" ],
    [ "SAVANES", "TCHOLOGO", "FERKESSEDOUGOU", "KOUMBALA", "5557", "4531", "10088", "122.6", "1724", "5.9" ],
    [ "SAVANES", "TCHOLOGO", "FERKESSEDOUGOU", "TOGONIERE", "6695", "6330", "13025", "105.8", "1642", "7.9" ],
    [ "SAVANES", "TCHOLOGO", "KONG", "BILIMONO", "9922", "9951", "19873", "99.7", "2844", "7.0" ],
    [ "SAVANES", "TCHOLOGO", "KONG", "KONG", "14645", "14545", "29190", "100.7", "4074", "7.2" ],
    [ "SAVANES", "TCHOLOGO", "KONG", "NAFANA", "9015", "8688", "17703", "103.8", "2353", "7.5" ],
    [ "SAVANES", "TCHOLOGO", "KONG", "SIKOLO", "10687", "10476", "21163", "102.0", "3118", "6.8" ],
    [ "SAVANES", "TCHOLOGO", "OUANGOLODOUGOU", "DIAWALA", "36347", "34707", "71054", "104.7", "10210", "7.0" ],
    [ "SAVANES", "TCHOLOGO", "OUANGOLODOUGOU", "KAOUARA", "14289", "13682", "27971", "104.4", "3805", "7.4" ],
    [ "SAVANES", "TCHOLOGO", "OUANGOLODOUGOU", "NIELLE", "14801", "14221", "29022", "104.1", "3652", "7.9" ],
    [ "SAVANES", "TCHOLOGO", "OUANGOLODOUGOU", "OUANGOLODOUGOU", "38211", "36308", "74519", "105.2", "12293", "6.1" ],
    [ "SAVANES", "TCHOLOGO", "OUANGOLODOUGOU", "TOUMOUKORO", "16893", "17307", "34200", "97.6", "3984", "8.6" ],
    [ "SAVANES", "BAGOUE", "BOUNDIALI", "BAYA", "4127", "4464", "8591", "92.5", "950", "9.0" ],
    [ "SAVANES", "BAGOUE", "BOUNDIALI", "BOUNDIALI", "31412", "28174", "59586", "111.5", "10007", "6.0" ],
    [ "SAVANES", "BAGOUE", "BOUNDIALI", "GANAONI", "9045", "9797", "18842", "92.3", "2645", "7.1" ],
    [ "SAVANES", "BAGOUE", "BOUNDIALI", "KASSERE", "12644", "11339", "23983", "111.5", "3642", "6.6" ],
    [ "SAVANES", "BAGOUE", "BOUNDIALI", "SIEMPURGO", "8451", "8231", "16682", "102.7", "1853", "9.0" ],
    [ "SAVANES", "BAGOUE", "KOUTO", "BLESSEGUE", "7614", "7573", "15187", "100.5", "1445", "10.5" ],
    [ "SAVANES", "BAGOUE", "KOUTO", "GBON", "12718", "12709", "25427", "100.1", "2879", "8.8" ],
    [ "SAVANES", "BAGOUE", "KOUTO", "KOLIA", "12695", "12153", "24848", "104.5", "2873", "8.6" ],
    [ "SAVANES", "BAGOUE", "KOUTO", "KOUTO", "18217", "18843", "37060", "96.7", "4010", "9.2" ],
    [ "SAVANES", "BAGOUE", "KOUTO", "SIANHALA", "14129", "12947", "27076", "109.1", "2664", "10.2" ],
    [ "SAVANES", "BAGOUE", "TENGRELA", "DEBETE", "2765", "2986", "5751", "92.6", "516", "11.1" ],
    [ "SAVANES", "BAGOUE", "TENGRELA", "KANAKONO", "13051", "9850", "22901", "132.5", "2129", "10.8" ],
    [ "SAVANES", "BAGOUE", "TENGRELA", "PAPARA", "4573", "4293", "8866", "106.5", "820", "10.8" ],
    [ "SAVANES", "BAGOUE", "TENGRELA", "TENGRELA", "42536", "38351", "80887", "110.9", "9928", "8.1" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BEOUMI", "ANDO-KEKRENOU", "6431", "6095", "12526", "105.5", "2352", "5.3" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BEOUMI", "BEOUMI", "37282", "36193", "73475", "103.0", "12198", "6.0" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BEOUMI", "BODOKRO", "14145", "14357", "28502", "98.5", "4390", "6.5" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BEOUMI", "KONDROBO", "5305", "4892", "10197", "108.4", "1518", "6.7" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BEOUMI", "LOLOBO (DE BEOUMI)", "4085", "4795", "8880", "85.2", "1238", "7.2" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BEOUMI", "MARABADIASSA", "3327", "3313", "6640", "100.4", "1247", "5.3" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BEOUMI", "N'GUESSANKRO", "6593", "7393", "13986", "89.2", "2680", "5.2" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOTRO", "BOTRO", "9988", "10349", "20337", "96.5", "3662", "5.6" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOTRO", "DIABO", "12349", "13923", "26272", "88.7", "4215", "6.2" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOTRO", "KROFOINSOU", "5895", "6053", "11948", "97.4", "1865", "6.4" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOTRO", "LANGUIBONOU", "10313", "12554", "22867", "82.1", "3284", "7.0" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOUAKE", "BOUAKE", "308342", "299796", "608138", "102.9", "106188", "5.7" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOUAKE", "BOUNDA", "4935", "5153", "10088", "95.8", "1673", "6.0" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOUAKE", "BROBO", "7954", "8493", "16447", "93.7", "2772", "5.9" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOUAKE", "DJEBONOUA", "14033", "16788", "30821", "83.6", "4034", "7.6" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "BOUAKE", "MAMINI", "7345", "7855", "15200", "93.5", "2005", "7.6" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "SAKASSOU", "AYAOU-SRAN", "9927", "7786", "17713", "127.5", "2890", "6.1" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "SAKASSOU", "DIBRI-ASSIRIKRO", "7516", "8637", "16153", "87.0", "2562", "6.3" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "SAKASSOU", "SAKASSOU", "28456", "27774", "56230", "102.5", "9087", "6.2" ],
    [ "LA VALLEE DU BANDAMA", "GBEKE", "SAKASSOU", "TOUMODI-SAKASSOU", "2391", "2038", "4429", "117.3", "856", "5.2" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "BASSAWA", "8228", "8095", "16323", "101.6", "3135", "5.2" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "BONIEREDOUGOU", "11688", "11577", "23265", "101.0", "4493", "5.2" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "DABAKALA", "27898", "27871", "55769", "100.1", "9523", "5.9" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "FOUMBOLO", "9544", "9264", "18808", "103.0", "2712", "6.9" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "NIEMENE", "7909", "7789", "15698", "101.5", "2940", "5.3" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "SATAMA-SOKORO", "9208", "9001", "18209", "102.3", "3066", "5.9" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "SATAMA-SOKOURA", "5726", "5877", "11603", "97.4", "2185", "5.3" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "SOKALA-SOBARA", "8106", "8283", "16389", "97.9", "2926", "5.6" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "TIENDENE-BAMBARASSO", "4565", "4204", "8769", "108.6", "1220", "7.2" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "DABAKALA", "YAOSSEDOUGOU", "2220", "2201", "4421", "100.9", "757", "5.8" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "KATIOLA", "FRONAN", "20709", "18208", "38917", "113.7", "5611", "6.9" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "KATIOLA", "KATIOLA", "28947", "27734", "56681", "104.4", "9674", "5.9" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "KATIOLA", "TIMBE", "5561", "5746", "11307", "96.8", "2169", "5.2" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "NIAKARAMADOUGOU", "ARIKOKAHA", "3765", "3651", "7416", "103.1", "1201", "6.2" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "NIAKARAMADOUGOU", "BADIKAHA", "10908", "10533", "21441", "103.6", "4507", "4.8" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "NIAKARAMADOUGOU", "NIAKARAMADOUGOU", "25883", "23941", "49824", "108.1", "7856", "6.3" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "NIAKARAMADOUGOU", "NIEDEKAHA", "4964", "4684", "9648", "106.0", "1566", "6.2" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "NIAKARAMADOUGOU", "TAFIRE", "11933", "11432", "23365", "104.4", "3703", "6.3" ],
    [ "LA VALLEE DU BANDAMA", "HAMBOL", "NIAKARAMADOUGOU", "TORTIYA", "11392", "10732", "22124", "106.1", "3923", "5.6" ],
    [ "WOROBA", "WORODOUGOU", "KANI", "DJIBROSSO", "6118", "5741", "11859", "106.6", "1303", "9.1" ],
    [ "WOROBA", "WORODOUGOU", "KANI", "FADIADOUGOU", "7763", "7303", "15066", "106.3", "1867", "8.1" ],
    [ "WOROBA", "WORODOUGOU", "KANI", "KANI", "16553", "14658", "31211", "112.9", "4944", "6.3" ],
    [ "WOROBA", "WORODOUGOU", "KANI", "MORONDO", "8353", "7400", "15753", "112.9", "2509", "6.3" ],
    [ "WOROBA", "WORODOUGOU", "SEGUELA", "BOBI-DIARABANA", "14027", "11222", "25249", "125.0", "6119", "4.1" ],
    [ "WOROBA", "WORODOUGOU", "SEGUELA", "DUALLA", "4134", "3996", "8130", "103.5", "1407", "5.8" ],
    [ "WOROBA", "WORODOUGOU", "SEGUELA", "KAMALO", "5271", "4512", "9783", "116.8", "1527", "6.4" ],
    [ "WOROBA", "WORODOUGOU", "SEGUELA", "MASSALA", "11806", "11215", "23021", "105.3", "2524", "9.1" ],
    [ "WOROBA", "WORODOUGOU", "SEGUELA", "SEGUELA", "32333", "31441", "63774", "102.8", "9592", "6.6" ],
    [ "WOROBA", "WORODOUGOU", "SEGUELA", "SIFIE", "12251", "11416", "23667", "107.3", "3150", "7.5" ],
    [ "WOROBA", "WORODOUGOU", "SEGUELA", "WOROFLA", "25673", "19148", "44821", "134.1", "7036", "6.4" ],
    [ "WOROBA", "BERE", "DIANRA", "DIANRA", "27437", "26263", "53700", "104.5", "9542", "5.6" ],
    [ "WOROBA", "BERE", "DIANRA", "DIANRA-VILLAGE", "21658", "21221", "42879", "102.1", "6899", "6.2" ],
    [ "WOROBA", "BERE", "KOUNAHIRI", "KONGASSO", "18272", "17370", "35642", "105.2", "5125", "7.0" ],
    [ "WOROBA", "BERE", "KOUNAHIRI", "KOUNAHIRI", "21615", "20422", "42037", "105.8", "6003", "7.0" ],
    [ "WOROBA", "BERE", "MANKONO", "BOUANDOUGOU", "18934", "16737", "35671", "113.1", "5340", "6.7" ],
    [ "WOROBA", "BERE", "MANKONO", "MANKONO", "33084", "31246", "64330", "105.9", "7382", "8.7" ],
    [ "WOROBA", "BERE", "MANKONO", "MARANDALAH", "19295", "16779", "36074", "115.0", "7086", "5.1" ],
    [ "WOROBA", "BERE", "MANKONO", "SARHALA", "19450", "18757", "38207", "103.7", "5056", "7.6" ],
    [ "WOROBA", "BERE", "MANKONO", "TIENINGBOUE", "22097", "19121", "41218", "115.6", "7348", "5.6" ],
    [ "WOROBA", "BAFING", "KORO", "BOOKO", "9388", "8968", "18356", "104.7", "2446", "7.5" ],
    [ "WOROBA", "BAFING", "KORO", "BOROTOU", "2657", "2696", "5353", "98.6", "688", "7.8" ],
    [ "WOROBA", "BAFING", "KORO", "KORO", "12967", "10629", "23596", "122.0", "5823", "4.1" ],
    [ "WOROBA", "BAFING", "KORO", "MAHANDOUGOU", "2910", "2687", "5597", "108.3", "620", "9.0" ],
    [ "WOROBA", "BAFING", "KORO", "NIOKOSSO", "3153", "3155", "6308", "99.9", "798", "7.9" ],
    [ "WOROBA", "BAFING", "OUANINOU", "GBELO", "2432", "2509", "4941", "96.9", "671", "7.4" ],
    [ "WOROBA", "BAFING", "OUANINOU", "GOUEKAN", "1581", "1665", "3246", "95.0", "427", "7.6" ],
    [ "WOROBA", "BAFING", "OUANINOU", "KOONAN", "3431", "3122", "6553", "109.9", "939", "7.0" ],
    [ "WOROBA", "BAFING", "OUANINOU", "OUANINOU", "10375", "10415", "20790", "99.6", "4112", "5.1" ],
    [ "WOROBA", "BAFING", "OUANINOU", "SABOUDOUGOU", "1956", "1962", "3918", "99.7", "519", "7.5" ],
    [ "WOROBA", "BAFING", "OUANINOU", "SANTA", "4494", "4863", "9357", "92.4", "1073", "8.7" ],
    [ "WOROBA", "BAFING", "TOUBA", "DIOMAN", "2596", "2221", "4817", "116.9", "658", "7.3" ],
    [ "WOROBA", "BAFING", "TOUBA", "FOUNGBESSO", "9337", "8696", "18033", "107.4", "3652", "4.9" ],
    [ "WOROBA", "BAFING", "TOUBA", "GUINTEGUELA", "11334", "7660", "18994", "148.0", "3961", "4.8" ],
    [ "WOROBA", "BAFING", "TOUBA", "TOUBA", "17393", "15795", "33188", "110.1", "6488", "5.1" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "APPIMANDOU", "3314", "3486", "6800", "95.1", "1698", "4.0" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "PINDA-BOROKO", "2394", "2618", "5012", "91.4", "860", "5.8" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "BONDO", "9821", "10111", "19932", "97.1", "4456", "4.5" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "BONDOUKOU", "61157", "56296", "117453", "108.6", "32425", "3.6" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "GOUMERE", "7828", "8078", "15906", "96.9", "3534", "4.5" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "LAOUD-IBA", "29282", "27600", "56882", "106.1", "9521", "6.0" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "SAPLI-SEPINGO", "3823", "4381", "8204", "87.3", "2223", "3.7" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "SOROBANGO", "13947", "13797", "27744", "101.1", "7148", "3.9" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "TABAGNE", "8175", "8795", "16970", "93.0", "3595", "4.7" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "TAGADI", "18205", "16235", "34440", "112.1", "5566", "6.2" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "TAOUDI", "8458", "10110", "18568", "83.7", "3757", "4.9" ],
    [ "ZANZAN", "GONTOUGO", "BONDOUKOU", "YEZIMALA", "2764", "3032", "5796", "91.2", "1116", "5.2" ],
    [ "ZANZAN", "GONTOUGO", "KOUN-FAO", "BOAHIA", "4602", "4580", "9182", "100.5", "2645", "3.5" ],
    [ "ZANZAN", "GONTOUGO", "KOUN-FAO", "KOKOMIAN", "5213", "5225", "10438", "99.8", "2027", "5.1" ],
    [ "ZANZAN", "GONTOUGO", "KOUN-FAO", "KOUASSI-DATTEKRO", "12637", "13196", "25833", "95.8", "6578", "3.9" ],
    [ "ZANZAN", "GONTOUGO", "KOUN-FAO", "KOUN-FAO", "16352", "15630", "31982", "104.6", "5995", "5.3" ],
    [ "ZANZAN", "GONTOUGO", "KOUN-FAO", "TANKESSE", "13256", "12122", "25378", "109.4", "6058", "4.2" ],
    [ "ZANZAN", "GONTOUGO", "KOUN-FAO", "TIENKOIKRO", "7088", "6329", "13417", "112.0", "3188", "4.2" ],
    [ "ZANZAN", "GONTOUGO", "SANDEGUE", "BANDAKAGNI-TOMORA", "4759", "4521", "9280", "105.3", "2060", "4.5" ],
    [ "ZANZAN", "GONTOUGO", "SANDEGUE", "DIMANDOUGOU", "3736", "3423", "7159", "109.1", "1561", "4.6" ],
    [ "ZANZAN", "GONTOUGO", "SANDEGUE", "SANDEGUE", "11680", "11388", "23068", "102.6", "4711", "4.9" ],
    [ "ZANZAN", "GONTOUGO", "SANDEGUE", "YOROBODI", "8458", "8250", "16708", "102.5", "3782", "4.4" ],
    [ "ZANZAN", "GONTOUGO", "TRANSUA", "ASSUEFRY", "15462", "14944", "30406", "103.5", "6452", "4.7" ],
    [ "ZANZAN", "GONTOUGO", "TRANSUA", "KOUASSI-NIAGUINI", "8638", "8234", "16872", "104.9", "3119", "5.4" ],
    [ "ZANZAN", "GONTOUGO", "TRANSUA", "TRANSUA", "18265", "17935", "36200", "101.8", "8076", "4.5" ],
    [ "ZANZAN", "GONTOUGO", "TANDA", "AMANVI", "2469", "2843", "5312", "86.8", "1793", "3.0" ],
    [ "ZANZAN", "GONTOUGO", "TANDA", "DIAMBA", "4512", "5168", "9680", "87.3", "2162", "4.5" ],
    [ "ZANZAN", "GONTOUGO", "TANDA", "TANDA", "25987", "25971", "51958", "100.1", "13942", "3.7" ],
    [ "ZANZAN", "GONTOUGO", "TANDA", "TCHEDIO", "4909", "5696", "10605", "86.2", "3034", "3.5" ],
    [ "ZANZAN", "BOUNKANI", "BOUNA", "BOUKO", "7392", "7927", "15319", "93.3", "1691", "9.1" ],
    [ "ZANZAN", "BOUNKANI", "BOUNA", "BOUNA", "29829", "28787", "58616", "103.6", "9460", "6.2" ],
    [ "ZANZAN", "BOUNKANI", "BOUNA", "ONDEFIDOUO", "14130", "13958", "28088", "101.2", "3519", "8.0" ],
    [ "ZANZAN", "BOUNKANI", "BOUNA", "YOUNDOUO", "6357", "6245", "12602", "101.8", "1426", "8.8" ],
    [ "ZANZAN", "BOUNKANI", "DOROPO", "DANOA", "3514", "3388", "6902", "103.7", "908", "7.6" ],
    [ "ZANZAN", "BOUNKANI", "DOROPO", "DOROPO", "18687", "19054", "37741", "98.1", "6036", "6.3" ],
    [ "ZANZAN", "BOUNKANI", "DOROPO", "KALAMON", "2895", "3070", "5965", "94.3", "2088", "2.9" ],
    [ "ZANZAN", "BOUNKANI", "DOROPO", "NIAMOUE", "7833", "8223", "16056", "95.3", "1755", "9.1" ],
    [ "ZANZAN", "BOUNKANI", "NASSIAN", "BOGOFA", "2992", "2494", "5486", "120.0", "906", "6.1" ],
    [ "ZANZAN", "BOUNKANI", "NASSIAN", "KAKPIN", "3487", "3553", "7040", "98.1", "1502", "4.7" ],
    [ "ZANZAN", "BOUNKANI", "NASSIAN", "KOTOUBA", "2930", "2775", "5705", "105.6", "1236", "4.6" ],
    [ "ZANZAN", "BOUNKANI", "NASSIAN", "NASSIAN", "10056", "9915", "19971", "101.4", "4489", "4.4" ],
    [ "ZANZAN", "BOUNKANI", "NASSIAN", "SOMINASSE", "3272", "3054", "6326", "107.1", "1058", "6.0" ],
    [ "ZANZAN", "BOUNKANI", "TEHINI", "GOGO", "5932", "5603", "11535", "105.9", "1726", "6.7" ],
    [ "ZANZAN", "BOUNKANI", "TEHINI", "TEHINI", "7502", "7620", "15122", "98.5", "2211", "6.8" ],
    [ "ZANZAN", "BOUNKANI", "TEHINI", "TOUGBO", "7323", "7370", "14693", "99.4", "2077", "7.1" ]
];