import { FC } from "react"
import { LogoIconProps } from "./types"

const Logo:FC<LogoIconProps> = ({ width, height }) => {
  return (
    <div>
         <img
            className="rounded-[30px]"
            src="../../../public/logo.png"
            draggable={false}
            width={width}
            height={height}
          />
    </div>
  )
}

export default Logo
