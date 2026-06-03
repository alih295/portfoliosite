import React, { createContext, useContext } from 'react';

const AppContext = createContext(null);

const projects = [

     {
        title: "Digital Attendance System",
        description:
            "QR-based Attendance System featuring Admin, Teacher, and Student portals. It tracks real-time, secure, and contactless attendance via QR scans.",
        image: "/projectImg/admin.png",
        tags: ["Attendance", "QR", "Admin"],
        tech: ["React", "Firebase", "QR"],
        code: "https://github.com/alih295/digital-attendance-system",
        demo: "https://digital-attendance-system-nine.vercel.app/",
    },
    {
        title: "Grocery Store",
        description:
            "Smart online grocery store for fresh daily essentials delivered fast.",
        image: "/projectImg/grocery-store.png",
        tags: ["E-commerce", "Retail", "UI"],
        tech: ["React", "JavaScript", "CSS"],
        code: 'https://github.com/alih295/FYP',
        demo: 'https://fyp-peach-eight.vercel.app/'
    },
    {
        title: "Ngrok UI Clone",
        description:
            "Pixel-perfect frontend clone of the official ngrok website UI.",
        image: "/projectImg/Ngrok.png",
        tags: ["Clone", "Frontend", "Design"],
        tech: ["React", "HTML", "CSS"],
        code: 'https://github.com/alih295/ngrok-ui-clone',
        demo: 'https://ngrok-ui-clone.vercel.app/'
    },
    {
        title: "Food Review Platform",
        description:
            "A full-stack solution for discovering food videos in a modern social feed. Users can like, save, and explore restaurant recommendations with a polished interface.",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        tags: ["Web App", "MERN", "UX"],
        tech: ["React", "Node", "Express", "MongoDB"],
        code: "https://github.com/alih295/food-review",
    },
    {
        title: "Employee Management System",
        description:
            "A React-powered dashboard that supports employee CRUD workflows, team organization, and smooth local data persistence for quick admin updates.",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        tags: ["Admin", "Dashboard", "MERN"],
        tech: ["React", "LocalStorage", "Tailwind"],
        code: "https://github.com/alih295/employee-management-system",
    },
    {
        title: "Notes CRUD App",
        description:
            "A clean note-taking experience built with React. It supports creating, editing, and deleting notes with a layout designed for fast use and readability.",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        tags: ["Productivity", "React", "UI"],
        tech: ["React", "JavaScript", "CSS"],
        code: "https://github.com/alih295/notes-crud-app",
    },
   
];

export function AppProvider({ children }) {
    return (
        <AppContext.Provider value={{ projects }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
}

export default AppContext;
