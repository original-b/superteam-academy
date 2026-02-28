'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { BookOpen, Trophy, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { connected, publicKey } = useWallet();

  const stats = [
    { label: 'Courses Completed', value: '3', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { label: 'Certificates Earned', value: '1', icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { label: 'Hours Learned', value: '12', icon: Clock, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
  ];

  const recentCourses = [
    { id: 'solana-core', title: 'Solana Core Concepts', progress: 100, status: 'Completed' },
    { id: 'rust-intro', title: 'Introduction to Rust', progress: 60, status: 'In Progress' },
    { id: 'anchor-framework', title: 'Anchor Framework Basics', progress: 0, status: 'Not Started' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          {connected 
            ? `Welcome back! Wallet connected: ${publicKey?.toBase58().slice(0, 4)}...${publicKey?.toBase58().slice(-4)}` 
            : 'Connect your wallet to track your progress and earn certificates.'}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">{stat.label}</h3>
              <div className={`p-2 rounded-full ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Continue Learning</h3>
            <p className="text-sm text-muted-foreground">Pick up where you left off.</p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              {recentCourses.slice(0, 2).map((course) => (
                <div key={course.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{course.title}</p>
                    <p className="text-sm text-muted-foreground">{course.progress}% Complete</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden mr-4">
                      <div className="h-full bg-primary" style={{ width: `${course.progress}%` }} />
                    </div>
                    <Link href={`/courses/${course.id}`} className="text-sm font-medium text-primary hover:underline flex items-center">
                      Resume <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Recommended Courses</h3>
            <p className="text-sm text-muted-foreground">Discover new topics on Solana.</p>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Advanced Anchor</p>
                  <p className="text-sm text-muted-foreground">Master the Anchor framework.</p>
                </div>
                <Link href="/courses/advanced-anchor" className="text-sm font-medium text-primary hover:underline">
                  View
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Solana Pay Integration</p>
                  <p className="text-sm text-muted-foreground">Build e-commerce apps.</p>
                </div>
                <Link href="/courses/solana-pay" className="text-sm font-medium text-primary hover:underline">
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
