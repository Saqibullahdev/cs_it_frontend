import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Noticeboard.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import dayjs from "dayjs";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TextField from "@mui/material/TextField";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Typography, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { useHistory } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Noticeboard() {
  const history = useHistory();

  const [Notificationdata, setData] = React.useState([]);
  const [semesterviseNotification, setSemesterviseNotification] = useState([]);
  const [selectedFromDate, setSelectedFromDate] = useState(dayjs("2022-04-17"));
  const [selectedToDate, setSelectedToDate] = useState(dayjs("2022-04-17"));
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFromDateChange = (date) => {
    setSelectedFromDate(date);
  };

  const handleToDateChange = (date) => {
    setSelectedToDate(date);
  };

  const fetchNotification = async () => {
    console.log("Fetching notifications...");
    console.log("Selected from date:", selectedFromDate.toISOString());
    try {
      setIsProcessing(true); // Corrected capitalization for setIsProcessing
      let url = `http://localhost:8080/api/fetchnotificationbydate`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromdate: selectedFromDate.toISOString(),
          todate: selectedToDate.toISOString(),
        }),
      });
      const resp = await response.json();
      const { ok, data } = resp;
      if (!ok) {
        alert("No data found");
        return;
      }
      history.push({
        pathname: "/notificationbydate",
        state: { data }, // Pass data via state
      });
      
    } catch (error) {
      alert("Error fetching notifications:", error.message); // Added more descriptive error logging
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    // Call the API here
    fetch("http://localhost:8080/api/fetchNotification")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        // Handle the error here
        console.log(error);
        // Display an error message to the user
        alert("Error fetching data from API");
      });
  }, []);

  const Data = [
    {
      id: 1,
      title: "Notification for rechecking 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur",
    },
    {
      id: 2,
      title: "Notification for Dues ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur",
    },
    {
      id: 3,
      title: "Notification for Date Extension Spring 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur",
    },
    {
      id: 4,
      title: "Notification for rechecking 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur",
    },
    {
      id: 5,
      title: "Notification for Date Extension Spring 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur",
    },
    {
      id: 6,
      title: "Notification for Dues",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur",
    },
    {
      id: 7,
      title: "Notification for Date Extension Spring 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur perferendis assumenda quaerat quidem ipsam, veritatis, blanditiis fugit voluptatibus libero amet esse nostrum eveniet inventore error exercitationem eum vel consequatur",
    },
    {
      id: 8,
      title: "Notification for rechecking 2023",
      description: "Lorem ipsum dolor sit  vel consequatur",
    },
  ];

  const userId = useParams().id;
  const loadedNotification = Data.filter(
    (notification) => notification.id === userId
  );
  console.log(loadedNotification);

  return (
    <div>
      <Navbar />

      <section className="mainhomepagediv">
        <div className="container text-center pt-5 pb-1 upperTextbox">
          <p className="h3">Computer Science and Information Technology</p>
          <p>University of Engineering & Technology Peshawar</p>
          <p className="h3 mb-5">Notifications</p>
        </div>
      </section>

      <section className="container-fluid p-0 m-0 noticeboardSection">
        <div className="container carasolUpperdiv ">
          <Carousel breakPoints={breakPoints}>
            {Notificationdata?.map((item, key) => (
              <Card
                id={item._id}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="container py-5">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Search By Date
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                  <InputLabel
                    htmlFor="from-datepicker"
                    style={{ fontSize: "1.4rem", marginBottom: "8px" }}
                  >
                    Notifications From
                  </InputLabel>
                  <DesktopDatePicker
                    id="from-datepicker"
                    value={selectedFromDate}
                    onChange={handleFromDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="YYYY-MM-DD"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel
                    htmlFor="to-datepicker"
                    style={{ fontSize: "1.4rem", marginBottom: "8px" }}
                  >
                    Notifications till
                  </InputLabel>
                  <DesktopDatePicker
                    id="to-datepicker"
                    value={selectedToDate}
                    onChange={handleToDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="YYYY-MM-DD"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="warning"
                    size="large"
                    onClick={fetchNotification}
                  >
                    Search
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {isProcessing && (
                    <Typography variant="body1">
                      Result Processing...
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </LocalizationProvider>
          </Grid>
        </Grid>
      </section>

     
      <Footer />
    </div>
  );
}
