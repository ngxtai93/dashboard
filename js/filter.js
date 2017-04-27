class Filter{
<<<<<<< HEAD
  generateColumnFilter(dataset,columnName){ //Collection of column header

    var output = '<select multiple id="columnfilter-'+ columnName +'">';
    for (var i = 0; i < column.length; i++) {
      output += '<option value="'+ column[i] +'">'+ column[i] +'</option>';
=======
  generateColumnFilter(columnName){ //Collection of column header
    var collections = df1.select(columnName).distinct(columnName).toCollection();
    var test = df1.select(columnName).toArray();
    console.log(collections);
    console.log(test);
    //var output = '<select multiple id="columnfilter-'+ columnName +'">';
    var output = '';
    for (var i = 0; i < collections.length; i++) {
      output += '<option value="'+ collections[i][columnName] +'">'+ collections[i][columnName] +'</option>';
>>>>>>> 92b8ac93206d7b28a6c64c54f584fbdb2693551b
    }
    return output;
  }
}
