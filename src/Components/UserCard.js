import React from 'react'
import { Card, CardBody } from "reactstrap";

const UserCard = ({user}) => {
  return (
    <Card className='text-centre' mt-3 mb-5> 
        <img src={user.avatar_url} className='img-thumbnail'></img>
        <CardBody>
        <div className='text-primary'>Name of user: {user.name}</div>
        <div className='text-primary'>Email: {user.email}</div>
        <div className='text-primary'>Location: {user.location}</div>
        <div className='text-info'>
            Followers: {user.followers}
        </div>
        <div className='text-info'>Available to hire: {user.hirable ? "Yes" : "No"}</div>
        </CardBody>
    </Card>
  )
}

export default UserCard