import Link from "next/link";
import { Home, BookOpen, User, Settings } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background h-screen flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold tracking-tight text-primary">Superteam Academy</h2>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
          <Home className="w-5 h-5" />
          Dashboard
        </Link>
        <Link href="/courses" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
          <BookOpen className="w-5 h-5" />
          Courses
        </Link>
        <Link href="/profile" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
          <User className="w-5 h-5" />
          Profile
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </nav>
      <div className="p-4 border-t">
        <p className="text-xs text-muted-foreground text-center">&copy; 2026 Superteam Brazil</p>
      </div>
    </aside>
  );
}
