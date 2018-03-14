import {Player} from '../js/player.js';

describe('Player', function(){

  it('recognizes player object', function(){

    let player = new Player("", 0, 0, 0, 0, 0, 0);

    expect(player.playerName).toEqual("");
    expect(player.opAbility).toEqual(0);
    expect(player.frontEndStat).toEqual(0);
    expect(player.backEndStat).toEqual(0);
    expect(player.moochStat).toEqual(0);
    expect(player.hipStat).toEqual(0);
    expect(player.charmStat).toEqual(0);
  });
});
