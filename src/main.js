import {Player} from '../js/player.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#formSubmit").submit(function(event){
    let playerName = $("#playerName").val();
    let opAbility = $("#opAbility").val();
    let frontEnd = parseInt($("#frontEnd").val());
    let backEnd =  parseInt($("#backEnd").val());
    let mooch = parseInt($("#mooch").val());
    let hip = parseInt($("#hip").val());
    let charm = parseInt($("#charm").val());

    let player = new Player(playerName, opAbility, frontEnd, backEnd, mooch, hip, charm);
    let result = player.newPlayer(playerName, opAbility, frontEnd, backEnd, mooch, hip, charm);


    $(".display").show();
    $("#showName").append(playerName);
    $("#showFrontEnd").append(frontEnd);
    $("#showBackEnd").append(backEnd);
    $("#showMooch").append(mooch);
    $("#showHip").append(hip);
    $("#showCharm").append(charm);
    event.preventDefault();

  });
});
