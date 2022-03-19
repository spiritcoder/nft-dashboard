import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import { BaseLayout } from "../components/sharedLayout/BaseLayout";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { NFT_ABI, NFT_CONTRACT_ADDRESS } from "../assets/config";

const Settings: NextPage = () => {
  const { active, library: provider } = useWeb3React();

  async function mintForAddress(event: any) {
    event.preventDefault();
    let address = `${event.target.address.value}`;
    let amount = parseInt(`${event.target.amount.value}`);
    if (ethers.utils.isAddress(address) && amount > 0 && amount < 3) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        NFT_ABI,
        signer
      );
      let minter = await contract.mintForAddress(amount, address);
    } else {
      alert("nothing sup");
    }
  }

  async function updateAmount(event: any) {
    event.preventDefault();
    let amount = parseInt(`${event.target.mintMax.value}`);
    if (amount > 0) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        NFT_ABI,
        signer
      );
      await contract.setMaxMintAmountPerTx(amount);
    } else {
      alert("nothing sup");
    }
  }

  async function updateUrlPrefix(event: any) {
    event.preventDefault();
    let urlPrefix = `${event.target.urlPrefix.value}`;
    if (urlPrefix != null) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NFT_CONTRACT_ADDRESS,
        NFT_ABI,
        signer
      );
      await contract.setUriPrefix(urlPrefix);
    } else {
      alert("nothing sup");
    }
  }

  async function salesControl(event: any) {
    event.preventDefault();
    let boolValue = `${event.target.sales.value}`;
    var val = boolValue === "true";
    const signer = provider.getSigner();
    const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);
    await contract.setPaused(val);
  }

  async function revealControl(event: any) {
    event.preventDefault();
    let boolValue = `${event.target.sales.value}`;
    var val = boolValue === "true";
    const signer = provider.getSigner();
    const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);
    await contract.setRevealed(val);
  }
  return (
    <div className="">
      <BaseLayout>
        <p className="text-center text-admin-blue mb-5">System Settings</p>

        <div className="flex">

        <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue"> Set URL Prefix</p>
            <form onSubmit={updateUrlPrefix}>
              <div className="flex items-center justify-center py-2 bg-slate-100">
                <input
                  type="text"
                  className="p-3 w-90 ml-5 bg-white text-sm italic h-10 font-sans"
                  placeholder="urlPrefix"
                  name="urlPrefix"
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
          <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue"> Mint for Address</p>
            <form onSubmit={mintForAddress}>
              <div className="flex items-center justify-center py-2 bg-slate-100">
                <input
                  type="text"
                  className="p-3 w-96 bg-white text-sm italic h-10 font-sans"
                  placeholder="Wallet Address"
                  name="address"
                />
                <input
                  type="number"
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
                  Mint
                </button>
              </div>
            </form>
          </div>

          <div className="card w-[450px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Sales Control</p>
            <form onSubmit={salesControl}>
              <div className="flex items-center justify-center py-2 bg-slate-100">
                <select
                  className="form-select w-96 px-3 py-1.5 font-normal border border-solid"
                  name="sales"
                >
                  <option value="true">Disable</option>
                  <option value="false">Enable</option>
                </select>
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
        </div>
        <div className="flex">
          <div className="card w-[650px] min-h-fit m-3 p-10 bg-slate-100">
            <p className="text-center text-admin-blue">Reveal Control</p>
            <form onSubmit={revealControl}>
              <div className="flex items-center justify-center py-2 bg-slate-100">
                <select
                  className="form-select w-96 px-3 py-1.5 font-normal border border-solid"
                  name="sales"
                >
                  <option value="true">Enable</option>
                  <option value="false">Disable</option>
                </select>
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
            <p className="text-center text-admin-blue"> Mint for Address</p>
            <form onSubmit={updateAmount}>
              <div className="flex items-center justify-center py-2 bg-slate-100">
                <input
                  type="number"
                  className="p-3 w-30 ml-5 bg-white text-sm italic h-10 font-sans"
                  placeholder="Amount"
                  name="mintMax"
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
        </div>
      </BaseLayout>
    </div>
  );
};

export default Settings;
