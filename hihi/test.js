// let money = 1000
// const duthahoBuysCake = cakeType => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       if (money > 1000) {
//         resolve(cakeType)
//       } else {
//         reject('không đủ tiền')
//       }
//     }, 1000)
//   })
// }
// let tien = 1000
// const muaBanh = function(loaiBanh) {
//     // return new Promise
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (tien > 1000) {
//                 resolve(loaiBanh);
//             } else {
//                 reject('Het cmn tien');
//             }
//         }, 1000);
//     });
// };
// money = 999
// Promise(function(resolve, reject) {
//     setTimeout(function() {
//         if (tien > 1000) {
//             resolve(loaiBanh);
//         } else {
//             reject('Het cmn tien');
//         }
//     }, 1000);
// })
// const promiseSuccess = duthahoBuysCake('bánh sinh nhật')
//   .then(cake => console.log(cake))
//   .catch(nocake => console.log(nocake));
// tien = 10009;
// const diMuabanh = muaBanh('banh xe bo').then(
//     function(banh) {
//         console.log(banh);
//     }
// ).catch (
//     function(noCake) {
//         console.log(noCake)
//     }
// )