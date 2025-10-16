"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DashboardHomePage() {
  // Redirect dashboard overview page
  const router = useRouter();

  return (
    <div>
      <h1>Dashboard Overview</h1>
    </div>
  );
}
