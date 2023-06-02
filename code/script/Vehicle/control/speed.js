function getPlayerSpeed() {
  if (accelerate) return speed * 2;
  if (decelerate) return speed * 0.5;
  return speed;
}

function getVehicleSpeed(type) {
  const minimumSpeed = 1;
  const maximumSpeed = 2;
  return minimumSpeed + Math.random() * (maximumSpeed - minimumSpeed);
}
