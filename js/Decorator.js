/**
* This class intention is to filter data by row name
**/
class DecoratorFilter{
  /**
  * @param {DataFrame} dataframe target dataframe object
  * @param {String} filterName column need to be filter
  * @param {String} filter  row value wanted to be filter
  **/
  constructor(dataframe, filterName, filter){
    this.filterName = filterName;
    this.filter = filter;
    this.dataframe = dataframe;
  }

  /**
  * Filter dataframe by select where column value is equal to target value.
  * @return {DataFrame} data object that is filtered
  **/
  getFiltered(){
    var dff = this.dataframe.select(this.filterName);
    return dff.filter(row => row.get(this.filterName) === this.filter);
    //return df.groupBy(filter).aggregate(group => group.count()).rename('aggregation', 'Count');
  }
}

/**
* This class intention is to filter data by using row value
**/
class Range{
  /**
  * @param {DecoratorFilter} decorated inner decorator class
  * @param {Number} value target value need to be filter
  * @param {String} sign Operation sign for filter
  * @param {String} column column needed to be filter
  **/
  constructor(decorated, value, sign, column){
    this.value = value;
    this.sign = sign;
    this.column = column;

    this.decorated = decorated;
  }
  /**
  * Filter dataframe by append range strategy according to given sign
  * @return {DataFrame} data object that is filtered
  **/
  getFiltered(){
    var df = this.decorated.getFiltered()
    var collection = df.toArray();
    var firstRow = collection[0][0];
    if(isNaN(firstRow)){
      return df;
    }
    if(this.sign === 'equal'){
      this.strategy = new EqualRange();
      //return df.filter(row => row.get(this.column) === this.value)
    } else if(this.sign === 'greater'){
      this.strategy = new GreaterRange();
      //return df.filter(row => row.get(this.column) >= this.value)
    } else if(this.sign === 'lesser'){
      this.strategy = new LesserRange();
      //return df.filter(row => row.get(this.column) <= this.value)
    } else if(this.sign === 'not equal'){
      this.strategy = new NotEqualRange();
      //return df.filter(row => row.get(this.column) !== this.value)
    }
    return this.strategy.filterRange(df,this.column,this.value);
  }
}
