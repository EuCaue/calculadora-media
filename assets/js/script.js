// Variáveis necessárias para o programa funcionar.
// Pegandos os valores do HTML
const inputNumberRaw = document.querySelector('#numberInput');
const addValue = document.querySelector('#addValue');
const btnCalculate = document.querySelector('#btnCalculate');
const res = document.querySelector('#showResults'); 
const divBtn = document.querySelector('#divBtnClear')
// array para os valores serem adicionados
const totalValue = [];
// Input sendo transformado em number
const inputNumber = Number(inputNumberRaw.value);
// variavéis para funções funcionarem.
let total;
let totalN = 0;
let totalD = 0;
let btnAmount = 0; 
res.innerHTML = '';


// Cria o botão de limpar e exbi ele na tela.
function displayClear() {
   const btnClear = document.createElement("input"); 
   //btnClear.innerHTML = 'Limpar';
   btnClear.value = 'Limpar';
   btnClear.type = 'button';
   btnClear.id = 'btnClear';
   // condição so para exbir um botão na tela.
    if (btnAmount === 0) {
        divBtn.appendChild(btnClear);
        getClearValues();
        btnAmount++; 
    }
        
    
   
}

// Triger para o botão de limpar, limpandos o HTML necessário e zerando todas as variaveis de controle.
function getClearValues () {
    const btnClear = document.querySelector('#btnClear')
    btnClear.addEventListener('click', (e) => {
      divBtn.removeChild(divBtn.firstElementChild);  
      total = 0;
      totalN = 0;
      totalD = 0;
      btnAmount = 0;
      totalValue.length = 0;
      res.innerHTML = '';
    }) 
}

// Adiciona o valor no array.
function addValueArray () {
    
    const inputNumber = Number(inputNumberRaw.value);
    totalValue.push(inputNumber)
        
    console.log(totalValue);
    document.querySelector('#numberInput').value = '';
} 

// Soma todos os valores e divide pela quantidade de valores.
function sumAllValues () {
    for (const i in totalValue) {
        totalD++;
        console.log(totalD);    
    }
    
    for (const i of totalValue) {
        Number(totalN += i)
        console.log(totalN, i);
    }
    
    console.log(totalN, totalD);
    Number(total = totalN / totalD)
    console.log(total);
    res.innerHTML = Number(total.toFixed(2));
}

// Triger para a tecla Enter do teclado, adicionar valor.
inputNumberRaw.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') addValueArray();
})

// Trigger para botão de adicionar valor.
addValue.addEventListener('click', (e) => {    
    addValueArray();
});

// Botão de calclular, chamandos as funções somar e mostrar o botão de limpar.
btnCalculate.addEventListener('click', (e) => {
    sumAllValues();
    displayClear();
});


