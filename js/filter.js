class Filter{
  generateColumnFilter(dataset,columnName){ //Collection of column header

    var output = '<select multiple id="columnfilter-'+ columnName +'">';
    for (var i = 0; i < column.length; i++) {
      output += '<option value="'+ column[i] +'">'+ column[i] +'</option>';
    }
    output += '</select>';
    return output;
  }
}
