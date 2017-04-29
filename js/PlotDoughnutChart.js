/**
 * This class intended is to create a Doughnut Chart when user select Doughnut as a option in Select Box
 **/
class Doughnut extends ChartType {
  /**
   * Constructor to initilazie variables for Doughnut charts
   **/
  constructor( datasetName, divID, gotDataFromFilter) {
    super({
      datasetName: datasetName,
      divID: divID,
      gotDataFromFilter: gotDataFromFilter
    });
  }
  /**
   * This method will get the Div id, Dataset name from constructor and values from a gotDataFromFilter and will plot the Doughnut chart
   **/
  displayChart() {
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
                        label:'Doughnut Chart',
                          data: dataArray,
                          backgroundColor: backgroundColorArray,
                          hoverBackgroundColor: hoverBackgroundColor
                      }]
                    }
            });

    }
}
