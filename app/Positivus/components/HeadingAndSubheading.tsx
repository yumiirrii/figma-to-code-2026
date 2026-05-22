import { GREEN_COLOR } from "../consts";
import { Heading } from "./Heading";

type Props = {
    label: string;
    text: string;
};

export const HeadingAndSubheading = ({ label, text }: Props) => {
    return (
        <div className="flex gap-x-10">
            <Heading
                label={label}
                className={{ bgColor: GREEN_COLOR, fontSize: "text-[40px]" }}
            />
            <div className="text-lg w-[580px]">{text}</div>
        </div>
    );
};
