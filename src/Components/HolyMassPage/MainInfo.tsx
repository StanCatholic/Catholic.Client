import React, {FunctionComponent, useState} from "react";
import IHolyMass from "../../Domain/IHolyMass";
import moment from "moment";
import BlurContainer from "../PageElements/BlurContainer";
import GoldLine from "../PageElements/GoldLine";
import Button from "../StyledComponents/Button";
import Actions from "../../Utiles/Actions";
import Constants from "../../Domain/Constants";
import {IPage} from "../../Domain/IPage";
import IHolyMassSections from "../../Domain/IHolyMass";
import Avatar from "../StyledComponents/Avatar";
import styles from "./MainInfo.module.css";

interface IProps {
  holyMasses: IHolyMass[];
  page: IPage
}

const visibleMassesCount = 5;

const MainInfo: FunctionComponent<IProps> = ({holyMasses, page}) => {
  const [showAllMasses, setShowAllMasses] = useState(false);
  const selections: IHolyMassSections = page?.body ? JSON.parse(page.body) : null;

  const upcomingMasses = holyMasses
    .filter(m => m.schedule >= new Date())
    .sort((a, b) => a.schedule.getTime() - b.schedule.getTime());
  const visibleMasses = showAllMasses ? upcomingMasses : upcomingMasses.slice(0, visibleMassesCount);

  return (
    <BlurContainer
      title="Upcoming Holy Masses"
    >
      <div className={styles.holymassUpdated}>
        {page.date && <p>Updated on {moment(page.date).format('DD.MM.yyyy')}</p>}
      </div>

      <GoldLine/>

      {selections
        ? <div dangerouslySetInnerHTML={{__html: selections.title}}/>
        :
        <>
          <p> DEAR SISTERS AND BROTHERS,DEAR FRIENDS, </p>
          <h2>Upcoming Holy Masses and/or devotions at St. Ladislav church:</h2>
        </>
      }

      <div>
        {visibleMasses
          .map((holyMass, index) =>
            <div
              key={index}
              className={`${styles.holymassEventContainer} ${index === 0 ? styles.holymassNext : ''}`}
            >
              <div className={styles.holymassDateTimeContainer}>
                <p className={styles.month}>{moment(holyMass.schedule).format('MMMM')}</p>
                <p className={styles.day}>{moment(holyMass.schedule).format('DD')}</p>
                <p className={styles.dayOfWeek}>{moment(holyMass.schedule).format('dddd')}</p>
              </div>

              <div className={styles.holymassDetails}>
                <p className={styles.time}>{moment(holyMass.schedule).format('h:mm a')}</p>
                <p className={styles.holymassDescription}>{holyMass.description}</p>
              </div>
            </div>
          )}

        {upcomingMasses.length > visibleMassesCount &&
          <div className={styles.showMoreContainer}>
            <Button
              text={showAllMasses
                ? 'Show less'
                : `Show more (${upcomingMasses.length - visibleMassesCount})`}
              onClick={() => setShowAllMasses(!showAllMasses)}
            />
          </div>
        }
      </div>

      {selections
        ? <div dangerouslySetInnerHTML={{__html: selections.confessions}}/>
        :
        <>
          <p>
            <strong>CONFESSIONS</strong> are heard usually on Sundays 1/2 hour before or after the Holy Mass<br/>
            (at St. Ladislav's) and anytime by appointment (my phone +421 908 921 329).<br/>
            In the Blumental church I am available for confessions on following dates/times:Saturday, June 10: 5.50 -
            6.15pm.<br/>
            Friday, June 16: 11.45am - 12.20pm.<br/>
            My confessional is on the left, in the back of the church (as you enter through the main entrance
            door).<br/>
            <br/>
            Past Holy Masses and other reflections can be found on:
          </p>
        </>
      }

      <Button icon='/img/youtube.png' text='YouTube'
              onClick={() => Actions.redirect(Constants.fatherBenYouTubeChannel)}/>

      {selections
        ? <div dangerouslySetInnerHTML={{__html: selections.body}}/>
        :
        <>
          <p>
            To support Fr. Ben's ministry, you may send your donation to:<br/>
            <strong>SK79 1100 0000 0080 1011 9693</strong><br/>
            For any questions, feel free to email me at bkosnac@hotmail.com<br/>
          </p>

          <p>Fr. Ben Kosnac, your chaplain</p>
        </>
      }

      <GoldLine style={{width: '65%'}}/>

      <Avatar name={"Fr. Ben Kosnac"} photo={"/photo/Ben.png"} position={"Your Chaplain"}/>

    </BlurContainer>

  );
};

export default MainInfo;
