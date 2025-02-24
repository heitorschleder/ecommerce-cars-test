'use client';

import { useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        {/* Botão de fechar no canto superior direito */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quem Somos</h2>
        <p className="text-gray-700 mb-4">
          A E-Cars é uma plataforma inovadora dedicada a conectar compradores e vendedores de veículos de forma rápida e segura. 
          Nossa missão é facilitar a experiência de compra e venda de carros, oferecendo um serviço de qualidade e confiança.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nossa Missão</h2>
        <p className="text-gray-700 mb-4">
          Proporcionar uma experiência de compra e venda de veículos que seja simples, transparente e eficiente, 
          sempre priorizando a satisfação do cliente.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nossa Visão</h2>
        <p className="text-gray-700 mb-4">
          Ser a plataforma líder no mercado de compra e venda de carros online, reconhecida pela excelência no atendimento e 
          pela inovação em nossos serviços.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nossos Valores</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Transparência</li>
          <li>Inovação</li>
          <li>Compromisso com o cliente</li>
          <li>Qualidade</li>
          <li>Responsabilidade social</li>
        </ul>
        
        {/* Botão adicional para fechar o modal */}
        <div className="flex justify-end">
          <button 
            onClick={onClose} 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;