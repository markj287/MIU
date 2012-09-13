var saveNotes = function(data) {
	console.log(data);
};

$document.on(function() { 
	var newNoteForm = $('#newNote');
	
	newNoteForm.validate({
		invalidHandler: function(form, validator) {
			
		},
		
		submitHandler: function() {
			// Used serializeArray() because we are usiing the form data internally otherwise we would use serialize()
			var data = newNoteForm.serializeArray();
			saveNotes(data);
		}
	});
});