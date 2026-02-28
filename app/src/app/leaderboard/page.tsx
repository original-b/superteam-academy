import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy } from "lucide-react";

export default function LeaderboardPage() {
  const users = [
    { rank: 1, name: "Alice Nakamoto", xp: 12500, level: 25, courses: 14, avatar: "AN" },
    { rank: 2, name: "Bob Builder", xp: 11200, level: 22, courses: 12, avatar: "BB" },
    { rank: 3, name: "Charlie Solana", xp: 9800, level: 19, courses: 10, avatar: "CS" },
    { rank: 4, name: "Diana Rust", xp: 8500, level: 17, courses: 8, avatar: "DR" },
    { rank: 5, name: "Eve Hacker", xp: 7200, level: 14, courses: 7, avatar: "EH" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Leaderboard</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" /> Top Builders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Builder</TableHead>
                <TableHead className="text-right">Level</TableHead>
                <TableHead className="text-right">Courses Completed</TableHead>
                <TableHead className="text-right">Total XP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.rank}>
                  <TableCell className="font-medium">
                    {user.rank === 1 && "🥇"}
                    {user.rank === 2 && "🥈"}
                    {user.rank === 3 && "🥉"}
                    {user.rank > 3 && `#${user.rank}`}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{user.level}</TableCell>
                  <TableCell className="text-right">{user.courses}</TableCell>
                  <TableCell className="text-right font-bold">{user.xp.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
