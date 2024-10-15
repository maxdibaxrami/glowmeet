import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { ProfileIcon } from "./icons/profile";
import { ChatDetailMenu } from "./chatDetailMenu";

const ChatUserProfile = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar color="primary" isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Mahdi bahrami</h4>
            <h5 className="text-small tracking-tight text-default-400">12 photo</h5>


          </div>
        </div>
        <div className="flex">
            <Button isIconOnly color="primary" aria-label="Like">
                <ProfileIcon />
            </Button> 
            <ChatDetailMenu/>
        </div>
      </CardHeader>
    </Card>
  );
}

export default ChatUserProfile
