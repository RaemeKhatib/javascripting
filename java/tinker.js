/* let umbrella = {
colour: "purple",
price: "10",
isOpen: function() {return "its open"}
};
console.log(typeof umbrella);
console.log(umbrella.colour);
console.log(umbrella.isOpen());
*/


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

var facebookProfile = {
  name: "Raeme",
  friends: 4,
  messages: ["first message", "second message", "third message"],
  postMessage: function(message) {
    facebookProfile.messages.push(message)},
   deleteFriend: function() {
    if(facebookProfile.Profile > 0) 
    facebookProfile.friends = facebookProfile.friends - 1;
   }
  }

  
 
//addFriend:(),
//removeFriend:(),
facebookProfile.postMessage("fourth Message");
facebookProfile.deleteFriend(1);
console.log(facebookProfile);