import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemActions from '../../../Components/Admin/ItemActions/ItemActions'
import ItemsSwitcher from '../../../Components/Admin/ItemsSwitcher/ItemsSwitcher'
import './Posts.scss'

const Posts = () => {
  const [posts, setPosts] = useState()

  const getPosts = async (params = '') => {
    try {
      const resp = await axios.get(`/posts${params}`)
      setPosts(await resp.data)
    } catch (e) { console.log(e) }
  }

  useEffect(() => {
    getPosts()
  }, [])

  const deleteItem = async (id, permanently) => {

    try {
      let resp
      if (permanently === true) {
        resp = await axios.delete(`/posts/${id}/force`)
      } else {
        resp = await axios.delete(`/posts/${id}`)
      }
      console.log(resp)

      getPosts()
    } catch (e) { console.log(e) }
  }

  const [type, changeType] = useState('published')

  const handleChangeType = (val) => {
    changeType(val)
    getPosts(`?type=${val}`)
  }

  const types = [
    {
      type: 'published',
      label: 'Published'
    },
    {
      type: 'trashed',
      label: 'Trashed'
    },
  ]
  const restoreItem = async (id) => {
    try {
      await axios.post(`/posts/${id}/restore`)
      getPosts()
    } catch (e) { console.log(e) }

  }

  return (
    <div className="posts">
      <ItemsSwitcher types={types} type={type} changeType={handleChangeType} />
      {posts && posts.map(post =>
      (<div className="post-item" key={post.id}>
        <div className='post-details'>
          <div>#{post.id}</div><div className='title'>{post.title}</div>
          <div style={{ fontStyle: "italic" }}> -- {post.user?.name}</div>
        </div>
        <ItemActions item={post} deleteItem={deleteItem} restoreItem={restoreItem} />
      </div>)
      )}
    </div>
  )
}

export default Posts