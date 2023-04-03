



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
function display_distance(){
  distance_back.subscribe(function(message) {
    $("#distance_back").text( message.range);
    // console.log(message.range);  
  });

   distance_right.subscribe(function(message) {
    $("#distance_right").text( message.range);
    // console.log(message.range);  
  });

  distance_left.subscribe(function(message) {
    $("#distance_left").text( message.range);
    // console.log(message.range);  
  });
}
