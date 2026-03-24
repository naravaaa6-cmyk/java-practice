const contact = {
    firstName: "Ali",
    lastName: "Mammadov",
    email: "ali@example.com",
    phone: "0501234567"
};
const { firstName, email } = contact;

const updatedContact = {contact, phone: "0559999999"
};

console.log(firstName);
console.log(email);

console.log(contact);
console.log(updatedContact);