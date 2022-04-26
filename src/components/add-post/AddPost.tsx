import { Button, TextField } from '@mui/material'
import React, { FC, useState } from 'react'
import { useGlobalState } from '../../state'

const AddPost:FC = () => {
  const [newPost, setNewPost] = useState({ userId: 0, title: '', body: '' })
  const [addPost, setAddPost] = useGlobalState<any>('posts')

  const createNewPost = (e: any) => {
    e.preventDefault()

    if (newPost.body.length > 0) {
      if (newPost.title.length > 0) {
        const createPost = {
          title: newPost.title,
          body: newPost.body,
          userId: 100
        }
        setAddPost([...addPost, createPost])
        newPost.title = '';
        newPost.body = '';
      }
    }
  }

  return (<>
    <form>
      <TextField value={newPost.title} onChange={e => setNewPost({ ...newPost, title: e.target.value })} id="outlined-basic" size="small" label="Title" />
      <TextField
        className='input__description'
        id="filled-multiline-static"
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        sx={{
          m: '0 10px'
        }}
        value={newPost.body}
        onChange={e => setNewPost({ ...newPost, body: e.target.value })}
      />
      <Button onClick={createNewPost} variant="contained">Add post</Button>
    </form>
  </>)
}

export default AddPost