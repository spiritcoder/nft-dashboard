import Image from "next/image";
import { useWeb3 } from "@3rdweb/hooks";
import { useWeb3React } from '@web3-react/core'

import profile from "../../assets/images/profile.png";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const TheHeader = () => {
  const { account, active } = useWeb3React();
async function disconnectWallet(){
    
}
  const router = useRouter();

  useEffect(() => {
    if (!active) {
      router.push("/");
    }
  }, [active, router]);
  return (
    <div className="flex justify-end py-3 pr-7 border-b border-white/50">
      <div className="flex items-center group">
        <Image src={profile} alt="" />
        <p className="text-white">
          {active ? `${account?.slice(0, 6)}... ${account?.slice(37)}` : "N/A"}
          <div className="hidden group-hover:visible text-white">
            <button onClick={disconnectWallet}>Disconnect</button>
          </div>
        </p>
      </div>
    </div>
  );
};
