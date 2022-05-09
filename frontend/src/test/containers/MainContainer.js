import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { surveyDialogState } from '../../recoil/atom';
import MainComponent from '../components/MainComponent';

function MainContainer() {
  // survey dialog state
  const [open, setOpen] = useRecoilState(surveyDialogState);

  // survey dialog toggle
  const handleClickOpen = () => {
    setOpen(true);
  };

  // survey dialog test useEffect
  useEffect(() => {
    handleClickOpen();
  }, []);

  return <MainComponent />;
}

export default MainContainer;
