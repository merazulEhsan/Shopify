import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortButton() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder="Default Sorting" />
      </SelectTrigger>
      <SelectContent className="dark:bg-cardBlack border-none bg-white">
        <SelectGroup>
          <SelectLabel>Default Sorting</SelectLabel>
          <SelectItem value="apple">Low to High</SelectItem>
          <SelectItem value="banana">High to Low</SelectItem>
          <SelectItem value="blueberry">New</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
