'use strict';

// it's good practice to keep the variable which holds the data in the script and not rely on the DOM to store it
// score and percentScore will display the total number of task items "completed" based on button clicks (only 1 click allowed per task item) as well as the average of total task items vs completed task items for a "efficiency" percentage score.
let score = 0;
let percentScore = 0;

let allTasks = [];
let numberOfTasks = 0;
let taskId = 1;

document.querySelector('#addButton').addEventListener
    ('click', function () {
        let taskItem = String(document.querySelector('#enterTask').value);
        allTasks.push(taskItem);

        const listIdName = 'taskItem' + taskId;
        const buttonContainerId = 'buttonItem' + taskId;

        const taskItemHtml = `
        <div class='grid-container'>
            <div class='grid-item1' id='${listIdName}'>
                <li>${taskItem}</li>
            </div>
            <div class='grid-item2' id='${buttonContainerId}'>
                <button class="complete" type="button" onclick = "completeTask('${listIdName}')">Complete</button>
                <button class="delete" type="button" onclick = "deleteTask('${listIdName}', '${taskItem}', '${buttonContainerId}')">Delete</button>
            </div>
        </div>
            `
/*
            const taskItemHtml = `
            <div class='wrapper' id='${listIdName}'>
                <li>${taskItem}</li>
            </div>
            <div class='wrapper' id='${buttonContainerId}'>
                <button class="complete" type="button" onclick = "completeTask('${listIdName}')">Complete</button>
                <button class="delete" type="button" onclick = "deleteTask('${listIdName}', '${taskItem}', '${buttonContainerId}')">Delete</button>
            </div>
            `
*/

        document.querySelector('#taskItem').insertAdjacentHTML("beforeend", taskItemHtml);
        numberOfTasks++;

        taskId++;

        console.log(allTasks, typeof allTasks);
        console.log(taskItem);

    });

// i references the className to the specific list element to remove it from the "front end", NOT from the actual array
function deleteTask(i, a, b) {
    document.getElementById(i).remove();
    document.getElementById(b).remove();

    console.log(allTasks, 'delete function');
    console.log(allTasks.indexOf(a), 'index of item selected to delete');

    allTasks.splice(allTasks.indexOf(a), 1);
    numberOfTasks--;
    console.log(allTasks, 'items remaining in array');
};

function completeTask(i) {
    //document.getElementById(i).innerHTML = "hell0";
    document.getElementById(i).style.textDecoration = "line-through";
    console.log(completeTask);
};