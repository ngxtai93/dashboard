
 rederDataset3(datasetName, parentDiv) {
    DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
        df => {
          //chart()
          // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
          // chartVar = groupedDF.toCollection();
                          //console.log(groupedDF.aggregate(group => group.count()));

             //console.log(cleanDF.listColumns());
             const selectColumns = df.select('School ID','School Name','Street Address','City','State','ZIP','Phone Number',
											 'Website','Blue Ribbon Award','CPS Performance Policy Level',
											 'CPS Performance Policy Status','Probation Length','Overall Rating',
											 'Student Response Rate','Teacher Response Rate','Involved Family',
											 'Supportive Environment','Ambitious Instruction','Effective Leaders',
											 'Collaborative Teachers','Safety','School Community',
											 'Parent-Teacher Partnership','Quality of Facilities',
											 'Healthy Schools Certification','Creative Schools Certification',
											 'College Enrollment Rate Percentage 2013',
											 'College Enrollment Rate Percentage 2012',
											 'College Persistence Rate Percentage 2013',
											 'College Persistence Rate Percentage 2012',
											 'Student Attendance Percentage 2013','Student Attendance Percentage 2012',
											 'One-Year DropOut Rate Percentage 2013','One-Year DropOut Rate Percentage 2012',
											 'X Coordinate','Y Coordinate','Longitude','Latitude','Location');

                dataset3Data = selectColumns.toCollection();
                 //console.log(test);
                 var thead = '<tr>'+
                               '<th>School ID</th><th>School Name</th><th>Street Address</th><th>City</th><th>State</th>'+	
							   '<th>ZIP</th><th>Phone Number</th><th>Website</th><th>Blue Ribbon Award</th>'+
							   '<th>CPS Performance Policy Level</th><th>CPS Performance Policy Status</th>'+
							   '<th>Probation Length</th><th>Overall Rating</th><th>Student Response Rate</th>'+
							   '<th>Teacher Response Rate</th><th>Involved Family</th><th>Supportive Environment</th>'+
							   '<th>Ambitious Instruction</th><th>Effective Leaders</th><th>Collaborative Teachers</th>'+
							   '<th>Safety</th><th>School Community</th><th>Parent-Teacher Partnership</th>'+
							   '<th>Quality of Facilities</th><th>Healthy Schools Certification</th>'+
							   '<th>Creative Schools Certification</th><th>College Enrollment Rate Percentage 2013</th>'+
							   '<th>College Enrollment Rate Percentage 2012</th>'+
							   '<th>College Persistence Rate Percentage 2013</th>'+
							   '<th>College Persistence Rate Percentage 2012</th><th>Student Attendance Percentage 2013</th>'+
							   '<th>Student Attendance Percentage 2012</th><th>One-Year DropOut Rate Percentage 2013</th>'+
							   '<th>One-Year DropOut Rate Percentage 2012</th><th>X Coordinate</th><th>Y Coordinate</th>'+
							   '<th>Longitude</th><th>Latitude</th><th>Location</th>';
                               '</tr>';
                  $("#"+parentDiv+"Table thead").html(thead);
                  var tbody = $("#"+parentDiv+"Table tbody");

            for ( var i = 0; i < dataset3Data.length; i++) {
              var content = '<tr>'+
                              '<td>'+dataset3Data[i]["School ID"]+'</td>'+
                              '<td>'+dataset3Data[i]["School Name"]+'</td>'+
                              '<td>'+dataset3Data[i]["Street Address"]+'</td>'+
                              '<td>'+dataset3Data[i]["City"]+'</td>'+
                              '<td>'+dataset3Data[i]["State"]+'</td>'+
                              '<td>'+dataset3Data[i]["ZIP"]+'</td>'+
                              '<td>'+dataset3Data[i]["Phone Number"]+'</td>'+
                              '<td>'+dataset3Data[i]["Website"]+'</td>'+
                              '<td>'+dataset3Data[i]["Blue Ribbon Award"]+'</td>'+
                              '<td>'+dataset3Data[i]["CPS Performance Policy Level"]+'</td>'+
                              '<td>'+dataset3Data[i]["CPS Performance Policy Status"]+'</td>'+
                              '<td>'+dataset3Data[i]["Probation Length"]+'</td>'+
                              '<td>'+dataset3Data[i]["Overall Rating"]+'</td>'+
                              '<td>'+dataset3Data[i]["Student Response Rate"]+'</td>'+
                              '<td>'+dataset3Data[i]["Teacher Response Rate"]+'</td>'+
                              '<td>'+dataset3Data[i]["Involved Family"]+'</td>'+
                              '<td>'+dataset3Data[i]["Supportive Environment"]+'</td>'+
                              '<td>'+dataset3Data[i]["Ambitious Instruction"]+'</td>'+
                              '<td>'+dataset3Data[i]["Effective Leaders"]+'</td>'+
                              '<td>'+dataset3Data[i]["Collaborative Teachers"]+'</td>'+
                              '<td>'+dataset3Data[i]["Safety"]+'</td>'+
                              '<td>'+dataset3Data[i]["School Community"]+'</td>'+
                              '<td>'+dataset3Data[i]["Parent-Teacher Partnership"]+'</td>'+
                              '<td>'+dataset3Data[i]["Quality of Facilities"]+'</td>'+
                              '<td>'+dataset3Data[i]["Healthy Schools Certification"]+'</td>'+
                              '<td>'+dataset3Data[i]["Creative Schools Certification"]+'</td>'+
                              '<td>'+dataset3Data[i]["College Enrollment Rate Percentage 2013"]+'</td>'+
                              '<td>'+dataset3Data[i]["College Enrollment Rate Percentage 2012"]+'</td>'+
                              '<td>'+dataset3Data[i]["College Persistence Rate Percentage 2013"]+'</td>'+
                              '<td>'+dataset3Data[i]["College Persistence Rate Percentage 2012"]+'</td>'+
                              '<td>'+dataset3Data[i]["Student Attendance Percentage 2013"]+'</td>'+
                              '<td>'+dataset3Data[i]["Student Attendance Percentage 2012"]+'</td>'+
                              '<td>'+dataset3Data[i]["One-Year DropOut Rate Percentage 2013"]+'</td>'+
                              '<td>'+dataset3Data[i]["One-Year DropOut Rate Percentage 2012"]+'</td>'+
                              '<td>'+dataset3Data[i]["X Coordinate"]+'</td>'+
                              '<td>'+dataset3Data[i]["Y Coordinate"]+'</td>'+
                              '<td>'+dataset3Data[i]["Longitude"]+'</td>'+
                              '<td>'+dataset3Data[i]["Latitude"]+'</td>'+
                              '<td>'+dataset3Data[i]["Location"]+'</td>'+
                            '</tr>';
              $(tbody).append(content);
            }
        }
    ).catch(err => {
        console.log(err);
    });
  }









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











