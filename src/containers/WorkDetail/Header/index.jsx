import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.scss";
import { strArr } from "../../../utils/utils";

class Header extends React.Component {
  render() {
    const { data } = this.props;
    if (Object.keys(data).length === 0) {
      return null;
    }
    return (
      <div className={styles["work-detail-top"]}>
        <div className={styles["work-img-list"]}>
          {
            strArr(data.Image).map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <img src={item} alt=""/>
                </div>
              );
            })
          }
        </div>
        <div className={styles.tit}>
          <p>{data.Title}</p>
          <div>来自：{data.UserData.NickName} {data.CreateTime.substr(0, 10)}</div>
        </div>
        <Link to={"/courseDetail/" + data.CourseGroupId}>
          <div className={styles["work-name"]}>
            <p className={styles.name}>{data.CourseGroupName}</p>
            <div> ></div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Header;