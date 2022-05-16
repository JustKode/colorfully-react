import React, { useContext, useEffect } from 'react';
import { PhotoContext } from '../context/PhotoContext';
import Gallery from './Gallery';
import Loader from './Loader';

/* ************************************* */
import { useRecoilState } from 'recoil';
import CRgroupState from '../../recoil';
/* ************************************* */

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  /* ************************************* */
  const [group] = useRecoilState(CRgroupState);
  /* ************************************* */

  return (
    <div className="photo-container" style={{ ...group.mainBackGroup }}>
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
