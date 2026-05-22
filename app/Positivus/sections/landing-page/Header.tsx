import Image from "next/image";
import { Button } from "../../components/Button";

export const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-y-8.75">
                <h1 className="text-6xl w-[531px] font-medium">
                    Navigating the digital landscape for success
                </h1>
                <p className="text-xl/7 w-[498px]">
                    Our digital marketing agency helps businesses grow and
                    succeed online through a range of services including SEO,
                    PPC, social media marketing and content creation.
                </p>
                <Button
                    label="Book a consulation"
                    style="text-white bg-[#191A23]"
                />
            </div>
            <Image
                src="/Illustration-landing.svg"
                alt="header-illustration"
                width={600.46}
                height={515}
            />
        </div>
    );
};
