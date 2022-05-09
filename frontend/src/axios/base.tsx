import axios from 'axios';

const client = axios.create();
// const navigate = useNavigate();

// API 주소
client.defaults.baseURL = 'http://localhost:8000/';

// 헤더
// client.defaults.headers.common['Authorization'] = '';

// 인터셉터
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert(error);
    return Promise.reject(error);
  },
);

export default client;
