import { useEffect, useState } from "react";
import { useAppDispatch } from "../../state";
import { getMe } from "../../state/auth/slice";
import { MainUserPayload } from "./types";
import SearchIcon from "../../assets/icons/search";
import NavigationTabs from "../../components/navigation-tabs";
import { Outlet } from "react-router-dom";
import MenuIcon from "../../assets/icons/menu";

const Main = () => {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<MainUserPayload>();

  useEffect(() => { 
    const getTargetUser = async () => {
      const response = await dispatch(getMe());

      setUser(response.payload);
    };

    getTargetUser();
  }, [dispatch]);

  return <>
  <div className="w-[100%] h-[60px] p-3 shadow-lg shadow-gray-200 flex items-center gap-[10px] cursor-pointer">
    {user?.avatar ? (
      <img className="w-[45px] h-[45px] rounded-[50%]" src={user.avatar}/>
      ) : (
      <div className="min-w-[45px] w-[45px] h-[45px] bg-blue-500 rounded-[50%] flex justify-center items-center text-[#FFF] text-[23px] font-sans font-medium">
        {user?.firstName.charAt(0).toUpperCase()}</div>
      )}
      <div className="flex items-center">
        <span className="absolute left-[75px]">
         <SearchIcon />
        </span>
        <input placeholder="Search in Software" className="w-[250px] h-[40px] rounded-[30px] pl-[40px] pr-[20px] bg-gray-200 placeholder-gray-400 outline-none"/>
      </div>
      <NavigationTabs />
      <MenuIcon />
  </div>
  <div className="h-[100%]">
      <Outlet />
  </div>
  </>
};

export default Main;
