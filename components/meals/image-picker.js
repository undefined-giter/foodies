'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({label, name}){

    const imageInputRef = useRef()
    const [pickedImage, setPickedImage] = useState(false)

    function handlePickClick(){
        imageInputRef.current.click()
    }

    function imageChanged(e){
        const file = e.target.files[0]

        if(!file){
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }


    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet</p>}
                {pickedImage && <Image src={pickedImage} alt='The image you picked' fill />}
            </div>
            <input 
            className={classes.input} 
            type='file' 
            id={name} 
            accept='image/png, image/jpeg' 
            name='image'
            ref={imageInputRef}
            onChange={imageChanged} 
            required
            /* multiple */
            />
            <button 
            className={classes.button} 
            type='button' 
            onClick={handlePickClick}
            >Pick your image</button>
        </div>
    </div>
}