## 知识点总结

#### lesson1 - 电话号码组合

- Array.prototype.splice

#### lesson2 - 卡牌分组

- 求两个数的最大公约数

```
const getGCD = (a, b) => {
  if(b === 0) return a
  return getGCD(b, a % b)
}
```

- 将数字字符串中的连续数字分组，如 '1122222' => '11', '2222'

```
const group = str.match(/(\d)\1+|\d/g)
```

#### lesson4 - 格雷编码

- 求 x 的 y 次幂

```
Math.pow(x,y)
```

- 二进制转十进制

```
parseInt('0101',2) // 5
```

- 对称问题解法
