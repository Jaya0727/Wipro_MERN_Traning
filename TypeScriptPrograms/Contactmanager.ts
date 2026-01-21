// Interface
interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// ContactManager Class
class ContactManager {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {
    const exists = this.contacts.find(c => c.id === contact.id);
    if (exists) {
      console.log("Error: Contact already exists.");
      return;
    }
    this.contacts.push(contact);
    console.log("Contact added successfully.");
  }

  viewContacts(): Contact[] {
    return this.contacts;
  }

  modifyContact(id: number, updatedContact: Partial<Contact>): void {
    const contact = this.contacts.find(c => c.id === id);
    if (!contact) {
      console.log("Error: Contact not found.");
      return;
    }
    Object.assign(contact, updatedContact);
    console.log("Contact updated successfully.");
  }

  deleteContact(id: number): void {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index === -1) {
      console.log("Error: Contact not found.");
      return;
    }
    this.contacts.splice(index, 1);
    console.log("Contact deleted successfully.");
  }
}

// Testing Script
const manager = new ContactManager();

manager.addContact({
  id: 1,
  name: "Jash",
  email: "Jash@gmail.com",
  phone: "9876543210"
});

manager.addContact({
  id: 2,
  name: "Praneeth",
  email: "praneeth@gmail.com",
  phone: "9123456780"
});
manager.addContact({
  id: 3,
  name: "Jaya",
  email: "Jaya@gmail..com",
  phone: "9123456780"
});

console.log("Contacts:", manager.viewContacts());

manager.modifyContact(2, { phone: "1111111111" });

manager.deleteContact(3);

console.log("Final Contacts:", manager.viewContacts());