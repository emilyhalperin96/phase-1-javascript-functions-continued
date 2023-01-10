// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun()); 
  console.log(saturdayFun("go to the beach")); 

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork("go to the beach"));
  //The function should return a String like "This Monday, I will ... ."
  //Fill in the ... with the activity that's passed in as the first parameter. 
  // If nothing is passed in, default to "go to the office"

function wrapAdjective(result = "*") {
    const innerFunction = function(adjective = "special") {
        return `You are ${result}${adjective}${result}!`
    };
    return innerFunction;
}
