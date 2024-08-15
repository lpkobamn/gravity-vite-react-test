import { TextInput, TextInputProps } from '@gravity-ui/uikit';
import React from 'react';

export type NumberInputProps = Omit<TextInputProps, 'type' | 'onChange' | 'value'> & {
    value?: number | null;
    onChange?: (value: number | null) => void;
    allowDecimal?: boolean;
};

export const NumberInput: React.FC<NumberInputProps> = ({
    value,
    onChange,
    allowDecimal = true,
    ...props
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        // Проверяем на соответствие числовому значению
        let numericValue: number | null = allowDecimal ? parseFloat(inputValue) : parseInt(inputValue, 10);

        // Если значение не является числом, присваиваем null
        if (isNaN(numericValue)) {
            numericValue = null;
        }

        if (onChange) {
            onChange(numericValue);
        }
    };

    return (
        <TextInput
            {...props}
            type="number"
            value={value !== null && value !== undefined ? value.toString() : ''}
            onChange={handleChange}
        />
    );
};