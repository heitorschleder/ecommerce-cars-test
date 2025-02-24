import { Card, CardContent } from '@/components/ui/card';

const Footer = ({ onOpenModal }) => {
  return (
    <footer className="bg-white shadow-inner mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="overflow-hidden">
          <CardContent className="flex flex-col items-center">
            <div className="flex gap-4 p-5">
            <button 
                onClick={onOpenModal}
                className="text-gray-600 hover:text-gray-900"
              >
                Sobre Nós
              </button>
              <a href="https://wa.me/5548999022083" className="text-gray-600 hover:text-gray-900">Contato</a>
              <a href="/privacidade" className="text-gray-600 hover:text-gray-900">Política de Privacidade</a>
            </div>
            <p className="text-gray-500 mt-4">© {new Date().getFullYear()} E-Cars. Todos os direitos reservados.</p>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;