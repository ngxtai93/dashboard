class DecoratorFilter{
  constructor(dataframe, filterName, filter){
    this.filterName = filterName;
    this.filter = filter;
    this.dataframe = dataframe;
  }
  getFiltered(){
    var dff = this.dataframe.select(this.filterName);
    return dff.filter(row => row.get(this.filterName) === this.filter);
    //return df.groupBy(filter).aggregate(group => group.count()).rename('aggregation', 'Count');
  }
}
class Range{

  constructor(decorated, value, sign, column){
    this.value = value;
    this.sign = sign;
    this.column = column;

    this.decorated = decorated;
  }
  getFiltered(){
    var df = this.decorated.getFiltered()
    var collection = df.toArray();
    var firstRow = collection[0][0];
    if(isNaN(firstRow)){
      return df;
    }
    if(this.sign === 'equal'){
      return df.filter(row => row.get(this.column) === this.range)
    } else if(this.sign === 'greater'){
      return df.filter(row => row.get(this.column) > this.range)
    } else if(this.sign === 'lesser'){
      return df.filter(row => row.get(this.column) < this.range)
    } else if(this.sign === 'not equal'){
      return df.filter(row => row.get(this.column) !== this.range)
    }
    return null;
  }
}
