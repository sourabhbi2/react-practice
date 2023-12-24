import React, { useEffect, useState, useLoaderData } from 'react'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {

    //     fetch('https://api.github.com/users/sourabhbi2')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data.avatar_url);
    //             setData(data)
    //         })

    // }, [])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img src={data.avatar_url} alt='Git profile picture' width={300} />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sourabhbi2')
    return response.json()
}