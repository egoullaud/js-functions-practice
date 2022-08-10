// exercise #1
// var startMyDay = function () {
//   return "Release the hounds!";
// };
// console.log(startMyDay());

//exercise #2
// var favoriteCookie = function (cookie) {
//   return `My favorite cookie is ${cookie}.`;
// };
// console.log(favoriteCookie("chocolate chip"));

//exercise #3
// var introduce = function (name, occupation) {
//   return `Hi, my name is ${name}, and I am a ${occupation}.`;
// };
// console.log(introduce("Elizabeth", "Web Developer"));

//Exercise #4
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log("Congratulations, keep drinkin'.");
  } else {
    console.log("not bad, not bad, but let's drink more, brah!");
  }
};
hydrationFeedback();
