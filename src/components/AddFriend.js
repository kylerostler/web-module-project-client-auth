import React, { useState } from "react";

const initFormValues = {
    username: '',
    email: '',
    age: null
}

export default function AddFriend(props) {
    const [addValues, setAddValues] = useState(initFormValues)

    const onChange = evt => {
        const { id, value } = evt.target
        setAddValues({ ...addValues, [id]: value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        console.log(addValues)
    }

    return (
        <div>
            <form id="addForm" onSubmit={onSubmit}>
                <h2>Add New Friend</h2>
                <input 
                    value={addValues.username}
                    onChange={onChange}
                    placeholder="enter friend username"
                    id="username"
                />
                <input
                    value={addValues.email}
                    onChange={onChange}
                    placeholder="enter friend email"
                    id="email"
                />
                <input
                    value={addValues.age}
                    onChange={onChange}
                    placeholder="enter friend age"
                    id="age"
                />
                <button id="submit-new-friend">Submit</button>
            </form>
        </div>
    )
}