import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-600 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">LPA Sainte Anne</h2>
                <p className="text-sm text-gray-400">Nanoro, Burkina Faso</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Formation d'excellence en agriculture moderne pour les jeunes du Burkina Faso et de la sous-région.
            </p>
          </div>

          {/* Liens Rapides */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens Rapides</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-green-400 transition-colors">
                Présentation
              </Link>
              <Link href="/education" className="block text-gray-300 hover:text-green-400 transition-colors">
                Formations
              </Link>
              <Link href="/registration" className="block text-gray-300 hover:text-green-400 transition-colors">
                Inscriptions
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Filières */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nos Filières</h3>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">• Production Végétale</p>
              <p className="text-gray-300 text-sm">• Élevage et Zootechnie</p>
              <p className="text-gray-300 text-sm">• Transformation Agroalimentaire</p>
              <p className="text-gray-300 text-sm">• Agro-écologie</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">Nanoro, Province du Boulkiemdé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">+226 25 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">contact@lpa-nanoro.bf</span>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lycée Professionnel Agricole Sainte Anne - Nanoro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}