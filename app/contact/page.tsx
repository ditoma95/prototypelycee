"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setIsSubmitting(false);
  };

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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact & Localisation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Contactez-nous pour toute information ou visitez le site de l'établissement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Notre Adresse</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Lycée Professionnel Agricole Sainte Anne</p>
                  <p className="text-gray-600">Nanoro, Province du Boulkiemdé</p>
                  <p className="text-gray-600">Région Centre-Ouest, Burkina Faso</p>
                  <p className="text-gray-600">BP 123 Nanoro</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>Téléphone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Secrétariat ( Madame Mariam OUATARA )</p>
                    <p className="text-gray-600">+226 77 02 67 55</p>
                  </div>
                  <div>
                    <p className="font-medium">Direction ( Frère Jonas Baky )</p>
                    <p className="text-gray-600">+226 72 53 03 37</p>
                  </div>
                  <div>
                    <p className="font-medium">Intendante ( Mademoiselle Carine )</p>
                    <p className="text-gray-600">+226 70 60 29 59 </p>
                  </div>
                  <div>
                    <p className="font-medium">Internat garçons ( Monsieur Zongo ) </p>
                    <p className="text-gray-600">+226 70 48 33 37</p>
                  </div>
                  <div>
                    <p className="font-medium">Internat filles ( Soeur - - - - - - )</p>
                    <p className="text-gray-600">+226 --  -- --  --</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Contact général</p>
                    <p className="text-gray-600">lpananoro1994@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Inscriptions</p>
                    <p className="text-gray-600">lpananoro1994@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Direction</p>
                    <p className="text-gray-600">bajonask9@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Horaires d'Ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="text-gray-600">7h30 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samedi</span>
                    <span className="text-gray-600">8h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimanche</span>
                    <span className="text-gray-600">Fermé</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <p className="text-sm text-gray-600">
                      <strong>Période scolaire :</strong> Septembre à Juin
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Vacances :</strong> Horaires réduits
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <span>Nous Contacter</span>
                </CardTitle>
                <CardDescription>
                  Envoyez-nous un message, nous vous répondrons rapidement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input id="prenom" placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input id="nom" placeholder="Votre nom" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                  </div>

                  <div>
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input id="telephone" placeholder="+226 xx xx xx xx" />
                  </div>

                  <div>
                    <Label htmlFor="sujet">Sujet *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inscription">Inscription</SelectItem>
                        <SelectItem value="information">Demande d'information</SelectItem>
                        <SelectItem value="visite">Visite du lycée</SelectItem>
                        <SelectItem value="partenariat">Partenariat</SelectItem>
                        <SelectItem value="stage">Stage/Emploi</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Carte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle>Localisation</CardTitle>
              <CardDescription>
                Notre etablissement se situe au cœur de Nanoro, facilement accessible depuis les principales routes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Carte Interactive</p>
                  <p className="text-sm">Intégration avec Google Maps ou OpenStreetMap</p>
                  <p className="text-sm mt-2">Coordonnées: 12°38'N, 2°31'W (exemple)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Informations pratiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Comment s'y rendre ?</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-gray-600">
                <p>Depuis Ouagadougou : Route Nationale RN1 direction Koudougou, puis RN14 vers Nanoro (90km)</p>
                <p className="mt-2">Transport public disponible depuis la gare routière de Ouagadougou</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Visites</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-gray-600">
                <p>Visites guidées sur rendez-vous du lundi au vendredi</p>
                <p className="mt-2">Journées portes ouvertes : 2 fois par an</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Urgences</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-gray-600">
                <p>Numéro d'urgence : +226 72 53 03 37</p>
              <p className="mt-2">Depuis 1993 ,le centre médical de Nanoro dispense des soins de Qualité</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}