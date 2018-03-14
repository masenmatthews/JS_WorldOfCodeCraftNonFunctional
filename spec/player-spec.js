import {Player} from './../src/player.js';

describe('Player', function(){

  it('recognizes player object', function(){

    let player = new Player;

    expect(player.playerName).toEqual("");
    expect(player.opAbility).toEqual("");
    expect(player.playerLevel).toEqual(0);
    expect(player.frontEndStat).toEqual(0);
    expect(player.backEndStat).toEqual(0);
    expect(player.moochStat).toEqual(0);
    expect(player.hipStat).toEqual(0);
    expect(player.charmStat).toEqual(0);
  });
});
