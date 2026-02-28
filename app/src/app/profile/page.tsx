import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function ProfilePage() {
  const user = {
    name: "Solana Builder",
    wallet: "7X...9zQ",
    joined: "January 2024",
    xp: 2500,
    level: 5,
    nextLevelXp: 3000,
    badges: ["Early Adopter", "Rust Beginner", "First Smart Contract"],
    completedCourses: 3,
    inProgressCourses: 1,
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">Profile</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-medium">{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Wallet</p>
              <p className="font-medium">{user.wallet}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Joined</p>
              <p className="font-medium">{user.joined}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Level & Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">Level {user.level}</span>
              <span className="text-sm text-muted-foreground">
                {user.xp} / {user.nextLevelXp} XP
              </span>
            </div>
            <Progress value={(user.xp / user.nextLevelXp) * 100} className="h-2" />
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{user.completedCourses}</p>
                <p className="text-xs text-muted-foreground">Completed Courses</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{user.inProgressCourses}</p>
                <p className="text-xs text-muted-foreground">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Badges & Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {user.badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="text-sm py-1 px-3">
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
