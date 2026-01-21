let userMap = new Map<number,string>();
userMap.set(101,"Jaya");
userMap.set(102,"Nitin");
userMap.set(103,"Niti");
console.log(userMap.get(101));
let items = ["laptop","mouse","keyboard"];
for(let item of items){
    console.log("The value " , item);
}

interface users{
id:number;
name:string;
salary:number;
display(): number
}
let userData : users={
id:101,
name:"Niti",
salary:54545,
display() :number
{
    return this.salary*0.1;
}
}
console.log("the id is :" ,userData.id);
console.log("the name is :" ,userData.name);
console.log("the updated bonus is :" ,userData.display());
console.log("the id is :" ,userData.id);