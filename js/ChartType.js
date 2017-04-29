/**
 * This class passes the type of chart we need to plot, Along with the contents and Div ID
 **/
class ChartType {
  constructor({ datasetName = '', divID = '', gotDataFromFilter = []}) {
    this.datasetName = datasetName;
    this.divID = divID;
    this.gotDataFromFilter = gotDataFromFilter;
  }
}
