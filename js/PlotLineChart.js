class Line extends ChartType {
  constructor( datasetName, divID, gotDataFromFilter) {
    super({
      datasetName: datasetName,
      divID: divID,
      gotDataFromFilter: gotDataFromFilter
    });
  }
  displayChart() {
  //  this.sendData(this.datasetName)
    divTestID = this.divID;

  //  var test = this.sendData(this.datasetName)
    divTestID = this.divID;
    console.log("In line chart");
    console.log(this.gotDataFromFilter);
    getData = this.gotDataFromFilter;
      //super.sendData(this.datasetName); //Need to Change Later

    //  setTimeout( function () {
      var labelArray = [];
      var dataArray = [];
      var backgroundColorArray = [];
      var borderColorArray = [];
      for (var i=0;  i< getData[0].length; i++) {
          labelArray.push(getData[0][i]);
          dataArray.push(getData[1][i]);

      }
      /*Line Chart Start*/
      $(".line_chart_div").find("#"+divTestID).remove();
      var canvas = '<canvas id="dataset1LineChart" width="400" height="auto"></canvas>';
      $(".line_chart_div").append(canvas);
      var ctxLine = document.getElementById(divTestID);;
      var lineChart = new Chart(ctxLine, {
          type: 'line',
          data: {
              labels: labelArray,
              datasets: [{
                  label: "User Data",
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
  //    }, 2000);

  }
}
