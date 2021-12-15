import React, { useReducer } from "react";
import axios from "axios";
import AgroContext from "./AgroContext"
import AgroReducer from "./AgroReducer"
import {GET_PRODUCTS, GET_CROPS, GET_BRANDS, GET_PESTS, GET_POSTS, GET_DETAILS} from "./Styles.js"
import { BaseURL } from "../utils/Utils";

const AgroState = (props) => {
  const initialState = {
    products: [],
    details: null,
    brands:[],
    crops:[],
    pests:[],
    posts:[],
  };

  const [state, dispatch] = useReducer(AgroReducer, initialState);

  const getProducts = async () => {
    try {
      const resProducs = await axios.get(`${BaseURL}products`);
      const data = resProducs.data.data;
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

  const getDetail = async (id) => {
    try {
      const resDetail = await axios.get(`${BaseURL}products/${id}`);
      const { data }= resDetail;
      dispatch({ type: GET_DETAILS, payload: data.data });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <AgroContext.Provider
      value={{
        products: state.products,
        details: state.details,
        crops : state.crops,
        brands: state.brands,
        pests: state.pests,
        posts: state.posts,
        getProducts,
        getDetail,
        getCrops,
        getPests,
        getBrands,
        getPosts,
      }}
    >
      {props.children}
    </AgroContext.Provider>
  );
};

export default AgroState;