"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Implementing Class
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
    }
    ContactManager.prototype.addContact = function (contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully.");
    };
    ContactManager.prototype.viewContacts = function () {
        return this.contacts;
    };
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var contact = this.contacts.find(function (c) { return c.id === id; });
        if (!contact) {
            console.log("Error: Contact does not exist.");
            return;
        }
        Object.assign(contact, updatedContact);
        console.log("Contact modified successfully.");
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = this.contacts.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.log("Error: Contact does not exist.");
            return;
        }
        this.contacts.splice(index, 1);
        console.log("Contact deleted successfully.");
    };
    return ContactManager;
}());
// Real Time Testing Script
var manager = new ContactManager();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function showMenu() {
    console.log("Contact Manager");
    console.log("1.Add Contact");
    console.log("2.View Contacts");
    console.log("3.Modify Contact");
    console.log("4.Delete Contact");
    console.log("5.Exit");
    rl.question("Enter your choice: ", function (choice) {
        switch (choice) {
            case "1":
                addContact();
                break;
            case "2":
                viewContacts();
                break;
            case "3":
                modifyContact();
                break;
            case "4":
                deleteContact();
                break;
            case "5":
                console.log("Exiting");
                rl.close();
                break;
            default:
                console.log("Invalid choice");
                showMenu();
        }
    });
}
function addContact() {
    rl.question("Enter ID: ", function (id) {
        rl.question("Enter Name: ", function (name) {
            rl.question("Enter Email: ", function (email) {
                rl.question("Enter Phone: ", function (phone) {
                    manager.addContact({
                        id: Number(id),
                        name: name,
                        email: email,
                        phone: phone
                    });
                    showMenu();
                });
            });
        });
    });
}
function viewContacts() {
    var contacts = manager.viewContacts();
    console.log("Contacts:", contacts);
    showMenu();
}
function modifyContact() {
    rl.question("Enter ID to modify: ", function (id) {
        rl.question("Enter new Name: ", function (name) {
            rl.question("Enter new Email: ", function (email) {
                rl.question("Enter new Phone: ", function (phone) {
                    manager.modifyContact(Number(id), { name: name, email: email, phone: phone });
                    showMenu();
                });
            });
        });
    });
}
function deleteContact() {
    rl.question("Enter ID to delete: ", function (id) {
        manager.deleteContact(Number(id));
        showMenu();
    });
}
showMenu();
