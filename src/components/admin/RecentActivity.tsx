'use client';

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm text-muted-foreground">
            No recent activity
          </p>
        </div>
      </div>
    </div>
  );
}