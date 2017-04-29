var schoolArray = ["Abraham Lincoln Elementary School", "Ambrose Plamondon Elementary School", "Andrew Carnegie Elementary School", "Bret Harte Elementary School", "Carl Schurz High School", "Carter G Woodson South Elementary School"];

class Stack extends ChartType {

  constructor( datasetName, divID, gotDataFromFilter) {
    super({
      datasetName: datasetName,
      divID: divID,
      gotDataFromFilter: gotDataFromFilter
    });
  }
  displayChart() {
    divTestID = this.divID;
    console.log(this.gotDataFromFilter);
      var filterNameArray, labelArray, labelCount, countArray =[];
      var dataManipulator = new FacadeStackChart();
      var allObj = dataManipulator.getData(this.gotDataFromFilter);

      var ctxStack = document.getElementById(divTestID);;
      var stackChart = new Chart(ctxStack, {
      type: 'bar',
      data: {
          labels: this.gotDataFromFilter[1],
          datasets: allObj
        },

      options: {
          scales: {
              yAxes: [{
          stacked: true,
                  ticks: {
                      beginAtZero:true
                  }
              }],
              xAxes: [{
          stacked: true,
                  ticks: {
                      beginAtZero:true
                  }
              }]
            },
            legend: {
            display: false
         }
          }
        });
  }

}
