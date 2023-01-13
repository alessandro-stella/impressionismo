export default function MoveButton({ position, value, change }) {
    console.log({ position, value, change });

    return (
        <div
            className={`w-full z-10 absolute left-0 ${
                value === 1 ? "bottom-2 fadeDown" : "top-2 fadeUp"
            }`}>
            <div
                className="aspect-square h-10 bg-red-600 m-auto hover:cursor-pointer"
                onClick={() => change(value)}></div>
        </div>
    );
}
