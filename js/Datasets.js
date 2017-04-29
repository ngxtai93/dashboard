class DatasetsC {

  plotChart() {
    throw new Error("This method must be overwritten!");
  }

  createChart(type, datasetName, divID, gotDataFromFilter) {
    let chartType = this.plotChart(type, datasetName, divID, gotDataFromFilter);

     chartType.displayChart();
}
}
