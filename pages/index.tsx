import { useWeb3 } from "@3rdweb/hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from "@web3-react/injected-connector";

const injected = new InjectedConnector({
  supportedChainIds: [137],
});

export default function Index(): JSX.Element {
  const router = useRouter();

  const { activate, active, library: provider } = useWeb3React();
  
  useEffect(() => {
    if (active) {
      router.push("/dashboard");
    }
  }, [active, router]);

  async function connect() {
    try {
      await activate(injected)
    }
    catch (e) {
      console.log(e);
    }
  }
  return (
    <> 
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100">
      <button
        className="px-4 py-2 rounded-md bg-admin-blue cursor-pointer hover:bg-admin-blue text-xl font-semibold duration-100 text-white"
        onClick={() => connect()}
      >
        Connect Wallet
      </button>
    </div>
    </>
  )
}
