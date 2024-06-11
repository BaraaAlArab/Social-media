import {Box , Typography, useTheme, useMediaQuerry} from "@mui/material";
import Form from "./Form";

const LoginPage =() =>{
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuerry("(min-width : 1000px)");
    return <Box>
         <Box width= "100%" background={theme.palette.background.alt}textAlign="center"p="1rem 6%">
        <Typography
                  fontWeight="bold"
                  fontSize="32px"
                  color="primary"
                >
                  ArabPidea
                </Typography>
                </Box>
                <Box
                width={isNonMobileScreens ? "50% ": "93%" }
                p =" 2rem"m="2rem auto" borderRadius="1.5rem"
                backgroundColor={theme.palette.backgroundColor.alt}
                >
                  <Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem"}}>
                    welcome to ArabPidea, the Social media for Sociopathes!
                    </Typography>
                    <Form/>
                </Box>
    </Box>;
    
};

export default LoginPage;