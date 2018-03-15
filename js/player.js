export class Player {
  constructor(playerName, opAbility, frontEnd, backEnd, mooch, hip, charm) {
  this.playerName = playerName;
  this.opAbility = opAbility;
  this.frontEnd = frontEnd;
  this.backEnd = backEnd;
  this.mooch = mooch;
  this.hip = hip;
  this.charm = charm;
  }
  newPlayer(playerName, opAbility, frontEnd, backEnd, mooch, hip, charm) {
    let statPoints = frontEnd + backEnd + mooch + hip + charm;
    if (statPoints != 20){
      alert("You must distribute all 20 stat points!");
    }
    if (opAbility === 1) {
      backEnd += 5;
    } else if (opAbility === 2){
      charm += 5;
    } else if (opAbility === 3){
      hip += 5;
    } else if (opAbility === 4){
      frontEnd += 5;
    } else if (opAbility === 5){
      mooch += 5;
    }
  }
}
