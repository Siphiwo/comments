import React, { createContext, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import moment from 'moment';

export const CommentContext = createContext()


function CommentContextProvider(props) {
    
    const [userData, setUserData] = useState('')
    
    const [comments, setComments] = useState([
        {id:uuidv4(), username: 'Leanne Graham', body: 'Multi-tiered zero tolerance productivity', timestamp: moment("1209", "MMDD").fromNow(), likes: 0},
        {id:uuidv4(), username: 'Ervin Howell', body: 'Face to face bifurcated interface', timestamp: moment("1121", "MMDD").fromNow(), likes: 0},
    ])

    useEffect(() => {
        setUserData(userName(parseInt((Math.random() * 10) + 1)))
    },[])

    const userName = index => {
        fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
        .then(res => res.json())
        .then(data => setUserData(data))
    }

    const addComment = comment => {
        setUserData(userName(parseInt((Math.random() * 10) + 1)))
        setComments([... comments,{
            id:uuidv4(), 
            username: userData.name, 
            body: comment, 
            timestamp: moment().fromNow(), 
            likes: 0
        }])
    }
    
    const updateLikes = new_comment => {
        const index = comments.findIndex( comment => comment.id === new_comment.id )
        const copyComments = [...comments]
        copyComments[index].likes += 1;
        copyComments.sort((a, b) => b.likes-a.likes)
        setComments(copyComments)
    }
    return (
        <CommentContext.Provider value={{comments, addComment, updateLikes}}>
            {props.children}
        </CommentContext.Provider>
    )
}

export default CommentContextProvider
