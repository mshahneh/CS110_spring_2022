// const url = 'http://ec2-18-209-247-77.compute-1.amazonaws.com:3000/feed/random?q=weather'

setTimeout(()=>
fetch(url)
   .then(res => res.json()) .then(data => {  
    //    alert("hi")d
   document.getElementById("tweeter").innerHTML = JSON.stringify(data, undefined, 2);

})
.catch(err => {
    alert(err)
console.log(err) }), 1000)

// ---------------------------------

// let searchString = "" // here we use a global variable

// const handleSearch = event => {
//     searchString = event.target.value.trim().toLowerCase()
//     document.getElementById("tweeter").innerText = searchString;
//     // you may want to update the displayed HTML here too
// }
// document.getElementById("searchBar").addEventListener("input", handleSearch)

// -------------------------------------
// function compare(a, b) {
//     if (a > b) {
//       return -1;
//     }
//     if (a < b) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }
// let numberArray = [40, 1, 5, 200];
// numberArray.sort(compare);
// console.log(numberArray)