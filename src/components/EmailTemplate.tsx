import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div className="bg-gray-100 p-6">
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <div className="bg-indigo-600 text-white text-center py-6 rounded-t-lg">
        <h1 className="text-2xl font-bold">Bienvenue, {firstName} !</h1>
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-lg">
          Merci de nous avoir contactés. Voici les détails de votre message :
        </p>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mt-4">
          <p className="text-gray-700">
            <strong>Message :</strong> {message}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            <strong>Email :</strong> {email}
          </p>
        </div>
      </div>
      <div className="p-6 border-t border-gray-300">
        <p className="text-gray-600 text-sm">
          Nous vous répondrons dès que possible.
        </p>
        <p className="mt-4 text-gray-700">
          Cordialement,
          <br />
          <strong>L'équipe Support</strong>
        </p>
      </div>
      <div className="bg-gray-200 text-gray-600 text-center py-4 rounded-b-lg text-sm">
        © 2025 Votre Société. Tous droits réservés.
      </div>
    </div>
  </div>
);
