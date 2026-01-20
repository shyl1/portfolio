
import React, { useState, useEffect, useRef } from "react";

interface LazyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    threshold?: number;
}

const LazyBackground: React.FC<LazyBackgroundProps> = ({
    src,
    threshold = 0.1,
    style,
    className,
    children,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const finalStyle: React.CSSProperties = {
        ...style,
        ...(isVisible ? { backgroundImage: `url(${src})` } : { backgroundColor: "#f0f0f0" }),
    };

    return (
        <div
            ref={elementRef}
            style={finalStyle}
            className={className}
            {...props}
        >
            {children}
        </div>
    );
};

export default LazyBackground;
