import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const BillingModal = () => {
  return (
    <DialogContent className="bg-white dark:bg-customBlack border-none overflow-auto ">
      <DialogHeader>
        <DialogTitle className="py-3 border-b border-gray-300 mb-4 text-start">
          Edit
        </DialogTitle>
        <DialogDescription className="">
          <form>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <Label className="mb-2 block font-poppins text-slate-400">
                  Full Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  className="rounded bg-transparent"
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
                  className="rounded bg-transparent"
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
                  className="rounded bg-transparent"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div>
                <Label className="mb-2 block font-poppins text-slate-400">
                  Area <span className="text-red-600">*</span>
                </Label>
                <Input
                  className="rounded bg-transparent"
                  type="text"
                  placeholder="Area"
                  name="email"
                />
              </div>
              <div>
                <Label className="mb-2 block font-poppins text-slate-400">
                  City <span className="text-red-600">*</span>
                </Label>
                <Input
                  className="rounded bg-transparent"
                  type="text"
                  placeholder="Area"
                  name="email"
                />
              </div>
              <div>
                <Label className="mb-2 block font-poppins text-slate-400">
                  District <span className="text-red-600">*</span>
                </Label>
                <Input
                  className="rounded bg-transparent"
                  type="text"
                  placeholder="Area"
                  name="email"
                />
              </div>

              <div>
                <Label className="mb-2 block font-poppins text-slate-400">
                  Province <span className="text-red-600">*</span>
                </Label>
                <Input
                  className="rounded bg-transparent"
                  type="text"
                  placeholder="Area"
                  name="email"
                />
              </div>
            </div>
            {/*end grid*/}

            {/*end row*/}
            <div className="text-end">
              <Button
                className="mt-5 cursor-pointer text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white "
                asChild
              >
                <input type="submit" name="send" value="Save Changes" />
              </Button>
            </div>
          </form>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default BillingModal;
