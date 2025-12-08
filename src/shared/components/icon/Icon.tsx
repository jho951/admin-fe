import React from "react";
import type { SVGProps } from "react";
import { icons, type IconName } from "./Icons";

export interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
}

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
    const SvgIcon = icons[name];

    if (!SvgIcon) {
        return null;
    }

    return <SvgIcon {...rest} />;
};

export default Icon;
export type { IconName };
