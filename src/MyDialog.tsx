import React from 'react';
import Dialog from '@mui/material/Dialog';
import './styling/Calculator.css';

type MyDialogProps = {
  setDialogOpen: any,
  form: JSX.Element,
  open: boolean
}
function MyDialog(props: MyDialogProps) {
  return (
    <Dialog keepMounted open={props.open} onClose={(e: any) => { props.setDialogOpen(false) }}>
      {props.form ? props.form : null}
    </Dialog>
  );
}

export { MyDialog };
