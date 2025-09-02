// "use client";

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Badge } from '@/components/ui/badge';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Progress } from '@/components/ui/progress';
// import { Lock, User, GraduationCap, MessageCircle, FileText, Calendar, Download } from 'lucide-react';
// import { mockStudents } from '@/lib/mock-data';

// export default function StudentsPage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState<'student' | 'parent'>('student');
//   const [selectedStudent] = useState(mockStudents[0]);

//   const LoginForm = () => (
//     <Card className="max-w-md mx-auto">
//       <CardHeader className="text-center">
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Lock className="h-8 w-8 text-green-600" />
//         </div>
//         <CardTitle>Connexion Sécurisée</CardTitle>
//         <CardDescription>Accès élèves et parents</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form className="space-y-4">
//           <div>
//             <Label htmlFor="username">Identifiant</Label>
//             <Input id="username" placeholder="Numéro élève ou email" />
//           </div>
//           <div>
//             <Label htmlFor="password">Mot de passe</Label>
//             <Input id="password" type="password" placeholder="••••••••" />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <Button
//               type="button"
//               variant={userRole === 'student' ? 'default' : 'outline'}
//               onClick={() => {
//                 setUserRole('student');
//                 setIsLoggedIn(true);
//               }}
//               className="w-full"
//             >
//               <User className="h-4 w-4 mr-2" />
//               Élève
//             </Button>
//             <Button
//               type="button"
//               variant={userRole === 'parent' ? 'default' : 'outline'}
//               onClick={() => {
//                 setUserRole('parent');
//                 setIsLoggedIn(true);
//               }}
//               className="w-full"
//             >
//               <User className="h-4 w-4 mr-2" />
//               Parent
//             </Button>
//           </div>
//         </form>
//         <div className="text-center mt-6 text-sm text-gray-600">
//           <p>Première connexion ? Contactez le secrétariat</p>
//           <p>Tel: +226 25 XX XX XX</p>
//         </div>
//       </CardContent>
//     </Card>
//   );

//   const getGradeColor = (grade: number) => {
//     if (grade >= 16) return 'text-green-600';
//     if (grade >= 12) return 'text-blue-600';
//     if (grade >= 10) return 'text-yellow-600';
//     return 'text-red-600';
//   };

//   const calculateAverage = (grades: Record<string, number>) => {
//     const values = Object.values(grades);
//     return (values.reduce((sum, grade) => sum + grade, 0) / values.length).toFixed(1);
//   };

//   if (!isLoggedIn) {
//     return (
//       <div className="min-h-screen py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl font-bold text-gray-900 mb-6">Espace Élèves & Parents</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Consultez vos notes, bulletins et communiquez avec l'établissement en toute sécurité.
//             </p>
//           </motion.div>
//           <LoginForm />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header avec profil */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-8"
//         >
//           <Card>
//             <CardContent className="p-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <Avatar className="h-16 w-16">
//                     <AvatarImage src="/placeholder-student.jpg" />
//                     <AvatarFallback className="bg-green-100 text-green-700">
//                       {selectedStudent.name.split(' ').map(n => n[0]).join('')}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
//                     <p className="text-gray-600">{selectedStudent.class}</p>
//                     <Badge className="mt-1">
//                       {userRole === 'student' ? 'Élève' : 'Parent'}
//                     </Badge>
//                   </div>
//                 </div>
//                 <Button
//                   variant="outline"
//                   onClick={() => setIsLoggedIn(false)}
//                 >
//                   Se déconnecter
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <Tabs defaultValue="grades" className="w-full">
//           <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
//             <TabsTrigger value="grades">Notes & Bulletins</TabsTrigger>
//             <TabsTrigger value="messages">Messages</TabsTrigger>
//             <TabsTrigger value="documents">Documents</TabsTrigger>
//             <TabsTrigger value="schedule">Planning</TabsTrigger>
//           </TabsList>

//           {/* Notes et Bulletins */}
//           <TabsContent value="grades">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="space-y-6"
//             >
//               {/* Résumé */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <Card>
//                   <CardHeader className="text-center">
//                     <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                       <GraduationCap className="h-6 w-6 text-green-600" />
//                     </div>
//                     <CardTitle>Moyenne Générale</CardTitle>
//                   </CardHeader>
//                   <CardContent className="text-center">
//                     <div className={`text-3xl font-bold ${getGradeColor(parseFloat(calculateAverage(selectedStudent.grades)))}`}>
//                       {calculateAverage(selectedStudent.grades)}/20
//                     </div>
//                     <Progress 
//                       value={parseFloat(calculateAverage(selectedStudent.grades)) * 5} 
//                       className="mt-2"
//                     />
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader className="text-center">
//                     <CardTitle>Classement</CardTitle>
//                   </CardHeader>
//                   <CardContent className="text-center">
//                     <div className="text-3xl font-bold text-blue-600">3ème</div>
//                     <p className="text-gray-600">sur 25 élèves</p>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardHeader className="text-center">
//                     <CardTitle>Appréciation</CardTitle>
//                   </CardHeader>
//                   <CardContent className="text-center">
//                     <Badge className="text-sm">Très Bien</Badge>
//                     <p className="text-gray-600 text-sm mt-2">Élève sérieux et appliqué</p>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Détail des notes */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Notes par Matière - 2ème Trimestre</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {Object.entries(selectedStudent.grades).map(([subject, grade]) => (
//                       <div key={subject} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                         <div className="flex-1">
//                           <h4 className="font-medium">{subject}</h4>
//                           <div className="flex items-center space-x-2 mt-1">
//                             <Progress value={grade * 5} className="flex-1 max-w-xs" />
//                             <span className="text-sm text-gray-500">{grade * 5}%</span>
//                           </div>
//                         </div>
//                         <div className={`text-2xl font-bold ${getGradeColor(grade)}`}>
//                           {grade}/20
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Bulletins */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Bulletins Trimestriels</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="p-4 border rounded-lg">
//                       <h4 className="font-medium mb-2">1er Trimestre</h4>
//                       <p className="text-sm text-gray-600 mb-3">Moyenne: 14.8/20</p>
//                       <Button size="sm" variant="outline" className="w-full">
//                         <Download className="h-4 w-4 mr-2" />
//                         Télécharger
//                       </Button>
//                     </div>
//                     <div className="p-4 border rounded-lg bg-blue-50">
//                       <h4 className="font-medium mb-2">2ème Trimestre</h4>
//                       <p className="text-sm text-gray-600 mb-3">Moyenne: {calculateAverage(selectedStudent.grades)}/20</p>
//                       <Button size="sm" className="w-full">
//                         <Download className="h-4 w-4 mr-2" />
//                         Télécharger
//                       </Button>
//                     </div>
//                     <div className="p-4 border rounded-lg opacity-50">
//                       <h4 className="font-medium mb-2">3ème Trimestre</h4>
//                       <p className="text-sm text-gray-600 mb-3">À venir</p>
//                       <Button size="sm" variant="outline" className="w-full" disabled>
//                         Non disponible
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>

//           {/* Messages */}
//           <TabsContent value="messages">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <div className="flex items-center space-x-2">
//                     <MessageCircle className="h-5 w-5" />
//                     <CardTitle>Messagerie Interne</CardTitle>
//                   </div>
//                   <CardDescription>
//                     Communiquez avec l'administration et les professeurs
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="font-medium">Administration</h4>
//                         <span className="text-xs text-gray-500">Il y a 2 jours</span>
//                       </div>
//                       <p className="text-sm">
//                         Rappel: Les examens du 2ème trimestre auront lieu du 1er au 5 mars. 
//                         Merci de bien réviser.
//                       </p>
//                       <Badge variant="secondary" className="mt-2">Non lu</Badge>
//                     </div>

//                     <div className="p-4 bg-gray-50 rounded-lg">
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="font-medium">Prof. Marie OUEDRAOGO</h4>
//                         <span className="text-xs text-gray-500">Il y a 1 semaine</span>
//                       </div>
//                       <p className="text-sm">
//                         Félicitations pour vos excellents résultats en agronomie. 
//                         Continuez vos efforts !
//                       </p>
//                       <Badge variant="outline" className="mt-2">Lu</Badge>
//                     </div>

//                     <div className="text-center py-8 text-gray-500">
//                       <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
//                       <p>Fonctionnalité de messagerie en développement</p>
//                       <p className="text-sm">Contactez directement l'administration pour vos questions</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>

//           {/* Documents */}
//           <TabsContent value="documents">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <div className="flex items-center space-x-2">
//                     <FileText className="h-5 w-5" />
//                     <CardTitle>Documents & Certificats</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="p-4 border rounded-lg">
//                       <div className="flex items-center space-x-3">
//                         <FileText className="h-8 w-8 text-blue-600" />
//                         <div className="flex-1">
//                           <h4 className="font-medium">Certificat de Scolarité</h4>
//                           <p className="text-sm text-gray-600">Année 2024-2025</p>
//                         </div>
//                         <Button size="sm" variant="outline">
//                           <Download className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="p-4 border rounded-lg">
//                       <div className="flex items-center space-x-3">
//                         <FileText className="h-8 w-8 text-green-600" />
//                         <div className="flex-1">
//                           <h4 className="font-medium">Relevé de Notes</h4>
//                           <p className="text-sm text-gray-600">1er Trimestre</p>
//                         </div>
//                         <Button size="sm" variant="outline">
//                           <Download className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="p-4 border rounded-lg opacity-50">
//                       <div className="flex items-center space-x-3">
//                         <FileText className="h-8 w-8 text-gray-400" />
//                         <div className="flex-1">
//                           <h4 className="font-medium">Diplôme Intermédiaire</h4>
//                           <p className="text-sm text-gray-600">Fin 2ème année</p>
//                         </div>
//                         <Button size="sm" variant="outline" disabled>
//                           Bientôt
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="p-4 border rounded-lg opacity-50">
//                       <div className="flex items-center space-x-3">
//                         <FileText className="h-8 w-8 text-gray-400" />
//                         <div className="flex-1">
//                           <h4 className="font-medium">Attestation de Stage</h4>
//                           <p className="text-sm text-gray-600">Stage entreprise</p>
//                         </div>
//                         <Button size="sm" variant="outline" disabled>
//                           À venir
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>

//           {/* Planning */}
//           <TabsContent value="schedule">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <div className="flex items-center space-x-2">
//                     <Calendar className="h-5 w-5" />
//                     <CardTitle>Planning Personnel</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="bg-blue-50 p-4 rounded-lg">
//                       <h4 className="font-medium text-blue-900">Aujourd'hui - Lundi 20 Janvier</h4>
//                       <div className="mt-2 space-y-2">
//                         <div className="flex justify-between items-center">
//                           <span className="text-sm">08:00 - 10:00</span>
//                           <span className="text-sm font-medium">Agronomie Générale</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-sm">10:15 - 12:15</span>
//                           <span className="text-sm font-medium">TP Laboratoire</span>
//                         </div>
//                         <div className="flex justify-between items-center">
//                           <span className="text-sm">14:00 - 16:00</span>
//                           <span className="text-sm font-medium">Mathématiques</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="p-4 border rounded-lg">
//                       <h4 className="font-medium">Cette semaine</h4>
//                       <div className="mt-2 text-sm text-gray-600">
//                         <p>• Mercredi: Contrôle de Zootechnie</p>
//                         <p>• Vendredi: Sortie pédagogique - Ferme modèle</p>
//                       </div>
//                     </div>

//                     <div className="text-center py-8 text-gray-500">
//                       <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
//                       <p>Planning complet disponible bientôt</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Lock, User, GraduationCap, MessageCircle, FileText, Calendar, Download } from 'lucide-react';

// Mock data avec une structure cohérente
const mockStudents = [
  {
    id: 1,
    name: "Koffi TRAORE",
    class: "2nde A - Filière Agronomie",
    grades: {
      Agronomie: 16,
      Élevage: 14,
      Transformation: 15,
      Français: 13,
      Mathématiques: 12,
      Sciences: 11
    }
  }
];

export default function StudentsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'parent'>('student');
  const [selectedStudent] = useState(mockStudents[0]);

  const LoginForm = () => (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="h-8 w-8 text-green-600" />
        </div>
        <CardTitle>Connexion Sécurisée</CardTitle>
        <CardDescription>Accès élèves et parents</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="username">Identifiant</Label>
            <Input id="username" placeholder="Numéro élève ou email" />
          </div>
          <div>
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant={userRole === 'student' ? 'default' : 'outline'}
              onClick={() => {
                setUserRole('student');
                setIsLoggedIn(true);
              }}
              className="w-full"
            >
              <User className="h-4 w-4 mr-2" />
              Élève
            </Button>
            <Button
              type="button"
              variant={userRole === 'parent' ? 'default' : 'outline'}
              onClick={() => {
                setUserRole('parent');
                setIsLoggedIn(true);
              }}
              className="w-full"
            >
              <User className="h-4 w-4 mr-2" />
              Parent
            </Button>
          </div>
        </form>
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Première connexion ? Contactez le secrétariat</p>
          <p>Tel: +226 25 XX XX XX</p>
        </div>
      </CardContent>
    </Card>
  );

  const getGradeColor = (grade: number) => {
    if (grade >= 16) return 'text-green-600';
    if (grade >= 12) return 'text-blue-600';
    if (grade >= 10) return 'text-yellow-600';
    return 'text-red-600';
  };

  const calculateAverage = (grades: Record<string, number>) => {
    const values = Object.values(grades);
    return (values.reduce((sum, grade) => sum + grade, 0) / values.length).toFixed(1);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Espace Élèves & Parents</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consultez vos notes, bulletins et communiquez avec l'établissement en toute sécurité.
            </p>
          </motion.div>
          <LoginForm />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec profil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder-student.jpg" />
                    <AvatarFallback className="bg-green-100 text-green-700">
                      {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
                    <p className="text-gray-600">{selectedStudent.class}</p>
                    <Badge className="mt-1">
                      {userRole === 'student' ? 'Élève' : 'Parent'}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Se déconnecter
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="grades" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="grades">Notes & Bulletins</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="schedule">Planning</TabsTrigger>
          </TabsList>

          {/* Notes et Bulletins */}
          <TabsContent value="grades">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Résumé */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <GraduationCap className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Moyenne Générale</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className={`text-3xl font-bold ${getGradeColor(parseFloat(calculateAverage(selectedStudent.grades)))}`}>
                      {calculateAverage(selectedStudent.grades)}/20
                    </div>
                    <Progress 
                      value={parseFloat(calculateAverage(selectedStudent.grades)) * 5} 
                      className="mt-2"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Classement</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-blue-600">3ème</div>
                    <p className="text-gray-600">sur 25 élèves</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Appréciation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className="text-sm">Très Bien</Badge>
                    <p className="text-gray-600 text-sm mt-2">Élève sérieux et appliqué</p>
                  </CardContent>
                </Card>
              </div>

              {/* Détail des notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Notes par Matière - 2ème Trimestre</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(selectedStudent.grades).map(([subject, grade]) => (
                      <div key={subject} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{subject}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Progress value={grade * 5} className="flex-1 max-w-xs" />
                            <span className="text-sm text-gray-500">{grade * 5}%</span>
                          </div>
                        </div>
                        <div className={`text-2xl font-bold ${getGradeColor(grade)}`}>
                          {grade}/20
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Bulletins */}
              <Card>
                <CardHeader>
                  <CardTitle>Bulletins Trimestriels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">1er Trimestre</h4>
                      <p className="text-sm text-gray-600 mb-3">Moyenne: 14.8/20</p>
                      <Button size="sm" variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </Button>
                    </div>
                    <div className="p-4 border rounded-lg bg-blue-50">
                      <h4 className="font-medium mb-2">2ème Trimestre</h4>
                      <p className="text-sm text-gray-600 mb-3">Moyenne: {calculateAverage(selectedStudent.grades)}/20</p>
                      <Button size="sm" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </Button>
                    </div>
                    <div className="p-4 border rounded-lg opacity-50">
                      <h4 className="font-medium mb-2">3ème Trimestre</h4>
                      <p className="text-sm text-gray-600 mb-3">À venir</p>
                      <Button size="sm" variant="outline" className="w-full" disabled>
                        Non disponible
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Messages */}
          <TabsContent value="messages">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <CardTitle>Messagerie Interne</CardTitle>
                  </div>
                  <CardDescription>
                    Communiquez avec l'administration et les professeurs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">Administration</h4>
                        <span className="text-xs text-gray-500">Il y a 2 jours</span>
                      </div>
                      <p className="text-sm">
                        Rappel: Les examens du 2ème trimestre auront lieu du 1er au 5 mars. 
                        Merci de bien réviser.
                      </p>
                      <Badge variant="secondary" className="mt-2">Non lu</Badge>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">Prof. Marie OUEDRAOGO</h4>
                        <span className="text-xs text-gray-500">Il y a 1 semaine</span>
                      </div>
                      <p className="text-sm">
                        Félicitations pour vos excellents résultats en agronomie. 
                        Continuez vos efforts !
                      </p>
                      <Badge variant="outline" className="mt-2">Lu</Badge>
                    </div>

                    <div className="text-center py-8 text-gray-500">
                      <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Fonctionnalité de messagerie en développement</p>
                      <p className="text-sm">Contactez directement l'administration pour vos questions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Documents */}
          <TabsContent value="documents">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <CardTitle>Documents & Certificats</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-blue-600" />
                        <div className="flex-1">
                          <h4 className="font-medium">Certificat de Scolarité</h4>
                          <p className="text-sm text-gray-600">Année 2024-2025</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-green-600" />
                        <div className="flex-1">
                          <h4 className="font-medium">Relevé de Notes</h4>
                          <p className="text-sm text-gray-600">1er Trimestre</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg opacity-50">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-gray-400" />
                        <div className="flex-1">
                          <h4 className="font-medium">Diplôme Intermédiaire</h4>
                          <p className="text-sm text-gray-600">Fin 2ème année</p>
                        </div>
                        <Button size="sm" variant="outline" disabled>
                          Bientôt
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg opacity-50">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-gray-400" />
                        <div className="flex-1">
                          <h4 className="font-medium">Attestation de Stage</h4>
                          <p className="text-sm text-gray-600">Stage entreprise</p>
                        </div>
                        <Button size="sm" variant="outline" disabled>
                          À venir
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Planning */}
          <TabsContent value="schedule">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <CardTitle>Planning Personnel</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900">Aujourd'hui - Lundi 20 Janvier</h4>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">08:00 - 10:00</span>
                          <span className="text-sm font-medium">Agronomie Générale</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">10:15 - 12:15</span>
                          <span className="text-sm font-medium">TP Laboratoire</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">14:00 - 16:00</span>
                          <span className="text-sm font-medium">Mathématiques</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium">Cette semaine</h4>
                      <div className="mt-2 text-sm text-gray-600">
                        <p>• Mercredi: Contrôle de Zootechnie</p>
                        <p>• Vendredi: Sortie pédagogique - Ferme modèle</p>
                      </div>
                    </div>

                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Planning complet disponible bientôt</p>
                    </div>
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