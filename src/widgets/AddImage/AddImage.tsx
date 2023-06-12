import {ChangeEvent, FC, useState} from "react";
import {ImageCrop} from "../../features/ImageCrop/ImageCrop.tsx";
import {SubmitButton} from "../../shared/SubmitButton/SubmitButton.tsx";
import {useDispatch} from "react-redux";
import {changePosition, setPhoto} from "../../App/Redux/formsReducer.ts";

export const AddImage: FC = () => {
    const [image, setImage] = useState<string>("")
    const [cropped, setCropped] = useState<string>("")
    const dispatch = useDispatch()

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files){
            const link = URL.createObjectURL(event.target.files[0])
            setImage(link)
        }
    }

    const saveButtonHandler = () => {
        if (cropped.length > 0) dispatch(setPhoto(cropped))
        dispatch(changePosition(1))
    }

return (
    <>
        <input onChange={inputHandler} type="file" placeholder="Choose your photo" accept="image/jpeg, image/jpg, image/png" required={false}/>
        {image && <ImageCrop setData={(link: string) => setCropped(link)} src={image}/>}
        <SubmitButton name={"Save"} onClick={saveButtonHandler} width={"75px"}/>
    </>
)
}