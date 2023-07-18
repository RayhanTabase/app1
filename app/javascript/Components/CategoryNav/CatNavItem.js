import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CatNavItem = ({ category }) => {
  let { category:cat } = useParams();
  if (!cat) category = 'home'; 

  return (
    <div>
      <Link to={category.link}>
        {category.name}
      </Link>
    </div>
  );
};

export default CatNavItem;
