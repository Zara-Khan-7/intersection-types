interface teacher {
    teacherid:number,
    name:string,
};

interface student {
    studentid: number,
    studentname:string,
};

type intersection = teacher & student;

let obj1 : intersection = {
    teacherid:123,
    name:"Shahida",
    studentid:1230,
    studentname:"Aleena",
};

console.log(obj1.teacherid);
console.log(obj1["studentid"]);
console.log(obj1.name);
console.log(obj1["studentname"]);
