/* eslint-disable no-unused-vars */
import { surveyApi } from '../api/api-base';

function rgb(values) {
  return `rgb(${values.join(', ')})`;
}

// eslint-disable-next-line import/prefer-default-export
export async function changeColor(groupId, setGroup) {
  let res;
  try {
    res = await surveyApi.getRandomColor(groupId);
  } catch (e) {
    console.log(e);
  } finally {
    if (res) {
      setGroup({
        mainBackGroup: {
          backgroundColor: rgb(res.data.mainBackGroup),
        },
        mainGroup: {
          backgroundColor: rgb(res.data.mainGroup),
        },
        subGroup: {
          backgroundColor: rgb(res.data.subGroup),
        },
        pointGroup: {
          backgroundColor: rgb(res.data.pointGroup),
        },
        groupId,
      });
    }
  }
}
