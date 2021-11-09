import React from 'react';
import { DialogActions, DialogContent, DialogTitle, Button, TextField, DialogContentText } from '@mui/material';
import '../Calculator.css';

type SingleParameterFormProps = {
  commonName: string,
  syntacticalName: string,
  description: string,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  inputRef: HTMLInputElement,
}
function SingleParameterForm(props: SingleParameterFormProps) {
  const [parameter, setParameter] = React.useState(["", ""]);

  const handleDoneClick = () => {
    const formula = `${props.commonName.replace(" ","_")}(${parameter})`;
    props.addToUserInput(formula, props.inputRef);
    closeDialog();
  };

  const onChangeParameter = (e: any) => {
    setParameter(e.target.value);
  };

  const closeDialog = () => {
    props.setDialogOpen(false);
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title">
        {props.commonName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`${props.syntacticalName}-description`}>
          {props.description}
        </DialogContentText>
        <TextField
          size="small"
          type="text"
          onChange={onChangeParameter}
          className="text-field"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDoneClick} autoFocus>
          Done
        </Button>
        <Button onClick={closeDialog}>Cancel</Button>
      </DialogActions>
    </>
  );
}

export { SingleParameterForm };
