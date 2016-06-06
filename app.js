var cohort;
var i = 0;
var dataString;
var prevButton = document.createElement('button');
var nextButton = document.createElement('button');

$(document).ready(function() {

  $('.header').append('<h1>Nu Students</h1>');
  $('.prev').append( prevButton );
  $('.next').append( nextButton );
  prevButton.textContent = 'Previous Student';
  nextButton.textContent = 'Next Student';
  prevButton.id = 'previous';
  nextButton.id = 'next';


  $.getJSON('https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json', function(data){
       console.log( 'in getJSON' );
       console.log( data );
     }); // end getJSON button click

  $.ajax({
       url: 'https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json',
       dataType: 'json',
       success: function( data ){
          console.log( 'ready to rumble' );
          console.log( data );
          cohort = data;
          dataString = "<p><h2>First name: " + cohort.students[i].first_name + "</h2></p>" + "<p><h2>Last name: " + cohort.students[i].last_name + "</h2></p>" + "<p><h2>From: " + cohort.students[i].city + "</h2></p>"+ "<p><h3>Shoutout: " + cohort.students[i].shoutout + "</h3></p>";
          $('.information').append( dataString );
          console.log(cohort.students.length);
         }, // end success
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax  object

  $('#previous').on('click', function(){
    i--;
    if (i<0) {
      i = cohort.students.length - 1;
    }
    // $('.information').html( dataString );
    $('.information').html( "<p><h2>First name: " + cohort.students[i].first_name + "</h2></p>" + "<p><h2>Last name: " + cohort.students[i].last_name + "</h2></p>" + "<p><h2>From: " + cohort.students[i].city + "</h2></p>"+ "<p><h3>Shoutout: " + cohort.students[i].shoutout + "</h3></p>" );
  });

  $('#next').on('click', function(){
    i++;
    if ( i > cohort.students.length - 1) {
      i = 0;
    }
    // $('.information').html( dataString );
    $('.information').html( "<p><h2>First name: " + cohort.students[i].first_name + "</h2></p>" + "<p><h2>Last name: " + cohort.students[i].last_name + "</h2></p>" + "<p><h2>From: " + cohort.students[i].city + "</h2></p>"+ "<p><h3>Shoutout: " + cohort.students[i].shoutout + "</h3></p>" );
  });

});
