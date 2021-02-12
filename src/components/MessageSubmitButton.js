import React from "react";
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from "../firebase";

export function MessageSubmitButton({name, text, setText}){
  return (
    <IconButton disabled={text === ''} onClick={()=>{
      pushMessage({name:'Gabriel',text});
      setText('');
    }}>
      <SendIcon />
    </IconButton>
  );
}
