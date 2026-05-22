import { HeadingAndSubheading } from "../../components/HeadingAndSubheading";
import { DARK_COLOR, GREEN_COLOR, GREY_COLOR, LEARN_MORE } from "../../consts";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
    const subHeading =
        "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:";

    const items = [
        {
            bgColor: GREY_COLOR,
            heading: {
                label1: "Search engine",
                label2: "optimization",
                bgColor: GREEN_COLOR,
            },
            link: {
                label: LEARN_MORE,
                isFontWhite: false,
                arrowColor: {
                    circleColor: DARK_COLOR,
                    pathColor: GREEN_COLOR,
                },
            },
            image: {
                src: "/Illustration.svg",
                height: 170,
            },
        },
        {
            bgColor: GREEN_COLOR,
            heading: {
                label1: "Pay-per-click",
                label2: "advertising",
                bgColor: "#FFFFFF",
            },
            link: {
                label: LEARN_MORE,
                isFontWhite: false,
                arrowColor: {
                    circleColor: DARK_COLOR,
                    pathColor: GREEN_COLOR,
                },
            },
            image: {
                src: "/Illustration-1.svg",
                height: 147.62,
            },
        },
        {
            bgColor: DARK_COLOR,
            heading: {
                label1: "Social Media",
                label2: "Marketing",
                bgColor: "#FFFFFF",
            },
            link: {
                label: LEARN_MORE,
                isFontWhite: true,
                arrowColor: {
                    circleColor: "#FFFFFF",
                    pathColor: DARK_COLOR,
                },
            },
            image: {
                src: "/Illustration-2.svg",
                height: 210,
            },
        },
        {
            bgColor: GREY_COLOR,
            heading: {
                label1: "Email",
                label2: "Marketing",
                bgColor: GREEN_COLOR,
            },
            link: {
                label: LEARN_MORE,
                isFontWhite: false,
                arrowColor: {
                    circleColor: DARK_COLOR,
                    pathColor: GREEN_COLOR,
                },
            },
            image: {
                src: "/tokyo-sending-messages-from-one-place-to-another 1.svg",
                height: 192.68,
            },
        },
        {
            bgColor: GREEN_COLOR,
            heading: {
                label1: "Content",
                label2: "Creation",
                bgColor: "#FFFFFF",
            },
            link: {
                label: LEARN_MORE,
                isFontWhite: false,
                arrowColor: {
                    circleColor: DARK_COLOR,
                    pathColor: GREEN_COLOR,
                },
            },
            image: {
                src: "/Illustration-3.svg",
                height: 195.91,
            },
        },
        {
            bgColor: DARK_COLOR,
            heading: {
                label1: "Analytics and",
                label2: "Tracking",
                bgColor: GREEN_COLOR,
            },
            link: {
                label: LEARN_MORE,
                isFontWhite: true,
                arrowColor: {
                    circleColor: "#FFFFFF",
                    pathColor: DARK_COLOR,
                },
            },
            image: {
                src: "/Illustration-4.svg",
                height: 170,
            },
        },
    ];

    return (
        <div className="flex flex-col gap-y-20 my-20">
            <HeadingAndSubheading label="Services" text={subHeading} />
            <div className="flex flex-wrap gap-10">
                {items.map((item, index) => (
                    <ServiceCard
                        key={index}
                        bgColor={item.bgColor}
                        heading={item.heading}
                        link={item.link}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};
