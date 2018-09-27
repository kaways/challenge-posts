export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const REQUEST_API_DATA_IMAGES = "REQUEST_API_DATA_IMAGES";
export const RECEIVE_API_DATA_IMAGES = "RECEIVE_API_DATA_IMAGES";
export const REQUEST_API_DATA_USER = "REQUEST_API_DATA_USER";
export const RECEIVE_API_DATA_USER = "RECEIVE_API_DATA_USER";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const requestApiData_images = () => ({ type: REQUEST_API_DATA_IMAGES });
export const receiveApiData_images = data => ({ type: RECEIVE_API_DATA_IMAGES, data });

export const requestApiData_user = () => ({ type: REQUEST_API_DATA_USER });
export const receiveApiData_user = data => ({ type: RECEIVE_API_DATA_USER, data });