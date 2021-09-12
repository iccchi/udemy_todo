import React, { useState } from 'react'
import firebase from 'firebase/app'
import { ListItem, TextField, Grid } from '@material-ui/core'
import DeleteOutlineOutlinedIcon  from '@material-ui/icons/DeleteOutlineOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import {db} from './firebase'
import styles from "./TaskItem.module.css"

interface PROPS {
  id: string;
  title: string;
}

export const TaskItem: React.FC<PROPS> = (props) => {
  const [title, setTitle] = useState(props.title)

  const editTask=()=>{
    db.collection("tasks").doc(props.id).set({title: title}, {merge: true})
  }

  const deleteTask=()=>{
    db.collection("tasks").doc(props.id).delete()
  }

  return (
    <ListItem>
      <h2>{props.title}</h2>
      <Grid container justifyContent="flex-end">
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          label="Edit tast"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>setTitle(e.target.value)}
        />
      </Grid>
      <button className={styles.taskitem_icon} onClick={editTask}>
        <EditOutlinedIcon />
      </button>
      <button className={styles.taskitem_icon} onClick={deleteTask}>
        <DeleteOutlineOutlinedIcon />
      </button>
    </ListItem>
    
  )
}
