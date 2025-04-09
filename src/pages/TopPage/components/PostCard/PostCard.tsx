import { Link } from "react-router-dom";
import formatDate from "../../../../utils/formatDate";
import { PostType } from "../../../../types/Post";

type Props = {
  post: PostType; // post というキーに Post 型のデータが来ると宣言
}

const PostCard = ({ post }: Props) => {
  // 記事の本文を抜粋する関数
  const getPreviewContent = (html: string, maxLines: number = 2) => {
    const lines = html.split('<br/>');
    const previewLines = lines.slice(0, maxLines);
    if (previewLines.length === maxLines) {
      previewLines[maxLines - 1] += '...';
    }
    return previewLines.join('<br/>');
  };

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
            <p dangerouslySetInnerHTML={{ __html: getPreviewContent(post.content) }} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
