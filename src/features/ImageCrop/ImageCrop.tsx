import {FC, useEffect, useRef, useState} from "react";
import {Crop, PixelCrop, ReactCrop} from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css'
import st from "./ImageCrop.module.css"
import {canvasPreview} from "./canvasPreview.ts";

export interface IImageCrop {
    src: string,
    setData(link: string): void
}

export const ImageCrop: FC<IImageCrop> = (props) => {
    const [crop, setCrop] = useState<Crop>()
    const imgRef = useRef<HTMLImageElement>(null)
    const previewCanvasRef = useRef<HTMLCanvasElement>(null)
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const aspect: number = 77 / 108


    useEffect(() => {
        if (imgRef.current && previewCanvasRef.current && completedCrop){
            canvasPreview(
                imgRef.current,
                previewCanvasRef.current,
                completedCrop,
            )
            setData()
        }
    }, [completedCrop])

    const setData = () => {
        if (!previewCanvasRef.current) {
            throw new Error('Crop canvas does not exist')
        }
        previewCanvasRef.current.toBlob((blob) => {
            if (!blob) {
                throw new Error('Failed to create blob')
            }
            props.setData(URL.createObjectURL(blob))
        })
    }

    return (
        <>
            <div className={st.container}>
                <ReactCrop crop={crop} onComplete={(c) => setCompletedCrop(c)}
                           onChange={c => setCrop(c)} aspect={aspect}>
                    <img ref={imgRef} style={{maxWidth: "400px", maxHeight: "400px"}} src={props.src} alt={"resume photo"}/>
                </ReactCrop>
                {completedCrop && <canvas
                    ref={previewCanvasRef}
                    style={{
                        border: '1px solid black',
                        objectFit: 'contain',
                        width: completedCrop.width,
                        height: completedCrop.height,
                    }}
                />}
            </div>
        </>
    )
}