function toggleButton(){
    const idade =parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value.toLowerCase();
    const resposta = document.getElementById('resposta');

    resposta.classList.remove('crianca');

    if (sexo === "masculino" || sexo === "m") {
            if (idade <= 12) {
                resposta.classList.add('crianca');
                resposta.innerHTML = `Você é do gênero ${sexo}, é uma criança e tem ${idade} anos.<br><br><br><br><img src="https://i.pinimg.com/736x/76/29/55/7629555584f1d06b12155218a227b15c.jpg">`;
            } else if (idade >= 13 && idade <= 17){
                resposta.innerHTML = `Você é do gênero ${sexo}, é um adolescente e tem ${idade} anos.<br><br><br><img src="https://i.pinimg.com/736x/04/80/95/048095721402c2867384a8c3c90a7cc4.jpg">`;
            } else if (idade >= 18 && idade <=50) {
                resposta.innerHTML = `Você é do gênero ${sexo}, é adulto e tem ${idade} anos. <br><img src="https://cdn.britannica.com/66/103066-050-B89D5EAF/Will-Smith-actor-musician-2006.jpg">`;
            } else if (idade >= 51) {
                resposta.innerHTML = `Você é do gênero ${sexo}, é idoso e tem ${idade} anos. <br><br><br><img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/05/31/175892164_112156641012594_8904402998315156636_n-qhw4nh1ipvms.jpg">`;
            }else{
                alert("Sexo desconhecido");
            }
       } else if (sexo === "feminino" || sexo === "f") {
            if (idade <= 12) {
                resposta.innerHTML = `Você é do gênero ${sexo}, é uma criança e tem ${idade} anos. <br><img src="https://static1.personality-database.com/profile_images/f31ad4b20e0d4704830ca75f1f89eecf.png">`;
            } else if (idade >= 13 && idade <= 17){
                resposta.innerHTML = `Você é do gênero ${sexo}, é uma adolescente e tem ${idade} anos. <br><br><br><br><img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/03/starfire__39i4f3pl.jpg?ims=1210x544/filters:quality(75)">`;
            } else if (idade >= 18 && idade <=50) {
                resposta.innerHTML = `Você é do gênero ${sexo}, é uma Adulta e tem ${idade} anos.<br><img src="https://pm1.aminoapps.com/6817/22f9333a1af1e4751af7478fbea3f5804cbadd75v2_hq.jpg">`;
            } else if (idade >= 51) {
                resposta.innerHTML = `Você é do gênero ${sexo}, é uma Idosa e tem ${idade} anos.<br><img src="https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg5ec56ed29849d6.27118349.jpg%3FlastEdited%3D1589997278&w=600&h=600&f=webp">`;
            }else{
                alert("Sexo desconhecido");
            }
       } else {
            alert("Sexo desconhecido");
       }
}

function toggleButtonBack(){
    window.location.href = '../../resp.html';
}