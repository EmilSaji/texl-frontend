import React, { createContext, useState } from "react";

const ProductContext  = createContext({
  productDetails: null,
  setProductDetails: () => {},
});

export default ProductContext ;
