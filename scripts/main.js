/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let cardValues = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]



function handValue (hand) {
// need to make hand array in numbers from an array
  for (var i = 0; i < hand.length; i++) {
    let handTotal = 0;
      if(hand[i] == "J" || hand[i] == "Q" || hand[i] == "K" || hand[i] == "A"){
        handTotal = Number(hand[i]);
        handTotal += hand[i];
        console.log(handTotal + " first part of if statement");
      }else if(hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
        hand[i] = 10; handTotal += hand[i];
        console.log(hand[i] + " second part of if statement");
      }else return;
      console.log(hand[i] + " out side of if statement");
  }

  console.log(hand + " out side of loop");
// console.log(hand);
}
handvalue(cardValues);

// handValue(cardValues);
// console.log(hand);



//   var totalValue = 0
//   var currentHand = []
//   for (var i = 0; i < hand.length; i++) {
//     let userInput = hand[i]
//   }
//   // console.log(hand[i]);
//   // console.log(totalValue);
//   // console.log(hand);
//   return;
// }


/* -----  Hints ------
- takes array of cards and returns the total value


1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 if totalValue > 10 || 11 if totalValue <= 10

*/
