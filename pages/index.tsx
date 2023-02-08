import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Login from "../components/Login";
import { Main } from "../components/Main";

const AppCoolmate = styled.div``;

export default function Home() {
  return (
    <AppCoolmate>
      <Header />
      <Main />
      <Login />
      <Footer />
    </AppCoolmate>
  );
}
