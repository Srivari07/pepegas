import React from "react";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Row from "../Row/Row";
import "./HomeScreen.css";
import requests from "../../Requests";
import Video from "../Video/Video";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />

      <Banner />

      <Row
        title="TOP TIERS"
        fetchUrl={requests.fetchTopAnime}
        isLargeRow={true}
      />
      <Video />
      <Row title="TOP TIERS" fetchUrl={requests.fetchAnime} />
      <Row
        title="TOP TIERS"
        fetchUrl={requests.fetchTopAnimeMovie}
        isLargeRow={true}
      />
      <Row
        title="TOP TIERS"
        fetchUrl={requests.fetchTopAnime}
        isLargeRow={true}
      />
      <Row title="TOP TIERS" fetchUrl={requests.fetchAnime} isLargeRow={true} />
    </div>
  );
}

export default HomeScreen;
