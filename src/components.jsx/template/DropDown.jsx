function DropDown({ title, options, func, selectedValue }) {
    return (
        <div style={{ boxSizing: "border-box" }} className="mt-2">
            <select
                onChange={func}
                value={selectedValue}
                name="format"
                id="format"
                style={{
                    borderRadius: "5px",
                    backgroundColor: "#27272a",
                    color: "#fff",
                    fontSize: "1rem",
                    border: "1px solid #444",
                }}
            >
                <option value="" disabled>
                    {title}
                </option>
                {options.map((o, i) => (
                    <option key={i} value={o}>
                        {o.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropDown;
