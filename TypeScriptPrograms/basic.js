var anExampleVariable = "Hello World";
console.log(anExampleVariable);
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.input = function () {
        this.username = prompt("Enter Username");
        this.password = prompt("Enter Password");
    };
    User.prototype.output = function () {
        console.log("Username:", this.username);
        console.log("Password:", this.password);
    };
    return User;
}());
var u1 = new User();
u1.output();
