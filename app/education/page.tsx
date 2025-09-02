"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Clock, User, Download, Calendar } from 'lucide-react';
import { mockCourses } from '@/lib/mock-data';

const filières = [
  {
    id: 'production',
    name: 'Production Végétale',
    description: 'Formation spécialisée en techniques de production agricole moderne',
    duration: '3 ans',
    level: 'Bac Pro',
    modules: [
      'Agronomie générale',
      'Production céréalière',
      'Maraîchage',
      'Arboriculture',
      'Gestion des sols',
      'Protection phytosanitaire'
    ]
  },
  {
    id: 'elevage',
    name: 'Élevage et Zootechnie',
    description: 'Maîtrise des techniques d\'élevage et de gestion des troupeaux',
    duration: '3 ans',
    level: 'Bac Pro',
    modules: [
      'Zootechnie générale',
      'Alimentation animale',
      'Reproduction',
      'Santé animale',
      'Gestion de troupeau',
      'Production laitière'
    ]
  },
  {
    id: 'transformation',
    name: 'Transformation Agroalimentaire',
    description: 'Techniques de transformation et valorisation des produits agricoles',
    duration: '3 ans',
    level: 'Bac Pro',
    modules: [
      'Technologie alimentaire',
      'Conservation des aliments',
      'Hygiène et sécurité',
      'Conditionnement',
      'Qualité produits',
      'Marketing agricole'
    ]
  },
  {
    id: 'agroecologie',
    name: 'Agro-écologie',
    description: 'Agriculture durable et respectueuse de l\'environnement',
    duration: '3 ans',
    level: 'Bac Pro',
    modules: [
      'Écosystèmes agricoles',
      'Agriculture biologique',
      'Permaculture',
      'Biodiversité',
      'Gestion de l\'eau',
      'Énergies renouvelables'
    ]
  }
];

const planning = [
  { day: 'Lundi', morning: 'Agronomie Générale', afternoon: 'TP Laboratoire' },
  { day: 'Mardi', morning: 'Zootechnie', afternoon: 'Travaux Pratiques Élevage' },
  { day: 'Mercredi', morning: 'Transformation', afternoon: 'Atelier Pratique' },
  { day: 'Jeudi', morning: 'Sciences Générales', afternoon: 'Projet Personnel' },
  { day: 'Vendredi', morning: 'Stage en Exploitation', afternoon: 'Stage en Exploitation' }
];

export default function EducationPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Espace Pédagogique</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes de formation, supports de cours et planning des activités pédagogiques.
          </p>
        </motion.div>

        <Tabs defaultValue="filieres" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="filieres">Nos Filières</TabsTrigger>
            <TabsTrigger value="cours">Supports de Cours</TabsTrigger>
            <TabsTrigger value="planning">Planning</TabsTrigger>
            <TabsTrigger value="examens">Examens</TabsTrigger>
          </TabsList>

          {/* Filières */}
          <TabsContent value="filieres">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filières.map((filiere, index) => (
                <motion.div
                  key={filiere.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <CardTitle className="text-xl">{filiere.name}</CardTitle>
                        <Badge>{filiere.level}</Badge>
                      </div>
                      <CardDescription>{filiere.description}</CardDescription>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {filiere.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Modules d'enseignement :</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {filiere.modules.map((module, idx) => (
                          <div key={idx} className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded">
                            {module}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Supports de Cours */}
          <TabsContent value="cours">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {mockCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {course.teacher}
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {course.level}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {course.duration}
                            </div>
                          </div>
                          <p className="text-gray-600">{course.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6 flex space-x-2">
                          <Button variant="outline" size="sm" disabled>
                            <Download className="h-4 w-4 mr-2" />
                            PDF (Bientôt)
                          </Button>
                          <Button variant="outline" size="sm" disabled>
                            Vidéo (Bientôt)
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Planning */}
          <TabsContent value="planning">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Planning Hebdomadaire Type</CardTitle>
                  <CardDescription>
                    Emploi du temps pour les classes de 2ème année
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4 font-semibold">Jour</th>
                          <th className="text-left p-4 font-semibold">Matin (8h-12h)</th>
                          <th className="text-left p-4 font-semibold">Après-midi (14h-17h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {planning.map((day, index) => (
                          <motion.tr
                            key={day.day}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="border-b hover:bg-gray-50"
                          >
                            <td className="p-4 font-medium">{day.day}</td>
                            <td className="p-4 text-gray-600">{day.morning}</td>
                            <td className="p-4 text-gray-600">{day.afternoon}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Examens */}
          <TabsContent value="examens">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Examens Trimestriels
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900">1er Trimestre</h4>
                    <p className="text-blue-700">15-19 Décembre 2024</p>
                    <Badge variant="outline" className="mt-2">Terminé</Badge>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-900">2ème Trimestre</h4>
                    <p className="text-yellow-700">1-5 Mars 2025</p>
                    <Badge className="mt-2 bg-yellow-500">À venir</Badge>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">3ème Trimestre</h4>
                    <p className="text-gray-700">15-19 Mai 2025</p>
                    <Badge variant="outline" className="mt-2">Planifié</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Baccalauréat Professionnel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900">Épreuves Écrites</h4>
                    <p className="text-green-700">10-14 Juin 2025</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Français, Mathématiques, Sciences, Spécialités
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900">Épreuves Pratiques</h4>
                    <p className="text-green-700">17-21 Juin 2025</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Travaux pratiques, Soutenance de projet
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900">Résultats</h4>
                    <p className="text-blue-700">2 Juillet 2025</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}