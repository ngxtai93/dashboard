class Pie extends ChartType {
  constructor( datasetName) {
    super({
      datasetName: datasetName,
      divID: divID
    });
  }
  pieChartData (datasetName) {
    var safetyData;
    console.log(datasetName + "In PieChart function");

    DataFrame.fromCSV('datasets/' + datasetName + '.csv').then(
        df => {
            var VeryStrong = df.filter(row => row.get('Safety') === 'Very Strong').count();
            var Strong = df.filter(row => row.get('Safety') === 'Strong').count();
            var Average = df.filter(row => row.get('Safety') === 'Average').count();
            var Weak = df.filter(row => row.get('Safety') === 'Weak').count();
            var veryWeak = df.filter(row => row.get('Safety') === 'Very Weak').count();
            safetyData = {
              'Very Strong' : VeryStrong,
              'Strong' : Strong,
              'Average' : Average,
              'Weak' : Weak,
              'Very Weak' : veryWeak
            }
            getPieData = safetyData;
            return false;
            //getData = groupedDF.toCollection();
            //console.log(getData);

        }
    ).catch(err => {
        console.log(err);
    });
  }
  displayChart() {
      this.pieChartData(this.datasetName);

      // var getData;
      // DataFrame.fromCSV('datasets/'+this.datasetName+'.csv').then(
      //     df => {
      //       var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
      //       getData = groupedDF.toCollection();
      //     }
      //   ).catch(err => {
      //       console.log(err);
      //   });
      setTimeout(function() {
          var labelArray = [];
          var dataArray = [];
          var backgroundColorArray = [];
          var hoverBackgroundColor = [];
          for (var i in getPieData) {
              labelArray.push(i);
              dataArray.push(getPieData[i]);
              var color1 = Math.ceil(Math.random() * 255);
              var color2 = Math.ceil(Math.random() * 255);
              var color3 = Math.ceil(Math.random() * 255);
              //console.log(color1, color2, color3);
              backgroundColorArray.push("rgba(" + color1 + "," + color2 + "," + color3 + ")");
              hoverBackgroundColor.push("rgba(" + color1 + "," + color2 + "," + color3 +")");
          }
          /*Pie Chart Start*/
          var ctxPie = $("#"+divID);
          var myPieChart = new Chart(ctxPie,{
              type: 'pie',
              data: {
                labels: labelArray,
                datasets: [
                    {
                        data: dataArray,
                        backgroundColor: backgroundColorArray,
                        hoverBackgroundColor: hoverBackgroundColor
                    }]
                  }
          });
          // /*Pie Chart END*/
      }, 2000);

  }
}

//export default CheesePizza;
