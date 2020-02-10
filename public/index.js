var socket = io.connect(window.location.href)
$(document).ready(function(){
    $("#btn").click(function(){
      var mess=  $("#message").val();
       sendMsg(mess);
    });
  });
function sendMsg(msg){
    console.log("Trying");

  socket.emit("s_msg",{data:msg},function(error,success){
      console.log(success);
      console.log(error);
  });
  append2(msg,"you");
}
function receiveMsg(msg2){
    socket.on("r_msg",function(){
      alert(msg2);
    });
    append2(msg2,"he");
}
function append2(text,sender){
    var toAppnd=`<div>${text}</div>
    <br><div>${sender}</div>`
    $('#messages').val(toAppnd);
}