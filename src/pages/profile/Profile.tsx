import { Card, CardContent, Typography } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserType } from '../../type/userType'

const Profile: FC = () => {
    const { id } = useParams()
    const [user, setUser] = useState<UserType>()
    const getUser = async () => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }

    useEffect((): any => {
        if (id === '100') {
            return null
        }
        else {
            getUser()
        }

    }, [id])

    useEffect(() => {
        console.log(user);
    }, [user])


    return (
        <div>
            <Typography sx={{ mb: '20px' }} variant='h3'>Posts</Typography>
            <Typography sx={{ mb: '0' }} variant='h5'>userId {id}</Typography>
            {
                user ?
                    <Card sx={{ mt: '10px' }}>
                        <CardContent>
                            <Typography  >
                                {user?.name}
                            </Typography>
                            <Typography sx={{ mt: '10px' }} color="text.secondary">
                                {user?.email}
                            </Typography>
                        </CardContent>
                    </Card>
                    :
                    null
            }
        </div>
    )
}

export default Profile