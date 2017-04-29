class Doughnut extends ChartType {
  constructor( datasetName, divID, gotDataFromFilter) {
    super({
      datasetName: datasetName,
      divID: divID,
      gotDataFromFilter: gotDataFromFilter
    });
  }
  // doughnutChartData (datasetName) {
  //   var CollaborativeData;
  //   console.log(datasetName + "In DoughnutChart function");
  //
  //   DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
  //       df => {
  //           var NORTH_NORTHWEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'NORTH-NORTHWEST SIDE COLLABORATIVE').count();
  //           var SOUTH_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'SOUTH SIDE COLLABORATIVE').count();
  //           var SOUTHWEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'SOUTHWEST SIDE COLLABORATIVE').count();
  //           var FAR_SOUTH_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'FAR SOUTH SIDE COLLABORATIVE').count();
  //           var WEST_SIDE_COLLABORATIVE = df.filter(row => row.get('Collaborative Name') === 'WEST SIDE COLLABORATIVE').count();
  //           CollaborativeData = {
  //             'NORTH-NORTHWEST SIDE COLLABORATIVE' : NORTH_NORTHWEST_SIDE_COLLABORATIVE,
  //             'SOUTH SIDE COLLABORATIVE' : SOUTH_SIDE_COLLABORATIVE,
  //             'SOUTHWEST SIDE COLLABORATIVE' : SOUTHWEST_SIDE_COLLABORATIVE,
  //             'FAR SOUTH SIDE COLLABORATIVE' : FAR_SOUTH_SIDE_COLLABORATIVE,
  //             'WEST SIDE COLLABORATIVE' : WEST_SIDE_COLLABORATIVE
  //           }
  //           getDoughnutData = CollaborativeData;
  //           return false;
  //           //getData = groupedDF.toCollection();
  //           //console.log(getData);
  //
  //       }
  //   ).catch(err => {
  //       console.log(err);
  //   });
  // }
  displayChart() {
        //this.doughnutChartData(this.datasetName);
        divTestID = this.divID;
        console.log("In Doughnut chart");
        console.log(this.gotDataFromFilter);
        getDoughnutData = this.gotDataFromFilter;

            var labelArray = [];
            var dataArray = [];
            var backgroundColorArray = [];
            var hoverBackgroundColor = [];
            for (var i=0; i < getDoughnutData[0].length; i++) {
                labelArray.push(getDoughnutData[0][i]);
                dataArray.push(getDoughnutData[1][i]);
                var color1 = Math.ceil(Math.random() * 255);
                var color2 = Math.ceil(Math.random() * 255);
                var color3 = Math.ceil(Math.random() * 255);
                //console.log(color1, color2, color3);
                backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + ")");
                hoverBackgroundColor.push("rgba(" + color1 + "," + color2 + "," + color3 +")");
            }
            /*Doughnut Chart Start*/
            $(".doughnut_chart_div").find("#"+divTestID).remove();
            var canvas = '<canvas id="dataset1DoughnutChart" width="400" height="auto"></canvas>';
            $(".doughnut_chart_div").append(canvas);
            var ctxDoughnut = document.getElementById(divTestID);
            var myDoughnutChart = new Chart(ctxDoughnut,{
                type: 'doughnut',
                data: {
                  labels: labelArray,
                  datasets: [
                      {
                          data: dataArray,
                          backgroundColor: backgroundColorArray,
                          hoverBackgroundColor: hoverBackgroundColor
                      }]
                    }
            });
            // /*Pie Chart END*/
      //  }, 2000);

    }
}
