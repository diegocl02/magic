
//const let and var
export function changeLife(change, playername){
  return {
    type:'CHANGE_LIFE',
    payload: {
      change,
      playername
    }
  };
}

//just need the winner player to give him a win+1
export function setWinner(playername){
  return {
    type:'SET_WINNER',
    payload: {
      playername
    }
  };
}

// to chose starting player randomly
export function setTurn(){
  return {
    type:'SET_TURN',
  };
}
