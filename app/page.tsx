'use client';

import { useState, useEffect } from 'react';

import Loading from '@/components/Loading/Loading';

import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Projects } from "@/components/Projects/Projects";
import { Skills } from "@/components/Skills/Skills";
import { EducationLanguages } from "@/components/EducationAndLanguages/EducationAndLanguages";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Loading isLoading={loading} />
      <Navbar />
      <main className="wrap">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationLanguages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
