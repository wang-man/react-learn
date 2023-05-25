// Pick 从已有对象类型中选取给定的属性及其类型

interface Person {
  name: string
  age: number
}


/*
type p = {
    age: number;
}
*/
type p = Pick<Person, 'age'>



/*
type p2 = {
    age: number;
    name: string;
}
*/
type p2 = Pick<Person, 'age' | 'name'>
