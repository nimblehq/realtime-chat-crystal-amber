import Amber from 'amber'

let socket = new Amber.Socket('/chat');
let message = document.getElementById('message');
let messageForm = document.getElementById('message-form');

function getUser() {
  return document.getElementById('user').innerText.trim();
}

socket.connect().then(function() {
  let channel = socket.channel('chat_room:hello');

  channel.join();

  messageForm.addEventListener('submit', event => {
    event.preventDefault();
    
    let user = getUser();
    channel.push('message_new', {
      user: user,
      message: message.value
    });
    message.value = '';
  });

  channel.on('message_new', function(payload) {
    let user = getUser();

    if(payload.user == user) {
      $('.chat-box__messages')
        .append("<div class='media message-item message-item--me'><div class='media-body message-item__message'><p>"
                  + payload.message
                  + "</p></div><img class='ml-3' src='https://api.adorable.io/avatars/50/"
                  + payload.user
                  + ".png'></div>");
    } else {
      $('.chat-box__messages')
        .append("<div class='media message-item'><img class='align-self-start mr-3' src='https://api.adorable.io/avatars/50/"
                  + payload.user
                  + ".png'><div class='media-body message-item__message'><p>"
                  + payload.message
                  + "</p></div></div>");
    }
  });
});
