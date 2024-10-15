import React from 'react' 
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ChatWapper";
import {User} from "@nextui-org/react";
import {FavoriteIcon} from './icons/favorite'
const CHatList = () => {

  

    return <ListboxWrapper>
    <Listbox
      aria-label="Actions"
      style={{overflow:"scroll",maxHeight:"93vh"}}
      onAction={(key) => alert(key)}
    >
        {Array.from({ length: 50 }).map((value, index)=> {
            return       <ListboxItem
            endContent={<FavoriteIcon />}
            key="new">
            <User   
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
                />
          </ListboxItem>
        })}


      

    </Listbox>
  </ListboxWrapper>

}

export default CHatList