import React from "react";
import BlurContainer from "../PageElements/BlurContainer";
import styles from "./ChoirInfo.module.css";
import GoldLine from "../PageElements/GoldLine";
import Avatar from "../StyledComponents/Avatar";

interface IProps {
  titleStyle?: React.CSSProperties;
  titleClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  images?: string[];
}

const ChoirInfo: React.FC<IProps> = (props) => {
  return (
    <BlurContainer
      title='The Choir'
      {...props}
    >
      <div className={styles.horizontalContainer}>
        <div>
          <p>
            Welcome to the choir!
          </p>
          <p>
            At the moment we do not have an active choir. When the choir is singing, it prepares the songs for the
            Sunday English mass at church and leads the congregation in singing them. All who are interested in
            helping us sing again are warmly invited to join.
          </p>
        </div>
        {props.images?.length && <img className={styles.rightImg} src={props.images[0]} alt="Songs"/>}
      </div>
      <div className={styles.horizontalContainer}>
        {props.images && props.images.length > 1 && <img className={styles.leftImg} src={props.images[1]} alt="Songs"/>}
      </div>

      <GoldLine className={styles.line}/>

      <Avatar name={"James"} photo={"/photo/James.png"} position={"Choir Director"}/>

    </BlurContainer>
  );
}

export default ChoirInfo;