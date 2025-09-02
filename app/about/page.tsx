"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, BookOpen, Target, Heart, Lightbulb } from 'lucide-react';
import { mockTeachers } from '@/lib/mock-data';

export default function AboutPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">À Propos du Lycée</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'histoire, la mission et l'équipe pédagogique qui font du LPA Sainte Anne 
            un établissement d'excellence en formation agricole.
          </p>
        </motion.div>

        {/* Histoire */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Notre Histoire</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p>
                Fondé en 2009, le Lycée Professionnel Agricole Sainte Anne de Nanoro s'est rapidement imposé 
                comme un établissement de référence dans la formation agricole au Burkina Faso. Situé dans la 
                province du Boulkiemdé, notre lycée bénéficie d'un environnement rural authentique, idéal pour 
                l'apprentissage des techniques agricoles modernes.
              </p>
              <p>
                Avec plus de 15 années d'expérience, nous avons formé plus de 500 jeunes qui contribuent 
                aujourd'hui au développement agricole du pays. Notre approche pédagogique allie théorie et 
                pratique, permettant aux étudiants d'acquérir des compétences solides et directement 
                applicables sur le terrain.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Mission et Valeurs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Mission & Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Notre Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Former des professionnels compétents en agriculture moderne, capables de contribuer 
                  au développement durable du secteur agricole burkinabè.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Nos Valeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Excellence académique, respect de l'environnement, solidarité, innovation et 
                  engagement au service de la communauté agricole.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Notre Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Être le centre de référence en formation agricole au Burkina Faso et rayonner 
                  sur toute la sous-région ouest-africaine.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Équipe Pédagogique */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe Pédagogique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle>{teacher.name}</CardTitle>
                    <CardDescription>{teacher.subject}</CardDescription>
                    <Badge variant="secondary" className="mx-auto w-fit">
                      {teacher.experience}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{teacher.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Chiffres Clés */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-green-50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Nos Résultats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Diplômés</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Taux de Réussite</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25</div>
              <div className="text-gray-600">Professeurs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">180</div>
              <div className="text-gray-600">Élèves Actuels</div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}