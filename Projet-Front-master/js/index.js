var selected = 1 ;

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    hideDetails();
    hideForm();
    displayContacts();
}

document.getElementById('deleteAllButton').addEventListener('click', function() {
    clearContacts();
});


function deleteContact() {
    if (selectedContact !== null) {
        contacts.splice(selectedContact, 1);
        saveContacts();
        displayContacts();
        selectedContact = null;
        hideDetails();
        hideForm();
    }
}

document.getElementById('deleteAllButton').addEventListener('click', function() {
    clearContacts();
    hideDetails();
 });




document.getElementById("select").addEventListener('change', function() {
    selected = this.value  ;
    Trier();
    displayContacts();
});


