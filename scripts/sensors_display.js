



function display_ticks() {

  sensor_ticks_left.subscribe(function(message) {
    $("#left_ticks").text( message.data);
    // console.log(message.data);  
  });

  sensor_ticks_right.subscribe(function(message) {
    $("#right_ticks").text( message.data);
    // console.log(message.data);  
  });

}

function display_imu(){
  sensor_imu.subscribe(function(message) {
    $("#imu").text( message.data);
    // console.log(message.data);  
  });

}
