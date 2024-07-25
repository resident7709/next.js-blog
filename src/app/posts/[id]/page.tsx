import PostId from "@/components/PostId";

export default function PostPage({ params }: { params: { id: string } }) {

  return <PostId params={params} />
}



