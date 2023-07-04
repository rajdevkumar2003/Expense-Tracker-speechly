import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {Chart,ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'


    
    


import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();
  

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;

// "chart.js": "^2.9.4",
// "react-chartjs-2": "^2.10.0",