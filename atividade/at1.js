function toggleButton(){
    var num = document.getElementById('textbox').value;
    var resposta = document.getElementById('resposta');
    var resultado = '';

    for (let i = 1; i<= 10; i++) {
      resultado += num + " x " + i + " = " + (num * i) + "<br>" + "<br>";
    }
    resposta.innerHTML = resultado;

}
function toggleButtonBack(){
  window.location.href = "../resp.html";
}