import Image from "next/image";
import Link from "next/link";
import { Logo } from "../ui/Logo";
import { useWeb3React } from '@web3-react/core'

import {
  ViewGridIcon,
  CurrencyDollarIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

const TheSideBar = () => {
  const { library: provider, deactivate } = useWeb3React();

  async function logOut() {
    deactivate();
  }
  return (
    <div className="bg-inherit w-[250px] h-screen fixed top-0 left-0">
      <div className="mt-8 ml-20">
        <Logo />
      </div>
      <div className="mx-4 mt-11">
        <div className="mt-3">
          <Link href={"/"} passHref>
            <div className="flex items-center p-3 pr-0 bg-admin-blue rounded-md cursor-pointer">
              <ViewGridIcon className="h-5 text-white" />

              <span className="text-white font-OpenSans text-base font-semibold tracking-wider ml-3">
                Dashboard
              </span>
            </div>
          </Link>
        </div>
        <div className="mt-3">
          <Link href={"/settings"} passHref>
            <div className="flex items-center p-3 pr-0 bg-admin-blue rounded-md cursor-pointer">
              <CogIcon className="h-5 text-white" />

              <span className="text-white font-OpenSans text-base font-semibold tracking-wider ml-3">
                Settings
              </span>
            </div>
          </Link>
        </div>
        <div className="mt-3">
          <Link href={"/money"} passHref>
            <div className="flex items-center p-3 pr-0 bg-admin-blue rounded-md cursor-pointer">
              <CurrencyDollarIcon className="h-5 text-white" />

              <span className="text-white font-OpenSans text-base font-semibold tracking-wider ml-3">
                Money Settings
              </span>
            </div>
          </Link>
        </div>
        <div className="mt-3">
          <div className="flex items-center p-3 pr-0 bg-admin-blue rounded-md cursor-pointer" onClick={logOut}>
            <LogoutIcon className="h-5 text-white" />

            <span className="text-white font-OpenSans text-base font-semibold tracking-wider ml-3">
              Log Out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TheSideBar;
