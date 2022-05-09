import React from 'react';
import { Fab } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useRecoilState } from 'recoil';
import { surveyDialogState } from '../../recoil/atom';
import SurveyDialog from '../../util/survey';

export default function BasicLayout() {
  // survey dialog state
  const [surveyDialog, toggleSurveyDialog] = useRecoilState(surveyDialogState);

  return (
    <div>
      <main>
        <SurveyDialog />;
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
          }}
          onClick={() => toggleSurveyDialog(!surveyDialog)}
        >
          <AssignmentIcon />
        </Fab>
        <Outlet />
      </main>
    </div>
  );
}
