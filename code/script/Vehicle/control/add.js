function addVehicle() {
  const type = "car";
  const speed = getVehicleSpeed(type);
  const clockwise = Math.random() >= 0.5;
  const angle = clockwise ? Math.PI / 2 : -Math.PI / 2;
  const mesh = Car();
  scene.add(mesh);
  otherVehicles.push({ mesh, type, speed, clockwise, angle });
}
