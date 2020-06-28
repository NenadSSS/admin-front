import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_CATEGORY } from "../graphql/get-category";

const CategoryContainer = ({ categoryId }) => {
  const { data: { categories = [] } = {} } = useQuery(GET_CATEGORY, {
    variables: { id: categoryId },
  });
  let category = categories.length > 0 ? categories[0] : {};
  
  return (
    <p>
      {category.category_name} with id: {categoryId}
    </p>
  );
};

export default CategoryContainer;
