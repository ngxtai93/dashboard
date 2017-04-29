/**
 * This class intended is to create a Line Chart when user select Line as a option in Select Box
 **/
class Line extends ChartType {
    /**
     * Constructor to initilazie variables for Line charts
     **/
    constructor(datasetName, divID, gotDataFromFilter) {
        super({
            datasetName: datasetName,
            divID: divID,
            gotDataFromFilter: gotDataFromFilter
        });
    }
    /**
     * This method will get the Div id, Dataset name from constructor and values from a gotDataFromFilter and will plot the Line chart
     **/
    displayChart() {

        divTestID = this.divID;

        divTestID = this.divID;
        console.log("In line chart");
        console.log(this.gotDataFromFilter);
        getData = this.gotDataFromFilter;

        var labelArray = [];
        var dataArray = [];
        var backgroundColorArray = [];
        var borderColorArray = [];
        for (var i = 0; i < getData[0].length; i++) {
            labelArray.push(getData[0][i]);
            dataArray.push(getData[1][i]);

        }
        /*Line Chart Start*/
        $(".line_chart_div").find("#" + divTestID).remove();
        var canvas = '<canvas id="dataset1LineChart" width="400" height="auto"></canvas>';
        $(".line_chart_div").append(canvas);
        var ctxLine = document.getElementById(divTestID);;
        var lineChart = new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: labelArray,
                datasets: [{
                    label: "Line Chart",
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

    }
}
