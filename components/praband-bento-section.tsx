"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { scrollReveal, scrollRevealStagger, staggerContainer, slideUp } from "@/lib/animations";
import {
  Check,
  MoreHorizontal,
  Bell,
  ChevronDown,
  Sparkles,
  BookOpen,
  GraduationCap,
  Users,
  Calendar,
  FileText,
  ClipboardCheck,
  Brain,
  FolderOpen,
  BarChart,
  Zap,
  Move,
} from "lucide-react";

interface NodePosition {
  x: number;
  y: number;
}

interface DraggableNodes {
  root: NodePosition;
  mcq: NodePosition;
  subjective: NodePosition;
  easy: NodePosition;
  hard: NodePosition;
}

export default function ProductivitySection() {
  const [nodePositions, setNodePositions] = useState<DraggableNodes>({
    root: { x: 0, y: 20 },
    mcq: { x: 280, y: 10 },
    subjective: { x: 280, y: 130 },
    easy: { x: 560, y: 10 },
    hard: { x: 560, y: 130 },
  });

  const [draggedNode, setDraggedNode] = useState<keyof DraggableNodes | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (node: keyof DraggableNodes, e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.closest('.flowchart-container')?.getBoundingClientRect();
    
    if (parentRect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setDraggedNode(node);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedNode) {
      const parentRect = e.currentTarget.getBoundingClientRect();
      const newX = e.clientX - parentRect.left - dragOffset.x;
      const newY = e.clientY - parentRect.top - dragOffset.y;

      setNodePositions(prev => ({
        ...prev,
        [draggedNode]: { x: Math.max(0, Math.min(newX, 700)), y: Math.max(0, Math.min(newY, 200)) }
      }));
    }
  };

  const handleMouseUp = () => {
    setDraggedNode(null);
  };

  return (
    <section id="features" className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans text-slate-900 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          {...scrollReveal}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Zap className="w-4 h-4 text-slate-600" fill="currentColor" fillOpacity={0.2} />
            <span className="text-sm font-medium text-slate-700">Education Management Features</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything Your Institution
            <br />
            Needs in One Place
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-500 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From tuition teachers to large colleges, Praband adapts to your institution&apos;s
            unique needs with 11 powerful modules working seamlessly together.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          
          {/* LEFT COLUMN - Tall Card */}
          <motion.div 
            className="lg:row-span-2 bg-gray-50 rounded-3xl p-6 lg:p-8 border border-gray-100 flex flex-col"
            variants={slideUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Manage courses effortlessly.</h3>
              <p className="text-slate-500 text-sm">
                Track courses, students, exams, and assignments in one unified dashboard.
              </p>
            </div>

            {/* Mock Table UI */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-1 flex flex-col">
              {/* Group: Active Courses */}
              <div className="p-3 border-b border-gray-50">
                <div className="flex justify-between items-center mb-3 px-1">
                  <span className="text-xs font-bold text-slate-800">Active Courses</span>
                  <span className="text-[10px] text-slate-400 font-medium">Students ↕</span>
                </div>
                <div className="space-y-1">
                  <TaskRow checked text="Mathematics Grade 10" badge="45 Students" badgeColor="bg-[#00a7e1]/20 text-[#00a7e1]" />
                  <TaskRow text="Physics Advanced" badge="32 Students" badgeColor="bg-purple-100 text-purple-600" />
                  <TaskRow text="Chemistry Basics" badge="28 Students" badgeColor="bg-green-100 text-green-600" />
                </div>
              </div>

              {/* Group: Upcoming Exams */}
              <div className="p-3 border-b border-gray-50">
                <div className="flex justify-between items-center mb-3 px-1">
                  <span className="text-xs font-bold text-slate-800">Upcoming Exams</span>
                  <span className="text-[10px] text-slate-400 font-medium">Date ↕</span>
                </div>
                <div className="space-y-1">
                  <TaskRow text="Math Final Exam" avatar="https://i.pravatar.cc/150?u=1" name="Prof. Singh" />
                  <TaskRow checked text="Physics Mid-term" avatar="https://i.pravatar.cc/150?u=2" name="Dr. Sharma" />
                  <TaskRow checked text="Chemistry Quiz" avatar="https://i.pravatar.cc/150?u=3" name="Ms. Patel" />
                </div>
              </div>

              {/* Group: Assignments */}
              <div className="p-3">
                <div className="flex justify-between items-center mb-3 px-1">
                  <span className="text-xs font-bold text-slate-800">Assignments</span>
                  <span className="text-[10px] text-slate-400 font-medium">Progress ↕</span>
                </div>
                <div className="space-y-1">
                  <TaskRow text="Algebra Problem Set" progress={75} />
                  <TaskRow checked text="Lab Report - Motion" progress={100} />
                  <TaskRow text="Periodic Table Study" progress={40} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* MIDDLE TOP - Real-time Collaboration */}
          <motion.div 
            className="bg-gray-50 rounded-3xl p-6 border border-gray-100 relative overflow-hidden flex flex-col"
            variants={slideUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="mb-6 relative z-10">
              <h3 className="text-xl font-bold mb-2">Real-time notifications.</h3>
              <p className="text-slate-500 text-sm">
                Stay updated with student enrollments, exam alerts, and class reminders.
              </p>
            </div>
            
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 opacity-[0.4]" 
                 style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

            {/* Mock UI Element */}
            <div className="relative z-10 mt-auto flex flex-col gap-3">
              {/* Notification Toast */}
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Bell size={14} />
                </div>
                <div className="flex-1 text-xs">
                  <span className="font-bold text-slate-800">Priya Sharma</span> <span className="text-slate-500">enrolled in Physics Grade 11</span>
                </div>
                <MoreHorizontal size={14} className="text-slate-400" />
              </div>

              {/* Enrollment Card */}
              <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-2 border-b border-gray-50 pb-2">
                  <span className="text-xs font-semibold text-slate-800">Mathematics Grade 10</span>
                  <ChevronDown size={12} className="text-slate-400" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-1 px-1">
                   <span>Student Name</span>
                   <div className="flex gap-8">
                     <span>Teacher</span>
                     <span>Batch</span>
                   </div>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-lg p-2">
                   <span className="text-xs font-medium text-slate-700">Rahul Kumar</span>
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1">
                        <img src="https://i.pravatar.cc/150?u=4" alt="Prof. Singh" className="w-4 h-4 rounded-full" />
                        <span className="text-[10px] text-slate-600">Prof. Singh</span>
                      </div>
                      <div className="flex items-center gap-1 relative">
                        <span className="text-[10px] font-medium text-slate-600 px-2 py-0.5 bg-[#00a7e1]/20 text-[#00a7e1] rounded-full">Morning</span>
                        {/* Cursor Overlay */}
                        <div className="absolute -bottom-4 -right-2 flex flex-col items-center z-20">
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="#3b82f6" className="transform -rotate-12 translate-y-1">
                             <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="white" strokeWidth="2"/>
                           </svg>
                           <div className="bg-[#00a7e1] text-white text-[9px] px-1.5 py-0.5 rounded-full whitespace-nowrap">
                             Admin
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT TOP - Student Progress Tracking */}
          <motion.div 
            className="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col"
            variants={slideUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
             <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Track student performance.</h3>
              <p className="text-slate-500 text-sm">
                Monitor progress, grades, and attendance in real-time.
              </p>
            </div>
            
             {/* Mock Student Card */}
             <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col justify-center relative">
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-2">
                      <img src="https://i.pravatar.cc/150?u=1" className="w-8 h-8 rounded-full" />
                      <div>
                        <div className="text-xs font-bold text-slate-800">Ananya Verma</div>
                        <div className="text-[10px] text-slate-400">Grade 10 - Science</div>
                      </div>
                   </div>
                   <MoreHorizontal size={14} className="text-slate-300" />
                </div>
                
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-bold text-slate-800">Mathematics Assignment</h4>
                  <span className="px-1.5 py-0.5 rounded-full bg-green-100 text-green-600 text-[9px] font-bold">● Excellent</span>
                </div>
                
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-4">
                   <span>📊 Score</span>
                   <span className="text-slate-600 font-medium">92/100</span>
                   <div className="flex-1 h-1.5 bg-gray-100 rounded-full ml-2 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full bg-green-500 w-[92%] rounded-full"></div>
                   </div>
                   <span>92%</span>
                </div>

                <button className="w-full bg-slate-800 text-white text-xs font-medium py-2 rounded-lg hover:bg-slate-700 transition-colors">
                  View Details
                </button>

                 {/* Faded bottom cards for stack effect */}
                 <div className="absolute -bottom-2 left-4 right-4 h-4 bg-white border border-gray-200 rounded-b-xl -z-10 shadow-sm"></div>
                 <div className="absolute -bottom-4 left-8 right-8 h-4 bg-white border border-gray-200 rounded-b-xl -z-20 shadow-sm"></div>
             </div>
          </motion.div>

          {/* BOTTOM WIDE - AI-Powered Course Management */}
          <motion.div 
            className="lg:col-span-2 bg-gray-50 rounded-3xl p-6 lg:p-8 border border-gray-100 relative overflow-hidden"
            variants={slideUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
             {/* Grid Background */}
             <div className="absolute inset-0 opacity-[0.3]" 
                 style={{ 
                   backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`, 
                   backgroundSize: '40px 40px' 
                 }}>
             </div>

             <div className="relative z-10 mb-8">
              <h3 className="text-xl font-bold mb-2">AI-Powered Question Generation</h3>
              <p className="text-slate-500 text-sm">
                Let AI generate custom exam questions based on subject, topic, and difficulty level.
              </p>
            </div>

            {/* Flowchart Container */}
            <div 
              className="flowchart-container relative z-10 h-[240px] w-full flex items-center pl-4 cursor-default"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
               {/* Connections (SVG Lines) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {/* Root to MCQ */}
                  <path 
                    d={`M${nodePositions.root.x + 140} ${nodePositions.root.y + 73} C ${nodePositions.root.x + 180} ${nodePositions.root.y + 73}, ${nodePositions.mcq.x - 20} ${nodePositions.mcq.y + 30}, ${nodePositions.mcq.x} ${nodePositions.mcq.y + 30}`} 
                    fill="none" 
                    stroke="#cbd5e1" 
                    strokeWidth="1.5" 
                  />
                  {/* Root to Subjective */}
                  <path 
                    d={`M${nodePositions.root.x + 140} ${nodePositions.root.y + 73} C ${nodePositions.root.x + 180} ${nodePositions.root.y + 73}, ${nodePositions.subjective.x - 20} ${nodePositions.subjective.y + 30}, ${nodePositions.subjective.x} ${nodePositions.subjective.y + 30}`} 
                    fill="none" 
                    stroke="#cbd5e1" 
                    strokeWidth="1.5" 
                  />
                  
                  {/* MCQ to Easy */}
                  <path 
                    d={`M${nodePositions.mcq.x + 192} ${nodePositions.mcq.y + 30} C ${nodePositions.mcq.x + 232} ${nodePositions.mcq.y + 30}, ${nodePositions.easy.x - 20} ${nodePositions.easy.y + 30}, ${nodePositions.easy.x} ${nodePositions.easy.y + 30}`} 
                    fill="none" 
                    stroke="#cbd5e1" 
                    strokeWidth="1.5" 
                  />
                  
                  {/* Subjective to Hard */}
                  <path 
                    d={`M${nodePositions.subjective.x + 192} ${nodePositions.subjective.y + 30} C ${nodePositions.subjective.x + 232} ${nodePositions.subjective.y + 30}, ${nodePositions.hard.x - 20} ${nodePositions.hard.y + 30}, ${nodePositions.hard.x} ${nodePositions.hard.y + 30}`} 
                    fill="none" 
                    stroke="#cbd5e1" 
                    strokeWidth="1.5" 
                  />
               </svg>

               {/* Root Node */}
               <div 
                 className="absolute cursor-move hover:scale-105 transition-all"
                 style={{ left: `${nodePositions.root.x}px`, top: `${nodePositions.root.y}px` }}
                 onMouseDown={(e) => handleMouseDown('root', e)}
               >
                   <div className="bg-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-shadow">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                        <Move className="w-3 h-3 text-gray-400" />
                        <div className="w-2 h-2 bg-[#00a7e1] rounded-sm"></div>
                        <span className="text-xs font-bold text-slate-800">Mathematics Exam</span>
                      </div>
                      
                      <div className="text-[10px] text-slate-400 mb-3">
                        📚 Subject <span className="text-slate-600 font-medium">Algebra</span>
                      </div>
                      
                      <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                          <img src="https://i.pravatar.cc/150?u=5" className="w-6 h-6 rounded-full border border-white" alt="Prof. Singh" />
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold leading-none">Prof. Singh</span>
                            <span className="text-[8px] text-slate-400 leading-none">Math Teacher</span>
                          </div>
                      </div>
                   </div>
               </div>

               {/* Level 1 Nodes */}
               <div 
                 className="absolute cursor-move hover:scale-105 transition-transform"
                 style={{ left: `${nodePositions.mcq.x}px`, top: `${nodePositions.mcq.y}px` }}
                 onMouseDown={(e) => handleMouseDown('mcq', e)}
               >
                  <DraggableAINode 
                    icon={<ClipboardCheck size={12} className="text-purple-500" />}
                    title="MCQ Questions (20)"
                    suggestion="Generated"
                    color="bg-purple-50 text-purple-600"
                  />
               </div>

               <div 
                 className="absolute cursor-move hover:scale-105 transition-transform"
                 style={{ left: `${nodePositions.subjective.x}px`, top: `${nodePositions.subjective.y}px` }}
                 onMouseDown={(e) => handleMouseDown('subjective', e)}
               >
                  <DraggableAINode 
                    icon={<FileText size={12} className="text-rose-500" />}
                    title="Subjective Questions (5)"
                    suggestion="Generated"
                    color="bg-rose-50 text-rose-600"
                  />
               </div>

               {/* Level 2 Nodes */}
               <div 
                 className="absolute cursor-move hover:scale-105 transition-transform"
                 style={{ left: `${nodePositions.easy.x}px`, top: `${nodePositions.easy.y}px` }}
                 onMouseDown={(e) => handleMouseDown('easy', e)}
               >
                  <DraggableAINode 
                    icon={<Brain size={12} className="text-orange-500" />}
                    title="Easy Level - 10 Questions"
                    suggestion="AI Curated"
                    color="bg-orange-50 text-orange-600"
                  />
               </div>

               <div 
                 className="absolute cursor-move hover:scale-105 transition-transform"
                 style={{ left: `${nodePositions.hard.x}px`, top: `${nodePositions.hard.y}px` }}
                 onMouseDown={(e) => handleMouseDown('hard', e)}
               >
                  <DraggableAINode 
                    icon={<GraduationCap size={12} className="text-emerald-500" />}
                    title="Hard Level - 3 Questions"
                    suggestion="AI Curated"
                    color="bg-emerald-50 text-emerald-600"
                  />
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Helper Components ---

function TaskRow({ 
  checked = false, 
  text, 
  badge, 
  badgeColor, 
  avatar, 
  name, 
  progress 
}: { 
  checked?: boolean; 
  text: string; 
  badge?: string; 
  badgeColor?: string; 
  avatar?: string;
  name?: string;
  progress?: number;
}) {
  return (
    <motion.div 
      className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg group transition-colors cursor-default"
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center gap-3">
        <div className={`w-4 h-4 rounded border flex items-center justify-center ${checked ? 'bg-[#00a7e1] border-[#00a7e1]' : 'bg-gray-100 border-gray-200'}`}>
          {checked && <Check size={10} className="text-white" />}
        </div>
        <span className="text-xs font-medium text-slate-700">{text}</span>
      </div>
      
      {badge && (
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${badgeColor}`}>
          <span className="mr-1">●</span>{badge}
        </span>
      )}

      {name && avatar && (
        <div className="flex items-center gap-2">
            <img src={avatar} alt={name} className="w-4 h-4 rounded-full" />
            <span className="text-[10px] text-slate-500">{name}</span>
        </div>
      )}

      {progress !== undefined && (
        <div className="flex items-center gap-2 w-20">
           <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
               <div className="h-full bg-green-500 rounded-full" style={{ width: `${progress}%`}}></div>
           </div>
           <span className="text-[9px] text-slate-500">{progress}%</span>
        </div>
      )}
    </motion.div>
  );
}

function AINode({ icon, title, suggestion, color }: { icon: React.ReactNode, title: string, suggestion: string, color: string }) {
    return (
        <div className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 w-48">
            <div className="flex items-center gap-2 mb-2">
                <div className={`p-1 rounded-md ${color.split(' ')[0]}`}>
                    {icon}
                </div>
                <span className="text-[10px] font-bold text-slate-800">{title}</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <Sparkles size={10} className="text-purple-500" />
                <span className="text-[9px] text-slate-500">
                    <span className={`font-bold px-1 py-0.5 rounded ${color}`}>{suggestion}</span> by AI based on curriculum.
                </span>
            </div>
        </div>
    )
}

function DraggableAINode({ icon, title, suggestion, color }: { icon: React.ReactNode, title: string, suggestion: string, color: string }) {
    return (
        <motion.div 
          className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 w-48 hover:shadow-md transition-shadow"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
            <div className="flex items-center gap-2 mb-2">
                <Move className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <div className={`p-1 rounded-md ${color.split(' ')[0]}`}>
                    {icon}
                </div>
                <span className="text-[10px] font-bold text-slate-800">{title}</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
                <Sparkles size={10} className="text-purple-500" />
                <span className="text-[9px] text-slate-500">
                    <span className={`font-bold px-1 py-0.5 rounded ${color}`}>{suggestion}</span> by AI based on curriculum.
                </span>
            </div>
        </motion.div>
    )
}