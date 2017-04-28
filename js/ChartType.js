class ChartType {
  constructor({ datasetName = '', divID = '', gotDataFromFilter = []}) {
    this.datasetName = datasetName;
    this.divID = divID;
    this.gotDataFromFilter = gotDataFromFilter;
  }

  prepare() {
    console.log("Testing"  + this.datasetName + this.divID + this.gotDataFromFilter);
  }
  //More functions to come


  getName() {
    return this.name;
  }
}
