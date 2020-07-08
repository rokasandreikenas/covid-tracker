import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import classNames from "classnames";

import "./Cards.scss";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return <div>Loading...</div>;
  }
  const cardsInfo = [
    {
      name: "Infected",
      style: "infected",
      value: confirmed.value,
      description: "Number of actives cases of COVID-19",
    },
    {
      name: "Recovered",
      style: "recovered",
      value: recovered.value,
      description: "Number of recoveries from COVID-19",
    },
    {
      name: "Deaths",
      style: "deaths",
      value: deaths.value,
      description: "Number of deaths caused by COVID-19",
    },
  ];

  const renderCards = cardsInfo.map((card, index) => {
    return (
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={classNames("card", card.style)}
        key={index}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {card.name}
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={card.value} duration={2.5} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">{card.description}</Typography>
        </CardContent>
      </Grid>
    );
  });
  return (
    <div className="cards-container">
      <Grid container spacing={3} justify="center">
        {renderCards}
      </Grid>
    </div>
  );
};

export default Cards;
