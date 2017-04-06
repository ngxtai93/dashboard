NORTH-NORTHWEST SIDE COLLABORATIVE
SOUTH SIDE COLLABORATIVE
SOUTHWEST SIDE COLLABORATIVE
FAR SOUTH SIDE COLLABORATIVE
WEST SIDE COLLABORATIVE


 rederDataset5(datasetName, parentDiv) {
    DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
        df => {
          //chart()
          // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
          // chartVar = groupedDF.toCollection();
                          //console.log(groupedDF.aggregate(group => group.count()));

             //console.log(cleanDF.listColumns());
             const selectColumns = df.select('Network','School','School ID','Unit','Grade','Composite Mean Fall 2008-2009',
             								 'Composite Mean Fall 2009-2010','Composite Mean Fall 2010-2011',
             								 'Composite Mean Fall 2011-2012','Composite Mean Fall 2012-2013',
             								 'Composite Mean Spring 2012-2013','Composite Mean Spring 2013-2014',
             								 'Composite No. Tested Fall 2008-2009','Composite No. Tested Fall 2009-2010',
             								 'Composite No. Tested Fall 2010-2011','Composite No. Tested Fall 2011-2012',
             								 'Composite No. Tested Fall 2012-2013','Composite No. Tested Spring 2012-2013',
             								 'Composite No. Tested Spring 2013-2014','English Mean Fall 2008-2009',
             								 'English Mean Fall 2009-2010','English Mean Fall 2010-2011',
             								 'English Mean Fall 2011-2012','English Mean Fall 2012-2013',
             								 'English Mean Spring 2012-2013','English Mean Spring 2013-2014',
             								 'English No. Tested Fall 2008-2009','English No. Tested Fall 2009-2010',
             								 'English No. Tested Fall 2010-2011','English No. Tested Fall 2011-2012',
             								 'English No. Tested Fall 2012-2013','English No. Tested Spring 2012-2013',
             								 'English No. Tested Spring 2013-2014','Maths Mean Fall 2008-2009',
             								 'Maths Mean Fall 2009-2010','Maths Mean Fall 2010-2011',
             								 'Maths Mean Fall 2011-2012','Maths Mean Fall 2012-2013',
             								 'Maths Mean Spring 2012-2013','Maths Mean Spring 2013-2014',
             								 'Maths No. Tested Fall 2008-2009','Maths No. Tested Fall 2009-2010',
             								 'Maths No. Tested Fall 2010-2011','Maths No. Tested Fall 2011-2012',
             								 'Maths No. Tested Fall 2012-2013','Maths No. Tested Spring 2012-2013',
             								 'Maths No. Tested Spring 2013-2014','Reading Mean Fall 2008-2009',
             								 'Reading Mean Fall 2009-2010','Reading Mean Fall 2010-2011',
             								 'Reading Mean Fall 2011-2012','Reading Mean Fall 2012-2013',
             								 'Reading Mean Spring 2012-2013','Reading Mean Spring 2013-2014',
             								 'Reading No. Tested Fall 2008-2009','Reading No. Tested Fall 2009-2010',
             								 'Reading No. Tested Fall 2010-2011','Reading No. Tested Fall 2011-2012',
             								 'Reading No. Tested Fall 2012-2013','Reading No. Tested Spring 2012-2013',
             								 'Reading No. Tested Spring 2013-2014','Science Mean Fall 2008-2009',
             								 'Science Mean Fall 2009-2010','Science Mean Fall 2010-2011',
             								 'Science Mean Fall 2011-2012','Science Mean Fall 2012-2013',
             								 'Science Mean Spring 2012-2013','Science Mean Spring 2013-2014',
             								 'Science No. Tested Fall 2008-2009','Science No. Tested Fall 2009-2010',
             								 'Science No. Tested Fall 2010-2011','Science No. Tested Fall 2011-2012',
             								 'Science No. Tested Fall 2012-2013','Science No. Tested Spring 2012-2013',
             								 'Science No. Tested Spring 2013-2014');
                dataset5Data = selectColumns.toCollection();
                 //console.log(test);
                 var thead = '<tr>'+
                 				'<th>Network</th><th>School</th><th>School ID</th><th>Unit</th><th>Grade</th>'+
                 				'<th>Composite Mean Fall 2008-2009</th><th>Composite Mean Fall 2009-2010</th>'+
                 				'<th>Composite Mean Fall 2010-2011</th><th>Composite Mean Fall 2011-2012</th>'+
                 				'<th>Composite Mean Fall 2012-2013</th><th>Composite Mean Spring 2012-2013</th>'+
                 				'<th>Composite Mean Spring 2013-2014</th><th>Composite No. Tested Fall 2008-2009</th>'+
                 				'<th>Composite No. Tested Fall 2009-2010</th><th>Composite No. Tested Fall 2010-2011</th>'+
								'<th>Composite No. Tested Fall 2011-2012</th><th>Composite No. Tested Fall 2012-2013</th>'+
								'<th>Composite No. Tested Spring 2012-2013</th><th>Composite No. Tested Spring 2013-2014</th>'+
								'<th>English Mean Fall 2008-2009</th><th>English Mean Fall 2009-2010</th>'+
								'<th>English Mean Fall 2010-2011</th><th>English Mean Fall 2011-2012</th>'+
								'<th>English Mean Fall 2012-2013</th><th>English Mean Spring 2012-2013</th>'+
								'<th>English Mean Spring 2013-2014</th><th>English No. Tested Fall 2008-2009</th>'+
								'<th>English No. Tested Fall 2009-2010</th><th>English No. Tested Fall 2010-2011</th>'+
								'<th>English No. Tested Fall 2011-2012</th><th>English No. Tested Fall 2012-2013</th>'+
								'<th>English No. Tested Spring 2012-2013</th><th>English No. Tested Spring 2013-2014</th>'+
								'<th>Maths Mean Fall 2008-2009</th><th>Maths Mean Fall 2009-2010</th>'+
								'<th>Maths Mean Fall 2010-2011</th><th>Maths Mean Fall 2011-2012</th>'+
								'<th>Maths Mean Fall 2012-2013</th><th>Maths Mean Spring 2012-2013</th>'+
								'<th>Maths Mean Spring 2013-2014</th><th>Maths No. Tested Fall 2008-2009</th>'+
								'<th>Maths No. Tested Fall 2009-2010</th><th>Maths No. Tested Fall 2010-2011</th>'+
								'<th>Maths No. Tested Fall 2011-2012</th><th>Maths No. Tested Fall 2012-2013</th>'+
								'<th>Maths No. Tested Spring 2012-2013</th><th>Maths No. Tested Spring 2013-2014</th>'+
								'<th>Reading Mean Fall 2008-2009</th><th>Reading Mean Fall 2009-2010</th>'+
								'<th>Reading Mean Fall 2010-2011</th><th>Reading Mean Fall 2011-2012</th>'+
								'<th>Reading Mean Fall 2012-2013</th><th>Reading Mean Spring 2012-2013</th>'+
								'<th>Reading Mean Spring 2013-2014</th><th>Reading No. Tested Fall 2008-2009</th>'+
								'<th>Reading No. Tested Fall 2009-2010</th><th>Reading No. Tested Fall 2010-2011</th>'+
								'<th>Reading No. Tested Fall 2011-2012</th><th>Reading No. Tested Fall 2012-2013</th>'+
								'<th>Reading No. Tested Spring 2012-2013</th><th>Reading No. Tested Spring 2013-2014</th>'+
								'<th>Science Mean Fall 2008-2009</th><th>Science Mean Fall 2009-2010</th>'+
								'<th>Science Mean Fall 2010-2011</th><th>Science Mean Fall 2011-2012</th>'+
								'<th>Science Mean Fall 2012-2013</th><th>Science Mean Spring 2012-2013</th>'+
								'<th>Science Mean Spring 2013-2014</th><th>Science No. Tested Fall 2008-2009</th>'+
								'<th>Science No. Tested Fall 2009-2010</th><th>Science No. Tested Fall 2010-2011</th>'+
								'<th>Science No. Tested Fall 2011-2012</th><th>Science No. Tested Fall 2012-2013</th>'+
								'<th>Science No. Tested Spring 2012-2013</th><th>Science No. Tested Spring 2013-2014</th>';
                               '</tr>';
                  $("#"+parentDiv+"Table thead").html(thead);
                  var tbody = $("#"+parentDiv+"Table tbody");

            for ( var i = 0; i < dataset5Data.length; i++) {
              var content = '<tr>'+
                              '<td>'+dataset5Data[i]["Network"]+'</td>'+
                              '<td>'+dataset5Data[i]["School"]+'</td>'+
                              '<td>'+dataset5Data[i]["School ID"]+'</td>'+
                              '<td>'+dataset5Data[i]["Unit"]+'</td>'+
                              '<td>'+dataset5Data[i]["Grade"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Composite No. Tested Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["English Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["English No. Tested Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Maths No. Tested Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Reading No. Tested Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science Mean Spring 2013-2014"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2008-2009"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2009-2010"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2010-2011"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2011-2012"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Fall 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Spring 2012-2013"]+'</td>'+
                              '<td>'+dataset5Data[i]["Science No. Tested Spring 2013-2014"]+'</td>'+
                            '</tr>';
              $(tbody).append(content);
            }
        }
    ).catch(err => {
        console.log(err);
    });
  }





Network
School
School ID
Unit
Grade
Composite Mean Fall 2008-2009
Composite Mean Fall 2009-2010
Composite Mean Fall 2010-2011
Composite Mean Fall 2011-2012
Composite Mean Fall 2012-2013
Composite Mean Spring 2012-2013
Composite Mean Spring 2013-2014
Composite No. Tested Fall 2008-2009
Composite No. Tested Fall 2009-2010
Composite No. Tested Fall 2010-2011
Composite No. Tested Fall 2011-2012
Composite No. Tested Fall 2012-2013
Composite No. Tested Spring 2012-2013
Composite No. Tested Spring 2013-2014
English Mean Fall 2008-2009
English Mean Fall 2009-2010
English Mean Fall 2010-2011
English Mean Fall 2011-2012
English Mean Fall 2012-2013
English Mean Spring 2012-2013
English Mean Spring 2013-2014
English No. Tested Fall 2008-2009
English No. Tested Fall 2009-2010
English No. Tested Fall 2010-2011
English No. Tested Fall 2011-2012
English No. Tested Fall 2012-2013
English No. Tested Spring 2012-2013
English No. Tested Spring 2013-2014
Maths Mean Fall 2008-2009
Maths Mean Fall 2009-2010
Maths Mean Fall 2010-2011
Maths Mean Fall 2011-2012
Maths Mean Fall 2012-2013
Maths Mean Spring 2012-2013
Maths Mean Spring 2013-2014
Maths No. Tested Fall 2008-2009
Maths No. Tested Fall 2009-2010
Maths No. Tested Fall 2010-2011
Maths No. Tested Fall 2011-2012
Maths No. Tested Fall 2012-2013
Maths No. Tested Spring 2012-2013
Maths No. Tested Spring 2013-2014
Reading Mean Fall 2008-2009
Reading Mean Fall 2009-2010
Reading Mean Fall 2010-2011
Reading Mean Fall 2011-2012
Reading Mean Fall 2012-2013
Reading Mean Spring 2012-2013
Reading Mean Spring 2013-2014
Reading No. Tested Fall 2008-2009
Reading No. Tested Fall 2009-2010
Reading No. Tested Fall 2010-2011
Reading No. Tested Fall 2011-2012
Reading No. Tested Fall 2012-2013
Reading No. Tested Spring 2012-2013
Reading No. Tested Spring 2013-2014
Science Mean Fall 2008-2009
Science Mean Fall 2009-2010
Science Mean Fall 2010-2011
Science Mean Fall 2011-2012
Science Mean Fall 2012-2013
Science Mean Spring 2012-2013
Science Mean Spring 2013-2014
Science No. Tested Fall 2008-2009
Science No. Tested Fall 2009-2010
Science No. Tested Fall 2010-2011
Science No. Tested Fall 2011-2012
Science No. Tested Fall 2012-2013
Science No. Tested Spring 2012-2013
Science No. Tested Spring 2013-2014