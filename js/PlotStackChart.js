var schoolArray = ["Abraham Lincoln Elementary School", "Ambrose Plamondon Elementary School", "Andrew Carnegie Elementary School", "Bret Harte Elementary School", "Carl Schurz High School", "Carter G Woodson South Elementary School"];

class Stack extends ChartType {

  constructor( datasetName, divID, gotDataFromFilter) {
    super({
      datasetName: datasetName,
      divID: divID,
      gotDataFromFilter: gotDataFromFilter
    });
  }
  displayChart() {
    divTestID = this.divID;
    console.log(this.gotDataFromFilter);
      var filterNameArray, labelArray, labelCount, countArray =[];
<<<<<<< HEAD
      var dataManipulator = new FacadeStackChart();
      var allObj = dataManipulator.getData(this.gotDataFromFilter);

=======
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

      var label =['test', 'tessd'];
//var test = [];
//test.push(obj);
>>>>>>> bf4724a142d4ab0dd73264a505b7443618f07e2b
      var ctxStack = document.getElementById(divTestID);;
      var stackChart = new Chart(ctxStack, {
      type: 'bar',
      data: {
          labels: this.gotDataFromFilter[1],
          datasets: allObj
        },
<<<<<<< HEAD

=======
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
>>>>>>> bf4724a142d4ab0dd73264a505b7443618f07e2b
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
  }

}
