import React, { useEffect, useState } from "react";
import "./Skills.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import SkillBar from "./SkillBar/SkillBar";
import Chart from "react-apexcharts";

export default function Skills() {
   const [isDiscovered, setIsDiscovered] = useState(false);

   const chartRef = React.useRef();

   const skills = [
      {
         name: "C++",
         value: 75,
         chart: 'bar'
      },
      {
         name: "JavaScript",
         value: 65,
         chart: 'bar'
      },
      {
         name: "Python",
         value: 65,
         chart: 'bar'
      },
      {
         name: "React.js",
         value: 60,
         chart: 'radial'
      },
      {
         name: "Vue.js",
         value: 50,
         chart: 'radial'
      },
      {
         name: "Express.js",
         value: 45,
         chart: 'radial'
      },
      {
         name: "PHP",
         value: 25,
         chart: 'bar'
      },      
      {
         name: "Laravel",
         value: 25,
         chart: 'radial'
      },
   ];

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if(isDiscovered || !isVisible(chartRef)) return;
         setIsDiscovered(true);
      });
   }, []);

   // returns label for skill level y / 100
   const skillLevelFormatFunction = y => {
      if (y < 30) return 'Beginner';
      else if (y < 60) return 'Intermediate';
      else if (y < 90) return 'Advanced';
      return 'Expert';
   };

   // returns color based on value
   const getColorFromValue = value => {
      if (value < 30) return '#fd5058';
      if (value < 60) return '#F7CE5B';
      return '#2AB77C';
   }

   const circleSeries = skills.filter(skill => skill.chart === 'radial').map(skill => skill.value);

   const circleOptions = {
      plotOptions: {
         radialBar: {
            dataLabels: {
               value: {
                  formatter: skillLevelFormatFunction,
               },
            },
         },
      },
      colors: [({ value, seriesIndex, w }) => getColorFromValue(value)],
      chart: {
          height: 350,
          type: 'radialBar',
      },
      stroke: {
         lineCap: "round"
       },
      labels: skills.filter(skill => skill.chart === 'radial').map(skill => skill.name),
    };

   const barSeries = [
      {
        name: "Skill Level",
        data: skills.filter(skill => skill.chart === 'bar').map(skill => skill.value)

      }
    ];

    const barOptions = {
      chart: {
        id: "basic-bar",
        toolbar: { show: false },
      },
      plotOptions: {
         bar: {
            horizontal: true,
            borderRadius: 10,

            barHeight: '60%',
         },
      },
      colors: [({ value, seriesIndex, w }) => getColorFromValue(value)],
      dataLabels: { enabled: false },
      xaxis: {
        categories: skills.filter(skill => skill.chart === 'bar').map(skill => skill.name),
        labels: { show : false },
        axisTicks: { show : false },
        axisBorder: { show : false },
      },
      yaxis: {
         min: 0,
         max: 100,
         labels: {
            style: {
               fontSize: '16px',
               fontFamily: 'Helvetica, Arial, sans-serif',
               fontWeight: 400,
            },
         },
      },
      tooltip: {
         y: {
            formatter: skillLevelFormatFunction,
         },
      },
      grid: { show: false },
    };


   return (
      <section className="skills">
         <SectionTitle name="Skills" left={false} />
         <div ref={chartRef} className="chart-container">
            {isDiscovered ? 
            <>
               <Chart
                  options={barOptions}
                  series={barSeries}
                  type="bar"
                  width="400px"
                  height="250px"
               />
               <Chart
                  options={circleOptions}
                  series={circleSeries}
                  type="radialBar"
                  width="400px"
                  height="400px"
               />
            </>
            : ""} 
          </div>
      </section>
   );
}

const isVisible = (ref) => {
   if (!ref.current) return false;
   return (ref.current.offsetTop <= window.pageYOffset + 3 * window.innerHeight / 4);
};
