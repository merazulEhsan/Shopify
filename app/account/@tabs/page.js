import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CloudUpload } from "lucide-react";
import Image from "next/image";

const Profile = () => {
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
        <form>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <Label className="mb-2 block font-poppins text-slate-400">
                Full Name <span className="text-red-600">*</span>
              </Label>
              <Input
                className="bg-transparent"
                type="text"
                placeholder="First Name:"
                id="firstName"
                name="firstName"
                // value={infoState.firstName}
                // onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label className="mb-2 block font-poppins text-slate-400">
                Mobile Number <span className="text-red-600">*</span>
              </Label>
              <Input
                className="bg-transparent"
                type="text"
                placeholder="Last Name:"
                name="lastName"
                required
              />
            </div>
            <div>
              <Label className="mb-2 block font-poppins text-slate-400">
                Your Email <span className="text-red-600">*</span>
              </Label>
              <Input
                className="bg-transparent"
                type="email"
                placeholder="Email"
                name="email"
                disabled
              />
            </div>
          </div>
          {/*end grid*/}
          <div className="grid grid-cols-1">
            <div className="mt-5">
              <Label className="mb-2 block font-poppins text-slate-400">
                Bio
              </Label>
              <Textarea
                id="bui"
                name="bio"
                placeholder="Enter your Bio"
                className="bg-transparent "
              />
            </div>
          </div>
          {/*end row*/}
          <Button
            className="mt-5 cursor-pointer text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white "
            asChild
          >
            <input type="submit" name="send" value="Save Changes" />
          </Button>
        </form>
        {/*end form*/}
      </div>
    </>
  );
};

export default Profile;
