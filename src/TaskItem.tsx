import React from 'react'
import firebase from 'firebase/app'
import { ListItem, TextField, Grid } from '@material-ui/core'
import DeleteOutlineOutlinedIcon  from '@material-ui/icons/DeleteOutlineOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

interface PROPS {
  id: string;
  title: string;
}

export const TaskItem: React.FC<PROPS> = (props) => {
  return (
    <div>
      <ListItem>
        <h2>{props.title}</h2>
      </ListItem>
    </div>
  )
}
