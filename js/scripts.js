jQuery(function() {

	let my_count = 1;

     $('#my_words').click(function () {

       my_count++;
       if ( my_count > 3 ) {
         my_count = 1;
       }

       console.log( my_count );

       if ( my_count == 1 ) {
         $('#my_words').attr('src', 'images/blue.jpg');
       } else if ( my_count == 2 ) {
         $('#my_words').attr('src', 'images/pink.jpg');
       } else if ( my_count == 3 ) {
         $('#my_words').attr('src', 'images/green.jpg');
       }
		 });

			 let my_counted = 1;

			    $('#my_image').click(function () {

			      my_counted++;
			      if ( my_counted > 3 ) {
			        my_counted = 1;
			      }

			      console.log( my_counted );

			      if ( my_counted == 1 ) {
			        $('#my_image').attr('src', 'images/boy.jpg');
			      } else if ( my_counted == 2 ) {
			        $('#my_image').attr('src', 'images/girl.jpg');
			      } else if ( my_counted == 3 ) {
			        $('#my_image').attr('src', 'images/baby.jpg');
			      }



});

});
