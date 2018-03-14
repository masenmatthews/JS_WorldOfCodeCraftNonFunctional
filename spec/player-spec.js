import {Player} from '../js/player.js';

describe('Player', function(){

  it('recognizes player object', function(){

    let player = new Player(20, "", 5, 0, 0, 0, 0, 0);
    expect(player.statPoints).toEqual(20);
    expect(player.playerName).toEqual("");
    expect(player.opAbility).toEqual(5);
    expect(player.frontEndStat).toEqual(0);
    expect(player.backEndStat).toEqual(0);
    expect(player.moochStat).toEqual(0);
    expect(player.hipStat).toEqual(0);
    expect(player.charmStat).toEqual(0);
  });
    it('substracts from total stat points', function(){

      let player = new Player("", 0, 0, 0, 0, 0, 0);


});
