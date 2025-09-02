"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Lock, Users, FileText, Settings, Calendar, 
  MessageCircle, BarChart3, Edit, Trash2, Plus,
  Eye, TrendingUp, UserCheck, BookOpen
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const mockStats = {
    students: 180,
    teachers: 25,
    courses: 45,
    applications: 67
  };

  const mockRecentActivities = [
    { id: 1, action: "Nouvelle inscription", user: "Aminata TRAORE", time: "Il y a 2h" },
    { id: 2, action: "Article publié", user: "Direction", time: "Il y a 4h" },
    { id: 3, action: "Note ajoutée", user: "Prof. OUEDRAOGO", time: "Il y a 6h" },
    { id: 4, action: "Événement créé", user: "Secrétariat", time: "Il y a 1j" }
  ];

  const mockArticles = [
    { id: 1, title: "Nouvelle Filière en Agro-écologie", status: "Publié", date: "2025-01-15" },
    { id: 2, title: "Succès aux Examens 2024", status: "Publié", date: "2025-01-10" },
    { id: 3, title: "Projet Jardin Pédagogique", status: "Brouillon", date: "2025-01-08" }
  ];

  const LoginForm = () => (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle>Administration</CardTitle>
          <CardDescription>Accès sécurisé réservé aux administrateurs</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="admin-username">Nom d'utilisateur</Label>
              <Input id="admin-username" placeholder="admin" />
            </div>
            <div>
              <Label htmlFor="admin-password">Mot de passe</Label>
              <Input id="admin-password" type="password" placeholder="••••••••" />
            </div>
            <Button 
              type="button" 
              className="w-full"
              onClick={() => setIsAuthenticated(true)}
            >
              Se connecter
            </Button>
          </form>
          <div className="text-center mt-6 text-sm text-gray-500">
            <p>⚠️ Interface de démonstration uniquement</p>
            <p>Aucune donnée réelle n'est modifiée</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Interface d'Administration</h1>
            <p className="text-gray-600">Gestion du contenu et des données du lycée</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              🚨 Mode Démo
            </Badge>
            <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
              Se déconnecter
            </Button>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Élèves</p>
                  <p className="text-3xl font-bold text-gray-900">{mockStats.students}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-600">+12%</span>
                <span className="text-gray-600 ml-1">vs année dernière</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Professeurs</p>
                  <p className="text-3xl font-bold text-gray-900">{mockStats.teachers}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-600">+3</span>
                <span className="text-gray-600 ml-1">nouveaux</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Cours</p>
                  <p className="text-3xl font-bold text-gray-900">{mockStats.courses}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-600">+8</span>
                <span className="text-gray-600 ml-1">ce trimestre</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Candidatures</p>
                  <p className="text-3xl font-bold text-gray-900">{mockStats.applications}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-600">+23</span>
                <span className="text-gray-600 ml-1">ce mois</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interface principale */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="content">Contenu</TabsTrigger>
                  <TabsTrigger value="users">Utilisateurs</TabsTrigger>
                  <TabsTrigger value="stats">Statistiques</TabsTrigger>
                  <TabsTrigger value="settings">Paramètres</TabsTrigger>
                </TabsList>

                {/* Gestion du contenu */}
                <TabsContent value="content">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="flex items-center space-x-2">
                          <FileText className="h-5 w-5" />
                          <span>Articles & Actualités</span>
                        </CardTitle>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Nouveau
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockArticles.map((article) => (
                          <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <h4 className="font-medium">{article.title}</h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                                <span>{article.date}</span>
                                <Badge variant={article.status === 'Publié' ? 'default' : 'secondary'}>
                                  {article.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Gestion des utilisateurs */}
                <TabsContent value="users">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="h-5 w-5" />
                        <span>Gestion des Utilisateurs</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>DR</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Dr. Marie OUEDRAOGO</p>
                              <p className="text-sm text-gray-500">Professeur</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Badge>Actif</Badge>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>AT</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Aminata TRAORE</p>
                              <p className="text-sm text-gray-500">Élève - 3ème Année</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Badge>Actif</Badge>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <Button className="w-full">
                          <Plus className="h-4 w-4 mr-2" />
                          Ajouter un utilisateur
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Statistiques détaillées */}
                <TabsContent value="stats">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart3 className="h-5 w-5" />
                        <span>Statistiques Détaillées</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-3">Inscriptions par mois</h4>
                          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Graphique des inscriptions (mock)</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">Répartition par filière</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Production Végétale</span>
                              <span className="text-sm font-medium">45%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Élevage</span>
                              <span className="text-sm font-medium">30%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm">Transformation</span>
                              <span className="text-sm font-medium">25%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Paramètres */}
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Settings className="h-5 w-5" />
                        <span>Paramètres du Site</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div>
                          <Label htmlFor="site-title">Titre du site</Label>
                          <Input id="site-title" defaultValue="LPA Sainte Anne - Nanoro" />
                        </div>
                        <div>
                          <Label htmlFor="site-description">Description</Label>
                          <Textarea 
                            id="site-description" 
                            defaultValue="Formation d'excellence en agriculture moderne au Burkina Faso"
                            rows={3}
                          />
                        </div>
                        <div>
                          <Label htmlFor="contact-email">Email de contact</Label>
                          <Input id="contact-email" defaultValue="contact@lpa-nanoro.bf" />
                        </div>
                        <Button type="button">
                          Sauvegarder les modifications
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Activités récentes */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Activités Récentes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockRecentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.user}</p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Actions Rapides</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Publier un article
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Ajouter un événement
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Envoyer une notification
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Gérer les utilisateurs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}