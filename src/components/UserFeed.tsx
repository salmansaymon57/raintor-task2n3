import type { User, UserResponse } from "../hooks/useUserFeed"; // Updated type alias

import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useCallback } from "react";
import UserCard from "./UserCard";

import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

const fetchUsers = async ({ pageParam = 0 }: { pageParam?: number }) => {
  const response = await axios.get<UserResponse>(
    `https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=${pageParam}`
  );
  return response.data;
};

const UserFeed: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery(
    ["users"],
    ({ pageParam = 0 }) => fetchUsers({ pageParam }),
    {
      getNextPageParam: (lastPage: UserResponse, allPages: UserResponse[]) => {
        const total = lastPage.total;
        const nextSkip = lastPage.skip + lastPage.limit;
        return nextSkip < total ? nextSkip : undefined;
      },
    }
  );

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage || !node) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 1.0 }
      );
      observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  if (isLoading) {
    return (
      <div className="p-4 bg-gray-800 rounded-xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">User Feed</h2>
        <div className="space-y-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} height={100} className="rounded-xl" />
            ))}
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="p-4 bg-gray-800 rounded-xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">User Feed</h2>
        <p className="text-red-500">{(error as Error).message}</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-800 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-white">User Feed</h2>
      <div
        className="flex flex-col gap-4"
        role="region"
        aria-label="User feed list"
      >
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.users.map((user: User) => (
              <UserCard key={user.id} user={user} />
            ))}
          </React.Fragment>
        ))}
        <div ref={loadMoreRef} className="h-10 text-center">
          {isFetchingNextPage ? "Loading more..." : "Scroll to load more"}
        </div>
      </div>
    </div>
  );
};

export default UserFeed;
