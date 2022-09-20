function add(){
    //row1
    document.getElementById('rowsum1').value = getsumofthreecells('col0','col1','col2');
    document.getElementById('rowsum2').value = getsumofthreecells('col3','col4','col5');
    document.getElementById('rowsum3').value = getsumofthreecells('col6','col7','col8');
    document.getElementById('colsum1').value = getsumofthreecells('col0','col3','col6');
    document.getElementById('colsum2').value = getsumofthreecells('col1','col4','col7');
    document.getElementById('colsum3').value = getsumofthreecells('col2','col5','col8');
}


function remove(){
    const inputs = document.querySelectorAll('#col0, #col1, #col2, #col3, #col4, #col5, #col6, #col7, #col8, #colsum1, #colsum2, #colsum3, #rowsum1, #rowsum2, #rowsum3' );
    inputs.forEach(input => {
        input.value = " ";
    })
}

function getsumofthreecells(cell1, cell2, cell3){
    let r1 = document.getElementById(cell1).value;
    let r2= document.getElementById(cell2).value;
    let r3 = document.getElementById(cell3).value;
    var val = Number(r1)+Number(r2)+Number(r3);
    return val;
}