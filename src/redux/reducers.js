export function reducer(currentState, action){
  const nextstate = {...currentState};
  switch(action.type){
    case 'CHANGE_LIFE':
      const {change,playername} = action.payload;
      nextstate.players.find(p => p.name == playername).life += change;
      return nextstate;
    case 'SET_WINNER':
      const namewinner = action.payload.playername;
      var useridwinner;
      for(var p of nextstate.players){
        p.life = 20;
        p.turn=!p.turn;
        if(p.name===namewinner){
          p.wins += 1;
          useridwinner=p.userid;
        }
      }
      updateWins(useridwinner);
      console.useridwinner;
      return nextstate;
    case 'SET_TURN':
      const ran = getRandomInteger(0,1);
      nextstate.players[ran].turn=true;
      return nextstate;
    case 'ADD_TOKEN':
      const {counter,counterid} = action.payload;
      const player2add = action.payload.playername;
      nextstate.players.find(p => p.name==player2add).tokens.push(
        {
          tokenid: counterid,
          tokencounter: counter,
          tokentype: "minitoken",
        }
      );
      return nextstate;
    case 'CHANGE_TOKEN_COUNTER':
      const playernamE = action.payload.playername;
      const counteriD = action.payload.counterid;
      const changE = action.payload.change;
      nextstate.players.find(p => p.name==playernamE).tokens[counteriD].tokencounter += changE;
      console.log(nextstate.players);
      return nextstate;
    default:
      return currentState;

  }
}

function getRandomInteger(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function updateWins(userid){
  var AjaxPromise = require('ajax-promise');
  AjaxPromise
  .post('/updatewins', {userid: userid})
  .then(function (response) {
    console.log("winupdated");
  })
  .catch(function (err) {
    console.log('errors in response', err);
  })

  // const rp = require('request-promise');
  // console.log(userid);
  // const options = {
  //   method: 'POST',
  //   uri: 'http://localhost:3000/updatewins',
  //   body: {
  //     userid: userid,
  //   },
  //   json: true
  // }
  // rp(options).then(function(htmlString){
  //   console.log("winupdated");
  // }).catch(function(err){
  //   console.log(err);
  // })

}
