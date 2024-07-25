'use client'

import { useState, useEffect } from "react";

type Post = {
  title: string;
  body: string;
};

export default function PostId({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true);
  const [timerFinished, setTimerFinished] = useState(false);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerFinished(true);
    }, 1000); // Задержка в 1 секунду

    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      });

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента  
  }, [params.id]);

  if (loading || !timerFinished || !post) {
    return <div className="text-center pt-16 px-5">Loading...</div>; // Индикатор загрузки или любой другой контент
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  )
}