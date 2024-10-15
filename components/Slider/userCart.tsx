import React from "react";
import {Card, CardHeader, CardBody, ScrollShadow, Image, Button,Chip} from "@nextui-org/react";
import {VerifyIcon} from './icons/verify'
import {HeartIcon} from './icons/heart'
import {XmarkIcon} from './icons/xmark'
import {CheckIcon} from './icons/check'
import {MoreImageGallary} from './moreImage'
const UserCart = () => {

    return  <ScrollShadow visibility={"none"} hideScrollBar={false} style={{maxHeight:"80vh",overflow:"scroll",paddingBottom:"40px"}}>
        <Card className="m-4 relative mb-4 pb-16">
    
        <div className="fixed justify-center z-10 inset-x-0 bottom-0 flex gap-4 items-center">
            <Button style={{width:"60px",height:"60px",marginBottom:"20px",backgroundColor:"white"}} className=" h-16 shadow" isIconOnly  aria-label="Like">
                <XmarkIcon />
            </Button>   
            <Button style={{width:"60px",height:"60px",marginBottom:"20px"}} className=" h-16 shadow" isIconOnly color="primary" aria-label="Like">
                <HeartIcon />
            </Button>  
     </div>
        <CardHeader className="pt-4 px-4 flex-col items-start">
            <h4 className=" flex items-center font-bold text-large">
            <VerifyIcon />
                Mahdi bahrami 
            </h4>
    
            <small style={{paddingLeft:"27px"}} className="text-default-500">24 year old</small>
          </CardHeader>
      <CardBody className="pt-0">
      <Image
            width={'100%'}
            height={400}
            className="z-0 w-full h-full object-cover"
            alt="NextUI hero Image with delay"
            src="https://app.requestly.io/delay/5000/https://nextui.org/images/hero-card-complete.jpeg"
            />


            <div className="px-2">
                <small style={{paddingTop:"10px"}} className="text-default-500">About me</small>
                <p className="text-black text-tiny">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>

            </div>

            <div className="px-2">
                <small style={{paddingTop:"10px"}} className="text-default-500">info</small>
                
                <div className="flex gap-4">
                    <Chip
                        startContent={<CheckIcon size={18} />}
                        variant="flat"
                        color="success"
                    >
                        Chip
                    </Chip>
                    <Chip
                        startContent={<CheckIcon size={18} />}
                        variant="flat"
                        color="secondary"
                    >
                        Chip
                    </Chip>
                    </div>

            </div>
            <div className="px-2 mt-4">
                <MoreImageGallary/>
            </div>

            <div className="px-2 pt-6">
                <small style={{paddingTop:"10px"}} className="text-default-500">Current location</small>
                <p className="text-black text-tiny">
                    Moscow , russia
                </p>

            </div>
    
      </CardBody>
    </Card>
  </ScrollShadow>
}

export {UserCart}