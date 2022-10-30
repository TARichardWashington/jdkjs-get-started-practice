function scheduleMeeting(startTime, duration) {
  var startTime = [...startTime];

  var startHours = Number(startTime[0]) + startTime[1];
  var startMinutes = Number(startTime[3]) + startTime[4];

  return true;
}

// Tests

var meeting = scheduleMeeting('12:00', 60);

console.log(meeting);

var meeting = scheduleMeeting('23:30', 60);

console.log(meeting);


