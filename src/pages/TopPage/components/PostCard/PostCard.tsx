import { Link } from "react-router-dom";
import formatDate from "../../../../utils/formatDate";
import { PostType } from "../../../../types/Post";

type Props = {
  post: PostType; // post というキーに Post 型のデータが来ると宣言
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        <div className="border border-gray-300 block pt-5 pr-7 pb-5 pl-5">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <time dateTime={formatDate(post.createdAt, '-')}>
                {formatDate(post.createdAt, '/')}
              </time>
            </div>
            <div className="flex space-x-2">
              {post.categories.map((category) => (
                <p className="px-2 py-1 border border-blue-600 rounded text-xs text-blue-600">{category}</p>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-2xl">{post.title}</p>
          </div>
          <div className="mt-5">
            <p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
