import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_SERVER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiServer = axios.create(options);

export { apiServer };
