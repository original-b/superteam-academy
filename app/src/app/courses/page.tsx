'use client';

import Link from 'next/link';
import { BookOpen, Clock, Star, Users } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      id: 'solana-core',
      title: 'Solana Core Concepts',
      description: 'Learn the foundational concepts of the Solana blockchain, including accounts, programs, and transactions.',
      level: 'Beginner',
      duration: '4 hours',
      students: 1200,
      rating: 4.8,
      tags: ['Solana', 'Web3', 'Blockchain'],
      image: 'bg-gradient-to-r from-purple-500 to-indigo-500'
    },
    {
      id: 'rust-intro',
      title: 'Introduction to Rust',
      description: 'Master the basics of Rust programming language, the primary language for writing Solana smart contracts.',
      level: 'Beginner',
      duration: '8 hours',
      students: 850,
      rating: 4.7,
      tags: ['Rust', 'Programming'],
      image: 'bg-gradient-to-r from-orange-400 to-red-500'
    },
    {
      id: 'anchor-framework',
      title: 'Anchor Framework Basics',
      description: 'Build robust and secure Solana programs faster using the Anchor framework.',
      level: 'Intermediate',
      duration: '6 hours',
      students: 600,
      rating: 4.9,
      tags: ['Anchor', 'Smart Contracts'],
      image: 'bg-gradient-to-r from-blue-400 to-cyan-500'
    },
    {
      id: 'solana-pay',
      title: 'Solana Pay Integration',
      description: 'Learn how to integrate Solana Pay into your e-commerce applications for seamless crypto payments.',
      level: 'Advanced',
      duration: '3 hours',
      students: 300,
      rating: 4.6,
      tags: ['Solana Pay', 'E-commerce'],
      image: 'bg-gradient-to-r from-green-400 to-emerald-500'
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground mt-2">
          Explore our comprehensive library of Solana development courses.
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          placeholder="Search courses..." 
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:max-w-sm"
        />
        <select className="flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
            <div className={`h-32 w-full ${course.image} relative`}>
              <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                {course.level}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-3">
                {course.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="font-semibold text-xl leading-none tracking-tight mb-2 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 border-t">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 pt-0">
              <Link 
                href={`/courses/${course.id}`}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
