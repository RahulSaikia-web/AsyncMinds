import React from 'react'
import Navbbar from '../components/Navbbar'

function Policy() {
  return (
    <>
    <Navbbar />
    <div className="container p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="text-gray-600 mb-4"><strong>Last Updated:</strong> 3/16/2025</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">1. Information We Collect:</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Personal Information – Name, email, phone number, etc.</li>
        <li>Usage Data – IP address, browser type, pages visited, etc.</li>
        <li>Cookies – Used to improve user experience and analyze performance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">2. How We Use Your Information:</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>To provide and manage our services.</li>
        <li>To communicate with you and respond to inquiries.</li>
        <li>To improve our website and services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">3. How We Share Your Information:</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Service Providers – For website hosting and support.</li>
        <li>Legal Authorities – If required by law.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">4. Data Security:</h2>
      <p className="text-gray-600">We take reasonable steps to protect your data, but no online system is 100% secure.</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">5. Your Rights:</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Access, update, or delete your data.</li>
        <li>Withdraw consent for data processing.</li>
        <li>Opt-out of marketing communications.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">6. Changes to This Policy:</h2>
      <p className="text-gray-600">We may update this policy from time to time.</p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-700">7. Contact Us:</h2>
      <p className="text-gray-600">For questions, contact us at <strong>asyncminds.co@gmail.com</strong></p>
    </div>
    </>
  )
}

export default Policy
