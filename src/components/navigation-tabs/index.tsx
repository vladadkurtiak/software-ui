import HomeIcon from "../../assets/icons/home";
import FriendsIcon from "../../assets/icons/friends";
import VideoIcon from "../../assets/icons/video";
import GroupIcon from "../../assets/icons/group";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationTabs = () => {

  const [activeKey, setActiveKey] = useState<string>('home');

  const editActiveKey = (key: string) => {
    setActiveKey(key)
  }

    const navigationTabs = [
        {
          name: 'Home',
          key: 'home',
          Icon: HomeIcon,
          path: '/auth/main/home',
        }, 
        {
          name: 'Friends',
          key: 'friends',
          Icon: FriendsIcon,
          path: '/auth/main/friends',
        }, 
        {
          name: 'Video',
          key: 'video',
          Icon: VideoIcon,
          path: '/auth/main/video'
        }, 
        {
          name: 'Group',
          key: 'group',
          Icon: GroupIcon,
          path: '/auth/main/groups',
        },
      ];

  return (
  <div className="hidden md:flex xl:ml-[200px] lg:ml-[140px] md:ml-[90px] gap-[20px] mt-[5px]">
    {navigationTabs.map(({ key, Icon, path }) => <button key={key} className="pb-[4px] box-content md:w-[50px] lg:w-[70px] xl:w-[100px] " style={{ borderBottom: `3px ${activeKey === key ? '#1877F2' : 'transparent'} solid` }} onClick={() => editActiveKey(key)}>
      <Link to={path} key={key}>
        <Icon activeKey={activeKey} key={key}/>
      </Link>
    </button>)}
  </div>
  )
}

export default NavigationTabs