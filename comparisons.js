"use strict";

function scheduleMeeting(startTime, duration) {
  if(startTime.length === 4) {
    startTime = '0' + startTime;
  };

  var startTime = [...startTime];

  var startHours = Number(startTime[0] + startTime[1]);
  var startMinutes = Number(startTime[3] + startTime[4]);

  var endHours = 0;
  var endMinutes = startMinutes + duration;

  if(endMinutes > 60) {
    let remainder = startMinutes % 60;

    let additionalHours = Math.floor(endMinutes / 60);

    endHours = startHours + additionalHours;
    endMinutes = remainder;

  } else {
    endHours = startHours;
    endMinutes = startMinutes + duration;
  }

  var afterStartTime = startHours > 7 ? true : (startHours === 7 && startMinutes >= 30 ? true : false);
  var beforeEndTime = endHours < 17 ? true : (endHours === 17 && endMinutes <= 45 ? true : false);

  return afterStartTime && beforeEndTime;

}

// Tests

var meeting = scheduleMeeting('7:00', 15);
console.log(meeting);

var meeting = scheduleMeeting('07:15', 30);
console.log(meeting);

var meeting = scheduleMeeting('7:30', 30);
console.log(meeting);

var meeting = scheduleMeeting('11:30', 60);
console.log(meeting);

var meeting = scheduleMeeting('17:00', 45);
console.log(meeting);

var meeting = scheduleMeeting('17:30', 30);
console.log(meeting);

var meeting = scheduleMeeting('18:00', 15);
console.log(meeting);

