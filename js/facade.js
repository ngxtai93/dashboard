/**
* This class intended is to be facade object for stackChart.
* It perform multiple class involving operation during the call.
**/
class FacadeStackChart{
  /**
  * This method will prepare data object for stackChart
  * @param {String[][][][]} data data array needed to be transform to Stackchart format
  * @return {Object[]} object for Stackchart
  **/
  getData(data){
    var dataManipulator = new StackDataManipulation();
    var allObj = dataManipulator.generateData(data);
    return allObj;
  }
}

/**
* Class will generate color string per request
**/
class ColorManager{

  /**
  * Gerenate color string array
  * @param {Number} amount of color string needed to be generate
  * @return {String[]} String array of color
  **/
  generateColor(amount){
    var outputArr = []
    for (var i =0;i<amount;i++) {
        var color1 = Math.ceil(Math.random() * 255);
        var color2 = Math.ceil(Math.random() * 255);
        var color3 = Math.ceil(Math.random() * 255);
        outputArr.push("rgba(" + color1 + "," + color2 + "," + color3 + "," +Math.random()+ ")");
    }
    return outputArr;
  }
}

/**
* Create stackchart's format per request
**/
class StackDataManipulation{

  /**
  * This method will prepare data object for stackChart
  * @param {String[][][][]} data data array needed to be transform to Stackchart format
  * @return {Object[]} object for Stackchart
  **/
  generateData(data){
    var allObj = [];
    var master = data[0];
    var maxLength = data[2];
    for(var j=0;j<maxLength;j++){
      var dataArray = [];
      for(var i=0;i<master.length;i++){
        if(master[i].length <= maxLength && j+1 > master[i].length) {
          dataArray.push(0);
        } else {
          var value = master[i][j][1];
          dataArray.push(value);
        }
      }
      var colorManager = new ColorManager();
      var obj = {
        data: dataArray,
        backgroundColor: colorManager.generateColor(dataArray.length),
        borderColor: colorManager.generateColor(dataArray.length),
        borderWidth: 1
      }
      allObj.push(obj);
    }
    return allObj;
  }
}

class SetupDataObject{
  setup(data){

  }
}
