import axios from 'axios';

const baseUrl = 'http://localhost:3001';
const axiosPost = async (relativeurl = '/', body={ }, callback = () => { }) => {
  try {
    const res = await axios.post(`${baseUrl}${relativeurl}`, body);
    callback(res);
  } catch (err) {
    console.log(err);
  }
};

export default axiosPost;
