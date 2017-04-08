class Line extends ChartType {
  constructor( datasetName) {
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
      //super.sendData(this.datasetName); //Need to Change Later

      setTimeout( function () {
      var labelArray = [];
      var dataArray = [];
      var backgroundColorArray = [];
      var borderColorArray = [];
      for (var i in this.getData) {
          labelArray.push(getData[i].ZIP);
          dataArray.push(getData[i].Count);
      }
      var ctxLine = $("#"+divID);
      var lineChart = new Chart(ctxLine, {
          type: 'line',
          data: {
              labels: labelArray,
              datasets: [{
                  label: "ZIP",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: dataArray,
                  spanGaps: false,
              }]
          }
      });
      }, 2000);

  }
}

//export default CheesePizza;
