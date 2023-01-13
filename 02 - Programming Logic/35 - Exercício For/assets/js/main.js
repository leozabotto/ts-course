const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
];

function genFullElement(obj) {
  let genElements = [];

  for (let i = 0; i < obj.length; i++) {
    let { tag, texto } = obj[i];
    genElements.push(`<${tag}> ${texto} </${tag}}`);
    
  }
  return genElements;
}

const container = document.querySelector(".container");

const fullElements = genFullElement(elementos);

for (let i = 0; i < fullElements.length; i++) {
  container.innerHTML += fullElements[i]
}