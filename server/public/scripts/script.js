console.log('script.js');

$(document).ready(onReady);

function onReady() {
  console.log('jquery-3.3.1.min.js');
  getMonsters();
}

function getMonsters () {
  $.ajax({
    type: 'GET',
    url: '/monsters'
  })
  .then(function(response) {
    response.forEach(monster => {
      let listItem = `<li>${monster}</li>`;
      $('#monsterList').append(listItem); 
    });
  })
}