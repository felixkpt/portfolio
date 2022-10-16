import React from 'react'
import './ItemActions.scss'

const ItemActions = ({ item, deleteItem, restoreItem }) => {
    return (
        <div className='item-actions'>
            {item.deleted_at ?
                <>
                    <button onClick={() => restoreItem(item.id)}>Restore</button>
                    <button className="btn-danger" onClick={() => deleteItem(item.id, true)}>Delete permanently</button>
                </>
                : <button className="btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
            }
        </div>
    )
}

export default ItemActions