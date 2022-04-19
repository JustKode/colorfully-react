/* eslint-disable no-unused-vars */
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

// *************** SURVEY DIALOG  START ********************
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// *************** SURVEY DIALOG  END ********************

// *************** SURVEY RATINGSLIDER  START ********************
const StyledFlexColumSliderDiv = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  & + & {
    border-top: 1px solid #bdbdbd;
    padding-top: 1rem;
  }
`;

const StyledFlexRowSliderDiv = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export function EmotionRatiog(Props) {
  const { title, leftText, rightText, targetEmotion, onRating } = Props;
  return (
    <StyledFlexColumSliderDiv>
      <Typography gutterBottom>{title}</Typography>
      <StyledFlexRowSliderDiv>
        <Typography sx={{ width: '5rem' }}>{leftText}</Typography>
        <DiscreteSlider onRating={onRating} targetEmotion={targetEmotion} />
        <Typography sx={{ width: '5rem', textAlign: 'right' }}>{rightText}</Typography>
      </StyledFlexRowSliderDiv>
    </StyledFlexColumSliderDiv>
  );
}

export default function DiscreteSlider(Props) {
  const { onRating, targetEmotion } = Props;
  return (
    <Box sx={{ width: '15rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
      <Slider
        valueLabelFormat={(value) => Math.abs(value)}
        valueLabelDisplay="on"
        sx={{
          '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 24,
            height: 24,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#7aaad0',
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
        defaultValue={0}
        onChange={(value) => onRating(value.target.value, targetEmotion)}
        step={10}
        marks
        min={-50}
        max={50}
      />
    </Box>
  );
}
// *************** SURVEY SLIDER  END ********************
