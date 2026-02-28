import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, PlayCircle, CheckCircle } from "lucide-react";

// Mock data for a single course
const courseData = {
  id: "1",
  title: "Introduction to Solana Development",
  description: "Learn the basics of Solana development, including accounts, programs, and PDAs. This comprehensive course will take you from zero to building your first on-chain program using Rust and Anchor framework.",
  instructor: "Alice Nakamoto",
  duration: "4 weeks",
  level: "Beginner",
  progress: 25,
  enrolled: true,
  image: "https://images.unsplash.com/photo-1639762681485-074b7f4f4b66?q=80&w=2000&auto=format&fit=crop",
  modules: [
    {
      id: "m1",
      title: "Module 1: Solana Fundamentals",
      lessons: [
        { id: "l1", title: "What is Solana?", duration: "15 min", completed: true },
        { id: "l2", title: "Accounts and Programs", duration: "25 min", completed: false },
        { id: "l3", title: "Transactions and Instructions", duration: "20 min", completed: false },
      ]
    },
    {
      id: "m2",
      title: "Module 2: Rust Basics for Solana",
      lessons: [
        { id: "l4", title: "Setting up the Environment", duration: "10 min", completed: false },
        { id: "l5", title: "Rust Syntax Refresher", duration: "45 min", completed: false },
        { id: "l6", title: "Memory Safety and Ownership", duration: "30 min", completed: false },
      ]
    },
    {
      id: "m3",
      title: "Module 3: Building with Anchor",
      lessons: [
        { id: "l7", title: "Introduction to Anchor", duration: "20 min", completed: false },
        { id: "l8", title: "Your First Anchor Program", duration: "50 min", completed: false },
        { id: "l9", title: "Testing Anchor Programs", duration: "40 min", completed: false },
      ]
    }
  ]
};

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the course data based on params.id
  const course = courseData;

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce((acc, module) => 
    acc + module.lessons.filter(l => l.completed).length, 0
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-slate-900">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${course.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8">
          <Link href="/courses" className="inline-flex items-center text-slate-300 hover:text-white mb-4 transition-colors w-fit">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {course.level}
            </span>
            <span className="flex items-center text-sm text-slate-300">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </span>
            <span className="flex items-center text-sm text-slate-300">
              <BookOpen className="h-4 w-4 mr-1" />
              {totalLessons} lessons
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{course.title}</h1>
          <p className="text-lg text-slate-300">Instructor: {course.instructor}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">About this course</h2>
            <p className="text-slate-300 leading-relaxed">
              {course.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Course Content</h2>
            <div className="space-y-6">
              {course.modules.map((module, index) => (
                <div key={module.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                  <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-700">
                    <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                  </div>
                  <div className="divide-y divide-slate-700">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <Link 
                        key={lesson.id} 
                        href={`/courses/${course.id}/lessons/${lesson.id}`}
                        className="flex items-center justify-between px-6 py-4 hover:bg-slate-700/50 transition-colors group"
                      >
                        <div className="flex items-center">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-4 flex-shrink-0" />
                          ) : (
                            <PlayCircle className="h-5 w-5 text-slate-400 group-hover:text-blue-400 mr-4 flex-shrink-0 transition-colors" />
                          )}
                          <div>
                            <p className={`font-medium ${lesson.completed ? 'text-slate-300' : 'text-white group-hover:text-blue-400'} transition-colors`}>
                              {index + 1}.{lessonIndex + 1} {lesson.title}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-slate-400">{lesson.duration}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 sticky top-8">
            {course.enrolled ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Your Progress</h3>
                  <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>{completedLessons} of {totalLessons} lessons</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
                
                <Link 
                  href={`/courses/${course.id}/lessons/l2`} // Point to next uncompleted lesson
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 transition-colors"
                >
                  Continue Learning
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center pb-4 border-b border-slate-700">
                  <p className="text-3xl font-bold text-white mb-1">Free</p>
                  <p className="text-sm text-slate-400">For a limited time</p>
                </div>
                <button 
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            )}
            
            <div className="mt-8 space-y-4">
              <h4 className="text-sm font-medium text-slate-300 uppercase tracking-wider">Course Includes</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center">
                  <PlayCircle className="h-4 w-4 mr-3 text-slate-500" />
                  {totalLessons} on-demand video lessons
                </li>
                <li className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-3 text-slate-500" />
                  Readings and assignments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-3 text-slate-500" />
                  Certificate of completion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
