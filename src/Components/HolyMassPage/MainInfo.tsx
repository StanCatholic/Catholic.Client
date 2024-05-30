import React, {FunctionComponent} from "react";
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

const MainInfo: FunctionComponent<IProps> = ({holyMasses, page}) => {
  const selections: IHolyMassSections = page?.body ? JSON.parse(page.body) : null;

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
        {holyMasses
          .filter(m => m.schedule >= new Date())
          .map((holyMass, index) =>
            <div key={index} className={styles.holymassEventContainer}>
              <div className={styles.holymassDateTimeContainer}>
                <div>
                  <p className={styles.month}>{moment(holyMass.schedule).format('MMMM')}</p>
                  <p className={styles.day}>{moment(holyMass.schedule).format('DD')}</p>
                </div>
                <div className={styles.verticalLine}/>
                <div>
                  <p className={styles.dayOfWeek}>{moment(holyMass.schedule).format('dddd')}</p>
                  <p className={styles.time}>{moment(holyMass.schedule).format('h:mm a')}</p>
                </div>
              </div>

              <div className={styles.holymassDescription}>
                {holyMass.description}
              </div>
            </div>
          )}
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
