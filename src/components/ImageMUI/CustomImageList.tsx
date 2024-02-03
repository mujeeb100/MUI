import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

interface CustomImageListProps {
  images?: any; // Define the shape of your images array
  rowHeight?: number;
  cols?: number;
  className?:string,
  rounded? : boolean, // Default to false if not specified
  size?:string,
}

function CustomImageList({
  images,
  rowHeight,
  cols,
  className,
  rounded,
  size,
}: CustomImageListProps) {
  return (
    <ImageList rowHeight={rowHeight}  className={className} cols={cols}>
      {(images||[]).map((item:any) => (
        <ImageListItem key={item.img} cols={item.cols || 1}>
          <img src={item.img} alt={item.title}  style={{ borderRadius: rounded ? '100%' : '0%', width:( size||'100%'), height: ( size||'100%')}} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default CustomImageList;
