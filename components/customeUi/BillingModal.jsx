import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const BillingModal = () => {
  return (
    <DialogContent className="bg-white dark:bg-customBlack border-none overflow-auto min-w-2xl h-3/4 ">
      <DialogHeader>
        <DialogTitle className="py-3 border-b border-gray-300 mb-4 text-start">
          Edit
        </DialogTitle>
        <DialogDescription className="">
          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 text-start gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  class="text-gray-500 dark:text-gray-500"
                >
                  First Name <span class="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  class="input-box bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="last-name" class="text-gray-500">
                  Email <span class="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  class="input-box bg-transparent"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 text-start gap-4">
              <div>
                <label htmlFor="phone" class="text-gray-500">
                  Phone number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="input-box bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="company" class="text-gray-500">
                  Area
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  class="input-box bg-transparent"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 text-start gap-4">
              <div>
                <label htmlFor="region" class="text-gray-500">
                  City
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  class="input-box bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="address" class="text-gray-500">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="input-box bg-transparent"
                />
              </div>
            </div>
            <div className="text-start">
              <label htmlFor="city" class="text-gray-500 ">
                Province
              </label>
              <input
                type="text"
                name="city"
                id="city"
                class="input-box bg-transparent"
              />
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          className="px-4 text-white bg-black border border-black rounded hover:bg-white hover:text-black transition ease-linear duration-300 dark:bg-primary dark:hover:bg-white "
          type="submit"
        >
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default BillingModal;
