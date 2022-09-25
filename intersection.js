//cara 1
// let firstObject = { a:1,b:2, d:3},
//     secondObject = { a:1, c:3, d:3};

// function intersection(o1, o2) {
//     return Object.keys(o1).concat(Object.keys(o2)).sort().reduce(function (r, a, i, aa) {
//         if (i && aa[i - 1] === a) {
//             r.push(a);
//         }
//         return r;
//     }, []);
// }

// console.log(JSON.stringify(intersection(firstObject, secondObject), 0, 4) );

function myfunc(obj1, obj2) {
    // write code here
    let res = {};
  
    for (let key in obj1) {
      if (obj1[key] === obj2[key]) {
        res[key] = obj1[key];
      }
    }
  
    return res;
  }
  
  let user1 = {
    a: 1,
    b: 2,
  };
  let user2 = {
    a: 1,
    c: 2,
    home: "jakarta",
  };
  
  console.log(myfunc(user1, user2));
  // { a: 1 }
