import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ArchanaShah3')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="git profile" width={300} />
        </div>
    )
}

export default Github

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ArchanaShah3')
    return response.json()
}
