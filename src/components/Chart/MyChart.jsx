import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Customers: 100,
    Prospects: 80,
    amt: 100,
  },
  {
    name: 'Feb',
    Customers: 150,
    Prospects: 300,
    amt: 2210,
  },
  {
    name: 'Mar',
    Customers: 250,
    Prospects: 150,
    amt: 2290,
  },
  {
    name: 'Apr',
    Customers: 240,
    Prospects: 255,
    amt: 2000,
  },
  {
    name: 'May',
    Customers: 280,
    Prospects: 140,
    amt: 2500,
  },
  {
    name: 'June',
    Customers: 230,
    Prospects: 240,
    amt: 2100,
  },
  {
    name: 'Jul',
    Customers: 250,
    Prospects: 150,
    amt: 2290,
  },
  {
    name: 'Aug',
    Customers: 240,
    Prospects: 255,
    amt: 2000,
  },
  {
    name: 'Sept',
    Customers: 200,
    Prospects: 210,
    amt: 2181,
  },
  {
    name: 'Oct',
    Customers: 240,
    Prospects: 255,
    amt: 2000,
  },
  {
    name: 'Dec',
    Customers: 280,
    Prospects: 140,
    amt: 2500,
  },

];

export default class Example extends PureComponent {
  render() {
    return (
      <div className="w-full h-5/6 flex justify-center items-center m-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" className="text-xs" axisLine={{ stroke: 'rgba(209, 213, 219)' }} tick={{ fontSize: '0.75rem' }} />
            <YAxis axisLine={false} tick={{ fontSize: '0.75rem' }} />
            <Tooltip />
            <Line type="linear" dataKey="Prospects" stroke={'rgba(251, 191, 36)'} activeDot={{ r: 8 }} />
            <Line type="linear" dataKey="Customers" stroke={'rgba(52, 211, 153)'} />
          </LineChart>
        </ResponsiveContainer >
      </div>
    );
  }
}

