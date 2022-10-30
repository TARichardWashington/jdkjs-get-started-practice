

"use strict";

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, duration) {
  // Our start time and duration
  
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

  // Day start and end times

  var dayStartArray = [...dayStart];
  var dayEndArray = [...dayEnd];

  var dayStartHours = Number(dayStartArray[0] + dayStartArray[1]);
  var dayStartMinutes = Number(dayStartArray[3] + dayStartArray[4]);

  var dayEndHours = Number(dayEndArray[0] + dayEndArray[1]);
  var dayEndMinutes = Number(dayEndArray[3] + dayEndArray[4]);

  var afterStartTime = startHours > dayStartHours ? true : (startHours === dayStartHours && startMinutes >= dayStartMinutes ? true : false);
  var beforeEndTime = endHours < dayEndHours ? true : (endHours === dayEndHours && endMinutes <= dayEndMinutes ? true : false);

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

