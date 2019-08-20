import React from "react";
import styles from "../TopicList/style.scss";
import { List_tpl } from "../List_tpl";

class TeachList extends React.Component {
  shouldComponentUpdate(nextProps) {
    return JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data);
  }

  render() {
    const { data } = this.props;
    if (data === undefined || data.length === 0) {
      return null;
    }
    return (
      <div className={styles["work-prompt"]}>
        <div className={styles.head}>老师点评</div>
        {
          data.map(item => {
            return List_tpl(item);
          })
        }
      </div>
    );
  }
}

export default TeachList;