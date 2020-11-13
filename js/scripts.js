jQuery(function() {

let my_switch = false;

$('#my_button').click(function () {

	if ( my_switch == false ) {
		my_switch = true;
		$('#my_image').attr('src', 'images/boy.jpg');
	} else {
		my_switch = false;
		$('#my_image').attr('src', 'images/girl.jpg');
	}

});

});
