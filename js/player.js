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
    let statPoints = (frontEnd + backEnd + mooch + hip + charm);
    if (opAbility === "op1") {
      backEnd += 5;
    } else if (opAbility === "op2"){
      charm += 5;
    } else if (opAbility === "op3"){
      hip += 5;
    } else if (opAbility === "op4"){
      frontEnd += 5;
    } else if (opAbility === "op5"){
      mooch += 5;
    }
    alert(backEnd);
    if (statPoints !== 20) {
      alert("You must distribute all 20 stat points!");
    }
  }
}
