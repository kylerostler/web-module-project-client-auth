import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initFormValues = {
    username: '',
    email: '',
    age: 0
}

export default function AddFriend(props) {
    const { push } = useHistory()
    const { friends, postFriend } = props
    const [addValues, setAddValues] = useState(initFormValues)

    const onChange = evt => {
        const { id, value } = evt.target
        setAddValues({ ...addValues, [id]: value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        postFriend(addValues)
        push('/friends')
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