jQuery(function() {

let my_switch = false;

$('#my_image').click(function () {

	if ( my_switch == false ) {
		my_switch = true;
		$('#my_image').attr('src', 'images/boy.jpg');
	} else {
		my_switch = false;
		$('#my_image').attr('src', 'images/girl.jpg');
	}
});

let red_switch = false;

$('#my_words').click(function (){

	if ( red_switch == false ) {
		red_switch = true;
		$('#my_words').attr('src', 'images/blue.jpg');
	} else {
		red_switch = false;
		$('#my_words').attr('src', 'images/pink.jpg');
	}

});

});
