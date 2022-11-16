import React from 'react';

type Props = {
    children: JSX.Element,
    size: number
}

export const ImageWrap: React.FC<Props> = ({children, size}) => {
    return (
        <div style={{
            height: size,
            width: size,
            border: "0.1rem solid #f4f5f6",
            borderRadius:"3%",
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "inset 0 0 4px grey"
        }}
    >
        {children}
    </div>
    )
}