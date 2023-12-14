import { useParams } from "react-router-dom";

import { Loader } from "@/components/shared";
import PostForm from "@/components/forms/PostForm";
import { useGetPostById } from "@/lib/react-query/queries";

const EditPost = () => {
  const { id } = useParams(); // 修改帖子时，先获取当前帖子信息
  const { data: post, isLoading } = useGetPostById(id); // 获取帖子详情

  if (isLoading)
    return (
      <div className="w-full h-full flex-center">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="justify-start w-full max-w-5xl gap-3 flex-start">
          <img src="/assets/icons/edit.svg" width={36} height={36} alt="edit" className="invert-white" />
          <h2 className="w-full text-left h3-bold md:h2-bold">更新动态</h2>
        </div>

        {isLoading ? <Loader /> : <PostForm action="更新" post={post} />}
      </div>
    </div>
  );
};

export default EditPost;
