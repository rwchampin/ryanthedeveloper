import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import { FaShareAlt } from "react-icons/fa";

import { Button } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter,FaReddit,FaLinkedin } from "react-icons/fa6";

import { useState } from "react";

export default function ShareButtons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Button className="bg-white text-black font-bold p-2 rounded-full absolute bottom-3 right-3" isIconOnly aria-label="Share" onClick={() => setIsOpen(!isOpen)}>
      <FaShareAlt size={15} />
    </Button>
  );
}
