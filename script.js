'use strict';

// it's good practice to keep the variable which holds the data in the script and not rely on the DOM to store it
// score and percentScore will display the total number of task items "completed" based on button clicks (only 1 click allowed per task item) as well as the average of total task items vs completed task items for a "efficiency" percentage score.
let score = 0;
let percentScore = 0;
let allTasks = [];
/*
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
    });
*/
let numberOfTasks = 0;

document.querySelector('#addButton').addEventListener
    ('click', function () {
        let taskItem = String(document.querySelector('#enterTask').value);
        allTasks.push(taskItem);

        const taskText = allTasks[numberOfTasks];
        const taskItemHtml = `
            <li class="taskItem">${taskText}
            <button class="complete" type="button" onclick="alert('Good Job!')">Complete</button>
            <button class="delete" type="button" onclick="alert('Task Removed')">Delete</button>
            </li>
            `

        //document.querySelector('.taskItem').textContent = allTasks[numberOfTasks];
        document.querySelector('.taskItem').insertAdjacentHTML("beforeend", taskItemHtml);
        numberOfTasks++;

        console.log(allTasks, typeof allTasks);
        console.log(taskItem);
    });
