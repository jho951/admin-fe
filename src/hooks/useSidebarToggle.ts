import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { toggleSidebar } from "../features/ui/uiSlice";

export const useSidebarToggle = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.ui.isSidebarOpen);

    const toggle = useCallback(() => {
        dispatch(toggleSidebar());
    }, [dispatch]);

    return { isOpen, toggle };
};
