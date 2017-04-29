var schoolArray = ["Abraham Lincoln Elementary School", "Ambrose Plamondon Elementary School", "Andrew Carnegie Elementary School", "Bret Harte Elementary School", "Carl Schurz High School", "Carter G Woodson South Elementary School"];

class Stack extends ChartType {

  constructor( datasetName, divID, gotDataFromFilter) {
    super({
      datasetName: datasetName,
      divID: divID,
      gotDataFromFilter: gotDataFromFilter
    });
  }
  generateColor(amount){
    var outputArr = []
    for (var i =0;i<amount;i++) {
        var color1 = Math.ceil(Math.random() * 255);
        var color2 = Math.ceil(Math.random() * 255);
        var color3 = Math.ceil(Math.random() * 255);
        //console.log(color1, color2, color3);
        outputArr.push("rgba(" + color1 + "," + color2 + "," + color3 + "," +Math.random()+ ")");
    }
    return outputArr;
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
    //this.getstackChartData(this.datasetName);
    divTestID = this.divID;
    console.log(this.gotDataFromFilter);
    var maxLength = this.gotDataFromFilter[2];
    // getstackData = getstackChartData(schoolArray, (result) => {
    //   Res = result;
    // });
<<<<<<< HEAD
    setTimeout ( function () {
=======
    //setTimeout ( function () {
      var filterNameArray, labelArray, labelCount, countArray =[];
>>>>>>> f4b6881d740777b8aab60b14bd6e636cf4e25b19

      var data1Array = [];
      var data2Array = [];
      data1Array = getStackData[0];
      data2Array = getStackData[1];
      console.log(data1Array, data2Array);

      var allObj = [];

      var master = this.gotDataFromFilter[0];
      var maxLength = this.gotDataFromFilter[2];
      for(var j=0;j<maxLength;j++){
        var dataArray = [];
        for(var i=0;i<master.length;i++){
          if(master[i].length <= maxLength && j+1 > master[i].length) {
            dataArray.push(0);
          } else {
            var value = master[i][j][1];
            dataArray.push(value);
          }
        }

        var obj = {
          data: dataArray,
          backgroundColor: this.generateColor(dataArray.length),
          borderColor: this.generateColor(dataArray.length),
          borderWidth: 1
        }
        allObj.push(obj);
        console.log("IN skshdlasdfl");
        console.log(dataArray);
      }

<<<<<<< HEAD
      var all = [];
      var test1 = {
          label: 'Average Student Attendance %',
          data: data1Array,
          backgroundColor: backgroundColorArray,
          borderColor: borderColorArray,
          borderWidth: 1
      }
      var test2 = {
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
    }
    all.push(test1);
    all.push(test2);
=======
      var label =['test', 'tessd'];
//var test = [];
//test.push(obj);
>>>>>>> f4b6881d740777b8aab60b14bd6e636cf4e25b19
      var ctxStack = document.getElementById(divTestID);;
      var stackChart = new Chart(ctxStack, {
      type: 'bar',
      data: {
<<<<<<< HEAD
          labels: schoolArray,
          datasets: all
      },
=======
          labels: this.gotDataFromFilter[1],
          datasets: allObj
        },
          //   {
          //     label: 'Average Teacher Attendance',
          //     data: data2Array,
          //     backgroundColor: [
          //         'rgba(255, 159, 64, 0.2)',
          //         'rgba(153, 102, 255, 0.2)',
          //         'rgba(75, 192, 192, 0.2)',
          //         'rgba(255, 206, 86, 0.2)',
          //         'rgba(54, 162, 235, 0.2)',
          //         'rgba(255, 99, 132, 0.2)'
          //     ],
          //     borderColor: [
          //         'rgba(255, 159, 64, 1)',
          //         'rgba(153, 102, 255, 1)',
          //         'rgba(75, 192, 192, 1)',
          //         'rgba(255, 206, 86, 1)',
          //         'rgba(54, 162, 235, 1)',
          //         'rgba(255, 99, 132, 1)'
          //     ],
          //     borderWidth: 1
          // }

>>>>>>> f4b6881d740777b8aab60b14bd6e636cf4e25b19
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
            },
            legend: {
            display: false
         }
          }
        });

    //}, 2000);

  }

}


//export default CheesePizza;
