"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { useState } from "react";

// Mock data
const courseData = {
  id: "1",
  title: "Introduction to Solana Development",
  modules: [
    {
      id: "m1",
      title: "Module 1: Solana Fundamentals",
      lessons: [
        { id: "l1", title: "What is Solana?", duration: "15 min", completed: true, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: "l2", title: "Accounts and Programs", duration: "25 min", completed: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: "l3", title: "Transactions and Instructions", duration: "20 min", completed: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      ]
    },
    {
      id: "m2",
      title: "Module 2: Rust Basics for Solana",
      lessons: [
        { id: "l4", title: "Setting up the Environment", duration: "10 min", completed: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { id: "l5", title: "Rust Syntax Refresher", duration: "45 min", completed: false, videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      ]
    }
  ]
};

export default function LessonPage({ params }: { params: { id: string, lessonId: string } }) {
  const [completed, setCompleted] = useState(false);
  
  // Flatten lessons for navigation
  const allLessons = courseData.modules.flatMap(m => m.lessons);
  const currentLessonIndex = allLessons.findIndex(l => l.id === params.lessonId);
  const currentLesson = allLessons[currentLessonIndex] || allLessons[0];
  
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const handleMarkComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      {/* Top Navigation */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href={`/courses/${params.id}`} className="text-slate-400 hover:text-white transition-colors flex items-center group">
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Back to Course</span>
            </Link>
            <div className="h-6 w-px bg-slate-700 mx-4 hidden sm:block"></div>
            <h1 className="text-white font-medium truncate max-w-[200px] sm:max-w-md">
              {currentLesson.title}
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={handleMarkComplete}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                completed || currentLesson.completed
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
              }`}
            >
              <CheckCircle className={`h-4 w-4 mr-2 ${completed || currentLesson.completed ? 'text-green-400' : 'text-slate-400'}`} />
              {completed || currentLesson.completed ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:max-w-4xl w-full">
          {/* Video Player Placeholder */}
          <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-800 mb-8">
            <iframe 
              width="100%" 
              height="100%" 
              src={currentLesson.videoUrl} 
              title={currentLesson.title}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{currentLesson.title}</h2>
            
            <div className="prose prose-invert max-w-none prose-slate">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                In this lesson, we will cover the fundamental concepts of {currentLesson.title.toLowerCase()}. 
                You'll learn how it fits into the broader Solana ecosystem and why it's crucial for building robust decentralized applications.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Key Takeaways</h3>
              <ul className="space-y-2 text-slate-300 list-disc pl-5">
                <li>Understand the core mechanism behind the concept.</li>
                <li>Learn how to apply it in a real-world Rust program.</li>
                <li>Identify common pitfalls and best practices.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <span className="mr-2">📄</span> Official Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <span className="mr-2">💻</span> Source Code Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between py-6 border-t border-slate-800">
            {prevLesson ? (
              <Link 
                href={`/courses/${params.id}/lessons/${prevLesson.id}`}
                className="flex items-center px-4 py-2 text-slate-400 hover:text-white transition-colors group"
              >
                <ChevronLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left hidden sm:block">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Previous</div>
                  <div className="font-medium truncate max-w-[200px]">{prevLesson.title}</div>
                </div>
                <div className="sm:hidden font-medium">Previous</div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextLesson ? (
              <Link 
                href={`/courses/${params.id}/lessons/${nextLesson.id}`}
                className="flex items-center px-4 py-2 text-slate-400 hover:text-white transition-colors group text-right"
              >
                <div className="text-right hidden sm:block">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Next</div>
                  <div className="font-medium truncate max-w-[200px]">{nextLesson.title}</div>
                </div>
                <div className="sm:hidden font-medium">Next</div>
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link 
                href={`/courses/${params.id}`}
                className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Finish Course
              </Link>
            )}
          </div>
        </main>

        {/* Sidebar - Course Curriculum */}
        <aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-900/50 hidden lg:block overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Course Content</h3>
            
            <div className="space-y-6">
              {courseData.modules.map((module) => (
                <div key={module.id}>
                  <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
                    {module.title}
                  </h4>
                  <div className="space-y-1">
                    {module.lessons.map((lesson) => (
                      <Link 
                        key={lesson.id}
                        href={`/courses/${params.id}/lessons/${lesson.id}`}
                        className={`flex items-start p-3 rounded-lg transition-colors group ${
                          lesson.id === params.lessonId 
                            ? 'bg-blue-500/10 border border-blue-500/20' 
                            : 'hover:bg-slate-800 border border-transparent'
                        }`}
                      >
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <PlayCircle className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                            lesson.id === params.lessonId ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-400'
                          }`} />
                        )}
                        <div>
                          <p className={`text-sm font-medium leading-tight mb-1 ${
                            lesson.id === params.lessonId ? 'text-blue-400' : 'text-slate-300 group-hover:text-white'
                          }`}>
                            {lesson.title}
                          </p>
                          <p className="text-xs text-slate-500">{lesson.duration}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
