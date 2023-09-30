import topbar from './topbar.css';
import { Search, Person } from '@material-ui/icons'

function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">SaSo</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search />
            <input placeholder='Search for Friends' className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarLinks">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>

        </div>

        Topbar
    </div>
  )
}

export default Topbar