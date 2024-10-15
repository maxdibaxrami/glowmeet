import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { MoreDetailIcom } from "./icons/moreDetail";
import { FavoriteIcon } from "./icons/favorite";
import { UnMatchIcon } from "./icons/unMatch";
import { ProfileIcon } from "./icons/profile";
import { BlockIcon } from "./icons/block";
const ChatDetailMenu = () => {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
         <Button className="ml-2" isIconOnly color="primary" aria-label="Like">
            <MoreDetailIcom />
         </Button> 
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
         <DropdownItem
            key="new"
            startContent={<FavoriteIcon className={"text-xl text-default-500 pointer-events-none flex-shrink-0"} />}
            >
          Add to favorite
        </DropdownItem>


        <DropdownItem
            key="new"
            startContent={<UnMatchIcon className={"text-xl text-default-500 pointer-events-none flex-shrink-0"} />}
            >
          Unmatch
        </DropdownItem>

        <DropdownItem
            key="new"
            startContent={<ProfileIcon className={"text-xl text-default-500 pointer-events-none flex-shrink-0"} />}
            >
          Add to favorite
        </DropdownItem>

        <DropdownItem
            key="new"
            className="text-danger"
            startContent={<BlockIcon className={"text-xl text-default-500 pointer-events-none flex-shrink-0"} />}
            >
          Block and report
        </DropdownItem>


      </DropdownMenu>
    </Dropdown>
  );
}

export {ChatDetailMenu}