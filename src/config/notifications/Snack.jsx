import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

const Snack = ({ message, text = null, variant = 'error' }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = () => (
    <Button>
      <CloseIcon
        onClick={() => {
          closeSnackbar();
        }}
      />
    </Button>
  );

  useEffect(() => {
    let msg = text ? text : message;
    if (message?.split && message?.split(' ').length === 2) {
      msg = message.replace(' ', '.').toUpperCase();
    }

    enqueueSnackbar(<b>{t(msg)}</b>, {
      variant: variant,
      autoHideDuration: 3000,
      action,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      TransitionComponent: Slide,
    });
  }, [message]);
  return <></>;
};

const mapStateToProps = (state) => {
  return {
    message: state.snack.message,
    variant: state.snack.variant,
  };
};

export default connect(mapStateToProps, null)(Snack);
