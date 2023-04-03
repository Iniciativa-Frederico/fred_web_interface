$(document).ready(function(){
  console.log("Document ready!!!");

  var ip = location.host.slice(0,9)
  console.log(ip)
  ros = new ROSLIB.Ros({
    url: 'ws://'+ ip + ':9090'
  });
  
  ros.on('connection', function() {
    console.log('Connected to ROS Bridge server!');
  });
  
  ros.on('error', function(error) {
    console.log('Error connecting to ROS Bridge server:', error);
  });
  
  ros.on('close', function() {
    console.log('Disconnected from ROS Bridge server.');
  });

  initializeTopics();
  display_ticks();

});

// Variáveis globais
var ros;

// Sensors 
var sensor_ticks_left;
var sensor_ticks_right;

var sensor_imu;

var distance_left;
var distance_right;
var distance_back;

//Status 
var pose_x;
var pose_y;
var theta;

var feedback_linear
var feedback_angular 

var cmd_vel_linear
var cmd_vel_angular 

//Fred

var goal_mode;
var current_mode;
var curent_objective;
var next_objective 






function initializeTopics() {

  sensor_ticks_left = new ROSLIB.Topic({
    ros: ros,
    name: '/power/status/distance/ticks/left',
    messageType: 'std_msgs/Float32'
  });

  sensor_ticks_right = new ROSLIB.Topic({
    ros: ros,
    name: '/power/status/distance/ticks/right',
    messageType: 'std_msgs/Float32'
  });

  sensor_imu = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/imu",
    messageType: 'std_msgs/Float64'
  });

 distance_back = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/imu",
    messageType: 'std_msgs/Float64'
  });
 distance_back = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/imu",
    messageType: 'std_msgs/Float64'
  });
 distance_left = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/imu",
    messageType: 'std_msgs/Float64'
  });
 distance_right = new ROSLIB.Topic({
    ros: ros,
    name: "/sensor/imu",
    messageType: 'std_msgs/Float64'
  });




}