/**
 * This class intended is to create a Pie Chart when user select Pie as a option in Select Box
 **/
class Pie extends ChartType {
    constructor(datasetName, divID, gotDataFromFilter) {
        super({
            datasetName: datasetName,
            divID: divID,
            gotDataFromFilter: gotDataFromFilter
        });
    }

    /**
     * This method will get the Div id, Dataset name from constructor and values from a gotDataFromFilter and will plot the Pie chart
     **/
    displayChart() {
        divTestID = this.divID;
        getPieData = this.gotDataFromFilter;
        var labelArray = [];
        var dataArray = [];
        var backgroundColorArray = [];
        var hoverBackgroundColor = [];
        for (var i = 0; i < getPieData[0].length; i++) {
            labelArray.push(getPieData[0][i]);
            dataArray.push(getPieData[1][i]);
            var color1 = Math.ceil(Math.random() * 255);
            var color2 = Math.ceil(Math.random() * 255);
            var color3 = Math.ceil(Math.random() * 255);
            backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + ")");
            hoverBackgroundColor.push("rgba(" + color1 + "," + color2 + "," + color3 + ")");
        }
        /*Pie Chart Start*/
        $(".pie_chart_div").find("#" + divTestID).remove();
        var canvas = '<canvas id="dataset1PieChart" width="400" height="auto"></canvas>';
        $(".pie_chart_div").append(canvas);
        var ctxPie = document.getElementById(divTestID);;
        var myPieChart = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: labelArray,
                datasets: [{
                  label: "Pie Chart",
                    data: dataArray,
                    backgroundColor: backgroundColorArray,
                    hoverBackgroundColor: hoverBackgroundColor
                }]
            }
        });

    }
}
