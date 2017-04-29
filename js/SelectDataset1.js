/**
* Enumberator for chart type
**/
const CHART = {
  Bar : Bar,
  Line : Line,
  Stack : Stack,
  Pie : Pie,
  Doughnut : Doughnut
};

/**
* Prepare and plot char
**/
class SelectDataset1 extends DatasetsC {
  /**
  * Plot chart into div id
  * @param {CHART} type enumurator for chart type
  * @param {String} divID target div for chart to be display
  * @param {String[]} gotDataFromFilter data which is filtered
  **/
  plotChart(type, datasetName, divID, gotDataFromFilter) {
    let PlotchartConstructor = CHART[type];
    let chartType = null;
    if (PlotchartConstructor) {
      console.log(datasetName);
      chartType = new PlotchartConstructor(datasetName, divID, gotDataFromFilter);
    }
    return chartType;
  }
}
