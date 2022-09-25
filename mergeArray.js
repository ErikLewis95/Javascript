//cara 1
function myFunc(arr1, arr2) {
    //write code here
    // copy isi dari arr1 ke dalam merged
    let merged = [...arr1];
  
    // looping sebanyak item di arr2
    for (let i = 0; i < arr2.length; i++) {
      let dataExist = false;
  
      // looping array merged
      for (let j = 0; j < merged.length; j++) {
        // cek value property name dari 2 object yang dibandingkan
        if (arr2[i].name === merged[j].name) {
          // kalau datanya sama, maka dataExist diubah menjadi true
          dataExist = true;
          // stop looping
          break;
        }
      }
  
      // jika data nya tidak ada yang sama (aman), maka push data nya ke dalam array merged
      if (!dataExist) {
        merged.push(arr2[i]);
      }
    }
  
    return merged;
  }
  
  let dataStu1 = [
    {
      name: "erik Lewis",
      email: "erik.lewis@gmail.com",
    },
    {
      name: "Fahmi Keren",
      email:"Fahmi.Keren@gmail.com",
    },
  ];
  
  let dataStu2 = [
    {
        name: "erik Lewis",
        email: "erik.lewis@gmail.com",
    },
    {
      name: "Reza Pahlevi",
      email: "reza.pahlevi@gmail.com",
    },
  ];
  
  console.log(myFunc(dataStu1, dataStu2));
//   /* [
//   {
//       name: "student 1",
//       email: "student1@gmail.com",
//     },
//   {
//       name: "student 2",
//       email: "student2@gmail.com",
//     },
//     {
//       name: "student 3",
//       email: "student3@gmail.com",
//     },
//   ]
//   */

//cara2
//   function gabung(ar1,ar2){
//     let gabung = [...ar1,...ar2]
//     let hasil = []

//     let hapus = gabung.filter(element =>{
//         let sama = hasil.includes(element.name)

//         if(!sama){
//             hasil.push(element.name)
//             return true
//         }return false
//     })
//     console.log(hapus)

// }

// let arr1 =[{
//     name:"Student 1",email:"student1@gmail.com"},
//     {name:"Student 2",email:"student2@gmail.com"}]
// let arr2=[{
//     name:"Student 1",email:"student1@gmail.com"},
//     {name:"Student 3",email:"student3@gmail.com"}]

// gabung(arr1,arr2)


//cara 3
// one = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 2', email: 'student2@mail.com' },
//   ];
  
//   two = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 3', email: 'student3@mail.com' },
//   ];
  
//   function mergeAndFilter(array1, array2) {
//     let mergeArray = [...array1, ...array2];
  
//     result = mergeArray.filter(
//       (value, index, array) =>
//         index ===
//         array.findIndex((a) => a.name == value.name && a.email == value.email)
//     );
  
//     return result;
//   }
  
//   console.log(mergeAndFilter(one, two));


//   //cara 4
//   one = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 2', email: 'student2@mail.com' },
//   ];
  
//   two = [
//     { name: 'Student 1', email: 'student1@mail.com' },
//     { name: 'Student 3', email: 'student3@mail.com' },
//   ];
//   let mergeArray = [...one, ...two];
  
//   function removeDuplicates(array, property) {
//     let newArray = [];
//     let cari = {};
  
//     for (let i in array) {
//       cari[array[i][property]] = array[i];
//     }
  
//     for (i in cari) {
//       newArray.push(cari[i]);
//     }
//     return newArray;
//   }
  
//   newArray = removeDuplicates(mergeArray, 'name');
//   console.log(newArray);