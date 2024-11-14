function togglebutton(){
   const peso = parseFloat(document.getElementById('boxtext1').value);
   const altura =  parseFloat(document.getElementById('boxtext2').value);
   const resposta = document.getElementById('resposta');
   const imc = peso / (altura * altura);

   if (imc < 18.5) {
    resposta.innerHTML = "Você esta com seu peso abaixo do ideal";
   } else if(imc >= 18.6 && imc < 24.9){
    resposta.innerHTML = "Você está dentro da faixa de peso Normal";
   }else if(imc >= 25 && imc <29.9){
    resposta.innerHTML = "Você está sobrepeso";
   }else{
    resposta.innerHTML = "Você está Obeso"
   }
}
function togglebuttonBack(){
   window.location.href = "../resp.html";
}