import { Button, TextField } from '@mui/material'
import React, { FC, useState } from 'react'
import { useGlobalState } from '../../state'
import { PostType } from '../../type/postType'
import './AddPosts.scss'

const AddPost:FC = () => {
  const [newPost, setNewPost] = useState<PostType>({ userId: 0, title: '', body: '' })
  const [addPost, setAddPost] = useGlobalState<any>('posts')
 
  const changePostTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, title: e.target.value })
  }

  const changePostBody = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, body: e.target.value })
  }

  const createNewPost = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (newPost.body.length > 0 && newPost.title.length > 0) {
        const createPost: PostType = {
          title: newPost.title,
          body: newPost.body,
          userId: 100
        }

        setAddPost([...addPost, createPost])
        newPost.title = '';
        newPost.body = '';
    }
  }
  return (<>
    <form className='form'>
      <TextField className='form__title' value={newPost.title} onChange={e => changePostTitle(e)} id="outlined-basic" size="small" label="Title" />
      <TextField
        className='form__description'
        id="filled-multiline-static"
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        value={newPost.body}
        onChange={e => changePostBody(e)}
      />
      <Button onClick={createNewPost} variant="contained">Add post</Button>
    </form>
  </>)
}

export default AddPost