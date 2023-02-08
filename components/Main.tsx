import Image from "next/image";
import styled from "styled-components";
import { HighlightedProducts } from "./HighlightedProducts";

const MainComponent = styled.div``;

const Banner = styled.div`
  position: relative;
  height: auto !important;
  width: auto !important;
  margin-bottom: 20px;
  img {
    position: relative !important;
  }
`;

const MainSection = styled.div`
  width: 90%;
  background-color: #fff;
  margin: auto;
  border: 1px solid #d9d9d9;
  border-radius: 1rem;
  overflow: hidden;
`;

const imageSrc = {
  banner:
    "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/December2022/Christmas_banner_web_desktop.png",
};

export const Main = () => (
  <MainComponent>
    <Banner>
      <Image
        src={imageSrc.banner}
        alt={"banner"}
        loader={() => imageSrc.banner}
        fill
      />
    </Banner>
    <MainSection>
      <HighlightedProducts></HighlightedProducts>
    </MainSection>
  </MainComponent>
);
