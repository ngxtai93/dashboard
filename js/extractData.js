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
    test.rederDataset(datasetName, parentDiv);
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


}
