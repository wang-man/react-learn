interface Props {
  age?: number
  name?: string
}

const obj: Required<Props> = {     // Required和Partial相反
  age: 6,
  name: 'man'
}