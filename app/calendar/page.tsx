"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MapPin, Clock, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Journée Portes Ouvertes",
    date: "2025-02-15",
    time: "08:00 - 17:00",
    type: "information",
    location: "Campus Principal",
    description: "Découverte des filières et rencontre avec les équipes pédagogiques",
    participants: "Tout public"
  },
  {
    id: 2,
    title: "Salon de l'Agriculture Locale",
    date: "2025-02-20",
    time: "09:00 - 16:00",
    type: "externe",
    location: "Centre de Nanoro",
    description: "Participation des élèves avec exposition de leurs projets",
    participants: "Élèves de 3ème année"
  },
  {
    id: 3,
    title: "Examens Trimestriels",
    date: "2025-03-01",
    time: "08:00 - 12:00",
    type: "examen",
    location: "Salles d'examens",
    description: "Évaluations du second trimestre",
    participants: "Tous les élèves"
  },
  {
    id: 4,
    title: "Sortie Pédagogique - Ferme Modèle",
    date: "2025-03-05",
    time: "07:00 - 18:00",
    type: "pedagogique",
    location: "Koudougou",
    description: "Visite d'une exploitation agricole moderne",
    participants: "Élèves de 2ème année"
  },
  {
    id: 5,
    title: "Réunion Parents-Professeurs",
    date: "2025-03-10",
    time: "15:00 - 18:00",
    type: "reunion",
    location: "Salle de conférences",
    description: "Bilan du 2ème trimestre et orientation",
    participants: "Parents et tuteurs"
  },
  {
    id: 6,
    title: "Semaine de l'Agriculture Durable",
    date: "2025-03-15",
    time: "Toute la semaine",
    type: "seminaire",
    location: "Campus",
    description: "Conférences et ateliers sur l'agro-écologie",
    participants: "Tous les élèves"
  },
  {
    id: 7,
    title: "Stage en Entreprise",
    date: "2025-04-01",
    time: "3 semaines",
    type: "stage",
    location: "Diverses entreprises",
    description: "Stage pratique en milieu professionnel",
    participants: "Élèves de 3ème année"
  }
];

const eventTypes = {
  information: { color: "bg-blue-500", label: "Information" },
  externe: { color: "bg-green-500", label: "Événement Externe" },
  examen: { color: "bg-red-500", label: "Examen" },
  pedagogique: { color: "bg-purple-500", label: "Pédagogique" },
  reunion: { color: "bg-orange-500", label: "Réunion" },
  seminaire: { color: "bg-teal-500", label: "Séminaire" },
  stage: { color: "bg-indigo-500", label: "Stage" }
};

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 1)); // Février 2025
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Calendrier des Événements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez tous les événements, examens, sorties pédagogiques et réunions de notre établissement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendrier */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <CalendarIcon className="h-5 w-5" />
                      <span>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={prevMonth}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={nextMonth}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {dayNames.map(day => (
                      <div key={day} className="p-2 text-center font-semibold text-gray-500 text-sm">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {/* Cases vides pour les jours du mois précédent */}
                    {Array.from({ length: firstDay }, (_, i) => (
                      <div key={`empty-${i}`} className="h-20 p-1"></div>
                    ))}
                    {/* Jours du mois */}
                    {Array.from({ length: daysInMonth }, (_, i) => {
                      const day = i + 1;
                      const dayEvents = getEventsForDate(day);
                      
                      return (
                        <div key={day} className="h-20 p-1 border rounded hover:bg-gray-50 cursor-pointer">
                          <div className="text-sm font-semibold text-gray-900 mb-1">{day}</div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map(event => (
                              <div
                                key={event.id}
                                className={`text-xs px-1 py-0.5 rounded text-white ${eventTypes[event.type as keyof typeof eventTypes].color} cursor-pointer`}
                                onClick={() => setSelectedEvent(event)}
                              >
                                {event.title.length > 12 ? `${event.title.substring(0, 12)}...` : event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-gray-500">+{dayEvents.length - 2} plus</div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Événements à venir */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Événements à Venir</CardTitle>
                  <CardDescription>Prochains événements du calendrier</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.slice(0, 5).map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedEvent(event)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-3 h-3 rounded-full mt-1 ${eventTypes[event.type as keyof typeof eventTypes].color}`}></div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm">{event.title}</h4>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-1">
                              <CalendarIcon className="h-3 w-3" />
                              <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Légende */}
              <Card>
                <CardHeader>
                  <CardTitle>Types d'Événements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(eventTypes).map(([type, config]) => (
                      <div key={type} className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${config.color}`}></div>
                        <span className="text-sm">{config.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Détails de l'événement sélectionné */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${eventTypes[selectedEvent.type as keyof typeof eventTypes].color}`}></div>
                    <CardTitle>{selectedEvent.title}</CardTitle>
                    <Badge>{eventTypes[selectedEvent.type as keyof typeof eventTypes].label}</Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedEvent(null)}>
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-gray-600 mb-4">{selectedEvent.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{new Date(selectedEvent.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{selectedEvent.participants}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}