/**
 * @file src/shared/components/icon/Icon.tsx
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";
import type { SVGProps } from "react";
import type { IconName } from "./Icons";
import { icons } from "./iconRegistry";

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
