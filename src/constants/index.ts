const keys = require("../config/keys");

// import * as keys from "../config/keys";

export const API_BASE_URL = keys.apiBaseUrl;
export const BASE_URL = keys.baseUrl;

export const HEADERS = {
    "Content-Type": "application/json" 
}

// list all regex for consistent validations
export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const URL_REGEX = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
export const INT_REGEX = /^-?[0-9]+$/;
export const COUPON_CODE_REGEX = /^[A-Za-z0-9]*$/; // regex matching numbers and letters only












