const anExampleVariable = "Hello World"
console.log(anExampleVariable)
class User {
    username: string;
    password: string;
    input() {
        this.username = prompt("Enter Username");
        this.password = prompt("Enter Password");
    }
    output() {
        console.log("Username:", this.username);
        console.log("Password:", this.password);
    }
}
let u1 = new User();
u1.output();