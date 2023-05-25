interface Person {
  name: string
  age: number
  location: string
}

type k1 = keyof Person    // 'name' | 'age' | 'location'
const a: k1 = 'name'


type k2 = keyof Person[]  // 数组的左右方法,concat, split, pop.....
const b: k2 = 'concat'



