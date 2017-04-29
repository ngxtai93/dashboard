/**
 * This class is a Factory Method class, whose method will be overwritten by subclass
 **/
class DatasetsC {

    /**
     * This method will Plot the charts, but this will be overwritten with subclass plotChart() methods
     **/
    plotChart() {
        throw new Error("This method must be overwritten!");
    }
    /**
     * This method call the display chart function of the user intended type of chart
     * @param {String} type Type of chart
     * @param {String} datasetName target Dataset Name
     * @param {String} divID Id fo the Div to render charts
     * @param {Array} gotDataFromFilter Array which gives the data to plot
     **/
    createChart(type, datasetName, divID, gotDataFromFilter) {
        let chartType = this.plotChart(type, datasetName, divID, gotDataFromFilter);

        chartType.displayChart();
    }
}
