import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import SurveyDialogPresenter from './SurveyDialogPresenter';
import { surveyDialogState, surveyRatingState } from '../../recoil/atom';

export default function SurveyDialogContainer() {
  const [open, setOpen] = useRecoilState(surveyDialogState);
  const [emotionRating, setEmotionRating] = useRecoilState(surveyRatingState);

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

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <SurveyDialogPresenter open={open} handleClose={handleClose} emotionRating={emotionRating} onRating={onRating} />
  );
}
