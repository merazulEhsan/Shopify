import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChangePassword = () => {
  return (
    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-cardBlack">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-600">
        <h5 className="text-lg mb-2">Change Password</h5>
      </div>
      <form>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <Input
              className="bg-transparent"
              type="password"
              placeholder="Old Password"
              id="firstName"
              name="firstName"
              // value={infoState.firstName}
              // onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              className="bg-transparent"
              type="password"
              placeholder=" New Password"
              name="lastName"
              required
            />
          </div>
        </div>
        {/*end grid*/}

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
  );
};

export default ChangePassword;
