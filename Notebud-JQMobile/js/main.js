//Mark Johnson
//VFW Project 3

// Wait until the DOM is ready 
window.addEventListener("DOMContentLoaded", function (){
    // getElementById function
    function on(x) {
        var theElement = document.getElementById(x);
        return theElement;
    } // end theElement function




    function makeCats () {
        var formTag = document.getElementsByTagName("form"), // form tag is an array
            selectListItem = on('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "groups");
        for(var i=0, j=notesCategories.length; i<j; i++) {
            var makeOption = document.createElement('option');
            var optionText = notesCategories[i];
            makeOption.setAttribute("value", "optionText");
            makeOption.innerHTML = optionText;
            makeSelect.appendChild(makeOption);
        } // end for loop
        selectListItem.appendChild(makeSelect);
    } // end makeCat function




/*
    function getSelectedRadioBtn() {
        var radio = document.forms[0].favNote; 
        for (var i=0; i<radio.length; i++) {
            if(radio[i].checked) {
                favoriteValue = radio[i].value;
            } // end if
        } // end for loop
    } // end get selected radio btn function
*/



    function getcheckedBoxBtn() {
        if(on('fav').checked) {
            favoriteValue = on('fav').value;
        } else {
            favoriteValue = "No";
        }
    } // end function






    function toggleControls(a) {
        switch(a){
            case "on":
                on('noteForm').style.display = "none";
                on('clear').style.display = "inline";
                on('displayLink').style.display = "none";
                on('displayNotes').style.display = "inline";
                break;
            case "off":
                on('noteForm').style.display = "block";
                on('clear').style.display = "inline";
                on('displayLink').style.display = "inline";
                on('displayNotes').style.display = "none";
                break;
            default:
                return false;
        }
    } // end toggleControls function







    function saveNotes(key){
        if(!key){
            var id                     = Math.floor(Math.random()*1000001);
        }else{
            id = key;
        }
        // gather up all form fields values and store them in an object 
        // object properites will contain an array with form labels and input values 
       // getSelectedRadioBtn(); // calls function
        getcheckedBoxBtn();
        var item                	= {};
            item.group        	= ["Group", on('groups').value ];
            item.notetitle    	= ["Title", on('notetitle').value ];
            item.noteinfo     	= ["Note", on('noteinfo').value ];
            item.date           	= ["Date", on('date').value ];
            item.items         	= ["Number of Itmes", on('items').value ];
            item.attach            	= ["Attach a File", on('attach').value ];
            item.favorite        	= ["Favorite Note", favoriteValue ];

            // save data into local storage. Use stringify to convert our object to a string 
            localStorage.setItem(id, JSON.stringify(item));            
            alert("Note Saved");
    } // end store data function



    function getNotes() {
        toggleControls("on");
        if(localStorage.length === 0){
            alert("There is no data here! JSON data will be added as default.");
            autoFillData();
        };

       // var makeDiv = document.createElement('div');
        //makeDiv.setAttribute("id", "items");
        //var createList = document.createElement('ul');
        //makeDiv.appendChild(createList); // puts createList into ul element created above 
      //  document.body.appendChild(display); // attach makeDiv to the document 
        document.createElement(display);
        on('items').style.display = "block";
        
        for(i=0, entries=localStorage.length; i<entries; i++) {
            //var createLi = document.createElement('li');
            //var linksList = document.createElement('li');
            //createList.appendChild(createLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var savedNote = JSON.parse(value); // parse the save note object back into an object 
            var createSubList = document.createElement('ul');
            createLi.appendChild(createSubList);
            getImage(savedNote.groups[1],createSubList);
            
            for(var a in savedNote) {
                var creatSubListItem = document.createElement('li');
                createSubList.appendChild(creatSubListItem);
                var subText = savedNote[a][1] + " " + savedNote[a][1];
                creatSubListItem.innerHTML = subText;
                createSubList.appendChild(linksList);
            } // end for in loop
            makeItemLinks(localStorage.key(i), linksList); // calls function that will add buttons. 
        } // end for loop
    } // end getNotes function




    
    //get the right images for each item in our data 
    function getImage(catName, createSubList){
        var imageList = document.createElement('li');
        createSubList.appendChild(imageList);
        var newImg = document.createElement('img');
        var setSrc = newImg.setAttribute("src","images/"+ catName + ".png");
        imageList.appendChild(newImg); //append child method attach image to screen
    } // end get image function






    //auto populate our form because we are lazy
    function autoFillData(){
        for(var n in json){
            var id = Math.floor(Math.random()*1000001);
            localStorage.setItem(id, JSON.stringify(json[n]));
        }
    }



    function makeItemLinks(key, linksList){
        editLink = document.createElement('a');
        editLink.href="#";
        editLink.key = key;
        var editNote = "Edit Note";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editNote;
        linksList.appendChild(editLink);


        deleteLink = document.createElement('a');
        deleteLink.href="#";
        deleteLink.key = key;
        var deleteNote = "Delete Note";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteNote;
        linksList.appendChild(deleteLink);
    } // end makeListLinks function


    function editItem(){
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

        toggleControls("off"); // shows our form

        // Fill in our from field with the current values 
        on('groups').value = item.group[0];
        on('notetitle').value = item.notetitle[0];
        on('noteinfo').value = item.noteinfo[0];
        on('date').value = item.date[0];
        on('items').value = item.items[0];
        on('attach').value = item.attach[0];

        if(item.favorite[0] == "Yes"){
            on('fav').setAttribute("checked", "checked");
        }

        save.removeEventListener("click", saveNotes); //change save button state 
        on('submit').value = "Edit Note";
        var editSubmit = on('submit');
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;

    } // end edit Links function 


    function deleteItem(){
        var askUser = confirm("Delete note!");
        if(askUser){
            localStorage.removeItem(this.key);
            alert("Note was deleted!");
            window.location.reload();
        }else {
            alert("Note not deleted!");
        }
    } // end delete item function



    function clearNotes() {
        if(localStorage.length === 0){
            alert("Move along buddy, nothing here to clear.");
        } else {
            localStorage.clear();
            alert("All notes were deleted");
            window.location.reload();
            return false;
        } // end if 
    } // end clearNotes function
    

    function validate(e) {
        // elements we want to check if user filled in 
        var getGroup = on('groups');
        var    getNotetitle = on('notetitle');
        var    getNoteinfo = on('noteinfo');

        errorMessage.innerHTML = "";
        /*getGroup.style.border = "2px solid black";
        getNotetitle.style.border = "2px solid black";
        getNoteinfo.style.border = "2px solid black";
        */
            //check for in category errors 
            var errorsArray = [];
            if(getGroup.value === "--Choose a Category--"){
                var groupError = "Please choose a group!";
                getGroup.style.border = "2px solid red";
                errorsArray.push(groupError);
            }

            // check note title for errors 
            if(getNotetitle.value === ""){
                var noteTitleError = "Please write a title!";
                getNotetitle.style.border = "2px solid red";
                errorsArray.push(noteTitleError);
            }

            // check note info for errors 
            if(getNoteinfo.value === ""){
                var noteInfoError = "Please write some notes!";
                getNoteinfo.style.border = "2px solid red";
                errorsArray.push(noteInfoError);
            }

            // check for email validation. My app doesn't require an email but i want to find out how to validate an email so i will comment out this part 
            /*var regEx = /^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+on/;
            if(!(regEx.exec(getEmail.value))){
                var emailError = "Please enter a valid email address!";
                getEmail.style.border = "1px solid red";
                errorsArray.push(emailError);
            }*/

            // display errors on the screen
            if(errorsArray.length >=1){
                for(var i=0, j=errorsArray.length; i<j; i++){
                    var txt = document.createElement('li');
                    txt.innerHTML = errorsArray[i];
                    errorMessage.appendChild(txt); // get element errors id then put the tex var in the ul 
                }
                e.preventDefault();
                return false;
            }else{
                    saveNotes(this.key);
                }
    } // end validate function



    // Variables defaults 
    var notesCategories = ["--Choose a Category--","Grocery","Fitness","Entertainment","Dining","Shopping","Sports"],
        favoriteValue = "No",
        errorMessage = on('errors');
        ;
    makeCats();


    // Set links and submits click events 
    var displayLink = on('displayLink');
    displayLink.addEventListener("click", getNotes);
    var clearLink = on('clear');
    clearLink.addEventListener("click", clearNotes);
    var save = on('submit');
    save.addEventListener("click", validate);


}); // end main function

