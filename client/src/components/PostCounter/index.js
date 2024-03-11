import styles from "./styles.module.css";
import { Badge } from "antd";
import { useSubscription } from "@apollo/client";
import { POST_COUNT_SUBSCRIPTION } from "./queries";

function PostCounter() {
  const {loading, data} = useSubscription(POST_COUNT_SUBSCRIPTION);

  const postCount = data?.posts_aggregate?.aggregate?.count
  
  return (
    <div className={styles.container}>
      <Badge count={loading ? "?" : postCount }>
        <span className={styles.counterTitle}>Post{loading ? "" : postCount > 1 && "s"}</span>
      </Badge>
    </div>
  );
}

export default PostCounter;
