var userMap = new Map();
userMap.set(101, "Niti");
userMap.set(102, "Nitin");
userMap.set(103, "Jatin");
console.log(userMap.get(101));
var items = ["laptop", "mouse", "keyboard"];
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    console.log("The value ", item);
}
var userData = {
    id: 101,
    name: "Niti",
    salary: 54545,
    display: function () {
        return this.salary * 0.1;
    }
};
console.log("the id is :", userData.id);
console.log("the name is :", userData.name);
console.log("the updated bonus is :", userData.display());
console.log("the id is :", userData.id);
