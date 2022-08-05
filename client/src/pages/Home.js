import React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

function Home() {
    const { loading, data} = useQuery(FETCH_POSTS_QUERY); 
    return (
        <div>
            <h1>Posts</h1>
            <div className='flexBox'>
                { loading ? (
                    <h3>Loading</h3>
                ) : (
                    data && data.getPosts.map(post =>(
                        <div className="flexItem" key={post.id}>
                            <h3>{post.id}</h3>
                            <h3>{post.body}</h3>
                            <h3>{post.username}</h3>
                            <br></br>
                        </div>
                    ))
                )

                }
            </div>
        </div>
    )
}


const FETCH_POSTS_QUERY = gql`
{
    getPosts{
        id 
        body 
        createdAt 
        username
    }
}
`

export default Home 