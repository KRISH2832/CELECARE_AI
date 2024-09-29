import { FaRunning } from "react-icons/fa";
import { ModeToggle } from "./toogle";

const Header = () => {
  return (
    <h1 className="flex items-center gap-2 md:gap-3 text-foreground cursor-pointer text-3xl md:text-5xl font-secondary">
      Better <span className="text-app-primary flex gap-2">
        Health
      </span>
      <ModeToggle />
    </h1>
  );
};

export default Header;