// Make chatbot closed by default.
var isChatOpen = false;
var isBotCreated = false;
$('#chat-button button').click(function(){
  if(isChatOpen)
  {
    // Close chatbot.
    $('#webchat').css('display', 'none');
    $('#chatbot').css('height', '32px'); 
    // Update boolean to reflect that chatbot is now closed.
    isChatOpen = false;  
  }
  else
  {
    // Open chatbot.
    $('#webchat').css('display', 'block');
    increaseChatHeight();
    // Update boolean to reflect that chatbot is now open.
    isChatOpen = true;
    if(!isBotCreated)
    {
      chatRequested();
      isBotCreated = true
    }
  }
    
});

/* Sets the chatbot height when the window is resized. */
$(window).resize(function () {
  if (isChatOpen) {
    return;
  }
  increaseChatHeight();
});


/* Displays the chatbot by setting its height for different screen sizes. */
function increaseChatHeight() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('#chatbot').css('height', "22em");
  }
  else if (window.matchMedia('(max-width: 992px)').matches) {
    $('#chatbot').css('height', "27em");
  }
  else {
    $('#chatbot').css('height', "37em");
  }
}
