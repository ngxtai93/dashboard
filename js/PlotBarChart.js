class Bar extends ChartType {
  constructor( datasetName, divID) {
    super({
      datasetName: datasetName,
      divID: divID
    });

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
  displayChart() {
      this.sendData(this.datasetName)
      divTestID = this.divID;
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
          console.log(divTestID);
          var ctxBar = document.getElementById(divTestID);
          console.log(ctxBar);
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
      }, 2000, function () {
        $(".page-spinner").hide();
      });

  }
}

//export default CheesePizza;
