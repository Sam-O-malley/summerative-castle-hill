

$(document).ready(function(){

$("#wrapperGuest").hide();
$("#wrapperDate").hide();
$("#wrapperConfirm").hide();
$("#wrapperMap").hide();

  $(".fastScroll").fullpage();
  
  $("#DateBack").click(function() {
     $("#wrapperGuest").show();
    $("html, body, #wrapperDate").animate({
        scrollTop: $("#wrapperGuest").offset().top
    },1500);
    // $("#wrapperDate").hide(0);
});



$("#confirmBack").click(function() {
     $("#wrapperDate").show();
     $("html, body, #wrapperConfirm").animate({
         scrollTop: $("#wrapperDate").offset().top
     }, 1500);
      // $("#wrapperConfirm").hide(0);
});




 });

var days, guests, price, mealPrice;

$("#datepicker1").datepicker({ 
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    minDate: new Date(),
    maxDate: "+1y",
    onSelect: function(date){

        var selectedDate = new Date(date);
        var msecsInADay = 86400000;
        var stDate = new Date(selectedDate.getTime() + msecsInADay);

       //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
        $("#datepicker2").datepicker( "option", "minDate", stDate );
        var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);


        $("#datepicker2").datepicker( "option", "maxDate", enDate );
    }

});

 
$("#datepicker2").datepicker({ 
    dateFormat: "yy-mm-dd",
    changeMonth: true
});

//Find the number of days between dates
   function dateConfirm() {
    
    var start = $("#datepicker1").datepicker("getDate");
    var end = $("#datepicker2").datepicker("getDate");
     days   = (end - start)/1000/60/60/24;
    

    document.getElementById("NumDaysStaying").value = days ;
    console.log(days);
    if (days == 0) {
      $.alert({
    title: 'Alert!',
    content: 'please enter dates',
  });
      // alert ("please enter dates");
      $("#datepicker1").focus();
      $( "#confirmInfo" ).click(function( event ) {
          event.preventDefault();
          $("#wrapperDate").show();
          // $("#wrapperConfirm").hide();
        });
      
    } else {
       
     
$("#confirmInfo").click(function() {
     $("#wrapperConfirm").show();
    $("html, body, #wrapperDate").animate({
        scrollTop: $("#wrapperConfirm").offset().top
    }, 1500);
    // $("#wrapperDate").hide(0);

});

 };


 $("#mapBack").click(function() {
     $("#wrapperConfirm").show();
    $("html, body, #wrapperMap").animate({
        scrollTop: $("#wrapperConfirm").offset().top
    }, 1500);
        // $("#wrapperMap").hide(0);
});

 
  }




$("#button__opening").click(function() {
     $("#wrapperGuest").show();
    $("html, body, #wrapperOpening").animate({
        scrollTop: $("#wrapperGuest").offset().top
        }, 1500);
     // $("#button__opening").hide(0);

});



$(".guestNum ").click(function() {
     $("#wrapperDate").show();
    $("html, body , #wrapperGuest").animate({
      scrollTop: $("#wrapperDate").offset().top
    }, 1500);
      // $("#wrapperGuest").hide(0);
});






//accommodation dropdown section

// $("#AccommodationOptions").click(function() {
//      $("#wrapperMap").show();
//     $("html, body, #wrapperConfirm").animate({
//         scrollTop: $("#wrapperMap").offset().top
//     }, 2000);
//      $("#wrapperConfirm").hide(0);

//  });



$("#Hostel").click(function() {
     $("#wrapperMap").show();
    $("html, body, #wrapperConfirm").animate({
        scrollTop: $("#wrapperMap").offset().top
    }, 1500);
     // $("#wrapperConfirm").hide(0);

});

$("#Hotel").click(function() {
     $("#wrapperMap").show();
    $("html, body, #wrapperConfirm").animate({
        scrollTop: $("#wrapperMap").offset().top
    }, 1500);
    // $("#wrapperConfirm").hide(0);

});

$("#House").click(function() {
     $("#wrapperMap").show();
    $("html, body, #wrapperConfirm").animate({
        scrollTop: $("#wrapperMap").offset().top
    }, 1500);
    // $("#wrapperConfirm").hide(0);
});

$("#Motel").click(function() {
     $("#wrapperMap").show();
    $("html, body, #wrapperConfirm").animate({
        scrollTop: $("#wrapperMap").offset().top
    }, 1500);
    // $("#wrapperConfirm").hide(0);
});




function store1() {
guests = 1;
console.log(guests);
document.getElementById("confirmationInformation").value = guests;

}


function store2() {
guests = 2;
console.log(guests);
document.getElementById("confirmationInformation").value = guests;
}


function store3() {
guests = 3;
console.log(guests);
document.getElementById("confirmationInformation").value = guests;

}

function store4() {
guests = 4;
console.log(guests);
document.getElementById("confirmationInformation").value = guests;

}


function store5() {
guests = 5;
console.log(guests);
document.getElementById("confirmationInformation").value = guests;

}
   
    //1 guest critera
        $("#Motel").show();
        $("#Hotel").show();
        $("#House").show();
        $("#Hostel").show();

$("#sample").click(function(){
      if ((guests < 2) && (days <=5)) {
       
        $("#Motel").hide();
        $("#Hotel").show();
        $("#House").show();
        $("#Hostel").show();
       }
        });
     
     $("#sample").click(function(){
      if ((guests < 2) && (days > 5)) {

        $("#Motel").hide();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").show();
     }
     });


      $("#sample").click(function(){
      if ((guests < 2) && (days > 10)) {
        
        $("#Motel").hide();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
     }
    });
      
  
//2 guest critera
    
$("#sample").click(function(){
      if ((guests == 2) && (days <=5)) {
       
        $("#Motel").show();
        $("#Hotel").show();
        $("#House").show();
        $("#Hostel").hide();
       }
        });
      
      $("#sample").click(function(){
      if ((guests == 2) && (days <=3)) {
       
        $("#Motel").hide();
        $("#Hotel").show();
        $("#House").show();
        $("#Hostel").hide();
       }
        });
     



     $("#sample").click(function(){
      if ((guests == 2) && (days > 5)) {

        $("#Motel").show();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
     }
     });


      $("#sample").click(function(){
      if ((guests == 2) && (days > 10)) {
        
        $("#Motel").hide();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
     }
    });
      
//       //3 guest critera
 
$("#sample").click(function(){
      if ((guests == 3) && (days <=5)) {
       
        $("#Motel").show();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
       }
        });
     
     $("#sample").click(function(){
      if ((guests == 3) && (days <=3)) {
       
        $("#Motel").hide();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
       }
        });
    

     $("#sample").click(function(){
      if ((guests == 3) && (days > 5)) {

        $("#Motel").show();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
     }
     });


      $("#sample").click(function(){
      if ((guests == 3) && (days > 10)) {
        
        $("#Motel").hide();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
     }
    });
// //             //4 guest critera
 

$("#sample").click(function(){
      if ((guests == 4) && (days <=5)) {
       
        $("#Motel").show();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
       }
        });
     
     $("#sample").click(function(){
      if ((guests == 4) && (days <=3)) {
       
        $("#Motel").hide();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
       }
        });
    

     $("#sample").click(function(){
      if ((guests == 4) && (days > 5)) {

        $("#Motel").show();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
     }
     });


      $("#sample").click(function(){
      if ((guests == 4) && (days > 10)) {
        
        $("#Motel").hide();
        $("#Hotel").hide();
        $("#House").show();
        $("#Hostel").hide();
     }
    });

//array
var accom=[
  {
    name:   "CastleHill Hostel",
    type: "Hostel",
    price:  30,
    minPeople: 1,
    maxPeople: 1,
    minNight: 1,
    maxNight: 10,
    lat: -43.209453,
    lng: 171.714955,
    image:("images/hostelImage1.png"),
    images2:("images/hostelImage2.png"),

},

{
    name:   "Hotel CastleHill",
    type: "Hotel",
    price:  157,
    minPeople: 1,
    maxPeople: 2,
    minNight: 1,
    maxNight: 5,
    lat: -43.209848,
    lng: 171.716415
    // image:("images/hotel.png"),

},
{
   name:   "CastleHill Motel",
    type: "Motel",
    price:  90,
    minPeople: 2,
    maxPeople: 4,
    minNight: 3,
    maxNight: 10,
    lat: -43.209370,
    lng: 171.716705,
    image:("images/motelImage1.png"),
    images2:("images/motelImage2.png"),
},
{
   name:   "CastleHill B&B",
    type: "House",
    price:  240,
    minPeople: 1,
    maxPeople: 4,
    minNight: 2,
    maxNight: 15,
    lat: -43.209257,
    lng: 171.715758,
   image:("images/houseImage1.png"),
    images2:("images/houseImage2.png"),


}
];



var mealPrice;

function storeNoMeal() {
  console.log('hi');
mealPrice=0;
console.log(mealPrice);
document.getElementById('food').innerHTML =document.getElementById("foodNone").innerHTML ;
$(".collapseOne").hide;

}

function storeMealDay() {
console.log('hi');
mealPrice=100;
console.log(mealPrice);
document.getElementById('food').innerHTML =document.getElementById("foodday").innerHTML ;
$(".collapseOne").hide;
}
function storeMeal3Days() {
mealPrice=250;
console.log(mealPrice);
document.getElementById('food').innerHTML =document.getElementById("food3days").innerHTML ;
$(".collapseOne").hide;

}
function storeMealWeek() {
mealPrice=550;
console.log(mealPrice);
document.getElementById('food').innerHTML =document.getElementById("foodweek").innerHTML ;
$(".collapseOne").hide;
}

var acommType;

function storeHostel() {

  accomType="Hostel";

  for (var i = 0; i < accom.length; i++) {
    if (accomType == accom[i].type) {
      price=accom[i].price;
      map=new google.maps.LatLng(-43.209453, 171.714955);
      console.log(accomType,price,name);
      document.getElementById("accomTitle").innerHTML=accom[i].name;

console.log(accom[i].image, accom[i].image2);
                                                                  
       accomodate__image.innerHTML += '<img  src="'+accom[i].image+'" alt="hostel image">';
       accomodate__images2.innerHTML += '<img  src="'+accom[i].images2+'" alt="hostel image 2">';
      
    }
  }
}

function storeMotel() {

  accomType="Motel";

  for (var i = 0; i < accom.length; i++) {
    if (accomType == accom[i].type) {
      price=accom[i].price;
      map=new google.maps.LatLng(-43.209370, 171.716705);
      document.getElementById("accomTitle").innerHTML=accom[i].name;
      console.log(accomType,price);
       accomodate__image.innerHTML += '<img  src="'+accom[i].image+'" alt="Motel image">';
       accomodate__images2.innerHTML += '<img  src="'+accom[i].images2+'" alt="Motel image 2">';
     
    }
  }
}


function storeHotel() {

  accomType="Hotel";

  for (var i = 0; i < accom.length; i++) {
    if (accomType == accom[i].type) {
      price=accom[i].price;
       map=new google.maps.LatLng(-43.209848,171.716415);
        document.getElementById("accomTitle").innerHTML=accom[i].name;
      console.log(accomType,price);
       accomodate__image.innerHTML += '<img  src="'+accom[i].image+'" alt="hostel image">';
       accomodate__images2.innerHTML += '<img  src="'+accom[i].images2+'" alt="hostel image 2">';
    }
  }
}


function storeHouse() {

  accomType="House";

  for (var i = 0; i < accom.length; i++) {
    if (accomType == accom[i].type) {
      price=accom[i].price;
       map=new google.maps.LatLng(-43.209257,171.715758);
      console.log(accomType,price);
      document.getElementById("accomTitle").innerHTML=accom[i].name;
       accomodate__image.innerHTML += '<img  src="'+accom[i].image+'" alt="house image">';
       accomodate__images2.innerHTML += '<img  src="'+accom[i].images2+'" alt="house image 2">';

    }
  }
}



function calculateTotal(){
 

  var total= days * (price + mealPrice);
  console.log(total);
document.getElementById("FinalPrice").innerHTML=total + "NZ$";
}
  $("#accomModal").show();


// //bring map
function showMap(){

var i, map;
var marker=[];

    map = new google.maps.Map(document.getElementById("map"), {
     zoom: 12,
     center: {lat: -43.209344, lng:171.714218},
    
   });

             
     

   // Adding markers
   for (i = 0; i < accom.length; i++) {
    if (accomType == accom[i].type) {
     marker[i] = new google.maps.Marker({
       position: {lat: accom[i].lat, lng: accom[i].lng} ,
      
       map: map,

     });
  
marker[i].addListener('click', function(e) {
    $(".modal-header .modal-title").text(this.title);
    $('#accommlModal').modal('show');

  });
    

  
   }
 }

  
}
    




