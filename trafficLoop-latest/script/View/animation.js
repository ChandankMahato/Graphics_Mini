function animation(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
    return;
  }
  const timeDelta = timestamp - lastTimestamp;
  movePlayerCar(timeDelta);
  const laps = Math.floor(Math.abs(playerAngleMoved) / (Math.PI * 2));
  if (laps != score) {
    score = laps;
    scoreElement.innerText = score;
  }
  if (otherVehicles.length < (laps + 1) / 5) addVehicle();
  moveOtherVehicles(timeDelta);
  hitDetection();
  renderer.render(scene, camera);
  lastTimestamp = timestamp;
}
