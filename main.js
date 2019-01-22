const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 9;
      break;
    case "tuesday":
      return 9;
      break;
    case "wednesday":
      return 9;
      break;
    case "thursday":
      return 9;
      break;
    case "friday":
      return 9;
      break;
    case "saturday":
      return 9;
      break;
    case "sunday":
      return 9;
      break;
    default:
      return "Choose a day of the week";
      break;
  }
};

const getActualSleepHours = () => 9 + 9 + 9 + 9 + 9 + 9 + 9;

const getIdealSleepHours = idealHours => {
  return idealHours * 7;
};

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours) {
    console.log("Got perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `Got more sleep than needed by an extra ${actualSleepHours -
        idealSleepHours} hours.`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `User should get some rest by sleeping an extra ${idealSleepHours -
        actualSleepHours} hours.`
    );
  } else {
    console.log("Fix");
  }
}

calculateSleepDebt();
