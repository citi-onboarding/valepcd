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
