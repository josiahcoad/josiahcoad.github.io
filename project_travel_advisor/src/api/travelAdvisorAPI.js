/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async () => {
  try {
    const { data } = await axios.get('https://gbjt9fglc8.execute-api.us-west-2.amazonaws.com/api/todos');
    const placeData = data.map((place) => place.data);
    console.log(placeData.length);
    return placeData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
