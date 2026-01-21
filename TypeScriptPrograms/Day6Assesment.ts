import * as readline from "readline";

// Interface
interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// Implementing Class
class ContactManager {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {
    this.contacts.push(contact);
    console.log("Contact added successfully.");
  }

  viewContacts(): Contact[] {
    return this.contacts;
  }

  modifyContact(id: number, updatedContact: Partial<Contact>): void {
    const contact = this.contacts.find(c => c.id === id);

    if (!contact) {
      console.log("Error: Contact does not exist.");
      return;
    }

    Object.assign(contact, updatedContact);
    console.log("Contact modified successfully.");
  }

  deleteContact(id: number): void {
    const index = this.contacts.findIndex(c => c.id === id);

    if (index === -1) {
      console.log("Error: Contact does not exist.");
      return;
    }

    this.contacts.splice(index, 1);
    console.log("Contact deleted successfully.");
  }
}

// Real Time Testing Script

const manager = new ContactManager();
const rl = readline.createInterface({
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

  rl.question("Enter your choice: ",(choice) => {
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
  rl.question("Enter ID: ", (id) => {
    rl.question("Enter Name: ", (name) => {
      rl.question("Enter Email: ", (email) => {
        rl.question("Enter Phone: ", (phone) => {
          manager.addContact({
            id: Number(id),
            name,
            email,
            phone
          });
          showMenu();
        });
      });
    });
  });
}

function viewContacts() {
  const contacts = manager.viewContacts();
  console.log("Contacts:", contacts);
  showMenu();
}

function modifyContact() {
  rl.question("Enter ID to modify: ", (id) => {
    rl.question("Enter new Name: ", (name) => {
      rl.question("Enter new Email: ", (email) => {
        rl.question("Enter new Phone: ", (phone) => {
          manager.modifyContact(Number(id), { name, email, phone });
          showMenu();
        });
      });
    });
  });
}

function deleteContact() {
  rl.question("Enter ID to delete: ", (id) => {
    manager.deleteContact(Number(id));
    showMenu();
  });
}

showMenu();
