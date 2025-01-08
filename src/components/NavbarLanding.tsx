"use client";

import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "@/public/logo_1.png";
import { usePathname } from "next/navigation";

const NavigationBarLanding: React.FC = () => {
  const pathname = usePathname();

  return (
    <Navbar
      maxWidth="full"
      position="static"
      isBlurred={false}
      className="w-[100%] px-20 py-5 justify-between bg-transparent "
    >
      <NavbarBrand as={Link} href="/">
        <div className="flex flex-row gap-4 items-center">
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <div className="flex flex-row gap-8 items-center">
          {/* <NavbarItem isActive={pathname == "/blog"}>
            <Link
              href="/blog"
              className={
                pathname == "/blog"
                  ? "text-primary font-bold"
                  : "text-gray-600 font-light"
              }
            >
              Blog
            </Link>
          </NavbarItem> */}
          <NavbarItem isActive={pathname == "/kontak"}>
            <Link
              href="/kontak"
              className={
                pathname == "/kontak"
                  ? "text-primary font-bold"
                  : "text-gray-600 font-light"
              }
            >
              Contact Us
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Button as={Link} color="primary" href="/login">
              Login
            </Button>
          </NavbarItem> */}
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBarLanding;
