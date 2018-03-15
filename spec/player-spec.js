import {Player} from '../js/player.js';

describe('Player', function(){

  it('recognizes player object', function(){

    let player = new Player("", 5, 0, 0, 0, 0, 0);
    expect(player.playerName).toEqual("");
    expect(player.opAbility).toEqual(5);
    expect(player.frontEnd).toEqual(0);
    expect(player.backEnd).toEqual(0);
    expect(player.mooch).toEqual(0);
    expect(player.hip).toEqual(0);
    expect(player.charm).toEqual(0);
  });

    it('creates new player object', function(){

      let player = new Player("Katie", 1, 5, 10, 5, 5, 5);
      expect(player.playerName).toEqual("Katie");
      expect(player.opAbility).toEqual(1);
      expect(player.frontEnd).toEqual(5);
      expect(player.backEnd).toEqual(10);
      expect(player.mooch).toEqual(5);
      expect(player.hip).toEqual(5);
      expect(player.charm).toEqual(5);
    });
});
