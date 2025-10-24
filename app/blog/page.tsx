//components
import Content from "@/components/Content";

import PostCard from "@/cards/PostCard";


export default function Blog() {
  return (
    <>
      <Content bg="bg-gray-100">
        <div className="p-4">
          <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Latest Blog Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
