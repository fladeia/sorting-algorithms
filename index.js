const arr = [56, 63, 15, 37, 98, 5, 15, 73, 19, 66, 7] 

function bobbleSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  
  return arr
}
// console.log("🚀 bobbleSort:", bobbleSort(arr))

// function bobbleSort2(arr) {
//   let swapped
  
//   do {
//     swapped = false
    
//     for(let i = 0; i < arr.length - 1; i++) {
//       if(arr[i] > arr[i + 1]) {
//         const aux = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = aux
//         swapped = true
//       }
//     }
//   } while (swapped);

//   return arr
// }
// const sortedArray2 = bobbleSort2(arr)
// console.log("🚀 ~ file: index.js:40 ~ sortedArray2:", sortedArray2)

function quickSort(arr) {
  if(arr.length <= 1) return arr
  
  const pivot = arr[0]
  const left = []
  const right = []
  
  for(let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)]
}
// console.log("🚀 quickSort:", quickSort(arr))

