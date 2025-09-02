"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Tag, Eye } from 'lucide-react';
import Link from 'next/link';

const allNews = [
  {
    id: 1,
    title: "Nouvelle Filière en Agro-écologie",
    excerpt: "Le lycée lance une nouvelle filière spécialisée en agriculture durable et pratiques écologiques pour répondre aux enjeux environnementaux actuels.",
    content: "Cette nouvelle filière, qui accueillera sa première promotion en septembre 2025, vise à former des professionnels capables de développer des systèmes agricoles durables...",
    date: "2025-01-15",
    image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Formation",
    author: "Direction Pédagogique",
    views: 245,
    featured: true
  },
  {
    id: 2,
    title: "Succès aux Examens 2024",
    excerpt: "Excellents résultats avec 95% de réussite au Baccalauréat Professionnel Agricole, plaçant notre établissement en tête des lycées agricoles de la région.",
    content: "Les résultats du Baccalauréat Professionnel Agricole session 2024 sont tombés et ils sont exceptionnels. Avec un taux de réussite de 95%...",
    date: "2025-01-10",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Résultats",
    author: "Secrétariat",
    views: 189,
    featured: true
  },
  {
    id: 3,
    title: "Partenariat avec Coopératives Locales",
    excerpt: "Signature d'accords pour stages et formation pratique avec les coopératives agricoles de la région, renforçant l'insertion professionnelle de nos élèves.",
    content: "Dans le cadre du renforcement de la formation pratique de nos élèves, le lycée a signé plusieurs accords de partenariat...",
    date: "2025-01-08",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Partenariat",
    author: "Direction",
    views: 156,
    featured: false
  },
  {
    id: 4,
    title: "Inauguration du Nouveau Laboratoire",
    excerpt: "Mise en service d'un laboratoire moderne d'analyse des sols et des produits agricoles, équipé des dernières technologies.",
    content: "Le nouveau laboratoire d'analyses, d'une superficie de 200m², a été inauguré en présence des autorités locales...",
    date: "2025-01-05",
    image: "https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Infrastructure",
    author: "Direction",
    views: 203,
    featured: false
  },
  {
    id: 5,
    title: "Projet Jardin Pédagogique",
    excerpt: "Lancement d'un projet de jardin pédagogique pour sensibiliser les élèves aux techniques de permaculture et d'agriculture biologique.",
    content: "Ce projet innovant permettra aux élèves de toutes les filières de s'initier aux techniques de permaculture...",
    date: "2025-01-03",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Projet",
    author: "Équipe Pédagogique",
    views: 134,
    featured: false
  },
  {
    id: 6,
    title: "Visite d'Échange avec le Mali",
    excerpt: "Une délégation d'élèves et professeurs maliens en visite d'échange pour partager les expériences agricoles entre nos deux pays.",
    content: "Dans le cadre des échanges sous-régionaux, nous avons accueilli une délégation du Lycée Agricole de Sikasso...",
    date: "2024-12-28",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Échange",
    author: "Relations Internationales",
    views: 98,
    featured: false
  }
];

const categories = ["Toutes", "Formation", "Résultats", "Partenariat", "Infrastructure", "Projet", "Échange"];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredNews = allNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Toutes" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const featuredNews = allNews.filter(article => article.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Actualités & Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez toute l'actualité de notre établissement, nos réussites et nos projets innovants.
          </p>
        </motion.div>

        {/* Articles à la Une */}
        {featuredNews.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">À la Une</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.slice(0, 2).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600">{article.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">À la Une</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl line-clamp-2 group-hover:text-green-600 transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString('fr-FR')}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {article.views} vues
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
                      <Button className="w-full">
                        Lire l'article complet
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Filtres et Recherche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <Tag className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-sm text-gray-600 flex items-center">
                  {filteredNews.length} article{filteredNews.length > 1 ? 's' : ''} trouvé{filteredNews.length > 1 ? 's' : ''}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Liste des Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {currentNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {article.views}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
                  <div className="mt-auto">
                    <p className="text-xs text-gray-500 mb-3">Par {article.author}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Lire plus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-2"
          >
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Précédent
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="w-10"
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Suivant
            </Button>
          </motion.div>
        )}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-green-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Restez Informé de Nos Actualités
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles 
                et informations importantes directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1"
                />
                <Button>
                  S'abonner
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Pas de spam, uniquement les informations importantes de l'établissement.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}