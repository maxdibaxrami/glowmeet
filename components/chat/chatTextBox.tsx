import React from "react";
import {Input} from "@nextui-org/react";
import { SendMessageIcon } from "./icons/send";

const ChatTextBox = () => {
  const [isVisible, setIsVisible] = React.useState(false);


  return (
    <Input
      variant="bordered"
      className="w-full"
      size="lg"
      placeholder="Enter your message"
      endContent={
        <button className="focus:outline-none" type="button" aria-label="toggle password visibility">         
            <SendMessageIcon className="text-2xl text-default-400 pointer-events-none" />
        </button>
      }
      type='text'
    />
  );
}


export {ChatTextBox}