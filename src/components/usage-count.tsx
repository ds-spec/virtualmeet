"use client";

import { MAX_FREE_USES, useUsageTracker } from "@/hooks/useUsageTracker";
import { InfinityIcon } from "lucide-react";
import { useSession } from "next-auth/react";

export default function UsageCount() {
  const { usageCount } = useUsageTracker();
  const { data: session } = useSession();
  return (
    <div className="flex items-center text-sm">
      <p>{`Credits Left: ${
        session?.user ? <InfinityIcon /> : MAX_FREE_USES - usageCount
      }`}</p>
    </div>
  );
}
