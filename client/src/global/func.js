import axios from 'axios';

//const baseUrl = 'http://localhost:3001';
const baseUrl = 'https://vale-pcd.herokuapp.com';

const axiosGet = async (relativeUrl = '/', setState = () => { }) => {
  try {
    const res = await axios.get(`${baseUrl}${relativeUrl}`);
    await setState(res.data);
    return res;
  } catch (err) {
    return err;
  }
};

const axiosPost = async (relativeUrl = '/', body={ }, callback = () => { }) => {
  try {
    const res = await axios.post(`${baseUrl}${relativeUrl}`, body);
    callback(res);
  } catch (err) {
    console.log(err);
  }
};

export {
  axiosGet,
  axiosPost,
};
