function talk(){
  var know = {
    "Cataratas" : "Tao bela es tu. Oh Cataratas do Iguacu",
    "Foz" : "Foz é um lugar incrível que nem parece real de tão espetacular que é",
    "Matelandia" : "Tantas riquezas naturais para se encantar",
    "Medianeira" : "Uma cidade tao gostosa, como sua comida Italiana",
    "medianeira" : "Uma cidade de fe e devosao, tantas igrejas bonitas entao.",
    "Oi" : "Ola. Ja visitou Foz do Iguacu e outras regioes do Parana?",
    "Ola" : "Ola. So seria melhor se eu estivesse la, no Parana",
    "oi" : "Oi. Faz tanto tempo, venha ca para Itaipu e nos vemos sorrindo.",
    "MBoi" : "A cultura é linha não é?",
    "media" : "Medianeira e um cidade tranquila e um bom lugar para relaxar",
    "matelandia" : "Cidade pacata, Matelandia e perfeita para meditar"
  };
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Desculpe, estou em Foz do Iguacu. Vem aqui!<br>";
  }
}
