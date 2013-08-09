var wiiController = require('wii-controller');

var wii = new wiiController;

wii.on('CWIID_BTN_2:press', function() {
	console.log('button 2');
})

var arDrone = require('ar-drone');

var client = arDrone.createClient();

maxAngle = 128;

wii.on("CWIID_BTN_1:press", function(key) {
  console.log("CWIID_BTN_1 press (takeoff)");
  return client.takeoff();
});

wii.on("CWIID_BTN_2:press", function(key) {
  console.log("CWIID_BTN_2 press (land)");
  return client.land();
});

wii.on("CWIID_BTN_HOME:press", function(key) {
  console.log("CWIID_BTN_HOME press (reset)");
  return client.disableEmergency();
});

wii.on("CWIID_BTN_LEFT:press", function(key) {
  console.log("CWIID_BTN_LEFT press (left)");
  return client.counterClockwise(0.5);
});

wii.on("CWIID_BTN_RIGHT:press", function(key) {
  console.log("CWIID_BTN_RIGHT press (right)");
  return client.clockwise(0.5);
});

wii.on("CWIID_BTN_RIGHT:release", function(key) {
  console.log("CWIID_BTN_RIGHT release (right)");
  return client.stop();
});

wii.on("CWIID_BTN_LEFT:release", function(key) {
  console.log("CWIID_BTN_LEFT release (left)");
  return client.stop();
});

wii.on("CWIID_BTN_DOWN:press", function(key) {
  console.log("CWIID_BTN_DOWN press (down)");
  return client.down(0.5);
});

wii.on("CWIID_BTN_UP:press", function(key) {
  console.log("CWIID_BTN_UP press (up)");
  return client.up(0.5);
});

wii.on("CWIID_BTN_DOWN:release", function(key) {
  console.log("CWIID_BTN_DOWN press (down)");
  return client.stop();
});

wii.on("CWIID_BTN_UP:release", function(key) {
  console.log("CWIID_BTN_UP press (up)");
  return client.stop();
});

wii.on("CWIID_BTN_A:release", function(key) {
  console.log("CWIID_BTN_A press (flip)");
  return client.animate("flipLeft", 15);
});

wii.on("move", function(position) {
  console.log("move", position);
  client.front(position.y / maxAngle)
  client.left(position.x / maxAngle)
});
