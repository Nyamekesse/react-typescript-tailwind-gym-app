import React from "react";
import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`${SelectedPage.ContactUs}`}
      className="rounded-md bg-secondary-500 p-10 py-2 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
