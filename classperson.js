class Person {
    constructor(name, fatherName, caste, religion, nationality, contactno, mailaddress, job, experience) {
        this.name = name;
        this.fatherName = fatherName;
        this.caste = caste;
        this.religion = religion;
        this.nationality = nationality;
        this.contactno = contactno;
        this.mailaddress = mailaddress;
        this.job = job;
        this.experience = experience;
    }
    getdetails() {
        return (`Hi,I am ${this.name},my father's name is ${this.fatherName}.My caste is ${this.caste} and i belong to ${this.religion} community and my nationality is ${this.nationality}.U can contact me using my 
        phonenumber ${this.contactno} or using my mailID ${this.mailaddress}. My job is ${this.job} with ${this.experience} of experience `)
    }
}
let person1 = new Person("prasanth P", "Periyasamy", "Mbc", "Hindu", "Indian", "12355", "xyz", "fullstackdeveloper", "6 months");
console.log(person1.getdetails());
console.log(person1);