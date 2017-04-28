class RangeStrategy{
  filterRange(df,column,value){

  }
}

class EqualRange extends RangeStrategy{
  filterRange(df,column,value){
    return df.filter(row => row.get(column) === value)
  }
}

class GreaterRange extends RangeStrategy{
  filterRange(df,column,value){
    return df.filter(row => row.get(column) >= value)
  }
}

class LesserRange extends RangeStrategy{
  filterRange(df,column,value){
    return df.filter(row => row.get(column) <= value)
  }
}

class NotEqualRange extends RangeStrategy{
  filterRange(df,column,value){
    return df.filter(row => row.get(column) !== value)
  }
}
