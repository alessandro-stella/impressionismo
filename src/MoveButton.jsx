export default function MoveButton({ position, value, change }) {
    return (
        <div
            className={`bg-gradient-to-t w-full z-10 absolute left-0 from-[#00000090] to-[#00000000] opacity-0 ${
                value === 1
                    ? "bottom-0 pb-4 fadeDown"
                    : "top-0 pb-4 fadeUp rotated"
            }`}>
            <div
                className="w-12 h-1 0 m-auto hover:cursor-pointer relative"
                onClick={() => change(value)}>
                <div className="arrow"></div>
            </div>
        </div>
    );
}
