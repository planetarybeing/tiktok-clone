"use client"

import { useEffect } from "react"
import MainLayout from "./layouts/MainLayout"
import { usePostStore } from "@/app/stores/post"
import ClientOnly from "./components/ClientOnly"
import PostMain from "./components/PostMain"

export default function Home() {
  let { allPosts, setAllPosts } = usePostStore();
  useEffect(() => { setAllPosts()}, [])
  return (
    <>
      <MainLayout>
        <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            {allPosts.map((post, index) => (
              <PostMain post={{
                id: '123',
                user_id: '456',
                video_url: '/lunch.mp4',
                text: 'this is some text',
                created_at: 'date here',
                profile: {
                  user_id: '456',
                  name: 'User 1',
                  image: 'https://placehold.co/100',
                }
              }} key={index} />
            ))}
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}

