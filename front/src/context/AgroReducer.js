import {
  GET_BRANDS,
  GET_CROPS,
  GET_PESTS,
  GET_PRODUCTS,
  GET_POSTS,
  GET_DETAILS,
  GET_CARRUSEL,
} from "./Styles.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: payload,
      };
    case GET_BRANDS:
      return {
        ...state,
        brands: payload,
      };
    case GET_CROPS:
      return {
        ...state,
        crops: payload,
      };
    case GET_PESTS:
      return {
        ...state,
        pests: payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
      case GET_CARRUSEL:
        return {
          ...state,
          carrusel: payload,
        };
    default:
      return state;
  }
};
