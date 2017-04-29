/**
* This class intended is to create a option list when colomn is selected
**/
class Filter{
  /**
  * Construct or return singleTon object
  **/
  constructor() {
    if(!this.instance){
          this.instance = this;
    } else {
    this.instance = new Filter()
    }
    return this.instance;
  }

  /**
  * This method will create option list of row for a given column name
  * @param {String} columnName selected column name
  * @param {DataFrame} df target DataFrame
  * @return {String} an options string value to be append to select DOM
  **/
  generateColumnFilter(columnName, df){ //Collection of column header
    var collections = df.select(columnName).distinct(columnName).toCollection();
    var test = df.select(columnName).toArray();
    //var output = '<select multiple id="columnfilter-'+ columnName +'">';
    var output = '';
    for (var i = 0; i < collections.length; i++) {
      output += '<option value="'+ collections[i][columnName] +'">'+ collections[i][columnName] +'</option>';
    }
    return output;
  }
}

//instance = new Filter();
