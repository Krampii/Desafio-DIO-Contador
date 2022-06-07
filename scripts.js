
let adicionar = document.getElementById('adicionar')
let resetar = document.getElementById('resetar')
let subtrair = document.getElementById('subtrair')
let output = document.getElementById('score')
let score = 0



adicionar.addEventListener('click', () => {
  score++;
  output.innerHTML = score;
  if(score >= 1){
    output.style.color = '#7CE077';

  }else if(score == 0){
    output.style.color = 'white'
  }
});


subtrair.addEventListener('click', () => {
  score--;
  output.innerHTML = score;
  if(score < 1){
    output.style.color = '#FF6666';

  }else if(score==0){
    output.style.color = 'white'
  }
});

resetar.addEventListener('click', () => {
  score = 0;
  output.innerHTML = score;
  output.style.color = 'white'
});