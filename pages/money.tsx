import type { NextPage } from "next";
import { NFT_ABI, NFT_CONTRACT_ADDRESS } from "../assets/config";
import { BaseLayout } from "../components/sharedLayout/BaseLayout";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

const Money: NextPage = () => {
  const { active, library: provider } = useWeb3React();

  async function setMintPrice(event: any) {
    event.preventDefault();
    let amount = `${event.target.amount.value}`;
    let costWei = ethers.utils.parseEther(amount);
    if (amount) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        NFT_ABI,
        signer
      );
      await contract.setCost(costWei);
    } else {
      alert("nothing sup");
    }
  }

  async function withdraw() {
    if (confirm("Are you sure you want to Withdraw?")) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        NFT_ABI,
        signer
      );
      await contract.withdraw();
    }
  }

  return (
    <div className="">
      <BaseLayout>
        <p className="text-center text-admin-blue mb-5">Money Settings</p>

        <div className="flex">
          <div className="card w-[650px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue"> Mint for Address</p>
            <form onSubmit={setMintPrice}>
              <div className="flex items-center justify-center py-2 bg-slate-100">
                <input
                  type="text"
                  className="p-3 w-30 ml-5 bg-white text-sm italic h-10 font-sans"
                  placeholder="Amount"
                  name="amount"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-2">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-admin-blue cursor-pointer hover:bg-admin-blue text-xl font-semibold duration-100 text-white"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          <div className="card w-[650px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Withdraw</p>
            <div className="flex flex-col items-center justify-center py-2">
              <button className="px-4 py-2 rounded-md bg-admin-blue cursor-pointer hover:bg-admin-blue text-xl font-semibold duration-100 text-white" onClick={withdraw}>
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Money;
