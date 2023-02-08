import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const ADD_PRODUCT_MUTATION = gql`
  mutation saveProduct($product: CreateProductInput!) {
    save(product: $product) {
      id
      name
    }
  }
`;

import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { CssBaseline, Container, Typography, Button } from "@mui/material";
import React, { useState } from "react";

const uniquePalette = "#a2d2ff";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3a86ff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: uniquePalette,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: uniquePalette,
    },
    "&:hover fieldset": {
      borderColor: "#3a86ff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3a86ff",
    },
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

export const ManageNewProduct = () => {
  const [save, { data }] = useMutation(ADD_PRODUCT_MUTATION);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [discount, setDiscount] = useState("");

  const handleSubmit = (e: { preventDefault: any }) => {
    console.log("u clicked me");
    e.preventDefault;
    const product = {
      name,
      price: Number(price),
      imageSrc,
      discount: Number(discount),
    };
    save({ variables: { product } });
    setName("");
    setPrice("");
    setImageSrc("");
    setDiscount("");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{ marginTop: 15 }}>
        <Typography
          variant="h4"
          component="h3"
          color={"#3a86ff"}
          textAlign="center"
        >
          Thêm sản phẩm
        </Typography>
        ;
        <Box
          style={{ marginTop: 15 }}
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <CssTextField
            label="Tên sản phẩm"
            id="custom-css-outlined-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <CssTextField
            label="Doanh mục sản phẩm"
            id="custom-css-outlined-input"
          />
          <CssTextField
            label="Đặc điểm nổi bật"
            id="custom-css-outlined-input"
          />
          <CssTextField label="Kích cỡ" id="custom-css-outlined-input" />
          <CssTextField
            label="Giá"
            id="custom-css-outlined-input"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <CssTextField
            label="Link anh"
            id="custom-css-outlined-input"
            onChange={(e) => setImageSrc(e.target.value)}
            value={imageSrc}
          />
          <CssTextField
            label="discount"
            id="custom-css-outlined-input"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </Box>
        <Button
          variant="outlined"
          size="large"
          style={{ marginTop: 20 }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Container>
    </React.Fragment>
  );
};
