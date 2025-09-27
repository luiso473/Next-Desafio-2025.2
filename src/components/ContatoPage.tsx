import { Mail, Phone, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold mb-8">FALE CONOSCO</h2>

      <div className="grid md:grid-2 gap-8">
        {/* Formulário */}
        <div className="bg-blue-50 p-6 rounded border">
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Nome:</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="block font-medium">E-mail:</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                placeholder="Digite seu email"
              />
            </div>

            <div>
              <label className="block font-medium">Assunto:</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div>
              <label className="block font-medium">Mensagem:</label>
              <textarea
                rows={4}
                className="w-full border rounded px-3 py-2"
                placeholder="Escreva sua mensagem"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Informações */}
        <div className="bg-blue-50 p-6 rounded border space-y-6">
          <div className="flex items-start space-x-3">
            <MapPin className="w-6 h-6 text-blue-600" />
            <p>
              Rua lorem ipsum, 123 <br />
              Bairro lorem ipsum <br />
              Cidade lorem ipsum, 12345-678
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-blue-600" />
            <p>loremipsum.ipsum@gmail.com</p>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 text-blue-600" />
            <p>(99) 99999-9999</p>
          </div>
        </div>
      </div>
    </div>
  );
}
