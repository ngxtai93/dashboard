/**
 * This class intended is to create a Bar Chart when user select Bar as a option in Select Box
 **/
class Bar extends ChartType {
    /**
     * Constructor to initilazie variables for Bar charts
     **/
    constructor(datasetName, divID, gotDataFromFilter) {
        super({
            datasetName: datasetName,
            divID: divID,
            gotDataFromFilter: gotDataFromFilter
        });
    }
    /**
     * This method will get the Div id, Dataset name from constructor and values from a gotDataFromFilter and will plot the Bar chart
     **/
    displayChart() {
        //var test = this.sendData(this.datasetName)
        divTestID = this.divID;
        getData = this.gotDataFromFilter;
        var labelArray = [];
        var dataArray = [];
        var backgroundColorArray = [];
        var borderColorArray = [];
        for (var i = 0; i < getData[0].length; i++) {
            labelArray.push(getData[0][i]);
            dataArray.push(getData[1][i]);
            var color1 = Math.ceil(Math.random() * 255);
            var color2 = Math.ceil(Math.random() * 255);
            var color3 = Math.ceil(Math.random() * 255);
            backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," + 0.6 + ")");
            borderColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + "," + 1 + ")");
        }
        $(".bar_chart_div").find("#" + divTestID).remove();
        var canvas = '<canvas id="dataset1BarChart" width="400" height="auto"></canvas>';
        $(".bar_chart_div").append(canvas);
        var ctxBar = document.getElementById(divTestID);
        barChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: labelArray,
                datasets: [{
                    label: 'Bar Chart',
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

    }
}
