import { Card, CardContent, Typography } from '@mui/material'
import { useGlobalState } from '../../state';
import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddPost from '../../components/add-post/AddPost'
import { getPosts } from '../../state/fetchPosts'
import './Tape.scss'

const Tape: FC = () => {
    const [posts] = useGlobalState('posts')

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        console.log(posts);
    }, [posts])


    return (
        <div className='tape'>
            <Typography sx={{ mb: '20px' }} variant='h3'>Posts</Typography>
            <AddPost />
            {
                posts.map((item: any) => (
                    <Link key={`${item.id}_${item.title}`} to={`profile/${item.userId}`}>
                        <Card sx={{ mt: '10px' }}>
                            <CardContent>
                                <Typography  >
                                    {item.title}
                                </Typography>
                                <Typography sx={{ mt: '10px' }} color="text.secondary">
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