/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let cardValues = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]

let cardTotal = 0

function handValue (hand) {

  // function changeStringToInteger(cardValues){
    for (var i = 0; i < hand.length; i++){
        cardValues[i] = parseInt(cardValues[i], 10);
        if (hand[i].includes("J") || hand[i].includes("J") || hand[i].includes("J"))
    }

console.log(hand);
return cardValues;
  // }

  // function cardValueSearch (cardValues, hand){
  //
  //     let searchArray = cardValues.slice(0);
  //
  //     while(searchArray > 0){
  //         console.log(searchArray);
  //         let cardMid = math.floor(searchArray.length / 2);
  //         let cardMidValue = searchArray[cardMid];
  //
  //         if(cardMid === hand[i]){
  //             return hand[i];
  //         } else if(cardMid < hand[i]){
  //           searchArray.splice(0, cardMid + 1);
  //         } else {
  //           searchArray.splice(mid, searchArray.length - cardMid);
  //         }
  //       return false;
  //     }
  //
  // }
  // return;

}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
