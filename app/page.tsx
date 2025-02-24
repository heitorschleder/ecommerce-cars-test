'use client';

import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Search, Calendar, Gauge, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

// Mock data for cars
const cars = [
  {
    id: 1,
    model: 'Tesla Model 3',
    brand: 'Tesla',
    price: 'R$ 279.990',
    year: '2023',
    mileage: '0',
    location: 'São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    model: 'BMW X5',
    brand: 'BMW',
    price: 'R$ 489.990',
    year: '2023',
    mileage: '5.000',
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    model: 'Mercedes-Benz C300',
    brand: 'Mercedes-Benz',
    price: 'R$ 339.990',
    year: '2022',
    mileage: '15.000',
    location: 'Curitiba, PR',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    model: 'Porsche 911',
    brand: 'Porsche',
    price: 'R$ 989.990',
    year: '2023',
    mileage: '1.000',
    location: 'Brasília, DF',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    model: 'Audi RS e-tron GT',
    brand: 'Audi',
    price: 'R$ 749.990',
    year: '2023',
    mileage: '0',
    location: 'Porto Alegre, RS',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    model: 'Range Rover Sport',
    brand: 'Land Rover',
    price: 'R$ 699.990',
    year: '2023',
    mileage: '3.000',
    location: 'Belo Horizonte, MG',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    model: 'BMW Série 3 Sedã',
    brand: 'BMW',
    price: 'R$ 858.950',
    year: '2025',
    mileage: '0',
    location: 'Passo Fundo, RS',
    image: 'https://bmw.scene7.com/is/image/BMW/g20_ice_stage:16to7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    model: 'Lamborghini Urus',
    brand: 'Lamborghini',
    price: 'R$ 3.349.990,00',
    year: '2022',
    mileage: '5.000',
    location: 'Palhoça, SC',
    image: 'https://img0.icarros.com/dbimg/imgadicionalanuncio/5/409828417_1.webp?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    model: 'Lamborghini Gallardo',
    brand: 'Lamborghini',
    price: 'R$ 1.299.990,00',
    year: '2009',
    mileage: '15.000',
    location: 'Erechim, RS',
    image: 'https://img1.icarros.com/dbimg/imgadicionalanuncio/5/356950906_1.webp?auto=format&fit=crop&q=80&w=800'
  },
  ];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car => 
    car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsAppClick = (model: string) => {
    const message = encodeURIComponent(`Oi estou interessado no ${model}`);
    window.open(`https://wa.me/48999022983?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-900">E-Cars</h1>
            <div className="relative w-full md:w-96">
              <Input
                type="text"
                placeholder="Buscar por marca ou modelo..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{car.model}</h2>
                <p className="text-3xl font-bold text-primary mb-4">{car.price}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Gauge className="h-4 w-4" />
                    <span>{car.mileage} km</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{car.location}</span>
                </div>
                <button
                  onClick={() => handleWhatsAppClick(car.model)}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}