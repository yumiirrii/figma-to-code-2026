import Image from "next/image";
import { ArrowIconLink } from "../../components/ArrowIconLink";
import { Heading } from "../../components/Heading";
import { DARK_COLOR } from "../../consts";

type Props = {
    bgColor: string;
    heading: {
        label1: string;
        label2: string;
        bgColor: string;
    };
    link: {
        label: string;
        isFontWhite: boolean;
        arrowColor: {
            circleColor: string;
            pathColor: string;
        };
    };
    image: {
        src: string;
        height: number;
    };
};
export const ServiceCard = ({ bgColor, heading, link, image }: Props) => {
    return (
        <section
            className={`w-150 h-fit flex justify-between border border-[${DARK_COLOR}] rounded-[45px] shadow-[0_5px_0_${DARK_COLOR}] bg-[${bgColor}] p-12.5`}
        >
            <div className="flex flex-col gap-y-[93px]">
                <div>
                    <Heading
                        label={heading.label1}
                        className={{
                            bgColor: heading.bgColor,
                            fontSize: "text-3xl",
                        }}
                    />
                    <Heading
                        label={heading.label2}
                        className={{
                            bgColor: heading.bgColor,
                            fontSize: "text-3xl",
                        }}
                    />
                </div>
                <ArrowIconLink
                    label={link.label}
                    isFontWhite={link.isFontWhite}
                    arrowColor={link.arrowColor}
                />
            </div>
            <Image
                alt="service card image"
                src={image.src}
                width={210}
                height={image.height}
            />
        </section>
    );
};
