'<th>School ID</th><th>School Name</th><th>EMH_School</th><th>Street Address</th>'+
'<th>City</th><th>State</th><th>ZIP</th><th>Phone Number</th><th>Collaborative Name</th>'+
'<th>Adequate Yearly Progress Made?</th><th>School Track</th><th>CPS Performance Policy Status</th>'+
'<th>Overall Rating</th><th>Healthy Schools Certified?</th><th>Safety</th><th>Safety Score</th>'+
'<th>Family Involvement Icon</th><th>Growth Overall Level</th><th>Environment Score	</th>'+
'<th>Instruction Icon</th><th>Instruction Score</th><th>Parent Engagement Icon</th>'+
'<th>Parent Engagement Score</th><th>Parent Environment Icon</th><th>Parent Environment Score</th>'+
'<th>Average Student Attendance</th><th>Rate of Misconducts (per 100 students)</th>'+
'<th>Average Teacher Attendance</th><th>Individualized Education Program Compliance Rate</th>'+
'<th>College Enrollment</th><th>General Services Route</th><th>Latitude</th>'+
'<th>Longitude</th><th>Community Area Number</th><th>Community Area Name</th>'+
'<th>Ward</th><th>Police District</th><th>Location</th>'+


let myFirstPromise = new Promise((resolve, reject) => {

  setTimeout(function(){
    DataFrame.fromCSV('datasets/'+this.datasetName+'.csv').then(
        df => {
          var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
          chartVar = groupedDF.toCollection();
          console.log(chartVar);
        }
      ).catch(err => {
          console.log(err);
      });
      console.log(chartVar);


    

    resolve(chartVar); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((chartVar) => {
    return chartVar;
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});





<th>School ID</th>
<th>School Name</th>
<th>EMH_School</th>
<th>Street Address</th>
<th>City</th>
<th>State</th>
<th>ZIP</th>
<th>Phone Number</th>
<th>Collaborative Name</th>
<th>Adequate Yearly Progress Made?	</th>
<th>School Track</th>
<th>CPS Performance Policy Status</th>
<th>Overall Rating</th>
<th>Healthy Schools Certified?	</th>
<th>Safety</th>
<th>Safety Score</th>
<th>Family Involvement Icon</th>
<th>Growth Overall Level</th>
<th>Environment Score	</th>
<th>Instruction Icon</th>
<th>Instruction Score</th>
<th>Parent Engagement Icon</th>
<th>Parent Engagement Score</th>
<th>Parent Environment Icon</th>
<th>Parent Environment Score</th>
<th>Average Student Attendance</th>
<th>Rate of Misconducts (per 100 students)</th>
<th>Average Teacher Attendance</th>
<th>Individualized Education Program Compliance Rate</th>
<th>College Enrollment</th>
<th>General Services Route</th>
<th>Latitude</th>
<th>Longitude</th>
<th>Community Area Number</th>
<th>Community Area Name</th>
<th>Ward</th>
<th>Police District</th>
<th>Location</th>
