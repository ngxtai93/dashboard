class SimplePlot{
  var df;
  constructor(df){
    this.df = df;
  }
  DataFrame plot(){
    return df;
  }
}

class Filter{
  var filter;
  var decorated;
  constructor(decorated, filter){
    this.filter = filter;
    this.decorated = decorated;
  }
  DataFrame plot(){
    var df = decorated.plot()
    return df.groupBy(filter).aggregate(group => group.count()).rename('aggregation', 'Count');
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
  DataFrame plot(){
    var df = decorated.plot()
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

var filter = new Filter(new SimplePlot(df1),'FILTER NAME');
var df = filter.plot();
