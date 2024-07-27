"use client";
import { updateUserInfo } from "@/app/(home)/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudUpload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const PersonalDetails = ({ userInfo }) => {
  const [infoState, setInfoState] = useState({
    name: userInfo.name,
    mobile: userInfo.mobile,
    email: userInfo.email,
    bio: userInfo.bio,
  });

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setInfoState({
      ...infoState,
      [field]: value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      await updateUserInfo(userInfo?.email, infoState);
      toast.success("User details updated successfully.");
    } catch (error) {
      console.error(error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="profile-pic shadow mb-5 dark:bg-cardBlack p-6">
        <div className="flex items-center">
          <input
            id="pro-img"
            name="profile-image"
            type="file"
            className="hidden"
          />
          <div className="">
            <Image
              src="/assets/G-logo.png"
              className="rounded  dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
              id="profile-banner"
              alt=""
              width={100}
              height={100}
            />
          </div>

          <div className="space-y-2">
            <label
              className="cursor-pointer inset-0 px-4 py-1.5 bg-white shadow border border-gray-400 rounded-sm text-sm ml-6 dark:text-slate-300 dark:bg-cardBlack flex items-center gap-x-2"
              htmlFor="pro-img"
            >
              <CloudUpload size="18" />
              <span>Change Avatar</span>
            </label>
            <p className="text-xs ml-6 text-slate-500">
              Upload JPG or PNG image.
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-cardBlack">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-600">
          <h5 className="text-lg">Personal Details</h5>
          <p className="text-xs text-slate-500 mb-2">
            Update you profile details below
          </p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <Label className="mb-2 block font-poppins font-medium dark:text-slate-300">
              Full Name
            </Label>
            <Input
              className="bg-transparent dark:border-gray-600 rounded dark:text-slate-300"
              type="text"
              placeholder="John Doe"
              id="name"
              name="name"
              value={infoState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <Label className="mb-2 block font-poppins font-medium dark:text-slate-300">
                Mobile Number
              </Label>
              <Input
                className="bg-transparent dark:border-gray-600 rounded dark:text-slate-300"
                type="text"
                placeholder="01700000000"
                name="mobile"
                value={infoState.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label className="mb-2 block font-poppins font-medium dark:text-slate-300">
                Your Email
              </Label>
              <Input
                className="bg-transparent dark:border-gray-600 rounded dark:text-slate-300"
                type="email"
                placeholder="john@email.com"
                name="email"
                value={infoState.email}
                onChange={handleChange}
                disabled
              />
            </div>
          </div>

          <Button
            type="submit"
            className="mt-5 cursor-pointer text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white px-10"
          >
            Update Info
          </Button>
        </form>
      </div>
    </>
  );
};

export default PersonalDetails;
