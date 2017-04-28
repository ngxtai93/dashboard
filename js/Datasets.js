class DatasetsC {
//  var schoolArray = ["Abraham Lincoln Elementary School", "Ambrose Plamondon Elementary School", "Andrew Carnegie Elementary School", "Bret Harte Elementary School", "Carl Schurz High School", "Carter G Woodson South Elementary School"];

  plotChart() {
    throw new Error("This method must be overwritten!");
  }

  createChart(type, datasetName, divID, gotDataFromFilter) {
    let chartType = this.plotChart(type, datasetName, divID, gotDataFromFilter);

     chartType.displayChart();
}
}
