import './sidebar.css';
import { PlayCircleFilledOutlined, RssFeed, Group, Bookmark, HelpOutline, Event, School, WorkOutline} from '@material-ui/icons'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className='sidebarListItem'>
            <RssFeed />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon' />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className='sidebarListItem'>
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='/assets/friend1.JPG' alt='' />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
      </div>
  )
}

