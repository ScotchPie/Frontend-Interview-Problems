# 手写 Promise.all

#### 问题描述
实现 Promise.all 方法，输入仅需考虑数组类型

#### 代码实现

```javascript
function all(promises) {
  return new Promise((resolve, reject) => {
    // 判断输入是否合法
    if (!Array.isArray(promises)) {
      reject("Input value is not an array!");
    }

    const result = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((val) => {
        result[index] = val;
        // flat方法去除空元素
        if (result.flat().length === promises.length) {
          resolve(result);
        }
      }, reject);
    });
  });
}
```
