import {FC} from 'react';
import {inputFieldPropsType} from "./inputFieldTypes";

export const InputField: FC<inputFieldPropsType> = ({name, placeholder, isRequired, register}) => {
    return (
        <>
            <input placeholder={placeholder} name={name} {...register(name, {required: isRequired})}/>
        </>
    )
};