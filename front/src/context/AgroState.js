import React, { useReducer } from "react";
import axios from "axios";
import AgroContext from "./AgroContext";
import AgroReducer from "./AgroReducer";
import {
  GET_PRODUCTS,
  GET_CROPS,
  GET_BRANDS,
  GET_PESTS,
  GET_POSTS,
  GET_CARRUSEL,
} from "./Styles.js";
import { BaseURL } from "../utils/Utils";

const AgroState = (props) => {
  const initialState = {
    products: [],

    brands: [],
    crops: [],
    pests: [],
    posts: [],
    carrusel: [],
  };

  const [state, dispatch] = useReducer(AgroReducer, initialState);

  const getProducts = async () => {
    try {
      const resProducts = await axios.get(`${BaseURL}products`);
      const data = resProducts.data;
      dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getBrands = async () => {
    try {
      const resBrands = await axios.get(`${BaseURL}brands`);
      const data = resBrands.data.data;
      dispatch({ type: GET_BRANDS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getCrops = async () => {
    try {
      const resCrops = await axios.get(`${BaseURL}crops`);
      const data = resCrops.data.data;
      dispatch({ type: GET_CROPS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getPests = async () => {
    try {
      const resPests = await axios.get(`${BaseURL}pests`);
      const data = resPests.data.data;
      dispatch({ type: GET_PESTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getPosts = async () => {
    try {
      const resPosts = await axios.get(`${BaseURL}posts`);
      const data = resPosts.data.data;
      dispatch({ type: GET_POSTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getCarrusel = async () => {
    try {
      const resCarrusel = await axios.get(`${BaseURL}carrusel`);
      const data = resCarrusel.data.data;
      dispatch({ type: GET_CARRUSEL, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AgroContext.Provider
      value={{
        products: state.products,
        details: state.details,
        crops: state.crops,
        brands: state.brands,
        pests: state.pests,
        posts: state.posts,
        carrusel: state.carrusel,
        getProducts,

        getCrops,
        getPests,
        getBrands,
        getPosts,
        getCarrusel,
      }}
    >
      {props.children}
    </AgroContext.Provider>
  );
};

export default AgroState;
