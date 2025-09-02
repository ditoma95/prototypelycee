"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Upload, Check, AlertCircle, FileText, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const requiredDocuments = [
  'Acte de naissance',
  'Certificat de scolarité ou diplôme',
  'Relevé de notes du dernier trimestre',
  'Certificat médical',
  '4 photos d\'identité',
  'Copie CIN du tuteur'
];

export default function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Inscription enregistrée !",
      description: "Votre dossier d'inscription a été soumis avec succès. Vous recevrez une confirmation par email.",
    });
    
    setIsSubmitting(false);
    setCurrentStep(4); // Étape de confirmation
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Gestion des Inscriptions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inscrivez-vous dès maintenant pour l'année scolaire 2025-2026
          </p>
        </motion.div>

        {/* Informations générales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Période d'inscription</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">15 Janvier - 30 Avril 2025</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">+226 25 XX XX XX</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">inscriptions@lpa-nanoro.bf</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Étapes du formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step < currentStep ? <Check className="h-5 w-5" /> : step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-16 h-1 ${
                      step < currentStep ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-600">
            {currentStep === 1 && "Informations personnelles"}
            {currentStep === 2 && "Choix de la filière"}
            {currentStep === 3 && "Documents requis"}
            {currentStep === 4 && "Confirmation"}
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {currentStep < 4 ? (
            <Card>
              <CardHeader>
                <CardTitle>
                  {currentStep === 1 && "Informations Personnelles"}
                  {currentStep === 2 && "Choix de Filière"}
                  {currentStep === 3 && "Documents à Fournir"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && "Renseignez vos informations personnelles et celles de votre tuteur"}
                  {currentStep === 2 && "Sélectionnez la filière qui vous intéresse"}
                  {currentStep === 3 && "Liste des documents requis pour finaliser votre inscription"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Candidat</h3>
                        <div>
                          <Label htmlFor="nom">Nom *</Label>
                          <Input id="nom" placeholder="Votre nom" required />
                        </div>
                        <div>
                          <Label htmlFor="prenom">Prénom *</Label>
                          <Input id="prenom" placeholder="Votre prénom" required />
                        </div>
                        <div>
                          <Label htmlFor="date-naissance">Date de naissance *</Label>
                          <Input id="date-naissance" type="date" required />
                        </div>
                        <div>
                          <Label htmlFor="lieu-naissance">Lieu de naissance *</Label>
                          <Input id="lieu-naissance" placeholder="Ville, Province" required />
                        </div>
                        <div>
                          <Label htmlFor="telephone">Téléphone</Label>
                          <Input id="telephone" placeholder="+226" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="votre@email.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Tuteur/Parent</h3>
                        <div>
                          <Label htmlFor="nom-tuteur">Nom du tuteur *</Label>
                          <Input id="nom-tuteur" placeholder="Nom du tuteur" required />
                        </div>
                        <div>
                          <Label htmlFor="relation">Relation *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pere">Père</SelectItem>
                              <SelectItem value="mere">Mère</SelectItem>
                              <SelectItem value="tuteur">Tuteur</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="tel-tuteur">Téléphone tuteur *</Label>
                          <Input id="tel-tuteur" placeholder="+226" required />
                        </div>
                        <div>
                          <Label htmlFor="profession">Profession</Label>
                          <Input id="profession" placeholder="Profession du tuteur" />
                        </div>
                        <div>
                          <Label htmlFor="adresse">Adresse complète *</Label>
                          <Textarea
                            id="adresse"
                            placeholder="Village/Secteur, Commune, Province"
                            rows={3}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="filiere">Filière souhaitée *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez une filière" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="production">Production Végétale</SelectItem>
                            <SelectItem value="elevage">Élevage et Zootechnie</SelectItem>
                            <SelectItem value="transformation">Transformation Agroalimentaire</SelectItem>
                            <SelectItem value="agroecologie">Agro-écologie</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="niveau">Niveau d'études actuel *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre niveau" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bepc">BEPC</SelectItem>
                            <SelectItem value="cap">CAP Agricole</SelectItem>
                            <SelectItem value="seconde">Seconde générale</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="etablissement">Établissement d'origine *</Label>
                        <Input id="etablissement" placeholder="Nom de votre ancien établissement" required />
                      </div>

                      <div>
                        <Label htmlFor="motivation">Motivation (optionnel)</Label>
                        <Textarea
                          id="motivation"
                          placeholder="Expliquez brièvement pourquoi vous souhaitez intégrer cette filière..."
                          rows={4}
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <div className="flex">
                          <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                          <div>
                            <p className="text-yellow-700">
                              <strong>Important :</strong> Tous les documents listés ci-dessous sont requis pour finaliser votre inscription.
                              Les documents peuvent être déposés physiquement au secrétariat ou envoyés par email.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {requiredDocuments.map((doc, index) => (
                          <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg">
                            <FileText className="h-5 w-5 text-gray-400" />
                            <span className="flex-1">{doc}</span>
                            <Badge variant="outline">Requis</Badge>
                          </div>
                        ))}
                      </div>

                      <Card className="bg-blue-50">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-3">
                            <Upload className="h-6 w-6 text-blue-600 mt-1" />
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-2">Dépôt des documents</h4>
                              <p className="text-blue-700 text-sm mb-3">
                                Vous pouvez déposer vos documents de plusieurs façons :
                              </p>
                              <ul className="text-blue-700 text-sm space-y-1">
                                <li>• En personne au secrétariat (Lun-Ven: 8h-16h)</li>
                                <li>• Par email : inscriptions@lpa-nanoro.bf</li>
                                <li>• Par courrier postal</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="documents-ok" />
                        <Label htmlFor="documents-ok" className="text-sm">
                          Je confirme que je fournirai tous les documents requis dans les délais
                        </Label>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-6">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        Précédent
                      </Button>
                    )}
                    <div className="ml-auto">
                      {currentStep < 3 ? (
                        <Button
                          type="button"
                          onClick={() => setCurrentStep(currentStep + 1)}
                        >
                          Suivant
                        </Button>
                      ) : (
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? "Envoi en cours..." : "Finaliser l'inscription"}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            // Étape de confirmation
            <Card className="text-center">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Inscription enregistrée !</h2>
                <p className="text-gray-600 mb-6">
                  Votre dossier d'inscription a été soumis avec succès. Vous recevrez une confirmation 
                  par email avec les prochaines étapes à suivre.
                </p>
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-green-900 mb-2">Prochaines étapes :</h3>
                  <ul className="text-green-700 text-sm space-y-1 text-left max-w-md mx-auto">
                    <li>1. Déposer les documents requis</li>
                    <li>2. Attendre la validation du dossier</li>
                    <li>3. Réception de la convocation</li>
                    <li>4. Entretien/test d'admission</li>
                    <li>5. Résultats et inscription définitive</li>
                  </ul>
                </div>
                <Button onClick={() => setCurrentStep(1)}>
                  Nouvelle inscription
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}