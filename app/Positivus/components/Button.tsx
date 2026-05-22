type Props = {
    label: string;
    style?: string;
};

export const Button = ({ label, style }: Props) => {
    return (
        <button
            className={`w-fit border rounded-xl border-black px-9 py-5 text-xl ${style}`}
        >
            {label}
        </button>
    );
};
