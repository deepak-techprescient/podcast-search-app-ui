import { Input } from "react-daisyui";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

function SearchBar({ placeholder = "", className = "" }: SearchBarProps) {
  return (
    <Input
      className={`text-center focus:text-gray-500 focus:outline-none" + ${className}`}
      placeholder={placeholder}
      size="lg"
    />
  );
}

export default SearchBar;
