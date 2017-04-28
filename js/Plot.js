class Filter{
  var filter;
  var filterName;
  var dataframe;
  constructor(dataframe, filterName, filter){
    this.filterName = filterName;
    this.filter = filter;
    this.dataframe = dataframe;
  }
  getFiltered(){
    return df = dataframe.filter(row => row.get(filterName) === filter);
    //return df.groupBy(filter).aggregate(group => group.count()).rename('aggregation', 'Count');
  }
}

class Range{
  var range;
  var decorated;
  var sign;
  var column;
  constructor(decorated, value, sign, column){
    this.value = value;
    this.sign = sign;
    this.column = column;

    this.decorated = decorated;
  }
  DataFrame getFiltered(){
    var df = decorated.plot()
    if(isNaN(dataframe[0][column])){
      return dataframe;
    }
    if(sign === 'equal'){
      return df.filter(row => row.get(column) === range)
    } else if(sign === 'greater'){
      return df.filter(row => row.get(column) > range)
    } else if(sign === 'lesser'){
      return df.filter(row => row.get(column) < range)
    } else if(sign === 'not equal'){
      return df.filter(row => row.get(column) !== range)
    }
    return null;
  }
}

var dec = new Range(new Filter(df1,col1,filter1),200,1,col1);
dec.getFiltered();
