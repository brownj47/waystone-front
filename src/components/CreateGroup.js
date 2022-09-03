import React, { useState } from 'react';
const URL_PREFIX = 'https://waystoneapi.herokuapp.com/'

const CreateGroup = (props) => {

    const [groupName, setGroupName] = useState('')
    const [membersToAdd, setMembersToAdd] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URL_PREFIX}api/groups`, {

            method: 'POST',
            body: JSON.stringify({
                group_name: groupName,
                admin: props.user._id,
                members: [props.user._id],
                inbox: [],
                outbox: [...membersToAdd]
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => res.json()).then(data => {
            console.log(data)
            console.log('group created!')
        }).catch(err => console.log(err))

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="group-name">Group Name:</label>
                <br />
                <input type="text" id="group-name" name="groupname" value={groupName} onChange={(e) => { setGroupName(e.target.value) }} />
                <button type='submit'>Submit</button>
            </form>
            <div>
                {props.user.friends.map(function (friend) {
                    return (
                        <>
                            <button key={friend} onClick={(e) => { 
                                setMembersToAdd([...membersToAdd, friend]) 
                                e.target.showComponent = false
                            }}>{friend}</button>
                            <br />
                        </>
                    )
                })}
            </div>
        </>
    )
};

export default CreateGroup;