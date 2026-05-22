import { ArrowIcon } from "./ArrowIcon";

type Props = {
    label: string;
    isFontWhite: boolean;
    arrowColor: {
        circleColor: string;
        pathColor: string;
    };
};

export const ArrowIconLink = ({ label, isFontWhite, arrowColor }: Props) => {
    return (
        <div className="flex items-center gap-x-3.75">
            <ArrowIcon
                circleColor={arrowColor.circleColor}
                pathColor={arrowColor.pathColor}
            />
            <span
                className={`${isFontWhite ? "text-white" : "text-black"} leading-7 text-xl`}
            >
                {label}
            </span>
        </div>
    );
};
