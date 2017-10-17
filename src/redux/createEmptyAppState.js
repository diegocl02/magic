export function createEmptyAppState(){
  return{
     players: [
       {
         name: 'D i e g o',
         life: 20,
         wins: 0,
         turn: false,
       },
       {
         name: 'W a l t e r',
         life: 20,
         wins: 0,
         turn: false,
       },
     ]
  }
}
