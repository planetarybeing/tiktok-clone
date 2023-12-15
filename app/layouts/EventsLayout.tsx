"use client";

import ClientOnly from "@/app/components/ClientOnly";
import React from "react";
import PostUser from "@/app/components/profile/PostUser";
import MainLayout from "@/app/layouts/MainLayout";
import NavButtons from "@/app/layouts/includes/Categories";
import { BsPencil } from "react-icons/bs";
import { useEffect } from "react";
import { useUser } from "@/app/context/user";
import { ProfilePageTypes, User } from "@/app/types";
import { usePathname } from "next/navigation";
import { usePostStore } from "@/app/stores/post";
import { useProfileStore } from "@/app/stores/profile";
import { useGeneralStore } from "@/app/stores/general";
import useCreateBucketUrl from "@/app/hooks/useCreateBucketUrl";



import TopNav from "./includes/TopNav";
import SideNavMain from "./includes/SideNavMain";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <TopNav />
      <div
        className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${
          pathname == "/" ? "max-w-[1140px]" : ""
        }`}
      >
        <SideNavMain />
        {children}
      </div>
      <div
        className={`flex justify-between mx-auto w-full lg:px-2.5 px-0 ${
          pathname == "/" ? "max-w-[1140px]" : ""
        }`}
      >
        <SideNavMain />
        {children}
      </div>
    </>
  );
}

