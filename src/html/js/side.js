  // add active class in selected list item
  let list = document.querySelectorAll('.list');

  for(let i=0; i<list.length; i++)
  {
     list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
     }
  }

  let menuToggle = document.querySelector('.toggle')
  let navegation = document.querySelector('.navegation')
  menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navegation.classList.toggle('active')
  }