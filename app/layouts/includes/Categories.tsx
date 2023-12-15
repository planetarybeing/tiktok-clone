import ClientOnly from "@/app/components/ClientOnly";
import React from "react";
import PostUser from "@/app/components/profile/PostUser";
import MainLayout from "@/app/layouts/MainLayout";

const list = [
  'New', 'Hot', 'Gaming', 'Concerts', 'Movies', 'Sports', 'Outdoors', 'Food & Drink', 'Sightseeing & Tours', 'Nightlife' 
]

const Categories = () => {

  return (
    <div className="mx-auto flex flex-col justify-center max-x-sm gap-6 mt-10 ">
      <h1 className="text-center text-xl font-bold my-12">
        Local Events
      </h1>
      <div>
        <ul className="flex flex-row gap-4 overflow-y-auto">
          {
          list.map((item) => (
            <li className="px-4 py-2 bg-black-800 rounded-full text-white">
              {item}
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Categories;
