var socket = io.connect(window.location.href)
$(document).ready(function(){
    $("#btn").click(function(){
      var mess=  $("#message").val();
       sendMsg(mess);
    });
  });
function sendMsg(msg){
  socket.emit("s_msg",{data:msg});
  append2(mess,"you");
}
function receiveMsg(msg2){
    socket.on("r_msg",{data:msg});
    append2(msg2,"he");
}
function append2(text,sender){
    var toAppnd=`<div>${text}</div>
    <br><div>${sender}</div>`
    $('#message').append(toAppnd);
}