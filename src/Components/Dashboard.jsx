import React from "react";
import { ChartLine } from "./ChartLine";
import { ChartPie } from "./ChartPie";

const Dashboard = () => {
  const HEIGHT = window.innerHeight;
  const cardValue = [
    {
      title: "Total Revenue",
      value: "$2,129,430",
      icon: "https://cdn-icons-png.flaticon.com/512/8552/8552942.png",
      bg: "#DDEFE0",
    },
    {
      title: "Total Transactions",
      value: "1,520",
      icon: "https://cdn-icons-png.flaticon.com/512/617/617303.png",
      bg: "#F4ECDD",
    },
    {
      title: "Total Likes",
      value: "9,721",
      icon: "https://cdn-icons-png.flaticon.com/512/126/126473.png",
      bg: "#EFDADA",
    },
    {
      title: "Total Users",
      value: "892",
      icon: "https://cdn-icons-png.flaticon.com/512/10613/10613630.png",
      bg: "#DEE0EF",
    },
  ];

  const leftSideBard = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/122/122072.png",
      title: "Dashboard",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/617/617418.png",
      title: "Transaction",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/833/833593.png",
      title: "Schedules",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
      title: "Users",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2099/2099058.png",
      title: "Settings",
    },
  ];

  return (
    <div
      style={{
        height: HEIGHT,
        backgroundColor: "#DDDDDD",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "30px",
          backgroundColor: "black",
          width: "15%",
          height: "80%",
          color: "white",
          paddingTop: "60px",
          paddingLeft: "60px",
          paddingBottom: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: "36px", fontWeight: "700" }}>Board.</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "60px",
            rowGap: "40px",
            width: "100%",
          }}
        >
          {leftSideBard.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  display: "flex",
                  //   border: "2px solid white",
                  width: "100%",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.icon}
                  alt="icon"
                  style={{
                    filter: "invert(100%)",
                    width: "20px",
                    height: "20px",
                  }}
                />
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "70%",
            rowGap: "40px",
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: "400" }}>Help</div>
          <div style={{ fontSize: "14px", fontWeight: "400" }}>Contact Us</div>
        </div>
      </div>
      <div
        style={{
          width: "72%",
          height: "95%",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // border: "2px solid red",
          }}
        >
          <div
            style={{
              width: "70%",
              textAlign: "left",
              padding: "1%",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Dashboard
          </div>
          <div
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "20px",
              padding: "1%",
            }}
          >
            <div
              style={{
                width: "70%",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "4%",
                paddingRight: "4%",
              }}
            >
              <div>search</div>
              <img
                style={{ height: "12px", width: "12px" }}
                src="https://cdn-icons-png.flaticon.com/512/151/151773.png"
                alt="search"
                srcset=""
              />
            </div>
            <div
              style={{
                width: "10%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%" }}
                src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png"
                alt="notification"
                srcset=""
              />
            </div>
            <div
              style={{
                width: "15%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%" }}
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="notification"
                srcset=""
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // border: "2px solid red",
            marginTop: "2%",
          }}
        >
          {cardValue.map((item, i) => (
            <div
              key={i}
              style={{
                width: "20%",
                padding: "2%",
                borderRadius: "10px",
                backgroundColor: item.bg,
              }}
            >
              <div style={{ width: "100%", textAlign: "right" }}>
                <img
                  style={{ width: "15%" }}
                  src={item.icon}
                  alt=""
                  srcset=""
                />
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "26px",
                  fontWeight: "700",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "80%",
            height: "222px",
            // border: "2px solid red",
            marginTop: "2%",
            borderRadius: "20px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ChartLine />
        </div>
        <div
          style={{
            width: "100%",
            height: "222px",
            // border: "2px solid yellow",
            display: "flex",
            flexDirection: "row",
            marginTop: "2%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "38%",
              height: "95%",
            //   border: "2px solid black",
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
              backgroundColor: "white",
              objectFit: "cover",
            }}
          >
            <ChartPie />
          </div>
          <div
            style={{
              width: "38%",
              height: "95%",
              //   border: "2px solid black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
              paddingLeft: "2%",
              color: "#999999",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{ color: "#000000", fontSize: "18px", fontWeight: "700" }}
            >
              Today's Schedule
            </div>
            <div
              style={{
                borderLeft: "4px solid green",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingLeft: "2%",
              }}
            >
              <div style={{ color: "#666666" }}>
                Meeting with suppliers from Kuta Bali
              </div>
              <div>14:00-15:00</div>
              <div>at Sunset Road, Kuta, Bali</div>
            </div>
            <div
              style={{
                borderLeft: "4px solid purple",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingLeft: "2%",
              }}
            >
              <div style={{ color: "#666666" }}>
                Check operation at Giga Factory 1
              </div>
              <div>18:00-20:00</div>
              <div>at Central Jakarta</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
