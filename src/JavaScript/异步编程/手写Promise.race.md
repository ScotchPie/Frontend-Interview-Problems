# 手写 Promise.race

#### 问题描述

实现 Promise.race 方法，输入仅需考虑数组类型

#### 代码实现

```javascript
function race(promises) {
  return new Promise((resolve, reject) => {
    // 判断输入是否合法
    if (!Array.isArray(promises)) {
      reject("Input value is not an array!");
    }

    const result = [];

    // 输入为[]时返回的promise永远处于pending状态
    if (promises.length > 0) {
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(resolve, reject);
      });
    }
  });
}
```
