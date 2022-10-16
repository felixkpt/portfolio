import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemActions from '../../../Components/Admin/ItemActions/ItemActions'
import ItemsSwitcher from '../../../Components/Admin/ItemsSwitcher/ItemsSwitcher'
import './Users.scss'

const Users = () => {
    const [users, setUsers] = useState()

    const getUsers = async (params = '') => {
        try {
            const resp = await axios.get(`/users${params}`)
            setUsers(await resp.data)
        } catch (e) { console.log(e) }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const deleteItem = async (id, permanently) => {

        try {
            let resp
            if (permanently === true) {
                resp = await axios.delete(`/users/${id}/force`)
            } else {
                resp = await axios.delete(`/users/${id}`)
            }

            getUsers()
        } catch (e) { console.log(e) }
    }

    const [type, changeType] = useState('active')

    const handleChangeType = (val) => {
        changeType(val)
        getUsers(`?type=${val}`)
    }

    const types = [
        {
            type: 'active',
            label: 'Active'
        },
        {
            type: 'in-active',
            label: 'In Active'
        },
    ]

    const restoreItem = async (id) => {
        try {
            await axios.post(`/users/${id}/restore`)
        } catch (e) { console.log(e) }

    }

    return (
        <div className="users">
            <ItemsSwitcher types={types} type={type} changeType={handleChangeType} />
            {users && users.map(user =>
            (<div className="user-item" key={user.id}>
                <div className='user-details'>
                    <div>#{user.id}</div><div className='title'>{user.name}</div>
                    <div className='title'>{user.email}</div>
                </div>
                <ItemActions item={user} deleteItem={deleteItem} restoreItem={restoreItem} />
            </div>)
            )}
        </div>
    )
}

export default Users