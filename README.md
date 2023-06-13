# react-nest

## Installation

To start this project run:

```bash
  npm start
  npm run start:client
```

## Tasks
### Backend
- Establish a relationship between the Task and Project entities using TypeORM.
- Implement the create method in the TaskService to create a new task and associate it with a project.
- Implement the getTasksByProjectId method in the TaskService to retrieve all tasks for a given project ID.
- Implement the findOne method in the TaskService to retrieve a specific task.
- Update get all projects to include the count of tasks associated
### Frontend
- Find and fix a bug in useProjects hook
- Finish createTask implementation: form in createTaskModal, addTask* in useTasks hook and the api call in api/index.js 
*after adding a task it must show in project page