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
var DataFrame;
class Datasets {
  constructor() {
    DataFrame = dfjs.DataFrame;
    console.log("Instance to Dataframe created");
  }
}
class Dataset1 extends Datasets {
  constructor(datasetName, parentDiv) {
    super();
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
    var test = new renderDatasets(datasetName, parentDiv);
    test.rederDataset1(datasetName, parentDiv);
  }

}
class Dataset2 extends Datasets {
  constructor(datasetName, parentDiv) {
    super();
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
    var test = new renderDatasets(datasetName, parentDiv);
    test.rederDataset2(datasetName, parentDiv);
  }

}
class Dataset3 extends Datasets {
  constructor(datasetName, parentDiv) {
    super();
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
    var test = new renderDatasets(datasetName, parentDiv);
    test.rederDataset(datasetName, parentDiv);
  }

}
class renderDatasets {
  constructor(datasetName, parentDiv) {
    this.datasetName=datasetName;
    this.parentDiv=parentDiv;
  }
  rederDataset2(datasetName, parentDiv) {
    DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
        df => {
             //console.log(cleanDF.listColumns());
             const selectColumns = df.select('School ID', 'School Name', 'Street Address', 'City', 'ZIP','Website', 'School Track',
              'Overall Rating', 'Growth Overall Level', 'College Enrollment 2011 - Percent',
               'College Enrollment 2012 - Percent', 'Overall Foundation', 'Supportive Environment', 'Safety',
                'Student Attendance 2011 - Percent', 'Student Attendance 2012 - Percent', 'Teacher Attendance 2011 - Percent',
                 'Teacher Attendance 2012 - Percent', 'Healthy School Certified', 'Blue Ribbon Award');
                dataset2Data = selectColumns.toCollection();
                 //console.log(test);
                 var thead = '<tr>'+
                                 '<th>School ID</th><th>School Name</th><th>Street Address</th><th>City</th><th>ZIP</th><th>Website</th>'+
                                 '<th>School Track</th><th>Overall Rating</th><th>Growth Overall Level</th>'+
                                 '<th>College Enrollment 2011 - Percent</th><th>College Enrollment 2012 - Percent</th>'+
                                 '<th>Overall Foundation</th><th>Supportive Environment</th><th>Safety</th><th>Student Attendance 2011 - Percent</th>'+
                                 '<th>Student Attendance 2012 - Percent</th><th>Teacher Attendance 2011 - Percent</th><th>Teacher Attendance 2012 - Percent</th>'+
                                 '<th>Healthy School Certified</th><th>Blue Ribbon Award</th>';
                               '</tr>';
                  $("#"+parentDiv+"Table thead").html(thead);
                  var tbody = $("#"+parentDiv+"Table tbody");

            for ( var i = 0; i < dataset2Data.length; i++) {
              var content = '<tr>'+
                              '<td>'+dataset2Data[i]["School ID"]+'</td>'+
                              '<td>'+dataset2Data[i]["School Name"]+'</td>'+
                              '<td>'+dataset2Data[i]["Street Address"]+'</td>'+
                              '<td>'+dataset2Data[i]["City"]+'</td>'+
                              '<td>'+dataset2Data[i]["ZIP"]+'</td>'+
                              '<td>'+dataset2Data[i]["Website"]+'</td>'+
                              '<td>'+dataset2Data[i]["School Track"]+'</td>'+
                              '<td>'+dataset2Data[i]["Overall Rating"]+'</td>'+
                              '<td>'+dataset2Data[i]["Growth Overall Level"]+'</td>'+
                              '<td>'+dataset2Data[i]["College Enrollment 2011 - Percent"]+'</td>'+
                              '<td>'+dataset2Data[i]["College Enrollment 2012 - Percent"]+'</td>'+
                              '<td>'+dataset2Data[i]["Overall Foundation"]+'</td>'+
                              '<td>'+dataset2Data[i]["Supportive Environment"]+'</td>'+
                              '<td>'+dataset2Data[i]["Safety"]+'</td>'+
                              '<td>'+dataset2Data[i]["Student Attendance 2011 - Percent"]+'</td>'+
                              '<td>'+dataset2Data[i]["Student Attendance 2012 - Percent"]+'</td>'+
                              '<td>'+dataset2Data[i]["Teacher Attendance 2011 - Percent"]+'</td>'+
                              '<td>'+dataset2Data[i]["Teacher Attendance 2012 - Percent"]+'</td>'+
                              '<td>'+dataset2Data[i]["Healthy School Certified"]+'</td>'+
                              '<td>'+dataset2Data[i]["Blue Ribbon Award"]+'</td>'+
                            '</tr>';
              $(tbody).append(content);
            }
        }
    ).catch(err => {
        console.log(err);
    });
  }


rederDataset1(datasetName, parentDiv) {
    DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
        df => {
             //console.log(cleanDF.listColumns());

                const selectColumns = df.select('School ID','School Name','EMH_School','Street Address','City','State',
                'ZIP','Phone Number','Collaborative Name','Adequate Yearly Progress Made',
                'School Track','CPS Performance Policy Status','Overall Rating','Healthy Schools Certified?',
                'Safety','Safety Score','Family Involvement Icon','Growth Overall Level','Environment Score',
                'Instruction Icon','Instruction Score','Parent Engagement Icon','Parent Engagement Score',
                'Parent Environment Icon','Parent Environment Score','Average Student Attendance',
                'Rate of Misconducts (per 100 students)','Average Teacher Attendance',
                'Individualized Education Program Compliance Rate','College Enrollment',
                'General Services Route','Latitude','Longitude','Community Area Number',
                'Community Area Name','Ward','Police District', 'Location');
                var dataset1Data = selectColumns.toCollection();
                 //console.log(test);
                 var thead = '<tr>'+
                                '<th>School ID</th><th>School Name</th><th>EMH_School</th><th>Street Address</th>'+
                                '<th>City</th><th>State</th><th>ZIP</th><th>Phone Number</th><th>Collaborative Name</th>'+
                                '<th>Adequate Yearly Progress Made</th><th>School Track</th><th>CPS Performance Policy Status</th>'+
                                '<th>Overall Rating</th><th>Healthy Schools Certified?</th><th>Safety</th><th>Safety Score</th>'+
                                '<th>Family Involvement Icon</th><th>Growth Overall Level</th><th>Environment Score </th>'+
                                '<th>Instruction Icon</th><th>Instruction Score</th><th>Parent Engagement Icon</th>'+
                                '<th>Parent Engagement Score</th><th>Parent Environment Icon</th><th>Parent Environment Score</th>'+
                                '<th>Average Student Attendance</th><th>Rate of Misconducts (per 100 students)</th>'+
                                '<th>Average Teacher Attendance</th><th>Individualized Education Program Compliance Rate</th>'+
                                '<th>College Enrollment</th><th>General Services Route</th><th>Latitude</th>'+
                                '<th>Longitude</th><th>Community Area Number</th><th>Community Area Name</th>'+
                                '<th>Ward</th><th>Police District</th><th>Location</th>';
                               '</tr>';
              $("#"+parentDiv+"Table thead").html(thead);
              var tbody = $("#"+parentDiv+"Table tbody");

              for ( var i = 0; i < dataset1Data.length; i++) {
              var content = '<tr>'+
                             '<td>'+dataset1Data[i]["School ID"]+'</td>'+
                              '<td>'+dataset1Data[i]["School Name"]+'</td>'+
                              '<td>'+dataset1Data[i]["EMH_School"]+'</td>'+
                              '<td>'+dataset1Data[i]["Street Address"]+'</td>'+
                              '<td>'+dataset1Data[i]["City"]+'</td>'+
                              '<td>'+dataset1Data[i]["State"]+'</td>'+
                              '<td>'+dataset1Data[i]["ZIP"]+'</td>'+
                              '<td>'+dataset1Data[i]["Phone Number"]+'</td>'+
                              '<td>'+dataset1Data[i]["Collaborative Name"]+'</td>'+
                              '<td>'+dataset1Data[i]["Adequate Yearly Progress Made"]+'</td>'+
                              '<td>'+dataset1Data[i]["School Track"]+'</td>'+
                              '<td>'+dataset1Data[i]["CPS Performance Policy Status"]+'</td>'+
                              '<td>'+dataset1Data[i]["Overall Rating"]+'</td>'+
                              '<td>'+dataset1Data[i]["Healthy Schools Certified?"]+'</td>'+
                              '<td>'+dataset1Data[i]["Safety"]+'</td>'+
                              '<td>'+dataset1Data[i]["Safety Score"]+'</td>'+
                              '<td>'+dataset1Data[i]["Family Involvement Icon"]+'</td>'+
                              '<td>'+dataset1Data[i]["Growth Overall Level"]+'</td>'+
                              '<td>'+dataset1Data[i]["Environment Score"]+'</td>'+
                              '<td>'+dataset1Data[i]["Instruction Icon"]+'</td>'+
                              '<td>'+dataset1Data[i]["Instruction Score"]+'</td>'+
                              '<td>'+dataset1Data[i]["Parent Engagement Icon"]+'</td>'+
                              '<td>'+dataset1Data[i]["Parent Engagement Score"]+'</td>'+
                              '<td>'+dataset1Data[i]["Parent Environment Icon"]+'</td>'+
                              '<td>'+dataset1Data[i]["Parent Environment Score"]+'</td>'+
                              '<td>'+dataset1Data[i]["Average Student Attendance"]+'</td>'+
                              '<td>'+dataset1Data[i]["Rate of Misconducts (per 100 students)"]+'</td>'+
                              '<td>'+dataset1Data[i]["Average Teacher Attendance"]+'</td>'+
                              '<td>'+dataset1Data[i]["Individualized Education Program Compliance Rate"]+'</td>'+
                              '<td>'+dataset1Data[i]["College Enrollment"]+'</td>'+
                              '<td>'+dataset1Data[i]["General Services Route"]+'</td>'+
                              '<td>'+dataset1Data[i]["Latitude"]+'</td>'+
                              '<td>'+dataset1Data[i]["Longitude"]+'</td>'+
                              '<td>'+dataset1Data[i]["Community Area Number"]+'</td>'+
                              '<td>'+dataset1Data[i]["Community Area Name"]+'</td>'+
                              '<td>'+dataset1Data[i]["Ward"]+'</td>'+
                              '<td>'+dataset1Data[i]["Police District"]+'</td>'+
                              '<td>'+dataset1Data[i]["Location"]+'</td>'+
                            '</tr>';
              $(tbody).append(content);
            }
        }
    ).catch(err => {
        console.log(err);
    });
  }


}
