// ReturnType 用于从一个类型的返回值中获取类型


type r = ReturnType<() => string>   // string

type r2 = ReturnType<() => { a: number, b: string }>    // { a: string; b: number }



const fun = () => {
  return {
    name: 'man',
    age: 20,
    say: () => {
      console.log('hello')
    }
  }
}

/*
  {
    name: string;
    age: number;
    say: () => void;
  }
*/
type r3 = ReturnType<typeof fun>