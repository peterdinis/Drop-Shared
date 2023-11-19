import { FC } from "react";

interface ISmallHeaderProps {
    text: string;
}

const SmallHeader: FC<ISmallHeaderProps> = ({text}: ISmallHeaderProps) =>{
    return (
        <h4 className="flex justify-center align-top text-xl text-black mt-5">
            {text}
        </h4>
    )
}

export default SmallHeader