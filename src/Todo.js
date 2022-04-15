import React from 'react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import './Todo.css';

const Todo = ({ todo }) => {
  return (
    <>
        <List className='todo__list'>
            <ListItem>
                <ListItemText primary={todo} secondary='TODO LIST' />
            </ListItem>
        </List>
    </>
  )
}

export default Todo