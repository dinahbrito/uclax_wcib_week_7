jQuery(function() {
//congrats
	let my_count = 1;

     $('#eyes').click(function () {

       my_count++;
       if ( my_count > 4 ) {
         my_count = 1;
       }

       console.log( my_count );

       if ( my_count == 1 ) {
         $('#eyes').attr('src', 'images/eyes1.jpg');
       } else if ( my_count == 2 ) {
         $('#eyes').attr('src', 'images/eyes2.jpg');
       } else if ( my_count == 3 ) {
         $('#eyes').attr('src', 'images/eyes3.jpg');
       } else if ( my_count == 4 ) {
         $('#eyes').attr('src', 'images/eyes4.jpg');
       }
		 });
//images

			 let my_counted = 1;

			    $('#nose').click(function () {

			      my_counted++;
			      if ( my_counted > 4 ) {
			        my_counted = 1;
			      }

			      console.log( my_counted );

			      if ( my_counted == 1 ) {
			        $('#nose').attr('src', 'images/nose1.jpg');
			      } else if ( my_counted == 2 ) {
			        $('#nose').attr('src', 'images/nose2.jpg');
			      } else if ( my_counted == 3 ) {
			        $('#nose').attr('src', 'images/nose3.jpg');
			      } else if ( my_counted == 4 ) {
			        $('#nose').attr('src', 'images/nose4.jpg');
			      }
});

let my_count3 = 1;

	 $('#mouth').click(function () {

		 my_count3++;
		 if ( my_count3 > 4 ) {
			 my_count3 = 1;
		 }

		 console.log( my_count3 );

		 if ( my_count3 == 1 ) {
			 $('#mouth').attr('src', 'images/mouth1.jpg');
		 } else if ( my_count3 == 2 ) {
			 $('#mouth').attr('src', 'images/mouth2.jpg');
		 } else if ( my_count3 == 3 ) {
			 $('#mouth').attr('src', 'images/mouth3.jpg');
		 } else if ( my_count3 == 4 ) {
			 $('#mouth').attr('src', 'images/mouth4.jpg');
		 }
	 });

//button

$( "#my_button" ).on("click", function() {
					 if( $( "body" ).hasClass( "light" )) {
							 $( "body" ).removeClass( "light" );
							 $( "#my_button" ).text( "Light Mode" );
					 } else {
							 $( "body" ).addClass( "light" );
							 $( "#my_button" ).text( "Dark Mode" );
					 }
			 });

});
