/**
 * @file src/shared/components/input/NumberInput.tsx
 * @description 여러 기능에서 재사용하는 UI 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";
import TextInput, { type TextInputProps } from "./TextInput";

export interface NumberInputProps
    extends Omit<TextInputProps, "type" | "inputMode"> {
    min?: number;
    max?: number;
    step?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ ...rest }) => {
    return (
        <TextInput
            type="number"
            inputMode="decimal"
            {...rest}
        />
    );
};

export default NumberInput;
