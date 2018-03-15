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
    if (statPoints !== 20){
      alert("You must distribute all 20 stat points!");
          alert(statPoints)
          alert(frontEnd)
    }
    else {
      if (opAbility == "op1") {
        return backEnd += 5;
      } else if (opAbility == "op2"){
        return charm += 5;
      } else if (opAbility == "op3"){
        return hip += 5;
      } else if (opAbility == "op4"){
        return frontEnd += 5;
      } else if (opAbility == "op5"){
        return mooch += 5;
      }
    }
  }
}
