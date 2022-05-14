import { Card, CardContent, Typography } from '@mui/material'
import { useGlobalState } from '../../state';
import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddPost from '../../components/add-post/AddPost'
import { getPosts } from '../../state/fetchPosts'
import './Tape.scss'
import { PostType } from '../../type/postType'

const Tape: FC = () => {
    const [ posts ] = useGlobalState('posts')

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className='tape'>
            <Typography variant='h3'>Posts</Typography>
            <AddPost />
            {
                posts?.map((item: PostType) => (
                    <Link key={`${item.id}_${item.title}`} to={`profile/${item.userId}`}>
                        <Card className='tape__card'>
                            <CardContent>
                                <Typography  >
                                    {item.title}
                                </Typography>
                                <Typography color="text.secondary">
                                    {item.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))
            }
        </div>
    )
}

export default Tape