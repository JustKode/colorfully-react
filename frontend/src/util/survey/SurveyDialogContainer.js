import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import SurveyDialogPresenter from './SurveyDialogPresenter';
import { surveyDialogState, surveyRatingState, CRgroupState } from '../../recoil/atom';
import { surveyApi } from '../../api/api-base';

function toRGB(str) {
  const sep = str.indexOf(',') > -1 ? ',' : ' ';
  return str.substr(4).split(')')[0].split(sep).map(Number);
}

export default function SurveyDialogContainer() {
  const [open, setOpen] = useRecoilState(surveyDialogState);
  const [emotionRating, setEmotionRating] = useRecoilState(surveyRatingState);
  const [CRgroup] = useRecoilState(CRgroupState);

  useEffect(() => {
    console.log(emotionRating);
  }, [emotionRating]);

  // eslint-disable-next-line no-unused-vars
  const onRating = (value, targetEmotion) => {
    setEmotionRating({
      ...emotionRating,
      [targetEmotion]: value,
    });
  };

  const handleClose = async () => {
    let res;
    try {
      const colorData = {
        mainBackGroup: toRGB(CRgroup.mainBackGroup.backgroundColor),
        mainGroup: toRGB(CRgroup.mainGroup.backgroundColor),
        subGroup: toRGB(CRgroup.subGroup.backgroundColor),
        pointGroup: toRGB(CRgroup.pointGroup.backgroundColor),
      };
      const data = {
        'activate-passive': emotionRating.activate_passive,
        'clean-dirty': emotionRating.clean_dirty,
        'fresh-stale': emotionRating.fresh_stale,
        'hard-soft': emotionRating.hard_soft,
        'heavy-light': emotionRating.heavy_light,
        'masculine-feminine': emotionRating.masculine_feminine,
        'modern-classical': emotionRating.modern_classical,
        'tense-relaxed': emotionRating.tense_relaxed,
        'warm-cool': emotionRating.warm_cool,
        inputData: colorData,
      };
      res = await surveyApi.postSurvey(CRgroup.groupId, data);
    } catch (e) {
      console.log(e);
    } finally {
      setOpen(false);
      console.log(res);
    }
  };
  return (
    <SurveyDialogPresenter open={open} handleClose={handleClose} emotionRating={emotionRating} onRating={onRating} />
  );
}
