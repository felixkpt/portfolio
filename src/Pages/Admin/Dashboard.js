import React from 'react'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BrowseGalleryOutlinedIcon from '@mui/icons-material/BrowseGalleryOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="grid">
        <div className="admin-card">
          <div className="img-wrapper">
            <GroupOutlinedIcon />
          </div>
          <div className="content">
            <div>
              3,566
            </div>
            <div>
              Users this week
            </div>
          </div>
        </div>
        <div className="admin-card">
          <div className="img-wrapper">
            <BrowseGalleryOutlinedIcon />
          </div>
          <div className="content">
            <div>
              35,646
            </div>
            <div>
              Page views this months
            </div>
          </div>
        </div>
        <div className="admin-card">
          <div className="img-wrapper">
            <MarkunreadMailboxOutlinedIcon />
          </div>
          <div className="content">
            <div>
              752
            </div>
            <div>
              Sent proposals this month
            </div>
          </div>
        </div>
        <div className="admin-card">
          <div className="img-wrapper">
            <PlaylistAddCheckOutlinedIcon />
          </div>
          <div className="content">
            <div>
              $ 6,335
            </div>
            <div>
              Todos List
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
