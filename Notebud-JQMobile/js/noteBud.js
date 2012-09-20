// Notebud Web App
// Author: Mark Johnson
// Description: This app in a work in progress and some features are not yet fully implemented 

$(document).on('pageinit',function() { 

	var newNoteForm = $('#newNote');
	
	newNoteForm.validate({
		invalidHandler: function(form, validator) {
			
		},
		
		submitHandler: function() {
			// Used serializeArray() because we are using the form data internally otherwise we would use serialize()
			var data = newNoteForm.serializeArray();
			saveNotes(data);
		}
	});
});

var saveNotes = function(data) {
	console.log(data);
};