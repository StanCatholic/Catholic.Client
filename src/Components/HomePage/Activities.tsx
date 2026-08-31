import React from 'react';
import Activity from './Activity';
import './Activities.css';

const Activities = () => {
  return (
    <div className="activities">
      <h1 className="activitiesTitle">Activities</h1>
      <div className="activities-container">
        <Activity
          title="Holy Mass"
          description="Holy Mass is offered in English on Sundays only at 11:30am at the Blue Church
           (Church of St. Elizabeth).
           The church is located at Bezručova 2, 811 09 Bratislava.
           It is a short walk from the city center."
          image="/img/holy-mass.webp"
          link="/holy-mass"
          isImageTop={true}
        />

        <Activity
          title="Bible Group"
          description="
          Join us every Thursday at 19:00 for our Bible Group.
          We're an enthusiastic group engaging in thoughtful reflection, reading, and discussion on the Old and New Testaments in English.
          One-time or regular attendance welcomed. Join our journey of faith today!"
          image="/img/bible-group.webp"
          link="/english-bible-group"
          isImageTop={false}
        />

        <Activity
          title="Choir"
          description="
          At the moment we do not have an active choir.
          All who are interested in helping us sing again are warmly invited to join."
          image="/img/holymass-book.webp"
          link="/choir"
          isImageTop={true}
        />

        <Activity
          title="Legion of Mary"
          description="Join the Legion of Mary, a global online community of active Catholics focused on evangelisation.
           Serving in over 170 countries, we strive for the salvation of souls and the glory of God under Mary's guidance.
           Meet us every Monday at 19:00 on Zoom."
          image="/img/mary.webp"
          link="/legion-of-mary"
          isImageTop={true}
        />

        <Activity
          title="Catholic Table"
          description="Initiative by the Legion of Mary.
           Located at the Old Market (Stará tržnica) in Bratislava, we offer books, rosaries, and other Catholic articles every Saturday for evangelization.
           Volunteer with us or support our mission through your prayers."
          image="/img/catholic-table.webp"
          link="/catholic-table"
          isImageTop={false}
        />

        <Activity
          title="Daily Readings"
          description="EWTN offers a valuable resource by providing daily readings from the Bible, promoting the teachings of the Catholic Church.
           These readings serve as a convenient and accessible way for individuals to integrate spiritual reflection into their daily lives."
          image="/img/readings.webp"
          link="https://www.ewtn.com/catholicism/daily-readings"
          isImageTop={true}
        />
      </div>
    </div>

  );
}

export default Activities  