import React from "react";
import Slider from "react-slick";
import Exit from "./exit";

function SampleNextArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FC6820",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#FC6820",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

export default function ExitCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          adaptiveHeight: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="py-14 mx-1 lg:mx-16">
      <Exit
        title={"Involver to Oracle"}
        year={2011}
        text={
          "ArightCo was an integral part of handling both financials and CFO/VP Finance services to Involver throughout the acquisition process."
        }
      />
      <Exit
        title={"SpeakToIt to Google"}
        year={2016}
        text={
          "ArightCo handled financial due diligence and was an integral part of financial management, accounting, and HR. Client partner, Katie Nelson, provided CFO-level services throughout SpeakToIt's lifetime."
        }
      />
      <Exit
        title={"Replay to Intel"}
        year={2016}
        text={
          "ArightCo's CFO-level services were an essential element throughout the acquisition process."
        }
      />
      <Exit
        title={"Emmy Award"}
        year={2015}
        text={
          "Won by ArightCo co-founder, Tanmoy Chowdhury, as part of the Replay team for his technical excellence."
        }
      />
      <Exit
        title={"Nexient to NTT Data"}
        year={2021}
        text={
          "ArightCo client partners, Tanmoy Chowdhury and Biju Mathew, provided CFO and Controller services, supporting Nexient throughout the sale."
        }
      />
      <Exit
        title={"Ampool to Hewlett-Packard"}
        year={2021}
        text={
          "The ArightCo team provided Ampool with payroll, accounting, and financial services throughout the acquisition process."
        }
      />
      <Exit
        title={"OneCloud to ePlus"}
        year={2017}
        text={
          "ArightCo headed financial management and accounting. Client partner, Biju Mathew, managed the finance team and operated as a Controller."
        }
      />
      <Exit
        title={"Punchh to Par Tech"}
        year={2021}
        text={
          "ArightCo has provided comprehensive finance and back office services since 2012. ArightCo organized processes, policy procedures, and compliance (apart from financial management)."
        }
      />
      <Exit
        title={"Claritics to Nexient"}
        year={2013}
        text={
          "ArightCo provided payroll, accounting, and financial services to Claritics. ArightCo supported Nexient's financial due diligence for the Claritics' sale, as well as onboarding and integration."
        }
      />
      <Exit
        title={"Zuna Infotech to Nexient"}
        year={2015}
        text={
          "ArightCo supported Nexient's financial due diligence for the sale of Zuna Infotech, as well as onboarding and integration."
        }
      />
      <Exit
        title={"QuanticMind to Centro"}
        year={2020}
        text={
          "ArightCo provided QuanticMind with CFO, Controller, payroll, accounting, and financial services throughout the acquisition process."
        }
      />
      <Exit
        title={"OpsClarity to LightBend"}
        year={2017}
        text={
          "Throughout the acquisition process, ArightCo provided OpsClarity finance, accounting, payroll, and Controller services, as well as HR support."
        }
      />
      <Exit
        title={"OneCloud Consulting Inc to ePlus"}
        year={2017}
        text={
          "Throughout the acquisition process, ArightCo provided OneCloud finance, accounting, payroll, and Controller services, as well as HR support."
        }
      />
    </Slider>
  );
}
