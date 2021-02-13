import React from "react";
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from "../firebase";
import { InputLabel } from "@material-ui/core";

export function MessageSubmitButton({inputEl, name, text, setText}){
  return (
    <IconButton disabled={text === ''} onClick={()=>{
      pushMessage({name,text});
      setText('');
      inputEl.current.focus();
    }}>
      <SendIcon />
    </IconButton>
  );
}
