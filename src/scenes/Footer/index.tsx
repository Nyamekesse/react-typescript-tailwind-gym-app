import { SelectedPage } from "@/shared/types";
import React from "react";
import Logo from "@/assets/Logo.png";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <div className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex ">
        <div className="basis mt-16 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dicta voluptate enim magnam nesciunt? Debitis laborum nemo itaque
            omnis eveniet tempore impedit veniam fuga, aut, eum perspiciatis
            error? Veniam, reiciendis.
          </p>
          <p>&copy; Evogym. All rights reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p>333 548 469</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
