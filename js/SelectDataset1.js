/**
 * This class instance is created from the fron end, which will guide through the plotting of charts
 *@param {Enumerator} Chart It creates the instance of the selected charts
 **/
const CHART = {
    Bar: Bar,
    Line: Line,
    Stack: Stack,
    Pie: Pie,
    Doughnut: Doughnut
};
/**
 * This class inherits DatasetsC super class, and overwrites plotChart() mwthod of the super class
 *@param {Enumerator} Chart It creates the instance of the selected charts
 * @return will return the instance of Chart, that user want to plot.
 **/
class SelectDataset1 extends DatasetsC {
    plotChart(type, datasetName, divID, gotDataFromFilter) {
        let PlotchartConstructor = CHART[type];
        let chartType = null;
        if (PlotchartConstructor) {
            //console.log(datasetName);
            chartType = new PlotchartConstructor(datasetName, divID, gotDataFromFilter);
        }
        return chartType;
    }
}
