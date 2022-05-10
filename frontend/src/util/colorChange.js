/* eslint-disable no-unused-vars */
import { surveyApi } from '../api/api-base';

function rgb(values) {
  return `rgb(${values.join(', ')})`;
}

// eslint-disable-next-line import/prefer-default-export
export async function changeColor(pageId, setMainBackGroup, setMainGroup, setSubGroup, setPointGroup) {
  let res;
  try {
    res = await surveyApi.getRandomColor(pageId);
    console.log(res);
    console.log('asd');
  } catch (e) {
    console.log('error');
  } finally {
    if (res) {
      console.log(rgb(res.data.mainBackGroup));
      setMainBackGroup({
        backgroundColor: rgb(res.data.mainBackGroup),
      });
      setMainGroup({
        backgroundColor: rgb(res.data.mainGroup),
      });
      setSubGroup({
        backgroundColor: rgb(res.data.subGroup),
      });
      setPointGroup({
        backgroundColor: rgb(res.data.point),
      });
    }
  }
}
