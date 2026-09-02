
// ------  Question 1 --------

function describeValue(v) {
  let t1 = typeof(v);

  let t2

  if(v){
    t2 = "truthy"
  }else{
    t2 = "falsy"
  }

  return `${t1} | ${t2}`


}


//console.log(describeValue(undefined));


// ------  Question 2 --------

function getDayType (day){
  let newday = day.toLowerCase();

  switch (newday) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

//console.log(getDayType("Friiday"));


// ------  Question 3 --------

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  let lowerUsername = username.toLowerCase();
  if (lowerUsername.includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}

//console.log(validateUsername("a b"));


// ------  Question 4 --------

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare = fare + (distance - 2) * 15;
  }

  fare = fare + waitingMinutes * 2;

  if (isNight) {
    fare = fare * 1.2;
  }

  return fare;
}

//console.log(getCngFare(5,true));


// ------  Question 5 --------

const getChaseVerdict = (target, scored, ballsLeft) => {
  let need = target - scored;

  if (need <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  let rate = (need / ballsLeft) * 6;
  let text = "";

  if (rate <= 6) {
    text = "Comfortable";
  } else if (rate <= 12) {
    text = "Tough";
  } else {
    text = "Almost Impossible";
  }

  return "Need " + need + " runs in " + ballsLeft + " balls | " + text;
};



console.log(getChaseVerdict(100,80,12));
