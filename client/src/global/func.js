import axios from 'axios';

const axiosGet = async (relativeUrl = '/', setState = () => { }) => {
  try {
    const res = await axios.get(`http://localhost:3001${relativeUrl}`);
    await setState(res.data);
    return res;
  } catch (err) {
    return err;
  }
};

export {
  axiosGet,
};
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
