import Image from "next/image";
import { FiMenu } from "react-icons/fi";

function Nav() {
  return (
    <nav className=" my-4 mx-5">
      <div className="flex justify-between items-center ">
        <Image src="/images/logo.svg" width={120} height={120} alt="logo" />
        <FiMenu className="text-4xl" />
      </div>
    </nav>
  );
}

export default Nav;
