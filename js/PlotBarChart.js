class Bar extends ChartType {
  constructor( datasetName, divID, gotDataFromFilter) {
    super({
      datasetName: datasetName,
      divID: divID,
      gotDataFromFilter: gotDataFromFilter
    });

  }
  sendData(datasetName) {

      DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
          df => {
              var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
              getData = groupedDF.toCollection();
              console.log(getData);
              return getData;
          }
      ).catch(err => {
          console.log(err);
      });
    }
  displayChart() {
      var test = this.sendData(this.datasetName)
      divTestID = this.divID;
      getData = this.gotDataFromFilter;
          var labelArray = [];
          var dataArray = [];
          var backgroundColorArray = [];
          var borderColorArray = [];
          for (var i=0; i < getData[0].length; i++) {
              labelArray.push(getData[0][i]);
              dataArray.push(getData[1][i]);
              var color1 = Math.ceil(Math.random() * 255);
              var color2 = Math.ceil(Math.random() * 255);
              var color3 = Math.ceil(Math.random() * 255);
              //console.log(color1, color2, color3);
              backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," + 0.6 + ")");
              borderColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," + 1 + ")");
          }
          var ctxBar = document.getElementById(divTestID);
          var barChart = new Chart(ctxBar, {
              type: 'bar',
              data: {
                  labels: labelArray,
                  datasets: [{
                      label: 'User Values',
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
      //}, 2000);

  }
}

//export default CheesePizza;
