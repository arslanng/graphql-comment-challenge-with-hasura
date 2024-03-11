import Loading from "components/Loading";
import { Divider } from "antd";
import { useSubscription } from "@apollo/client";
import { COMMENTS_SUBSCRIPTION } from "./queries";
import { Avatar, List } from "antd";
import NewCommentForm from "./NewCommentForm";

function CommentsList({ post_id }) {
  const { data, error, loading } = useSubscription(COMMENTS_SUBSCRIPTION, {
    variables: {
      post_id,
    },
  });
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Divider>Comments</Divider>

      {!loading && data && (
        <>
          <List
            className="demo-loadmore-list"
            loading={false}
            itemLayout="horizontal"
            // loadMore={loadMore}
            dataSource={data.comments}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.user.profile_photo} />}
                  title={item.user.fullName}
                  description={item.text}
                />
              </List.Item>
            )}
          />
          <Divider>New Comment</Divider>
          <NewCommentForm post_id={post_id} />
        </>
      )}
    </>
  );
}

export default CommentsList;
