import { FC } from "react"
import { NavigationItemPayload } from "../types"

const VideoIcon:FC<NavigationItemPayload>  = ({ activeKey }) => {
  return (
    <div className="h-[48px] flex justify-center items-center hover:bg-gray-100 rounded-[5px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 48 48"><defs><mask id="ipTVideoTwo0"><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3"/><path fill="#555" d="M20.5 28v-6.062l5.25 3.03L31 28l-5.25 3.031l-5.25 3.031z"/><path d="M6 15h36m-9-9l-6 9m-6-9l-6 9"/></g></mask></defs><path fill={activeKey == 'video' ? '#1877F2' : 'black'} d="M0 0h48v48H0z" mask="url(#ipTVideoTwo0)"/></svg>
    </div>
  )
}

export default VideoIcon
