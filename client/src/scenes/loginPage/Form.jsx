import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName:yup.string().required("required"),
  email:yup.string().email("invalid email").required("required"),
  Password:yup.string().required("required"),
  location:yup.string().required("required"),
  occupation:yup.string().required("required"),
  picture:yup.string().required("required"),
})

const loginSchema = yup.object().shape({
  email:yup.string().email("invalid email").required("required"),
  Password:yup.string().required("required"),
});

const initialValueRegister ={
  firstName :"",
  lastName :"",
  email :"",
  Password :"",
  location :"",
  occupation :"",
  picture :"",
}

const initialValuelogin = {
  email: "",
  password:"",
};

const Form = () => {
const [pageType, setPageType] = useState("login");
const {palette} = useTheme();
const dispatch=useDispatch();
const isNonMobileScreens = useMediaQuery("(min-width:600px)")
const isLogin = pageType ===  "login";
const isRegister = pageType === "register";
const handleFormSubmit = async (values , onSubmitProps) =>{};

return(
  <Formik>
  
  </Formik>
)
}
export default  Form;
