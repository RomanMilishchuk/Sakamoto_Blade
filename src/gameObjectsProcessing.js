export const handleCollisions = (players, bullets, field) => {
  players.forEach(
    player =>
      (player.onGround = !field.some(val => player.onCollision(val))
        ? false
        : player.onGround)
  );

  bullets.forEach((bullet, ind, arr) =>
    [...players, ...field].forEach(block =>
      (bullet && block
      ? bullet.onCollision(block)
      : null)
        ? delete arr[ind]
        : null
    )
  );
};

export const moveObjects = objects =>
  objects.forEach(obj => (obj ? obj.move() : null));

export const removeDeadPlayers = players =>
  players.forEach((val, ind, arr) =>
    val && val.hitPoints <= 0 ? delete arr[ind] : null
  );

export const serializeObjects = objects =>
  JSON.stringify(
    objects.map(obj =>
      obj
        ? {
            id: obj.id,
            x: obj.coordinates.x,
            y: obj.coordinates.y,
            direction: obj.direction
          }
        : null
    )
  );