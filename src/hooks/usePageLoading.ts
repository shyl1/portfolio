import { useEffect } from "react";
import { useLocation } from "react-router";
import { useContext } from "react";
import LoadingContext from "@ContextAPI/LoadingContext";

export function usePageLoading(skip?: boolean) {
    const { setLoading } = useContext(LoadingContext);
    const location = useLocation();

    useEffect(() => {
        if (skip) return;

        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 3000);

        return () => clearTimeout(timer);
    }, [location.key]);
}