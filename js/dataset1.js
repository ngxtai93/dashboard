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

 rederDataset5(datasetName, parentDiv) {
    DataFrame.fromCSV('datasets/'+datasetName+'.csv').then(
        df => {
          //chart()
          // var groupedDF = df.groupBy('ZIP').aggregate(group => group.count()).rename('aggregation', 'Count');
          // chartVar = groupedDF.toCollection();
                          //console.log(groupedDF.aggregate(group => group.count()));

             //console.log(cleanDF.listColumns());
             const selectColumns = df.select('DBN','DISTRICT','SCHOOL','PRINCIPAL','PROGRESS REPORT TYPE','SCHOOL LEVEL',
             								 'PEER INDEX','2011-2012 OVERALL GRADE','2011-2012 OVERALL SCORE',
             								 '2011-12 OVERALL PERCENTILE','2011-2012 PROGRESS CATEGORY SCORE',
             								 '2011-2012 PROGRESS GRADE','2011-2012 PERFORMANCE CATEGORY SCORE',
             								 '2011-2012 PERFORMANCE GRADE','2011-2012 ENVIRONMENT CATEGORY SCORE',
             								 '2011-2012 ENVIRONMENT GRADE','2011-2012 COLLEGE AND CAREER READINESS SCORE',
             								 '2011-2012 COLLEGE AND CAREER READINESS GRADE','2011-2012 ADDITIONAL CREDIT',
             								 '2010-11 PROGRESS REPORT GRADE','2009-10 PROGRESS REPORT GRADE');

                dataset5Data = selectColumns.toCollection();
                 //console.log(test);
                 var thead = '<tr>'+
                 				'<th>DBN</th><th>DISTRICT</th><th>SCHOOL</th><th>PRINCIPAL</th>'+
                 				'<th>PROGRESS REPORT TYPE</th><th>SCHOOL LEVEL</th><th>PEER INDEX</th>'+
                 				'<th>2011-2012 OVERALL GRADE</th><th>2011-2012 OVERALL SCORE</th>'+
                 				'<th>2011-12 OVERALL PERCENTILE</th><th>2011-2012 PROGRESS CATEGORY SCORE</th>'+
                 				'<th>2011-2012 PROGRESS GRADE</th><th>2011-2012 PERFORMANCE CATEGORY SCORE</th>'+
                 				'<th>2011-2012 PERFORMANCE GRADE</th><th>2011-2012 ENVIRONMENT CATEGORY SCORE</th>'+
                 				'<th>2011-2012 ENVIRONMENT GRADE</th><th>2011-2012 COLLEGE AND CAREER READINESS SCORE</th>'+
                 				'<th>2011-2012 COLLEGE AND CAREER READINESS GRADE</th>'+
                 				'<th>2011-2012 ADDITIONAL CREDIT</th><th>2010-11 PROGRESS REPORT GRADE</th>'+
                 				'<th>2009-10 PROGRESS REPORT GRADE</th>';
                               '</tr>';
                  $("#"+parentDiv+"Table thead").html(thead);
                  var tbody = $("#"+parentDiv+"Table tbody");

            for ( var i = 0; i < dataset5Data.length; i++) {
              var content = '<tr>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                              '<td>'+dataset5Data[i][""]+'</td>'+
                            '</tr>';
              $(tbody).append(content);
            }
        }
    ).catch(err => {
        console.log(err);
    });
  }












