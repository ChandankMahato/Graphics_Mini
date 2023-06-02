function reset() {
  playerAngleMoved = 0;
  score = 0;
  scoreElement.innerText = "Press UP";

  otherVehicles.forEach((vehicle) => {
    scene.remove(vehicle.mesh);

    if (vehicle.mesh.userData.hitZone1)
      scene.remove(vehicle.mesh.userData.hitZone1);
    if (vehicle.mesh.userData.hitZone2)
      scene.remove(vehicle.mesh.userData.hitZone2);
    if (vehicle.mesh.userData.hitZone3)
      scene.remove(vehicle.mesh.userData.hitZone3);
  });
  otherVehicles = [];

  resultsElement.style.display = "none";

  lastTimestamp = undefined;

  movePlayerCar(0);

  renderer.render(scene, camera);

  ready = true;
}
