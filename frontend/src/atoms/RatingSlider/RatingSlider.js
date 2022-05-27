import * as React from 'react';
import { Box, Slider } from '@mui/material';

function RatingSlider(Props) {
  const { onRating, disabled, strength } = Props;
  return (
    <Box sx={{ width: '10rem' }}>
      <Slider
        disabled={disabled}
        // valueLabelFormat={(value) => Math.abs(value)}
        valueLabelDisplay="on"
        sx={{
          '& .MuiSlider-valueLabel': {
            top: '1.7rem',
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 24,
            height: 24,
            borderRadius: '50% 50% 50% 0',
            // backgroundColor: '#7aaad0',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&:before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
              transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
              transform: 'rotate(45deg)',
            },
          },
        }}
        // defaultValue={0}
        value={strength}
        onChange={(value) => onRating(value.target.value)}
        step={1}
        marks
        min={0}
        max={10}
      />
    </Box>
  );
}

export default RatingSlider;
