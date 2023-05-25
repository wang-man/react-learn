// Partial 将实际类型参数T中的所有属性变为可选属性

interface Info {
  name: string;
  age: number;
}

/*
type me = {
    name?: string | undefined;
    age?: number | undefined;
}
*/
type me = Partial<Info> 
