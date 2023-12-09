import { HeaderType } from "@/app/types/sharedTypes";
import { FC } from "react";

const SmallHeader: FC<HeaderType> = ({text}: HeaderType) =>{
    return (
        <h4 className="flex justify-center align-top text-xl text-black mt-5">
            {text}
        </h4>
    )
}

export default SmallHeader