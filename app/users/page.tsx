import EmptyState from "@components/EmptyState";
import { signOut } from "next-auth/react";
import React from "react";

const Users = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default Users;
