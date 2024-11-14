function changeimagebutton(){
    const mes = parseInt(document.getElementById('mesinput').value);
    const body = document.body;

    body.classList.remove('inverno', 'primavera', 'verao', 'outono', 'meianove');

    if (mes == 12 || mes ==1  || mes == 2) {
        body.classList.add('inverno');
        alert("inverno!");
    } else if (mes >= 3 && mes <= 5){
        body.classList.add('primavera');
        alert("primavera!");
    } else if (mes >= 6 && mes <= 8){
        body.classList.add('verao');
        alert("verão!");
    } else if (mes >= 9 && mes <= 11){
        body.classList.add('outono');
        alert("outono!");
    }else{
        body.classList.add('meianove');
        alert('blablabla');
    }
    return true;
   
    
}
function togglebuttonBack(){
    window.location.href = "../resp.html";
}

