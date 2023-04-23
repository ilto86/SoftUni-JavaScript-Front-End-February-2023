function sprintReview(input) {

  let sprintCount = Number(input.shift());
  let sprintCollection = {};

  let commandParser = {
    'Add New': addNewTask,
    'Change Status': changeStatus,
    'Remove Task': removeTask,
  };

  for (let index = 0; index < sprintCount; index++) {
    const [ assignee, taskId, title, status, estimatedPoints ] = input.shift().split(':');
    if (sprintCollection.hasOwnProperty(assignee)) {
      sprintCollection[assignee].push([taskId, title, status, estimatedPoints]);
    } else {
      sprintCollection[assignee] = [ [taskId, title, status, estimatedPoints] ];
    }
  }

  // console.log(sprintCollection[0]['Kiril']['status']);
  // console.log(sprintCollection[0].Kiril.status);

  for (let inputLine of input) {
    if (inputLine === 'Stop') {
      break;
    }

    let commandTokens = inputLine.split(':');
    let command = commandTokens[0];
    commandParser[command](...commandTokens.slice(1));
  }

  calculateSprintStatusTotalPoints(sprintCollection);

  function addNewTask(assignee, taskId, title, status, estimatedPoints) {
    if (!sprintCollection.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
    } else {
      sprintCollection[assignee].push([taskId, title, status, estimatedPoints]);
    }
  }

  function changeStatus(assignee, taskId, newStatus) {
    if (!sprintCollection.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`);
      return;
    }
    
    const assigneeTasks = sprintCollection[assignee];
    let taskIndex = assigneeTasks.findIndex(task => task[0] === taskId);
    
    if (taskIndex === -1) {
      console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
      return;
    }
    
    assigneeTasks[taskIndex][2] = newStatus;
    // console.log(`Task ${taskId} status updated to ${newStatus}`);
  }
  
  function removeTask(assignee, index) {
    if (sprintCollection.hasOwnProperty(assignee)) {
      const tasks = sprintCollection[assignee];
      if (tasks.length > 1 && index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
      } else if (tasks.length === 1 && index === 0) {
        delete sprintCollection[assignee];
      } else {
        console.log('Index is out of range!');
      }
    } else {
      console.log(`Assignee ${assignee} does not exist on the board!`);
    }
  }

  function calculateSprintStatusTotalPoints(sprintCollection) {
    const pointsByStatus = {
      ToDo: 0,
      'In Progress': 0,
      'Code Review': 0,
      Done: 0,
    };

    for (const assignee in sprintCollection) {
      for (const task of sprintCollection[assignee]) {
        const [_id, _description, status, points] = task;
        pointsByStatus[status] += Number(points);
      }
    }

    console.log(`ToDo: ${pointsByStatus.ToDo}pts`);
    console.log(`In Progress: ${pointsByStatus['In Progress']}pts`);
    console.log(`Code Review: ${pointsByStatus['Code Review']}pts`);
    console.log(`Done Points: ${pointsByStatus.Done}pts`);

    const totalPoints = pointsByStatus.ToDo + pointsByStatus['In Progress'] + pointsByStatus['Code Review'];

    if (pointsByStatus.Done >= totalPoints) {
      console.log('Sprint was successful!');
    } else {
      console.log('Sprint was unsuccessful...');
    }
  }
}



sprintReview([
  '5',
  'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
  'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
  'Peter:BOP-1211:POC:Code Review:5',
  'Georgi:BOP1212:Investigation Task:Done:2',
  'Mariya:BOP-1213:New Account Page:In Progress:13',
  'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
  'Change Status:Peter:BOP-1290:ToDo',
  'Remove Task:Mariya:1',
  'Remove Task:Joro:1',
]);

sprintReview([
  '4',
  'Kiril:BOP-1213:Fix Typo:Done:1',
  'Peter:BOP-1214:New Products Page:In Progress:2',
  'Mariya:BOP-1215:Setup Routing:ToDo:8',
  'Georgi:BOP-1216:Add Business Card:Code Review:3',
  'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
  'Change Status:Georgi:BOP-1216:Done',
  'Change Status:Will:BOP-1212:In Progress',
  'Remove Task:Georgi:3',
  'Change Status:Mariya:BOP-1215:Done',
]);