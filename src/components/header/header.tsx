import { CupIcon, LogoSmallIcon } from "@/components/icons";

const Header = () => {
  return (
    <header className="container">
      <div className="flex items-center justify-between pt-3">
        <div>
          <LogoSmallIcon />
        </div>
        <div className="flex items-center gap-x-2">
          <CupIcon />
          <p>
            <span className="text-neutral-400">Best:</span>{" "}
            <span className="">92 WPM</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
