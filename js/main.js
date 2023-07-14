// ! 
// let i = 1;
// while(i <= 67){
//     console.log(i);
//     i++
// }


// let str = '#';
// let i = 1;
// while(i <= 7){
//     str = str + '#';
//     // str += '#'
//     console.log(str);
//     i++
// }


// let  str = '';
// for (let i = 1; i <= 7; i++){
//     str += '#';
//     console.log(str)
// }

// let arr = [[1, 2, 3], [1, 2, 3,], []]
// i = 0
// j = 0


// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let num of arr){
//     sum += num
// }
// console.log(sum)

// for(let i = 1; i<=100; i++){ 
//     if(i % 3 === 0 && i % 5 === 0) { 
//         console.log(`fizzbuzz${i}`) 
//     }else if(i % 5 === 0 ) { 
//         console.log(`buzz${i}`) 
//     } else if(i % 3 === 0) { 
//         console.log(`fizz${i}`) 
//     } 
// }


// let word = 'dog';
// for(let i = 0; i < word.length; i++){
//     for(let j = i + 1; j < word.length +1; j++){
//         // console.log(i, j);
//         console.log(word.slice(i, j)); //d (0,1), do (0,2), dog (0,3)
//         // o (1,2)
//     }
// }


// let num = 10;
// let count = 0;
// let count2 = 0;
// for(let i = 1; i <= num; i++){
//     if(i % 2 === 0){
//         count++
//     } else {
//         count++
//     }
// }
// console.log(count);


// let num = 3;
// for( let i = 1; i <= num; i++){
//     if(i % 2 === 0){
//         console.log(" # # # #");
//     } else {
//         console.log("# # # # ")
//     }
// }

// 13
// let aboutUs = [
//     ["name", "Makers"],
//     ["type", "Bootcamp"],
//     ["place", "Bishkek"],
//     ["languages", "JavaScript, Python"],
//     ["simply", "the best!"]
//    ]; 
//    for(let array of aboutUs){
//        console.log((`${array[0]}: ${array[1]}`));
//    }


// let num = 10;
// for (let i = 2; i <= num; i++) {
//     let exit = false;
//     for (let j = 2; j < i; j++) {
//         if(i% j === 0) {
//             exit = true;
//             break
//         }
//     }
//     if (!exite) {
//         console.log(i);
//     }
//     exite = false
// }



// let num = 3;
// let sum = 0;
// for(let i = 1; i <= num; i++){
//     sum += i
// }
// console.log(sum);



// let arr = [2, 3, 4, 5];
// let result = 1;
// for(let num of arr){
//     result *= num
// }
// console.log(result);




// let obj = {
//     'Бишкек': 'Кыргызстан',
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// }
// for (let key in obj) {
//     // console.log(`${key} - это ${obj[key]}`);
//     console.log(key + " - это " + obj[key]);
// }


// let arr1 = [1, 2, 3];
//  let arr2 = [4, 5, 6];
//  let arr3 = [];
//  for(let num of arr1){
//      arr3.push(num)
//  }
//  for(let num of arr2){
//      arr3.push(num)
//  }
//  console.log(arr3)


// let arr = [2, 5, 9, 15, 0, 4];
// for (let num of arr) {
//     if (num > 3 && num <10){
//         console.log(num);
//     }
// }


// let arr = [2, 5, 9, 15, 0, 4];
// let sum = 0;
// for (let num of arr) {
//     if (num % 2 === 0) {
//         sum += num
//     }
// }
// console.log(sum);