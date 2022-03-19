import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center cursor-pointer">
        <div>
          <Image src={logo} alt="Wakanda" width={"100%"} height={"100%"} />
        </div>
      </div>
    </Link>
  );
};
