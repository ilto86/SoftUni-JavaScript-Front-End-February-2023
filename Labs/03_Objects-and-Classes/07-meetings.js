function meetings(input) {
    const meeting = {};
    
    for (let line of input) {
        let tokens = line.split(' ');
        let weekday = tokens[0];
        let name = tokens[1];
        if (meeting.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meeting[weekday] = name;
            console.log(`Scheduled for ${weekday}`); 
        }
    }
    for (const key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
    }
}


meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);

meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);