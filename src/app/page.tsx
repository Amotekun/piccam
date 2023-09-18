"use client"

import { CldUploadButton } from 'next-cloudinary'
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

export type ImageProps = {
  event: "success"; 
  info: {
    public_id: string;
  };
}

export default function Home() {

  const [imageId, setImageid] = useState("")

  const onUpload= (result: ImageProps) => {
    setImageid(result.info.public_id)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={() => onUpload}
        uploadPreset="exoenn5b" 
      />
      
      {imageId && (
        <CldImage
        width="600"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
      )}
    </main>
  )
}

 
