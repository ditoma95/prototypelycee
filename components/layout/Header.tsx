"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, GraduationCap } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Présentation', href: '/about' },
  { name: 'Pédagogie', href: '/education' },
  { name: 'Inscriptions', href: '/registration' },
  { name: 'Élèves/Parents', href: '/students' },
  { name: 'Calendrier', href: '/calendar' },
  { name: 'Actualités', href: '/news' },
  { name: 'Galerie', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="p-2 bg-green-600 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">Complexe</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/admin"
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-base font-medium transition-colors border-t pt-4 mt-4"
                  >
                    Administration
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}