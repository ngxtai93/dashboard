var feedAnimalID="";
var resultCount=0;
$(document).ready(function () {

    function testAnim(x) {
        $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    };

    //function to assign finish line according to race lanes
    function assignHeightToFinishLine(){
        var getHeight=$(".options-div").height();
        $(".finish-line-div img").css("height",getHeight);
    }

    $('.food-img div').on('mouseenter', function () {
        var anim = 'bounce';
        //testAnim(anim);
        $(this).removeClass().addClass(anim + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    });
    assignHeightToFinishLine();
    //When click on feed food icon
    $(".feed-food-icon").on('click', function(){
        feedAnimalID =  $(this).closest(".animal-feed-div").attr("id");
    });
    
    //When click on feed button in modal
    $(".feed-btn").on('click', function(){
        var getFoodName="";
        $(".food-options input[type=radio]").each(function(){
            if($(this).prop('checked')==true){
                getFoodName=$(this).attr('value');
            }
        });
        $("#"+feedAnimalID).find(".eated-food-div").fadeIn();
        $("#"+feedAnimalID).find(".eated-food-div").children().remove();
        var img='<img src="images/'+getFoodName+'.png"  class="eated-food"/>';
        $("#"+feedAnimalID).find(".eated-food-div").append(img);
        //add food to animals
        
        $("#"+feedAnimalID).siblings(".animal-img-div").attr('food',getFoodName);
    });
    //Whcn clicked on start race
    $(".start-race").on('click', function(e){
        e.preventDefault();
        $(".page-spinner").show();
        var raceInfo=[];
        $(".race-div").each(function(){
            var outerDiv=$(this).find(".animal-img-div");
            var getID=outerDiv.attr("id");
            var getName=outerDiv.attr("animal_name");
            var getFood=outerDiv.attr("food");
            var getSpeed=outerDiv.attr("speed");
            var obj={id:getID, animal:getName, food:getFood};
            raceInfo.push(obj);
            console.log(raceInfo);
        });
        
        
        console.log(' Race Info '+JSON.stringify(raceInfo));
        
        /*[{"id":'1', "animal":'Elephant', food:'Meat'},
{"id":'2', "animal":'Lion', food:'Banana'},
{"id":'3', "animal":'Tiger', food:''},
{"id":'4', "animal":'Horse', food:'�}]
*/
        /*Send the JSON*/
        $.ajax({
          url: '/AnimalRaceWeb/rest/backend',
          dataType: 'json',
          data: JSON.stringify(raceInfo),
          type: 'post',
          cache: false,
          success: function(jsonResponse)
          {
            //data in a response 
        	  console.log(jsonResponse);
        	  //alert(" daata "+jsonResponse);
        	  
        	  /*var jsonResponse=[{id:'1', animal_name:'elephant', food:'', speed:'10', position:'4'}, 
                                {id:'2', animal_name:'cheetah', food:'', speed:'6', position:'1'},
                                {id:'3', animal_name:'horse', food:'', speed:'8', position:'3'},
                                {id:'4', animal_name:'lion', food:'', speed:'7', position:'2'}];*/
        	  
        	  var count=0;
              var speedArray=[];//to show result once the race is complete
              $(".race-div").each(function(){
                  var id=jsonResponse[count].id;
                  var speed=jsonResponse[count].speed;
                  speed=50/parseInt(speed);
                  var animal=jsonResponse[count].animal_name;
                  var race_position=jsonResponse[count].position;
                  $(this).find("div [id="+id+"]").attr("speed", speed);
                  $(this).find("div [id="+id+"] .race-position").text(race_position);
                  $(this).find("div [id="+id+"] .animal-gif").attr("src", "images/"+animal+".gif");
                  count+=1;
                  speedArray.push(speed);
                  console.log(speed);
              });
              //find the maximum time from speed
              var showResultTime=Math.max.apply(Math,speedArray)*1000;
        	  
              $(".overlay1").hide();
              //start moving animals
              $(".animal-img-div").each(function(){
                  var getSpeed=i=parseInt($(this).attr("speed"))*1000;
                  var getName=$(this).attr("animal_name");
                  $(this).find(".img-div").animate({left:"-750%"},getSpeed,function(){
                      $(this).find(".animal-gif").attr("src", "images/"+getName+".png");
                  });
              });
              //show Results
              setTimeout(function(){
                  $(".race-position").fadeIn();
                  $(".page-spinner").hide();
                  $(".start-race").hide();
                  $(".refresh").fadeIn();
              },showResultTime);
              
          },
          error: function(request, textStatus, errorThrown)
          {
            alert("error:" + textStatus);
          }
        });
        /*Response from the JSON*/
        /*var jsonResponse=[{id:'1', animal_name:'elephant', food:'', speed:'10', position:'4'}, 
                         {id:'2', animal_name:'cheetah', food:'', speed:'6', position:'1'},
                         {id:'3', animal_name:'horse', food:'', speed:'8', position:'3'},
                         {id:'4', animal_name:'lion', food:'', speed:'7', position:'2'}];
        */
        //Assign the response string to animals
       /* var count=0;
        var speedArray=[];//to show result once the race is complete
        $(".race-div").each(function(){
            var id=jsonResponse[count].id;
            var speed=jsonResponse[count].speed;
            var animal=jsonResponse[count].animal_name;
            var race_position=jsonResponse[count].position;
            $(this).find("div [id="+id+"]").attr("speed", speed);
            $(this).find("div [id="+id+"] .race-position").text(race_position);
            $(this).find("div [id="+id+"] .animal-gif").attr("src", "images/"+animal+".gif");
            count+=1;
            speedArray.push(speed);
            console.log(raceInfo);
        });
        //find the maximum time from speed
        var showResultTime=Math.max.apply(Math,speedArray)*1000;*/
        //Hide Spinner
        /*$(".overlay1").hide();
        //start moving animals
        $(".animal-img-div").each(function(){
            var getSpeed=i=parseInt($(this).attr("speed"))*1000;
            var getName=$(this).attr("animal_name");
            $(this).find(".img-div").animate({left:"-750%"},getSpeed,function(){
                $(this).find(".animal-gif").attr("src", "images/"+getName+".png");
            });
        });
        //show Results
        setTimeout(function(){
            $(".race-position").fadeIn();
            $(".page-spinner").hide();
            $(".start-race").hide();
            $(".refresh").fadeIn();
        },showResultTime);*/
        //console.log(showResultTime)
    });
    
    //When click on Refresh
    $(".refresh").on('click', function(){
        location.reload();
    });
});