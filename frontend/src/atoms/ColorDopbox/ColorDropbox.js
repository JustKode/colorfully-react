/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useRecoilState } from 'recoil';
import selectEmotionState from '../../recoil/selectState';
import './ColorDropbox.css';

function ColorDropbox(Props) {
  const { colors, disabled, emotion } = Props;
  const [selectColor, setSelectColor] = React.useState(0);
  const [emotionState, setEmotionState] = useRecoilState(selectEmotionState);

  useEffect(() => {
    if (emotionState[emotion].checked === true) {
      setEmotionState({
        ...emotionState,
        [emotion]: {
          ...emotionState[emotion],
          color: colors[selectColor],
        },
      });
    }
  }, [emotionState[emotion].checked]);

  const handleChange = (event) => {
    const applyColor = new Promise((resolve, reject) => {
      setSelectColor(event.target.value);
    });

    const emotionApply = () => {
      setEmotionState({
        ...emotionState,
        [emotion]: {
          ...emotionState[emotion],
          color: colors[event.target.value],
        },
      });
    };

    applyColor.then(emotionApply());
  };

  return (
    <Box
      sx={{
        minWidth: '10rem',
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Color</InputLabel>
        <Select value={selectColor} onChange={handleChange} disabled={disabled}>
          {colors.map((color, idx) => (
            <MenuItem value={idx} sx={{ display: 'flex', flexDirection: 'row' }} key={(color.mainGroup, idx)}>
              <Box sx={{ backgroundColor: `${color.mainBackGroup}`, flex: 1, height: '2rem' }} />
              <Box sx={{ backgroundColor: `${color.mainGroup}`, flex: 1, height: '2rem' }} />
              <Box sx={{ backgroundColor: `${color.subGroup}`, flex: 1, height: '2rem' }} />
              <Box sx={{ backgroundColor: `${color.pointGroup}`, flex: 1, height: '2rem' }} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default ColorDropbox;
