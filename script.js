function add(){
    //row1
// console.log('add')
let c0 = document.getElementById('col0').value;
let c1= document.getElementById('col1').value;
// console.log(col0);
let c2 = document.getElementById('col2').value;
var row1 = Number(c0)+Number(c1)+Number(c2);
document.getElementById('rowsum1').value = row1;
// console.log(row1);

//row 2--------------------

let c3 = document.getElementById('col3').value;
let c4= document.getElementById('col4').value;
let c5 = document.getElementById('col5').value;
var row2 = Number(c3)+Number(c4)+Number(c5);
document.getElementById('rowsum2').value = row2;
console.log(row2);

//row 3---------------------------

let c6 = document.getElementById('col6').value;
let c7= document.getElementById('col7').value;
let c8 = document.getElementById('col8').value;
var row3 = Number(c6)+Number(c7)+Number(c8);
document.getElementById('rowsum3').value = row3;
console.log(row2);

// column1 ------------------------------------

let r1 = document.getElementById('col0').value;
let r2= document.getElementById('col3').value;
let r3 = document.getElementById('col6').value;
var col1 = Number(r1)+Number(r2)+Number(r3);
document.getElementById('colsum1').value = col1;

// column 2---------------------
let r4 = document.getElementById('col1').value;
let r5= document.getElementById('col4').value;
let r6 = document.getElementById('col7').value;
var col2 = Number(r4)+Number(r5)+Number(r6);
document.getElementById('colsum2').value = col2;

//column 3--------------------

let r7 = document.getElementById('col2').value;
let r8= document.getElementById('col5').value;
let r9 = document.getElementById('col8').value;
var col3 = Number(r7)+Number(r8)+Number(r9);
document.getElementById('colsum3').value = col3;
}

function remove(){
    const inputs = document.querySelectorAll('#col0, #col1, #col2, #col3, #col4, #col5, #col6, #col7, #col8, #colsum1, #colsum2, #colsum3, #rowsum1, #rowsum2, #rowsum3' );
    inputs.forEach(input => {
        input.value = " ";
    })
}