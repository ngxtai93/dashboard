/**
* Base class for dataset class
**/
class DatasetsC {

  /**
  * Abstract plotChart()
  **/
  plotChart() {
    throw new Error("This method must be overwritten!");
  }

  /**
  * Plot chart in to specific div
  * @param {String} type type of chart
  * @param {String} datasetName dataset name
  * @param {String} divDid target div for plotting chart
  * @param {String[]} gotDataFromFilter Prepared Data
  **/
  createChart(type, datasetName, divID, gotDataFromFilter) {
    let chartType = this.plotChart(type, datasetName, divID, gotDataFromFilter);

     chartType.displayChart();
}
}
