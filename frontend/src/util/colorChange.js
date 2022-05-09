import { mainBackGroupState, mainGroupState, subGroupState, pointGroupState } from '../recoil';
import { surveyApi } from './../api/api-base';

export async function changeColor(pageId) {
  const [mainBackGroup, setMainBackGroup] = useRecoilState(mainBackGroupState);
  const [mainGroup, setMainGroup] = useRecoilState(mainGroupState);
  const [subGroup, setSubGroup] = useRecoilState(subGroupState);
  const [pointGroup, setPointGroup] = useRecoilState(pointGroupState);

  let res;
  try {
    res = await surveyApi.getColors(pageId);
  } catch (e) {
    console.log('error');
  } finally {
    if (res) {
      setMainBackGroup({
        backgroundColor: res.data.mainBackGroup,
      });
      setMainGroup({
        backgroundColor: res.data.mainGroup,
      });
      setSubGroup({
        backgroundColor: res.data.subGroup,
      });
      setPointGroup({
        backgroundColor: res.data.point,
      });
    }
  }
}
