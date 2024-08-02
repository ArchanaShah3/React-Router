import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className='text-center text-white bg-gray-800 text-3xl p-4'>
            User : {userid}
        </div>
    )
}

export default User