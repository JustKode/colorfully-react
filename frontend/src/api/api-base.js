import Axios from 'axios';
import { API_SERVER } from '../util/config';

export const baseApi = Axios.create({
  baseURL: `${API_SERVER}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const surveyApi = {
  getRandomColor: (pageId) => baseApi.get(`data/${pageId}`),
  postSurvey: (pageId, data) => baseApi.post(`data/${pageId}`, data),
};

export const studyAPI = (pageId) => baseApi.get(`train/${pageId}`);
