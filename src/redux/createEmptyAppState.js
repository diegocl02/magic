var initialstate = {
  gametype: null,
  someonewon: false,
   players: [
  {
    userid: 1,
    color: '',
    name: null,
    nickname: null,
    life: 20,
    wins: 0,
    turn: false,
    ranking: null,
    rankingname: null,
    totalwins: null,
    tokens: [
    ]
  },
  {
    userid: 2,
    color: '',
    name: null,
    nickname: null,
    life: 20,
    wins: 0,
    turn: false,
    ranking: null,
    rankingname: null,
    totalwins: null,
    tokens: [
    ]
  },
]
}

function getInitialState(state){
    var AjaxPromise = require('ajax-promise');
    AjaxPromise
    .get('/getinitialstate')
    .then(function (response) {
      console.log(response);
      const ranking = response;
            for(var r of ranking){
              for(var p of state.players){
                if(r.userid==p.userid){
                  p.ranking=r.rankingNumber;
                  p.rankingname= r.rankingName;
                  p.name= r.name;
                  p.nickname= r.nickname;
                  p.totalwins= r.wins;
                }
              }
            }
    })

  // const rp = require('request-promise');
  // const options = {
  //     uri: 'http://localhost:3000/getinitialstate',
  // };
  // rp(options)
  //     .then(function (htmlString) {
  //       const ranking = JSON.parse(htmlString);
  //       for(var r of ranking){
  //         for(var p of state.players){
  //           if(r.userid==p.userid){
  //             p.ranking=r.rankingNumber;
  //             p.rankingname= r.rankingName;
  //             p.name= r.name;
  //             p.nickname= r.nickname;
  //             p.totalwins= r.wins;
  //           }
  //         }
  //       }
  //     })
  //     .catch(function (err) {
  //         console.log('error');
  //     });
}

export function createEmptyAppState(){
  getInitialState(initialstate);
  return initialstate;
}
