type Props = {
    label: string;
    className: {
        bgColor: string;
        fontSize: string;
    };
};

export const Heading = ({ label, className }: Props) => {
    return (
        <div
            className="w-fit px-1.75"
            style={{ backgroundColor: className.bgColor }}
        >
            <h2 className={`font-medium ${className.fontSize}`}>{label}</h2>
        </div>
    );
};
