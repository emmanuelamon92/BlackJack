/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let handTotal = 0;
  let newArr = [];
  let output = 0;
// need to make hand array in numbers from an array
  for (var i = 0; i < hand.length; i++) {
 // evaluate array to see if "A" is included and if total is greater than 11
    if (hand[i] === "A"){
      newArr.push(hand[i])
    }else if (hand[i] === "J" || hand[i] === "K" || hand[i] === "Q" ) {
      hand [i]= 10;
      handTotal += hand [i];
    }else{
      handTotal += (parseInt(hand[i], 10));
    }

  }

  let aceTotal = 0;
    for (var n = 0; n < newArr.length; n++) {
      if (handTotal >= 11){
          newArr[n] = 1;
          aceTotal += newArr[n];
          // newArr[n] += aceTotal;
      }else {
        newArr[n] = 11;
        aceTotal += newArr[n];
        // newArr[n] += aceTotal;
      }

    }


output = (aceTotal + handTotal);
console.log(output);
return output;
}

    //if the hand has a value of "1"- "10" assign face value

    // if the hand is a assign later

// // console.log(hand);
// handValue(cardValues);
//
//
//
// //get ace out of hand array first
// //no parseInt for the letters only equal to 10
// if(hand[i] == "J" || hand[i] == "Q" || hand[i] == "K" || hand[i] == "A"){
//   handTotal = parseInt(hand[i]);
//   handTotal += hand[i];
//   console.log(handTotal + " first part of if statement");
// }else if(hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
//   hand[i] = 10; handTotal += hand[i];
//   console.log(hand[i] + " second part of if statement");
// }else {return false};
// console.log(hand[i] + " out side of if statement");
//
//


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
