/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Button, SpeedDial, SpeedDialAction, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
// import CachedIcon from '@mui/icons-material/Cached';
import SchoolIcon from '@mui/icons-material/School';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Drawer from '@mui/material/Drawer';
import { useRecoilState } from 'recoil';
import SurveyDialog from '../../component/survey';
import { surveyDialogState, drawerState, CRgroupState, selectedColorState } from '../../recoil/atom';
import TCRgroupState from '../../recoil/trainedState';
import EmotionBox from '../../component/EmotionBox/EmotionBox';
import selectEmotionState, { selectEmotionCountState } from '../../recoil/selectState';
import colorVector from '../../util/colorVector';

export default function BasicLayout() {
  // survey dialog state
  const [surveyOpen, setSurveyOpen] = useRecoilState(surveyDialogState);
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [emotionState, setEmotionState] = useRecoilState(selectEmotionState);
  const [selectedColor, setSelectedColor] = useRecoilState(selectedColorState);
  const [count, setCount] = useRecoilState(selectEmotionCountState);
  const [generateRotate, setGenerateRotate] = useState(false);
  const [group, setGroup] = useRecoilState(CRgroupState);
  const [TGroup] = useRecoilState(TCRgroupState);
  const keys = Object.keys(TGroup);
  const emotionKeys = Object.keys(emotionState);

  const rotate = generateRotate ? 'rotate(360deg)' : 'rotate(360)';

  const toggleDrawer = (openBolean) => () => {
    setDrawer(openBolean);
  };

  useEffect(() => {
    setSelectedColor(
      emotionKeys
        .filter((emotion) => emotionState[emotion].checked === true)
        .map((emotion) => {
          return {
            color: emotionState[emotion].color,
            strength: emotionState[emotion].strength,
          };
        }),
    );
  }, [emotionState]);

  const onApplyClick = async () => {
    let colorData;

    const applyColor = new Promise((resolve, reject) => {
      if (count === 1) {
        colorData = selectedColor[0].color;
      } else if (count === 2) {
        colorData = colorVector(
          selectedColor[0].color,
          selectedColor[1].color,
          selectedColor[0].strength,
          selectedColor[1].strength,
        );
      }
    });

    const setGroupFunction = () => {
      setGroup({
        ...group,
        mainBackGroup: {
          backgroundColor: colorData.mainBackGroup,
        },
        mainGroup: {
          backgroundColor: colorData.mainGroup,
        },
        pointGroup: {
          backgroundColor: colorData.pointGroup,
        },
        subGroup: {
          backgroundColor: colorData.subGroup,
        },
      });
    };

    applyColor.then(setGroupFunction());
  };

  const list = () => (
    <Box sx={{ width: 350 }} role="presentation">
      <Button
        variant="contained"
        fullWidth
        onClick={() => {
          setDrawer(!drawer);
          onApplyClick();
        }}
        disabled={count === 0}
      >
        <Typography>적용하기</Typography>
      </Button>
      <div style={{ marginTop: '0.5rem' }} />
      {keys.map((emotion) => (
        <EmotionBox key={emotion} colors={TGroup[emotion]} emotion={emotion} />
      ))}
    </Box>
  );

  const actions = [
    { icon: <AssignmentIcon />, name: 'Survey', action: () => setSurveyOpen(!surveyOpen) },

    {
      icon: <AdminPanelSettingsIcon />,
      name: 'Administration',
      action: () => {
        setDrawer(true);
      },
    },
    {
      icon: <SchoolIcon />,
      name: 'Study',
      action: () => {
        // setGenerateRotate(!generateRotate);
      },
    },
  ];

  return (
    <div>
      <main>
        <SurveyDialog />
        <Drawer anchor="right" open={drawer} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
        <Box>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 30, right: 30 }}
            icon={<SettingsIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={action.action}
                sx={{
                  transform: action.name === 'Generate' && rotate,
                  transition: action.name === 'Generate' && 'all 0.2s linear',
                }}
              />
            ))}
          </SpeedDial>
        </Box>

        <Outlet />
      </main>
    </div>
  );
}
