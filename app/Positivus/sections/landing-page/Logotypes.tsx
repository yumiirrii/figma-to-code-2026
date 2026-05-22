import Image from "next/image";

export const Logotypes = () => {
    const logos = [
        { src: "/Company logo.svg", width: 124.11 },
        { src: "/Company logo-1.svg", width: 126.37 },
        { src: "/Company logo-2.svg", width: 128.63 },
        { src: "/Company logo-3.svg", width: 145.55 },
        { src: "/Company logo-4.svg", width: 125.24 },
        { src: "/Company logo-5.svg", width: 110.57 },
    ];

    return (
        <div className="flex justify-between">
            {logos.map((logo) => (
                <Image
                    key={logo.src}
                    src={logo.src}
                    alt="company logo"
                    width={logo.width}
                    height={48}
                    className="grayscale"
                />
            ))}
        </div>
    );
};
