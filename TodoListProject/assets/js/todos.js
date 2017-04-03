// Check off specific to-dos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on span to delete to-do
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new to-do
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// Grab new to-do text from input
		var toDoText = $(this).val();
		$(this).val("");
		// Create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoText + "</li>");
	}
});

// Fade in/out input
$(".fa-pencil-square").click(function() {
	$("input[type='text']").fadeToggle();
})

