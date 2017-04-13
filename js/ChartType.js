class ChartType {
  constructor({ datasetName = '', divID = ''}) {
    this.datasetName = datasetName;
    this.divID = divID;
  }

  prepare() {
    console.log("Testing"  + this.datasetName + this.divID);
  }
  //More functions to come


  getName() {
    return this.name;
  }
}
