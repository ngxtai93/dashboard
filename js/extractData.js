// In this example we will use dataframe-js to analyse a simple data set.
// The aim of this snippet is  (not really to explore data but) to play with the library in order to do simple things.
// You will find the code, explanations and results as comments.

// Here we import the lib.
// You can also: import { DataFrame } from 'dataframe-js';


// Here we load the titanic data set from the well known Rdatasets (http://vincentarelbundock.github.io/Rdatasets/datasets.html).
// We get the result via a Promise, as a new DataFrame. We rename it 'df'.
//Ch_PS_12-13
// class renderDatasets {
//   constructor(datasetName, parentDiv) {
//     this.datasetName=datasetName;
//     this.parentDiv=parentDiv;
//     dataname=datasetName;
//     divnme=parentDiv;
//     console.log(dataname, divnme);
//   }

//}
var dataset1Data, dataset2Data, dataset3Data, dataset4Data, dataset5Data;
//var chartVar;
var DataFrame;
var getData, getPieData,getDoughnutData;
class Datasets {
    constructor() {
        DataFrame = dfjs.DataFrame;
        console.log("Instance to Dataframe created");
    }
}
class Dataset1 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset1(datasetName, parentDiv);
    }

}
class Dataset2 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset2(datasetName, parentDiv);
    }

}
class Dataset3 extends Datasets {
    constructor(datasetName, parentDiv) {
        super();
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
        var test = new renderDatasets(datasetName, parentDiv);
        test.rederDataset3(datasetName, parentDiv);
    }

}
class Dataset4 extends Datasets {
  constructor(datasetName, parentDiv) {
    super();
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
    var test = new renderDatasets(datasetName, parentDiv);
    test.rederDataset4(datasetName, parentDiv);
  }

}
class Dataset5 extends Datasets {
  constructor(datasetName, parentDiv) {
    super();
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
    var test = new renderDatasets(datasetName, parentDiv);
    test.rederDataset5(datasetName, parentDiv);
  }

}
class renderDatasets {
    constructor(datasetName, parentDiv) {
        this.datasetName = datasetName;
        this.parentDiv = parentDiv;
    }
    rederDataset2(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //chart()
                // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
                // chartVar = groupedDF.toCollection();
                //console.log(groupedDF.aggregate(group => group.count()));

                //console.log(cleanDF.listColumns());
                const selectColumns = df.select('School ID', 'School Name', 'Street Address', 'City', 'ZIP', 'Website', 'School Track',
                    'Overall Rating', 'Growth Overall Level', 'College Enrollment 2011 - Percent',
                    'College Enrollment 2012 - Percent', 'Overall Foundation', 'Supportive Environment', 'Safety',
                    'Student Attendance 2011 - Percent', 'Student Attendance 2012 - Percent', 'Teacher Attendance 2011 - Percent',
                    'Teacher Attendance 2012 - Percent', 'Healthy School Certified', 'Blue Ribbon Award');
                dataset2Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                    '<th>School ID</th><th>School Name</th><th>Street Address</th><th>City</th><th>ZIP</th><th>Website</th>' +
                    '<th>School Track</th><th>Overall Rating</th><th>Growth Overall Level</th>' +
                    '<th>College Enrollment 2011 - Percent</th><th>College Enrollment 2012 - Percent</th>' +
                    '<th>Overall Foundation</th><th>Supportive Environment</th><th>Safety</th><th>Student Attendance 2011 - Percent</th>' +
                    '<th>Student Attendance 2012 - Percent</th><th>Teacher Attendance 2011 - Percent</th><th>Teacher Attendance 2012 - Percent</th>' +
                    '<th>Healthy School Certified</th><th>Blue Ribbon Award</th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset2Data.length; i++) {
                    var content = '<tr>' +
                        '<td>' + dataset2Data[i]["School ID"] + '</td>' +
                        '<td>' + dataset2Data[i]["School Name"] + '</td>' +
                        '<td>' + dataset2Data[i]["Street Address"] + '</td>' +
                        '<td>' + dataset2Data[i]["City"] + '</td>' +
                        '<td>' + dataset2Data[i]["ZIP"] + '</td>' +
                        '<td>' + dataset2Data[i]["Website"] + '</td>' +
                        '<td>' + dataset2Data[i]["School Track"] + '</td>' +
                        '<td>' + dataset2Data[i]["Overall Rating"] + '</td>' +
                        '<td>' + dataset2Data[i]["Growth Overall Level"] + '</td>' +
                        '<td>' + dataset2Data[i]["College Enrollment 2011 - Percent"] + '</td>' +
                        '<td>' + dataset2Data[i]["College Enrollment 2012 - Percent"] + '</td>' +
                        '<td>' + dataset2Data[i]["Overall Foundation"] + '</td>' +
                        '<td>' + dataset2Data[i]["Supportive Environment"] + '</td>' +
                        '<td>' + dataset2Data[i]["Safety"] + '</td>' +
                        '<td>' + dataset2Data[i]["Student Attendance 2011 - Percent"] + '</td>' +
                        '<td>' + dataset2Data[i]["Student Attendance 2012 - Percent"] + '</td>' +
                        '<td>' + dataset2Data[i]["Teacher Attendance 2011 - Percent"] + '</td>' +
                        '<td>' + dataset2Data[i]["Teacher Attendance 2012 - Percent"] + '</td>' +
                        '<td>' + dataset2Data[i]["Healthy School Certified"] + '</td>' +
                        '<td>' + dataset2Data[i]["Blue Ribbon Award"] + '</td>' +
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }


    rederDataset1(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //console.log(cleanDF.listColumns());

                const selectColumns = df.select('School ID', 'School Name', 'EMH_School', 'Street Address', 'City', 'State',
                    'ZIP', 'Phone Number', 'Collaborative Name', 'Adequate Yearly Progress Made',
                    'School Track', 'CPS Performance Policy Status', 'Overall Rating', 'Healthy Schools Certified?',
                    'Safety', 'Safety Score', 'Family Involvement Icon', 'Growth Overall Level ', 'Environment Score',
                    'Instruction Icon ', 'Instruction Score', 'Parent Engagement Icon ', 'Parent Engagement Score',
                    'Parent Environment Icon', 'Parent Environment Score', 'Average Student Attendance',
                    'Rate of Misconducts (per 100 students) ', 'Average Teacher Attendance',
                    'Individualized Education Program Compliance Rate ', 'College Enrollment',
                    'General Services Route ', 'Latitude', 'Longitude', 'Community Area Number',
                    'Community Area Name', 'Ward', 'Police District', 'Location');
                var dataset1Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                    '<th>School ID</th><th>School Name</th><th>EMH_School</th><th>Street Address</th>' +
                    '<th>City</th><th>State</th><th>ZIP</th><th>Phone Number</th><th>Collaborative Name</th>' +
                    '<th>Adequate Yearly Progress Made</th><th>School Track</th><th>CPS Performance Policy Status</th>' +
                    '<th>Overall Rating</th><th>Healthy Schools Certified?</th><th>Safety</th><th>Safety Score</th>' +
                    '<th>Family Involvement Icon</th><th>Growth Overall Level</th><th>Environment Score </th>' +
                    '<th>Instruction Icon</th><th>Instruction Score</th><th>Parent Engagement Icon</th>' +
                    '<th>Parent Engagement Score</th><th>Parent Environment Icon</th><th>Parent Environment Score</th>' +
                    '<th>Average Student Attendance</th><th>Rate of Misconducts (per 100 students)</th>' +
                    '<th>Average Teacher Attendance</th><th>Individualized Education Program Compliance Rate</th>' +
                    '<th>College Enrollment</th><th>General Services Route</th><th>Latitude</th>' +
                    '<th>Longitude</th><th>Community Area Number</th><th>Community Area Name</th>' +
                    '<th>Ward</th><th>Police District</th><th>Location</th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset1Data.length; i++) {
                    var content = '<tr>' +
                        '<td>' + dataset1Data[i]["School ID"] + '</td>' +
                        '<td>' + dataset1Data[i]["School Name"] + '</td>' +
                        '<td>' + dataset1Data[i]["EMH_School"] + '</td>' +
                        '<td>' + dataset1Data[i]["Street Address"] + '</td>' +
                        '<td>' + dataset1Data[i]["City"] + '</td>' +
                        '<td>' + dataset1Data[i]["State"] + '</td>' +
                        '<td>' + dataset1Data[i]["ZIP"] + '</td>' +
                        '<td>' + dataset1Data[i]["Phone Number"] + '</td>' +
                        '<td>' + dataset1Data[i]["Collaborative Name"] + '</td>' +
                        '<td>' + dataset1Data[i]["Adequate Yearly Progress Made"] + '</td>' +
                        '<td>' + dataset1Data[i]["School Track"] + '</td>' +
                        '<td>' + dataset1Data[i]["CPS Performance Policy Status"] + '</td>' +
                        '<td>' + dataset1Data[i]["Overall Rating"] + '</td>' +
                        '<td>' + dataset1Data[i]["Healthy Schools Certified?"] + '</td>' +
                        '<td>' + dataset1Data[i]["Safety"] + '</td>' +
                        '<td>' + dataset1Data[i]["Safety Score"] + '</td>' +
                        '<td>' + dataset1Data[i]["Family Involvement Icon"] + '</td>' +
                        '<td>' + dataset1Data[i]["Growth Overall Level"] + '</td>' +
                        '<td>' + dataset1Data[i]["Environment Score"] + '</td>' +
                        '<td>' + dataset1Data[i]["Instruction Icon"] + '</td>' +
                        '<td>' + dataset1Data[i]["Instruction Score"] + '</td>' +
                        '<td>' + dataset1Data[i]["Parent Engagement Icon"] + '</td>' +
                        '<td>' + dataset1Data[i]["Parent Engagement Score"] + '</td>' +
                        '<td>' + dataset1Data[i]["Parent Environment Icon"] + '</td>' +
                        '<td>' + dataset1Data[i]["Parent Environment Score"] + '</td>' +
                        '<td>' + dataset1Data[i]["Average Student Attendance"] + '</td>' +
                        '<td>' + dataset1Data[i]["Rate of Misconducts (per 100 students)"] + '</td>' +
                        '<td>' + dataset1Data[i]["Average Teacher Attendance"] + '</td>' +
                        '<td>' + dataset1Data[i]["Individualized Education Program Compliance Rate"] + '</td>' +
                        '<td>' + dataset1Data[i]["College Enrollment"] + '</td>' +
                        '<td>' + dataset1Data[i]["General Services Route"] + '</td>' +
                        '<td>' + dataset1Data[i]["Latitude"] + '</td>' +
                        '<td>' + dataset1Data[i]["Longitude"] + '</td>' +
                        '<td>' + dataset1Data[i]["Community Area Number"] + '</td>' +
                        '<td>' + dataset1Data[i]["Community Area Name"] + '</td>' +
                        '<td>' + dataset1Data[i]["Ward"] + '</td>' +
                        '<td>' + dataset1Data[i]["Police District"] + '</td>' +
                        '<td>' + dataset1Data[i]["Location"] + '</td>' +
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }

    rederDataset3(datasetName, parentDiv) {
        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                //chart()
                // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
                // chartVar = groupedDF.toCollection();
                //console.log(groupedDF.aggregate(group => group.count()));

                //console.log(cleanDF.listColumns());
                const selectColumns = df.select('School ID', 'School Name', 'Street Address', 'City', 'State', 'ZIP', 'Phone Number',
                    'Website', 'Blue Ribbon Award', 'CPS Performance Policy Level',
                    'CPS Performance Policy Status', 'Probation Length', 'Overall Rating',
                    'Student Response Rate', 'Teacher Response Rate', 'Involved Family',
                    'Supportive Environment', 'Ambitious Instruction', 'Effective Leaders',
                    'Collaborative Teachers', 'Safety', 'School Community',
                    'Parent-Teacher Partnership', 'Quality of Facilities',
                    'Healthy Schools Certification', 'Creative Schools Certification',
                    'College Enrollment Rate Percentage 2013',
                    'College Enrollment Rate Percentage 2012',
                    'College Persistence Rate Percentage 2013',
                    'College Persistence Rate Percentage 2012',
                    'Student Attendance Percentage 2013', 'Student Attendance Percentage 2012',
                    'One-Year DropOut Rate Percentage 2013', 'One-Year DropOut Rate Percentage 2012',
                    'X Coordinate', 'Y Coordinate', 'Longitude', 'Latitude', 'Location');

                dataset3Data = selectColumns.toCollection();
                //console.log(test);
                var thead = '<tr>' +
                    '<th>School ID</th><th>School Name</th><th>Street Address</th><th>City</th><th>State</th>' +
                    '<th>ZIP</th><th>Phone Number</th><th>Website</th><th>Blue Ribbon Award</th>' +
                    '<th>CPS Performance Policy Level</th><th>CPS Performance Policy Status</th>' +
                    '<th>Probation Length</th><th>Overall Rating</th><th>Student Response Rate</th>' +
                    '<th>Teacher Response Rate</th><th>Involved Family</th><th>Supportive Environment</th>' +
                    '<th>Ambitious Instruction</th><th>Effective Leaders</th><th>Collaborative Teachers</th>' +
                    '<th>Safety</th><th>School Community</th><th>Parent-Teacher Partnership</th>' +
                    '<th>Quality of Facilities</th><th>Healthy Schools Certification</th>' +
                    '<th>Creative Schools Certification</th><th>College Enrollment Rate Percentage 2013</th>' +
                    '<th>College Enrollment Rate Percentage 2012</th>' +
                    '<th>College Persistence Rate Percentage 2013</th>' +
                    '<th>College Persistence Rate Percentage 2012</th><th>Student Attendance Percentage 2013</th>' +
                    '<th>Student Attendance Percentage 2012</th><th>One-Year DropOut Rate Percentage 2013</th>' +
                    '<th>One-Year DropOut Rate Percentage 2012</th><th>X Coordinate</th><th>Y Coordinate</th>' +
                    '<th>Longitude</th><th>Latitude</th><th>Location</th>';
                '</tr>';
                $("#" + parentDiv + "Table thead").html(thead);
                var tbody = $("#" + parentDiv + "Table tbody");

                for (var i = 0; i < dataset3Data.length; i++) {
                    var content = '<tr>' +
                        '<td>' + dataset3Data[i]["School ID"] + '</td>' +
                        '<td>' + dataset3Data[i]["School Name"] + '</td>' +
                        '<td>' + dataset3Data[i]["Street Address"] + '</td>' +
                        '<td>' + dataset3Data[i]["City"] + '</td>' +
                        '<td>' + dataset3Data[i]["State"] + '</td>' +
                        '<td>' + dataset3Data[i]["ZIP"] + '</td>' +
                        '<td>' + dataset3Data[i]["Phone Number"] + '</td>' +
                        '<td>' + dataset3Data[i]["Website"] + '</td>' +
                        '<td>' + dataset3Data[i]["Blue Ribbon Award"] + '</td>' +
                        '<td>' + dataset3Data[i]["CPS Performance Policy Level"] + '</td>' +
                        '<td>' + dataset3Data[i]["CPS Performance Policy Status"] + '</td>' +
                        '<td>' + dataset3Data[i]["Probation Length"] + '</td>' +
                        '<td>' + dataset3Data[i]["Overall Rating"] + '</td>' +
                        '<td>' + dataset3Data[i]["Student Response Rate"] + '</td>' +
                        '<td>' + dataset3Data[i]["Teacher Response Rate"] + '</td>' +
                        '<td>' + dataset3Data[i]["Involved Family"] + '</td>' +
                        '<td>' + dataset3Data[i]["Supportive Environment"] + '</td>' +
                        '<td>' + dataset3Data[i]["Ambitious Instruction"] + '</td>' +
                        '<td>' + dataset3Data[i]["Effective Leaders"] + '</td>' +
                        '<td>' + dataset3Data[i]["Collaborative Teachers"] + '</td>' +
                        '<td>' + dataset3Data[i]["Safety"] + '</td>' +
                        '<td>' + dataset3Data[i]["School Community"] + '</td>' +
                        '<td>' + dataset3Data[i]["Parent-Teacher Partnership"] + '</td>' +
                        '<td>' + dataset3Data[i]["Quality of Facilities"] + '</td>' +
                        '<td>' + dataset3Data[i]["Healthy Schools Certification"] + '</td>' +
                        '<td>' + dataset3Data[i]["Creative Schools Certification"] + '</td>' +
                        '<td>' + dataset3Data[i]["College Enrollment Rate Percentage 2013"] + '</td>' +
                        '<td>' + dataset3Data[i]["College Enrollment Rate Percentage 2012"] + '</td>' +
                        '<td>' + dataset3Data[i]["College Persistence Rate Percentage 2013"] + '</td>' +
                        '<td>' + dataset3Data[i]["College Persistence Rate Percentage 2012"] + '</td>' +
                        '<td>' + dataset3Data[i]["Student Attendance Percentage 2013"] + '</td>' +
                        '<td>' + dataset3Data[i]["Student Attendance Percentage 2012"] + '</td>' +
                        '<td>' + dataset3Data[i]["One-Year DropOut Rate Percentage 2013"] + '</td>' +
                        '<td>' + dataset3Data[i]["One-Year DropOut Rate Percentage 2012"] + '</td>' +
                        '<td>' + dataset3Data[i]["X Coordinate"] + '</td>' +
                        '<td>' + dataset3Data[i]["Y Coordinate"] + '</td>' +
                        '<td>' + dataset3Data[i]["Longitude"] + '</td>' +
                        '<td>' + dataset3Data[i]["Latitude"] + '</td>' +
                        '<td>' + dataset3Data[i]["Location"] + '</td>' +
                        '</tr>';
                    $(tbody).append(content);
                }
            }
        ).catch(err => {
            console.log(err);
        });
    }
    rederDataset4(datasetName, parentDiv) {
      DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
          df => {
            //chart()
            // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
            // chartVar = groupedDF.toCollection();
                            //console.log(groupedDF.aggregate(group => group.count()));

               //console.log(cleanDF.listColumns());
               const selectColumns = df.select('DBN','DISTRICT','SCHOOL','PRINCIPAL','PROGRESS REPORT TYPE','SCHOOL LEVEL',
                               'PEER INDEX','2011-2012 OVERALL GRADE','2011-2012 OVERALL SCORE',
                               '2011-12 OVERALL PERCENTILE','2011-2012 PROGRESS CATEGORY SCORE',
                               '2011-2012 PROGRESS GRADE','2011-2012 PERFORMANCE CATEGORY SCORE',
                               '2011-2012 PERFORMANCE GRADE','2011-2012 ENVIRONMENT CATEGORY SCORE',
                               '2011-2012 ENVIRONMENT GRADE','2011-2012 ADDITIONAL CREDIT',
                               '2010-11 PROGRESS REPORT GRADE','2009-10 PROGRESS REPORT GRADE');

                  dataset4Data = selectColumns.toCollection();
                   //console.log(test);
                   var thead = '<tr>'+
                          '<th>DBN</th><th>DISTRICT</th><th>SCHOOL</th><th>PRINCIPAL</th>'+
                          '<th>PROGRESS REPORT TYPE</th><th>SCHOOL LEVEL</th><th>PEER INDEX</th>'+
                          '<th>2011-2012 OVERALL GRADE</th><th>2011-2012 OVERALL SCORE</th>'+
                          '<th>2011-12 OVERALL PERCENTILE</th><th>2011-2012 PROGRESS CATEGORY SCORE</th>'+
                          '<th>2011-2012 PROGRESS GRADE</th><th>2011-2012 PERFORMANCE CATEGORY SCORE</th>'+
                          '<th>2011-2012 PERFORMANCE GRADE</th><th>2011-2012 ENVIRONMENT CATEGORY SCORE</th>'+
                          '<th>2011-2012 ENVIRONMENT GRADE</th>'+
                          '<th>2011-2012 ADDITIONAL CREDIT</th><th>2010-11 PROGRESS REPORT GRADE</th>'+
                          '<th>2009-10 PROGRESS REPORT GRADE</th>';
                                 '</tr>';
                    $("#"+parentDiv+"Table thead").html(thead);
                    var tbody = $("#"+parentDiv+"Table tbody");

              for ( var i = 0; i < dataset4Data.length; i++) {
                var content = '<tr>'+
                                '<td>'+dataset4Data[i]["DBN"]+'</td>'+
                                '<td>'+dataset4Data[i]["DISTRICT"]+'</td>'+
                                '<td>'+dataset4Data[i]["SCHOOL"]+'</td>'+
                                '<td>'+dataset4Data[i]["PRINCIPAL"]+'</td>'+
                                '<td>'+dataset4Data[i]["PROGRESS REPORT TYPE"]+'</td>'+
                                '<td>'+dataset4Data[i]["SCHOOL LEVEL"]+'</td>'+
                                '<td>'+dataset4Data[i]["PEER INDEX"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 OVERALL GRADE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 OVERALL SCORE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-12 OVERALL PERCENTILE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 PROGRESS CATEGORY SCORE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 PROGRESS GRADE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 PERFORMANCE CATEGORY SCORE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 PERFORMANCE GRADE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 ENVIRONMENT CATEGORY SCORE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 ENVIRONMENT GRADE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2011-2012 ADDITIONAL CREDIT"]+'</td>'+
                                '<td>'+dataset4Data[i]["2010-11 PROGRESS REPORT GRADE"]+'</td>'+
                                '<td>'+dataset4Data[i]["2009-10 PROGRESS REPORT GRADE"]+'</td>'+
                              '</tr>';
                $(tbody).append(content);
              }
          }
      ).catch(err => {
          console.log(err);
      });
    }

     rederDataset5(datasetName, parentDiv) {
    DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
        df => {
          //chart()
          // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
          // chartVar = groupedDF.toCollection();
                          //console.log(groupedDF.aggregate(group => group.count()));

             //console.log(cleanDF.listColumns());
             const selectColumns = df.select('Network','School','School ID','Unit','Grade','Composite Mean Fall 2008-2009',
                             'Composite Mean Fall 2009-2010','Composite Mean Fall 2010-2011',
                             'Composite Mean Fall 2011-2012','Composite Mean Fall 2012-2013',
                             'Composite Mean Spring 2012-2013','Composite Mean Spring 2013-2014',
                             'Composite No. Tested Fall 2008-2009','Composite No. Tested Fall 2009-2010',
                             'Composite No. Tested Fall 2010-2011','Composite No. Tested Fall 2011-2012',
                             'Composite No. Tested Fall 2012-2013','Composite No. Tested Spring 2012-2013',
                             'Composite No. Tested Spring 2013-2014','English Mean Fall 2008-2009',
                             'English Mean Fall 2009-2010','English Mean Fall 2010-2011',
                             'English Mean Fall 2011-2012','English Mean Fall 2012-2013',
                             'English Mean Spring 2012-2013','English Mean Spring 2013-2014',
                             'English No. Tested Fall 2008-2009','English No. Tested Fall 2009-2010',
                             'English No. Tested Fall 2010-2011','English No. Tested Fall 2011-2012',
                             'English No. Tested Fall 2012-2013','English No. Tested Spring 2012-2013',
                             'English No. Tested Spring 2013-2014','Maths Mean Fall 2008-2009',
                             'Maths Mean Fall 2009-2010','Maths Mean Fall 2010-2011',
                             'Maths Mean Fall 2011-2012','Maths Mean Fall 2012-2013',
                             'Maths Mean Spring 2012-2013','Maths Mean Spring 2013-2014',
                             'Maths No. Tested Fall 2008-2009','Maths No. Tested Fall 2009-2010',
                             'Maths No. Tested Fall 2010-2011','Maths No. Tested Fall 2011-2012',
                             'Maths No. Tested Fall 2012-2013','Maths No. Tested Spring 2012-2013',
                             'Maths No. Tested Spring 2013-2014','Reading Mean Fall 2008-2009',
                             'Reading Mean Fall 2009-2010','Reading Mean Fall 2010-2011',
                             'Reading Mean Fall 2011-2012','Reading Mean Fall 2012-2013',
                             'Reading Mean Spring 2012-2013','Reading Mean Spring 2013-2014',
                             'Reading No. Tested Fall 2008-2009','Reading No. Tested Fall 2009-2010',
                             'Reading No. Tested Fall 2010-2011','Reading No. Tested Fall 2011-2012',
                             'Reading No. Tested Fall 2012-2013','Reading No. Tested Spring 2012-2013',
                             'Reading No. Tested Spring 2013-2014','Science Mean Fall 2008-2009',
                             'Science Mean Fall 2009-2010','Science Mean Fall 2010-2011',
                             'Science Mean Fall 2011-2012','Science Mean Fall 2012-2013',
                             'Science Mean Spring 2012-2013','Science Mean Spring 2013-2014',
                             'Science No. Tested Fall 2008-2009','Science No. Tested Fall 2009-2010',
                             'Science No. Tested Fall 2010-2011','Science No. Tested Fall 2011-2012',
                             'Science No. Tested Fall 2012-2013','Science No. Tested Spring 2012-2013',
                             'Science No. Tested Spring 2013-2014');
                dataset5Data = selectColumns.toCollection();
                 //console.log(test);
                 var thead = '<tr>'+
                        '<th>Network</th><th>School</th><th>School ID</th><th>Unit</th><th>Grade</th>'+
                        '<th>Composite Mean Fall 2008-2009</th><th>Composite Mean Fall 2009-2010</th>'+
                        '<th>Composite Mean Fall 2010-2011</th><th>Composite Mean Fall 2011-2012</th>'+
                        '<th>Composite Mean Fall 2012-2013</th><th>Composite Mean Spring 2012-2013</th>'+
                        '<th>Composite Mean Spring 2013-2014</th><th>Composite No. Tested Fall 2008-2009</th>'+
                        '<th>Composite No. Tested Fall 2009-2010</th><th>Composite No. Tested Fall 2010-2011</th>'+
                        '<th>Composite No. Tested Fall 2011-2012</th><th>Composite No. Tested Fall 2012-2013</th>'+
                        '<th>Composite No. Tested Spring 2012-2013</th><th>Composite No. Tested Spring 2013-2014</th>'+
                        '<th>English Mean Fall 2008-2009</th><th>English Mean Fall 2009-2010</th>'+
                        '<th>English Mean Fall 2010-2011</th><th>English Mean Fall 2011-2012</th>'+
                        '<th>English Mean Fall 2012-2013</th><th>English Mean Spring 2012-2013</th>'+
                        '<th>English Mean Spring 2013-2014</th><th>English No. Tested Fall 2008-2009</th>'+
                        '<th>English No. Tested Fall 2009-2010</th><th>English No. Tested Fall 2010-2011</th>'+
                        '<th>English No. Tested Fall 2011-2012</th><th>English No. Tested Fall 2012-2013</th>'+
                        '<th>English No. Tested Spring 2012-2013</th><th>English No. Tested Spring 2013-2014</th>'+
                        '<th>Maths Mean Fall 2008-2009</th><th>Maths Mean Fall 2009-2010</th>'+
                        '<th>Maths Mean Fall 2010-2011</th><th>Maths Mean Fall 2011-2012</th>'+
                        '<th>Maths Mean Fall 2012-2013</th><th>Maths Mean Spring 2012-2013</th>'+
                        '<th>Maths Mean Spring 2013-2014</th><th>Maths No. Tested Fall 2008-2009</th>'+
                        '<th>Maths No. Tested Fall 2009-2010</th><th>Maths No. Tested Fall 2010-2011</th>'+
                        '<th>Maths No. Tested Fall 2011-2012</th><th>Maths No. Tested Fall 2012-2013</th>'+
                        '<th>Maths No. Tested Spring 2012-2013</th><th>Maths No. Tested Spring 2013-2014</th>'+
                        '<th>Reading Mean Fall 2008-2009</th><th>Reading Mean Fall 2009-2010</th>'+
                        '<th>Reading Mean Fall 2010-2011</th><th>Reading Mean Fall 2011-2012</th>'+
                        '<th>Reading Mean Fall 2012-2013</th><th>Reading Mean Spring 2012-2013</th>'+
                        '<th>Reading Mean Spring 2013-2014</th><th>Reading No. Tested Fall 2008-2009</th>'+
                        '<th>Reading No. Tested Fall 2009-2010</th><th>Reading No. Tested Fall 2010-2011</th>'+
                        '<th>Reading No. Tested Fall 2011-2012</th><th>Reading No. Tested Fall 2012-2013</th>'+
                        '<th>Reading No. Tested Spring 2012-2013</th><th>Reading No. Tested Spring 2013-2014</th>'+
                        '<th>Science Mean Fall 2008-2009</th><th>Science Mean Fall 2009-2010</th>'+
                        '<th>Science Mean Fall 2010-2011</th><th>Science Mean Fall 2011-2012</th>'+
                        '<th>Science Mean Fall 2012-2013</th><th>Science Mean Spring 2012-2013</th>'+
                        '<th>Science Mean Spring 2013-2014</th><th>Science No. Tested Fall 2008-2009</th>'+
                        '<th>Science No. Tested Fall 2009-2010</th><th>Science No. Tested Fall 2010-2011</th>'+
                        '<th>Science No. Tested Fall 2011-2012</th><th>Science No. Tested Fall 2012-2013</th>'+
                        '<th>Science No. Tested Spring 2012-2013</th><th>Science No. Tested Spring 2013-2014</th>';
                               '</tr>';
                  $("#"+parentDiv+"Table thead").html(thead);
                  var tbody = $("#"+parentDiv+"Table tbody");

            for ( var i = 0; i < dataset5Data.length; i++) {
              var content = '<tr>'+
                              '<td>'+dataset5Data[i]["Network"]+'</td>'+
                              '<td>'+dataset5Data[i]["School"]+'</td>'+
                              '<td>'+dataset5Data[i]["School ID"]+'</td>'+
                              '<td>'+dataset5Data[i]["Unit"]+'</td>'+
                              '<td>'+dataset5Data[i]["Grade"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Spring 2013-2014"]+'</td>'+
                            '</tr>';
              $(tbody).append(content);
            }
        }
    ).catch(err => {
        console.log(err);
    });
  }
}
class PlotChart {
    constructor(datasetName) {
        this.datasetName = datasetName;
    }
    sendData(datasetName) {
        console.log(datasetName + "In function");

        DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
            df => {
                var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
                getData = groupedDF.toCollection();
                console.log(getData);
                return false;
            }
        ).catch(err => {
            console.log(err);
        });
      }
    pieChartData (datasetName) {
      var safetyData;
      console.log(this.datasetName + "In PieChart function");

      DataFrame.fromCSV('datasets/' + this.datasetName + '.csv').then(
          df => {
              var VeryStrong = df.filter(row => row.get('Safety') === 'Very Strong').count();
              var Strong = df.filter(row => row.get('Safety') === 'Strong').count();
              var Average = df.filter(row => row.get('Safety') === 'Average').count();
              var Weak = df.filter(row => row.get('Safety') === 'Weak').count();
              var veryWeak = df.filter(row => row.get('Safety') === 'Very Weak').count();
              safetyData = {
                'Very Strong' : VeryStrong,
                'Strong' : Strong,
                'Average' : Average,
                'Weak' : Weak,
                'Very Weak' : veryWeak
              }
              getPieData = safetyData;
              return false;
              //getData = groupedDF.toCollection();
              //console.log(getData);

          }
      ).catch(err => {
          console.log(err);
      });
    }

    doughnutChartData (datasetName) {
      var CollaborativeData;
      console.log(this.datasetName + "In DoughnutChart function");

      DataFrame.fromCSV('datasets/' + this.datasetName + '.csv').then(
          df => {
              var NORTH_NORTHWEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'NORTH-NORTHWEST SIDE COLLABORATIVE').count();
              var SOUTH_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'SOUTH SIDE COLLABORATIVE').count();
              var SOUTHWEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'SOUTHWEST SIDE COLLABORATIVE').count();
              var FAR_SOUTH_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'FAR SOUTH SIDE COLLABORATIVE').count();
              var WEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'WEST SIDE COLLABORATIVE').count();
              CollaborativeData = {
                'NORTH-NORTHWEST SIDE COLLABORATIVE' : NORTH_NORTHWEST_SIDE_COLLABORATIVE,
                'SOUTH SIDE COLLABORATIVE' : SOUTH_SIDE_COLLABORATIVE,
                'SOUTHWEST SIDE COLLABORATIVE' : SOUTHWEST_SIDE_COLLABORATIVE,
                'FAR SOUTH SIDE COLLABORATIVE' : FAR_SOUTH_SIDE_COLLABORATIVE,
                'WEST SIDE COLLABORATIVE' : WEST_SIDE_COLLABORATIVE
              }
              getDoughnutData = CollaborativeData;
              return false;
              //getData = groupedDF.toCollection();
              //console.log(getData);

          }
      ).catch(err => {
          console.log(err);
      });
    }
}
class BarChart extends PlotChart {
    constructor(datasetName) {
        super(datasetName);
        this.datasetName = datasetName;

    }
    plotBarchart() {
        super.sendData(this.datasetName);
        //console.log(getData);
        // var getData;
        // DataFrame.fromCSV('datasets/'+this.datasetName+'.csv').then(
        //     df => {
        //       var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
        //       getData = groupedDF.toCollection();
        //     }
        //   ).catch(err => {
        //       console.log(err);
        //   });
        setTimeout(function() {
            var labelArray = [];
            var dataArray = [];
            var backgroundColorArray = [];
            var borderColorArray = [];
            for (var i in this.getData) {
                labelArray.push(getData[i].ZIP);
                dataArray.push(getData[i].Count);
                var color1 = Math.ceil(Math.random() * 255);
                var color2 = Math.ceil(Math.random() * 255);
                var color3 = Math.ceil(Math.random() * 255);
                //console.log(color1, color2, color3);
                backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," + 0.6 + ")");
                borderColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," + 1 + ")");
            }
            var ctxBar = document.getElementById('dataset1BarChart');
            var barChart = new Chart(ctxBar, {
                type: 'bar',
                data: {
                    labels: labelArray,
                    datasets: [{
                        label: 'ZIP',
                        data: dataArray,
                        backgroundColor: backgroundColorArray,
                        borderColor: borderColorArray,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }, 2000);

    }
}

class LineChart extends PlotChart {
    constructor(datasetName) {
        super(datasetName);
        this.datasetName = datasetName;

    }
    plotLinechart() {
        //super.sendData(this.datasetName); //Need to Change Later

        setTimeout( function () {
        var labelArray = [];
        var dataArray = [];
        var backgroundColorArray = [];
        var borderColorArray = [];
        for (var i in this.getData) {
            labelArray.push(getData[i].ZIP);
            dataArray.push(getData[i].Count);
        }
        var ctxLine = document.getElementById("dataset1LineChart");
        var lineChart = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: labelArray,
                datasets: [{
                    label: "ZIP",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataArray,
                    spanGaps: false,
                }]
            }
        });
        }, 2000);

    }
}

class PieChart extends PlotChart {
    constructor(datasetName) {
        super(datasetName);
        this.datasetName = datasetName;

    }
    plotPiechart() {
        super.pieChartData(this.datasetName);
        console.log("PieData");
        console.log(getData);
        // var getData;
        // DataFrame.fromCSV('datasets/'+this.datasetName+'.csv').then(
        //     df => {
        //       var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
        //       getData = groupedDF.toCollection();
        //     }
        //   ).catch(err => {
        //       console.log(err);
        //   });
        setTimeout(function() {
            var labelArray = [];
            var dataArray = [];
            var backgroundColorArray = [];
            var hoverBackgroundColor = [];
            for (var i in getPieData) {
                labelArray.push(i);
                dataArray.push(getPieData[i]);
                var color1 = Math.ceil(Math.random() * 255);
                var color2 = Math.ceil(Math.random() * 255);
                var color3 = Math.ceil(Math.random() * 255);
                //console.log(color1, color2, color3);
                backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + ")");
                hoverBackgroundColor.push("rgba(" + color1 + "," + color2 + "," + color3 +")");
            }
            /*Pie Chart Start*/
            var ctxPie = document.getElementById("dataset1PieChart");
            var myPieChart = new Chart(ctxPie,{
                type: 'pie',
                data: {
                  labels: labelArray,
                  datasets: [
                      {
                          data: dataArray,
                          backgroundColor: backgroundColorArray,
                          hoverBackgroundColor: hoverBackgroundColor
                      }]
                    }
            });
            // /*Pie Chart END*/
        }, 2000);

    }


    
}
class DoughnutChart extends PlotChart {
    constructor(datasetName) {
        super(datasetName);
        this.datasetName = datasetName;

    }
    plotDoughnutchart() {
        super.doughnutChartData(this.datasetName);
        console.log("DoughnutData");
        console.log(getData);
        // var getData;
        // DataFrame.fromCSV('datasets/'+this.datasetName+'.csv').then(
        //     df => {
        //       var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
        //       getData = groupedDF.toCollection();
        //     }
        //   ).catch(err => {
        //       console.log(err);
        //   });
        setTimeout(function() {
            var labelArray = [];
            var dataArray = [];
            var backgroundColorArray = [];
            var hoverBackgroundColor = [];
            for (var i in getDoughnutData) {
                labelArray.push(i);
                dataArray.push(getDoughnutData[i]);
                var color1 = Math.ceil(Math.random() * 255);
                var color2 = Math.ceil(Math.random() * 255);
                var color3 = Math.ceil(Math.random() * 255);
                //console.log(color1, color2, color3);
                backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + ")");
                hoverBackgroundColor.push("rgba(" + color1 + "," + color2 + "," + color3 +")");
            }
            /*Pie Chart Start*/
            var ctxDoughnut = document.getElementById("dataset1DoughnutChart");
            var myDoughnutChart = new Chart(ctxDoughnut,{
                type: 'doughnut',
                data: {
                  labels: labelArray,
                  datasets: [
                      {
                          data: dataArray,
                          backgroundColor: backgroundColorArray,
                          hoverBackgroundColor: hoverBackgroundColor
                      }]
                    }
            });
            // /*Pie Chart END*/
        }, 2000);

    }
}