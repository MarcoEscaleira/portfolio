import { FC } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { NextFont } from "@next/font/dist/types";

interface IHeaderProps {
  font: NextFont;
}

const Header: FC<IHeaderProps> = ({ font }) => {
  return (
    <header className={font.className}>
      <HomeIcon className="w-8 accent-blue-500" />
    </header>
  );
};

export default Header;
