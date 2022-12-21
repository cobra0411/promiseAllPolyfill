const dummy = (name, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
};
const p1 = dummy("p1", 4000);
const p2 = dummy("p2", 2000);
const p3 = dummy("p3", 3000);
const p4 = dummy("p4", 1000);
const myPromise = [p1, p2, p3, p4];

const promiseAll = (current) => {
  let result = new Array(current.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    current.forEach((item, index) => {
      item
        .then((value) => {
          result[index] = value;
          count++;
          if (count === current.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
promiseAll(myPromise)
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log(err);
  });
