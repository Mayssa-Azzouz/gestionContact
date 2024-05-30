
var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
var selectedContact = null;

function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function clearContacts() {
    contacts = [];
    saveContacts();
    displayContacts();
}