import axios from "axios";
import { useEffect, useState } from "react";
import { imagesUri } from '../data/image';

interface ImagsProps {
    id:number;
    imgId:number;
    img:string;
}

export interface ResponseProps {
  albumId:      number;
  id:           number;
  title:        string;
  url:          string;
  thumbnailUrl: string;
}


export const useImages = (limit:number) => {
  const [images,setImages] = useState<ImagsProps[]>([]);

  useEffect(() => {
        getImage();
  },[])

  const getImage = async() => {
      let numbers = [...Array(limit)].map((_,i) => i)
      numbers = numbers.reduce((a:number[],i:number)=> (a.concat(i,i)),[])
      const NewArray:ImagsProps[] = []

      for(let i = 0; i < limit * 2; i ++){
          const j = Math.floor(Math.random() * (numbers.length));
          const temp = numbers[j]
          const newImage:ImagsProps= {
            id: i,
            imgId: temp,
            img: imagesUri[temp]
          }
          NewArray.push(newImage);
          numbers.splice(j,1);
      }

      setImages(NewArray);
  }

  return {
    images
  }
}
