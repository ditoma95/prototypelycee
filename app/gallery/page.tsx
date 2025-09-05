"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play, X, Image as ImageIcon, Video } from 'lucide-react';
import { mockGallery } from '@/lib/mock-data';

const additionalPhotos = [
  {
    id: 5,
    type: "image",
    url: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Salle de Classe Moderne",
    category: "Infrastructure"
  },
  {
    id: 6,
    type: "image", 
    url: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Formation Pratique",
    category: "Formation"
  },
  {
    id: 7,
    type: "image",
    url: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Atelier de Transformation",
    category: "Formation"
  },
  {
    id: 8,
    type: "image",
    url: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Cultures Expérimentales",
    category: "Formation"
  },
  {
    id: 9,
    type: "image",
    url:https://drive.google.com/file/d/1sKUHNpI3g93laOO7rswScmSWATtvt8v6/view?usp=sharing ,
    title: "Équipe Pédagogique",
    category: "Équipe"
  },
  {
    id: 10,
    type: "image",
    url: "https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Laboratoire de Recherche",
    category: "Équipements"
  }
];

const allMedia = [...mockGallery, ...additionalPhotos];

const videos = [
  {
    id: 1,
    title: "Présentation du Lycée",
    thumbnail: https://drive.google.com/file/d/14GNnsUrQcQU-fFbh549v7usJT1nJxeoK/view?usp=sharing,
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:45",
    category: "Présentation"
  },
  {
    id: 2,
    title: "Techniques d'Agriculture Moderne",
    thumbnail: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:12",
    category: "Formation"
  },
  {
    id: 3,
    title: "Témoignages d'Anciens Élèves",
    thumbnail: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:30",
    category: "Témoignages"
  },
  {
    id: 4,
    title: "Journée Portes Ouvertes 2024",
    thumbnail: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:15",
    category: "Événements"
  }
];

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const images = allMedia.filter(item => item.type === "image");
  const categories = ["all", ...Array.from(new Set(images.map(item => item.category)))];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(item => item.category === selectedCategory);

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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Galerie Photos & Vidéos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la vie de notre établissement à travers notre collection de photos et vidéos.
          </p>
        </motion.div>

        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="photos" className="flex items-center space-x-2">
              <ImageIcon className="h-4 w-4" />
              <span>Photos</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center space-x-2">
              <Video className="h-4 w-4" />
              <span>Vidéos</span>
            </TabsTrigger>
          </TabsList>

          {/* Photos */}
          <TabsContent value="photos">
            {/* Filtres par catégorie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-8 justify-center"
            >
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === "all" ? "Toutes" : category}
                </Button>
              ))}
            </motion.div>

            {/* Grille de photos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMedia(item)}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ImageIcon className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-green-600">{item.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Vidéos */}
          <TabsContent value="videos">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                    <div 
                      className="relative aspect-video overflow-hidden"
                      onClick={() => setSelectedMedia(video)}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-green-600">{video.category}</Badge>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="secondary">{video.duration}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium line-clamp-2">{video.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Modal pour affichage plein écran */}
        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
            {selectedMedia && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
                
                {selectedMedia.type === "image" ? (
                  <div className="relative">
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{selectedMedia.title}</h3>
                      <Badge>{selectedMedia.category}</Badge>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="aspect-video">
                      <iframe
                        src={selectedMedia.url}
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{selectedMedia.title}</h3>
                      <div className="flex space-x-2">
                        <Badge>{selectedMedia.category}</Badge>
                        {selectedMedia.duration && (
                          <Badge variant="secondary">{selectedMedia.duration}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}