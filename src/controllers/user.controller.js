import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/fileUpload.js";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req,res) => {})
const loginUser = asyncHandler(async (req,res) => {})
const logoutUser = asyncHandler(async (req,res) => {})
const getUserData = asyncHandler(async (req,res) => {})
const changePassword = asyncHandler(async (req,res) => {})
const updateUserData = asyncHandler(async (req, res) => {})
const deleteUser = asyncHandler(async (req, res) => {})
const searchUser = asyncHandler(async (req,res) => {})


export {
    registerUser,
    loginUser,
    logoutUser,
    getUserData,
    changePassword,
    updateUserData,
    deleteUser,
    searchUser
};