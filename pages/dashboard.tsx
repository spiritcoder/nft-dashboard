import { NextPage } from "next";
import { BaseLayout } from "../components/sharedLayout/BaseLayout";
import { useWeb3React } from "@web3-react/core";
import { NFT_ABI, NFT_CONTRACT_ADDRESS } from "../assets/config";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const Dashboard: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [maxSupply, setmaxSupply] = useState<string>("");
  const [owner, setowner] = useState<string>("");
  const [paused, setpaused] = useState<string>("");
  const [revealed, setrevealed] = useState<string>("");
  const [whitelistMintEnabled, setwhitelistMintEnabled] = useState<string>("");
  const [totalSupply, settotalSupply] = useState<string>("");
  const [maxMintAmountPerTx, setmaxMintAmountPerTx] = useState<string>("");
  const [cost, setcost] = useState<number>(0);

  const { active, library: provider } = useWeb3React();

  useEffect(() => {
    async function fetchDetails() {
      if (active) {
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          NFT_CONTRACT_ADDRESS,
          NFT_ABI,
          signer
        );

        setName((await contract.name()).toString());
        setmaxSupply((await contract.maxSupply()).toString());
        setowner((await contract.owner()).toString());
        setpaused((await contract.paused()).toString());
        setrevealed((await contract.revealed()).toString());
        setwhitelistMintEnabled(
          (await contract.whitelistMintEnabled()).toString()
        );
        settotalSupply((await contract.totalSupply()).toString());
        setcost((await contract.cost()).toString());
        setmaxMintAmountPerTx((await contract.maxMintAmountPerTx()).toString());
      }
    }
    fetchDetails();
  }, []);

  return (
    <div className="">
      <BaseLayout>
        <p className="text-center text-admin-blue mb-5 text-lg">System Data</p>
        <div className="flex">
          <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Contract Name</p>
            <div className="flex flex-col items-center justify-center py-2">
              <div className="px-4 py-2 rounded-md bg-admin-blue text-xl font-semibold duration-100 text-white">
                <div> {name} </div>
              </div>
            </div>
          </div>


          <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Total Supply</p>
            <div className="flex flex-col items-center justify-center py-2">
              <div className="px-4 py-2 rounded-md bg-admin-blue text-xl font-semibold duration-100 text-white">
                <p>{totalSupply}</p>
              </div>
            </div>
          </div>
          <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Revealed Status</p>
            <div className="flex flex-col items-center justify-center py-2">
              <div className="px-4 py-2 rounded-md bg-admin-blue text-xl font-semibold duration-100 text-white">
                <p>{revealed}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Paused Status</p>
            <div className="flex flex-col items-center justify-center py-2">
              <div className="px-4 py-2 rounded-md bg-admin-blue text-xl font-semibold duration-100 text-white">
                <p>{paused}</p>
              </div>
            </div>
          </div>
          <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Max Supply</p>
            <div className="flex flex-col items-center justify-center py-2">
              <div className="px-4 py-2 rounded-md bg-admin-blue text-xl font-semibold duration-100 text-white">
                <p>{maxSupply}</p>
              </div>
            </div>
          </div>
          <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Max Mint Per Trx</p>
            <div className="flex flex-col items-center justify-center py-2">
              <div className="px-4 py-2 rounded-md bg-admin-blue text-xl font-semibold duration-100 text-white">
                <p>{maxMintAmountPerTx}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="flex align-center">
            <div className="card w-[400px] min-h-fit m-3 p-10 bg-slate-100">
              <p className="text-center text-admin-blue">Cost</p>
              <div className="flex flex-col items-center justify-center py-2">
                <div className="px-4 py-2 rounded-md bg-admin-blue text-xl font-semibold duration-100 text-white">
                  <p>{ethers.utils.formatEther((cost))} Matic</p>
                </div>
              </div>
            </div>
            <div className="card w-[600px] min-h-fit m-3 p-10 bg-slate-100">
              <p className="text-center text-admin-blue">Owner</p>
              <div className="flex flex-col items-center justify-center py-2">
                <div className="px-4 py-2 rounded-md bg-admin-blue text-xl font-semibold duration-100 text-white">
                  <p>{owner}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Dashboard;
