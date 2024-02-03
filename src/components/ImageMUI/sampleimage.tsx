// CustomImageList.tsx
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import PropTypes, { InferProps } from 'prop-types';
import itemData from './itemData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
  }),
);

// Define the prop types for a single item in the data array
const itemPropTypes = PropTypes.shape({
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cols: PropTypes.number,
});

const CustomImageList: React.FC<{
  data: InferProps<typeof itemPropTypes>[];
  rowHeight: number;
  cols: number;
}> = ({ data, rowHeight, cols }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={rowHeight} className={classes.imageList} cols={cols}>
        {data.map((item:any) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

CustomImageList.propTypes = {
//   data: PropTypes.arrayOf(itemPropTypes.isRequired).isRequired,
  rowHeight: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
};

export default CustomImageList;
