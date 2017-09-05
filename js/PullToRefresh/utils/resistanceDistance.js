const resistanceDistance = function resistanceDistance(distance, resistance = 1) {
  const resDist = ~~(distance / resistance); //round

  let resistanceDistanceAbs = resDist;
  if (resistanceDistanceAbs < 0) {
    resistanceDistanceAbs = ~resistanceDistanceAbs + 1; //reverse
  }

  return {
    distance: resDist,
    distanceAbs: resistanceDistanceAbs,
  }
};

export default resistanceDistance;