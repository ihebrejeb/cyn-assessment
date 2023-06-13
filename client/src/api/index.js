import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000';

export const getProjects = () => {
  return axios.get(`${BACKEND_URL}/project/`);
};

export const getProjectById = (id) => {
  return axios.get(`${BACKEND_URL}/project/${id}`);
};

export const getTasksByProjectId = (projectId) => {
  return axios.get(`${BACKEND_URL}/tasks/project/${projectId}`);
};

// TODO: add createTask api call
