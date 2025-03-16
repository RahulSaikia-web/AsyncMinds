import React from 'react'
import Navbbar from '../components/Navbbar'

function Terms() {
  return (
    <>
    <Navbbar />
    <div className="container p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms and Conditions</h1>
      <p className="text-gray-600 mb-4"><strong>Last Updated:</strong> [Insert Date]</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">1. Acceptance of Terms:</h2>
      <p className="text-gray-600">Using our services means you agree to comply with these terms.</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">2. Services Provided:</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Web Development</li>
        <li>Web Design</li>
        <li>UI/UX</li>
        <li>Mobile App Development</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">3. User Responsibilities:</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Provide accurate information.</li>
        <li>Use services lawfully.</li>
        <li>Do not harm our website or services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">4. Intellectual Property:</h2>
      <p className="text-gray-600">All content, logos, and designs are the property of AsyncMinds. Do not copy, modify, or distribute without permission.</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">5. Payment and Refund Policy:</h2>
      <p className="text-gray-600">Payment terms are outlined in individual agreements. Refunds are at our discretion.</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">6. Limitation of Liability:</h2>
      <p className="text-gray-600">We are not liable for any direct, indirect, or incidental damages resulting from the use of our services.</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">7. Termination:</h2>
      <p className="text-gray-600">We may suspend or terminate access if you violate these terms.</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">8. Governing Law:</h2>
      <p className="text-gray-600">These terms are governed by the laws of [Your Country/State].</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">9. Changes to Terms:</h2>
      <p className="text-gray-600">We may update these terms periodically. Continued use means acceptance of updated terms.</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">10. Contact Us:</h2>
      <p className="text-gray-600">For questions, contact us at <strong>[Your Email Address]</strong></p>
    </div>
    </>
  )
}

export default Terms
