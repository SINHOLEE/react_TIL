interface Person{
    name: string;
    age?: number; // 물음표가 들어간 값은 설정해도 되고 안해도 된다는 뜻, nullable하다
}

// person의 속성과 비슷하면 extend를 통해 확장할 수 있다.
interface Developer{
    name:string;
    age?:number;
    skills:string[];
}
// interface Developer extends Person {
//     skills:string[];
// }


const person:Person = {
    name: "이신호",
}

const expert:Developer = {
    name: "김개발",
    age: 29,
    skills: ["python", "nodeJS", "java"]
}

// 여기서 왜 에러가 안나오는거지?
// 현재 Developer interface는 Person에서 확장하지 않았기 때문에 서로 독립적인 타입이지만, 
// Person으로 묶인 리스트 타입으로 선언했을 때 문제없이 작동된다.
const people : Person[] = [person, expert];

people.forEach(person =>{
    console.log(person.name);
    console.log(person.age);
    // console.log(person.skills);
})