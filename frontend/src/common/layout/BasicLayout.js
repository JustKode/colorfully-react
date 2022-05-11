import React, { useEffect, useState } from 'react';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CachedIcon from '@mui/icons-material/Cached';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { useRecoilState } from 'recoil';
import SurveyDialog from '../../util/survey';
import { surveyDialogState, drawerState, wishEmotionState } from '../../recoil/atom';

export default function BasicLayout() {
  // survey dialog state
  const [surveyOpen, setSurveyOpen] = useRecoilState(surveyDialogState);
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [emtion, setEmtion] = useRecoilState(wishEmotionState);
  const [generateRotate, setGenerateRotate] = useState(false);

  const rotate = generateRotate ? 'rotate(360deg)' : 'rotate(360)';

  useEffect(() => {
    console.log(emtion);
  }, [emtion]);

  const toggleDrawer = (openBolean) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(openBolean);
  };

  const list = () => (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      {[
        ['warm', 'cool'],
        ['heavy', 'light'],
        ['modern', 'classical'],
        ['clean', 'dirty'],
        ['activate', 'passive'],
        ['hard', 'soft'],
        ['tense', 'relaxed'],
        ['fresh', 'stale'],
        ['masculine', 'feminine'],
      ].map((textArray) => {
        return (
          <div key={textArray}>
            <List>
              {textArray.map((text) => (
                <ListItem
                  button
                  key={text}
                  onClick={() => {
                    setEmtion(text);
                  }}
                  sx={{ backgroundColor: text === emtion ? '#e6e7e2' : 'white' }}
                >
                  <ListItemIcon>
                    <ColorLensOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </div>
        );
      })}
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
      icon: <CachedIcon />,
      name: 'Generate',
      action: () => {
        console.log('generate');
        setGenerateRotate(!generateRotate);
        console.log(generateRotate);
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
