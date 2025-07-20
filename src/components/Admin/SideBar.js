import 'react-pro-sidebar/dist/css/styles.css';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaGithub} from 'react-icons/fa';
import { GiCat } from "react-icons/gi";
import './SideBar.scss'
import sidebarBg from '../../assets/bg2.jpg';


const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
        <ProSidebar
            image={sidebarBg}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <GiCat size="3em" color='white' />
          Tọt Nguyễn
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
          >
            Dashboard
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            icon={<FaGem />}
            title="Feature Management"
          >
            <MenuItem>User Management</MenuItem>
            <MenuItem>Quiz Management</MenuItem>
            <MenuItem>Question Management</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/minh041104/react-app"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                Nguyen Minh
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
    </>
  )
}
export default SideBar;
