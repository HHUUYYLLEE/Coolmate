import { Facebook, Google } from "@mui/icons-material";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const LoginComponent = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 1s;
`;

const LoginForm = styled.div`
  min-width: 40%;
  min-height: 50%;
  position: absolute;
  margin: auto;
  background-color: white;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 2rem;
  color: black;
  text-align: center;
  border-radius: 1rem;
  max-width: 600px;
`;

const useOutsideAlerter = (ref: any, cb?: any) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cb, ref]);
};

const Login = () => {
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setLoginFormOpen);
  return (
    <>
      {isLoginFormOpen ? (
        <LoginComponent>
          <LoginForm ref={wrapperRef}>
            <Typography
              variant="h5"
              style={{ fontWeight: 700, marginBottom: "1rem" }}
            >
              Login
            </Typography>
            <Typography variant="body2" style={{ marginBottom: "1rem" }}>
              Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính
              năng
              <Link href={""} color="blue">
                {" "}
                Lay lai mat khau{" "}
              </Link>
              để có thể truy cập vào tài khoản bằng email nhé.
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email/Sdt cua ban"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "1rem" }}
            />
            <TextField
              id="outlined-basic"
              label="Mat khau"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "1rem" }}
            />
            <Button
              variant="contained"
              style={{
                width: "100%",
                marginBottom: "1rem",
                color: "#fff",
                background: "black",
                textTransform: "none",
              }}
            >
              Sign in
            </Button>
            <Typography style={{ marginBottom: "1rem" }}>Or</Typography>
            <Button
              variant="contained"
              style={{
                width: "100%",
                marginBottom: "1rem",
                textTransform: "none",
              }}
            >
              Sign in with Facebook <Facebook />
            </Button>
            <Button
              variant="contained"
              style={{
                width: "100%",
                marginBottom: "1rem",
                background: "#3B5998",
                textTransform: "none",
              }}
            >
              Sign in with Google
              <Google />
            </Button>
            <div
              className="footer__signin"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                variant="body2"
                style={{ color: "#2f5acf", cursor: "pointer" }}
              >
                Đăng ký tài khoản mới
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#2f5acf", cursor: "pointer" }}
              >
                Quên mật khẩu
              </Typography>
            </div>
          </LoginForm>
        </LoginComponent>
      ) : null}
    </>
  );
};

export default Login;
