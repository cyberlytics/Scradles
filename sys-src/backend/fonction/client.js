
const writeEvent = (text) => {
  // <ul> element
  const parent = document.querySelector('#events');

  // <li> element
  const el = document.createElement('li');
  el.innerHTML = text;

  parent.appendChild(el);
};

const onFormSubmitted = (e) => {
  e.preventDefault();

  const input = document.querySelector('#chat');
  const text = input.value;
  input.value = '';

  sock.emit('message', text);
};

const addButtonListeners = () => {

  ['Steine', 'Papier', 'Schere'].forEach((id) => {
    counter=0
    const button = document.getElementById(id);
    button.addEventListener('click', () => {
      sock.emit('turn', id);
      counter+=1
    });
  });
  if (counter==2){
    document.getElementById('form-button').onclick = function () {
      this.disabled = true;
  }

  }
};


writeEvent('Schere Stein Papier');

const sock = io();
sock.on('message', writeEvent);

document
  .querySelector('#chat-form')
  .addEventListener('submit', onFormSubmitted);

addButtonListeners();


