export const testApi = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 10000);
    });
};

export let tasks = [
    {
        taskNumber: 1,
        taskName: "Task 1",
        taskDescription: "This is task 1",
    },
    {
        taskNumber: 2,
        taskName: "Task 2",
        taskDescription: "This is task 2",
    },
    {
        taskNumber: 3,
        taskName: "Task 3",
        taskDescription: "This is task 3",
    },
];

export const getAllTasks = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tasks);
        }, 3000);
    });
