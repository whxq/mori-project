function deepClone(target, map = new WeakMap()) {
  // 处理原始类型和函数
  if (typeof target !== 'object' || target === null) {
    return target;
  }

  // 处理日期对象
  if (target instanceof Date) {
    return new Date(target.getTime());
  }

  // 处理正则表达式
  if (target instanceof RegExp) {
    return new RegExp(target);
  }

  // 处理DOM元素（简单返回，实际深拷贝DOM需特殊处理）
  // if (target instanceof Element) {
  //   return target.cloneNode(true);
  // }

  // 防止循环引用
  if (map.has(target)) {
    return map.get(target);
  }

  // 创建新对象或数组
  const clone = Array.isArray(target) ? [] : {};
  map.set(target, clone);

  // 递归拷贝所有属性
  //hasOwnProperty是判断对象自身属性中是否具有指定的属性
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      clone[key] = deepClone(target[key], map);
    }
  }

  // 处理Symbol类型的属性
  const symbolKeys = Object.getOwnPropertySymbols(target);
  for (const symbolKey of symbolKeys) {
    clone[symbolKey] = deepClone(target[symbolKey], map);
  }

  return clone;
}

//测试用例
const obj1 = {
  a: 1,
  b: { c: 2 },
  [Symbol('d')]: 3,
};

const obj2 = deepClone(obj1);
console.log(obj2); // 输出 { a: 1, b: { c: 2 }, [Symbol(d)]: 3 }
