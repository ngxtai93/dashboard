
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
             								 '2011-2012 ENVIRONMENT GRADE','2011-2012 COLLEGE AND CAREER READINESS SCORE',
             								 '2011-2012 COLLEGE AND CAREER READINESS GRADE','2011-2012 ADDITIONAL CREDIT',
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
                 				'<th>2011-2012 ENVIRONMENT GRADE</th><th>2011-2012 COLLEGE AND CAREER READINESS SCORE</th>'+
                 				'<th>2011-2012 COLLEGE AND CAREER READINESS GRADE</th>'+
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
                              '<td>'+dataset4Data[i]["2011-2012 COLLEGE AND CAREER READINESS SCORE"]+'</td>'+
                              '<td>'+dataset4Data[i]["2011-2012 COLLEGE AND CAREER READINESS GRADE"]+'</td>'+
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













DBN
DISTRICT
SCHOOL
PRINCIPAL
PROGRESS REPORT TYPE
SCHOOL LEVEL
PEER INDEX
2011-2012 OVERALL GRADE
2011-2012 OVERALL SCORE
2011-12 OVERALL PERCENTILE
2011-2012 PROGRESS CATEGORY SCORE
2011-2012 PROGRESS GRADE
2011-2012 PERFORMANCE CATEGORY SCORE
2011-2012 PERFORMANCE GRADE
2011-2012 ENVIRONMENT CATEGORY SCORE
2011-2012 ENVIRONMENT GRADE
2011-2012 COLLEGE AND CAREER READINESS SCORE
2011-2012 COLLEGE AND CAREER READINESS GRADE
2011-2012 ADDITIONAL CREDIT
2010-11 PROGRESS REPORT GRADE
2009-10 PROGRESS REPORT GRADE




"School ID"
"School Name"
"Street Address"	
"City"	
"State"	
"ZIP"	
"Phone Number"	
"Website"	
"Blue Ribbon Award"	
"CPS Performance Policy Level"	
"CPS Performance Policy Status"	
"Probation Length"	
"Overall Rating"	
"Student Response Rate"	
"Teacher Response Rate"	
"Involved Family"	
"Supportive Environment"	
"Ambitious Instruction"	
"Effective Leaders"	
"Collaborative Teachers"	
"Safety"	
"School Community"	
"Parent-Teacher Partnership"	
"Quality of Facilities"	
"Healthy Schools Certification"	
"Creative Schools Certification"       
"College Enrollment Rate Percentage 2013"	
"College Enrollment Rate Percentage 2012"	
"College Persistence Rate Percentage 2013"	
"College Persistence Rate Percentage 2012"	
"Student Attendance Percentage 2013"	
"Student Attendance Percentage 2012"	
"One-Year DropOut Rate Percentage 2013"	
"One-Year DropOut Rate Percentage 2012"	
"X Coordinate"	
"Y Coordinate"	
"Longitude"	
"Latitude"	
"Location"











