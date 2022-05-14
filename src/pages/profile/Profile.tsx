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

    useEffect(() => {
        if (id === '100') {
            return
        }
        else {
            getUser()
        }
    }, [id])

    return (
        <div>
            <Typography variant='h3'>Posts</Typography>
            <Typography variant='h5'>userId {id}</Typography>
            {
                user ?
                    <Card>
                        <CardContent>
                            <Typography  >
                                {user?.name}
                            </Typography>
                            <Typography color="text.secondary">
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