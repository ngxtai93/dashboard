var schoolArray = ["Abraham Lincoln Elementary School", "Ambrose Plamondon Elementary School", "Andrew Carnegie Elementary School", "Bret Harte Elementary School", "Carl Schurz High School", "Carter G Woodson South Elementary School"];

class Stack extends ChartType {

  constructor( datasetName) {
    super({
      datasetName: datasetName,
      divID: divID
    });
  }
  getstackChartData (datasetName) {
    var studentAttendance = [];
    var teacherAttendance = [];
    var val;
    DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
        df => {
          for (var i in schoolArray) {
            var ex = df.filter(row => row.get('School Name') === schoolArray[i]).toCollection();
            var studentAttendanceVal = ex[0]['Average Student Attendance'].split("%");
            var teacherAttendanceVal = ex[0]['Average Teacher Attendance'].split("%");
            studentAttendance.push(studentAttendanceVal[0]);
            teacherAttendance.push(teacherAttendanceVal[0]);
          }
          console.log(studentAttendance);
          console.log(teacherAttendance);

            getStackData.push(studentAttendance);
            getStackData.push(teacherAttendance)
            console.log("In");
            //return this.studentAttendance, this.teacherAttendance;
            //return val;
            //getData = groupedDF.toCollection();
            //console.log(getData);

        }
    ).catch(err => {
        console.log(err);
    });
  }
  displayChart() {
    //var getstackData;
    this.getstackChartData(this.datasetName);
    // getstackData = getstackChartData(schoolArray, (result) => {
    //   Res = result;
    // });
    setTimeout ( function () {
      var data1Array = [];
      var data2Array = [];
      data1Array = getStackData[0];
      data2Array = getStackData[1];
      console.log(data1Array, data2Array);
      var backgroundColorArray = [];
      var borderColorArray = [];
      for (var i in data1Array) {
          var color1 = Math.ceil(Math.random() * 255);
          var color2 = Math.ceil(Math.random() * 255);
          var color3 = Math.ceil(Math.random() * 255);
          //console.log(color1, color2, color3);
          backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," +Math.random()+ ")");
          borderColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," +Math.random()+")");
      }

      var ctxStack = $("#"+divID);
      var stackChart = new Chart(ctxStack, {
      type: 'bar',
      data: {
          labels: schoolArray,
          datasets: [{
              label: 'Average Student Attendance %',
              data: data1Array,
              backgroundColor: backgroundColorArray,
              borderColor: borderColorArray,
              borderWidth: 1
          },
            {
              label: 'Average Teacher Attendance',
              data: data2Array,
              backgroundColor: [
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
          stacked: true,
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
          stacked: true,
                  ticks: {
                      beginAtZero:true
                  }
              }]
            }
          }
        });

    }, 2000);

  }
}

//export default CheesePizza;
