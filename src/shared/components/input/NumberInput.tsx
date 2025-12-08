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
