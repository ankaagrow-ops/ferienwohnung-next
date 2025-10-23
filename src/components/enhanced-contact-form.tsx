'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar, CheckCircle, AlertCircle, Loader2, Shield } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  checkin: string;
  checkout: string;
  guests: number;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  checkin?: string;
  checkout?: string;
  guests?: string;
  message?: string;
  privacy?: string;
  general?: string;
}

export function EnhancedContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: 2,
    message: "",
    privacy: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Enhanced Email Validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Enhanced Phone Validation
  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  // Date Validation
  const validateDates = (checkin: string, checkout: string): boolean => {
    if (!checkin || !checkout) return false;
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return checkinDate >= today && checkoutDate > checkinDate;
  };

  // Minimum Stay Validation
  const validateMinimumStay = (checkin: string, checkout: string): boolean => {
    if (!checkin || !checkout) return false;
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const diffTime = Math.abs(checkoutDate.getTime() - checkinDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 2;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name muss mindestens 2 Zeichen lang sein";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    // Phone validation
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Bitte geben Sie eine gültige Telefonnummer ein";
    }

    // Date validation
    if (!formData.checkin) {
      newErrors.checkin = "Check-in Datum ist erforderlich";
    } else if (!validateDates(formData.checkin, formData.checkout)) {
      newErrors.checkin = "Check-in muss vor Check-out liegen";
      newErrors.checkout = "Check-out muss nach Check-in liegen";
    } else if (!validateMinimumStay(formData.checkin, formData.checkout)) {
      newErrors.checkout = "Mindestaufenthalt sind 2 Nächte";
    }

    if (!formData.checkout) {
      newErrors.checkout = "Check-out Datum ist erforderlich";
    }

    // Guests validation
    if (formData.guests < 1 || formData.guests > 6) {
      newErrors.guests = "Anzahl der Gäste muss zwischen 1 und 6 liegen";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Nachricht muss mindestens 10 Zeichen lang sein";
    }

    // Privacy validation
    if (!formData.privacy) {
      newErrors.privacy = "Sie müssen der Datenschutzerklärung zustimmen";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call with better error handling
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate
          if (Math.random() > 0.1) {
            resolve(true);
          } else {
            reject(new Error('Server error'));
          }
        }, 2000);
      });

      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkin: "",
        checkout: "",
        guests: 2,
        message: "",
        privacy: false
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-warm-50/40 to-cozy-50/30 py-24">
      {/* Warme, organische Hintergrund-Elemente */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(139,21,56,0.04),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(212,175,55,0.03),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(184,154,115,0.02),transparent_80%)]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-gray-900 mb-16 leading-tight"
        >
          Lassen Sie uns sprechen
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-gray-900/10 border border-cream-200/50 p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-100 rounded-xl">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Erzählen Sie uns von Ihren Plänen</h3>
                <p className="text-gray-600 mt-1">Wir freuen uns darauf, Sie kennenzulernen</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                    errors.name 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="Ihr vollständiger Name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                    errors.email 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="ihre@email.de"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                    errors.phone 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="+49 123 456789"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Date Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-gray-700 mb-2">
                    Anreise *
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    value={formData.checkin}
                    onChange={(e) => handleInputChange('checkin', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                      errors.checkin 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                    }`}
                  />
                  {errors.checkin && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.checkin}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-gray-700 mb-2">
                    Abreise *
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    value={formData.checkout}
                    onChange={(e) => handleInputChange('checkout', e.target.value)}
                    min={formData.checkin || new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                      errors.checkout 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                    }`}
                  />
                  {errors.checkout && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.checkout}
                    </p>
                  )}
                </div>
              </div>

              {/* Guests Field */}
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                  Anzahl der Gäste *
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
                    errors.guests 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Gast' : 'Gäste'}</option>
                  ))}
                </select>
                {errors.guests && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.guests}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="Was möchten Sie in Hambach erleben? Haben Sie besondere Wünsche?"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacy}
                  onChange={(e) => handleInputChange('privacy', e.target.checked)}
                  className={`mt-1 h-4 w-4 rounded border transition-colors ${
                    errors.privacy 
                      ? 'border-red-300 text-red-600 focus:ring-red-500' 
                      : 'border-gray-300 text-primary-600 focus:ring-primary-500'
                  }`}
                />
                <label htmlFor="privacy" className="text-sm text-gray-900">
                  Ich habe die <a href="/datenschutz" className="text-primary-600 hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
                </label>
              </div>
              {errors.privacy && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.privacy}
                </p>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-8 py-4 rounded-xl text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-3"
                whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5" />
                    Nachricht senden
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-green-600 font-medium bg-green-50 p-4 rounded-xl"
                >
                  <CheckCircle className="h-5 w-5" />
                  Vielen Dank! Wir freuen uns darauf, von Ihnen zu hören und melden uns bald.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-red-600 font-medium bg-red-50 p-4 rounded-xl"
                >
                  <AlertCircle className="h-5 w-5" />
                  Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-gray-900/10 border border-cream-200/50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-Mail</p>
                    <p className="text-gray-600">eva.dirion@gmx.net</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <p className="text-gray-600">+49 172 8049269</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600">Schloßstraße 18<br />67434 Neustadt an der Weinstraße</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Warum bei uns buchen?</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Persönlicher Service & Beratung
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Direkte Kommunikation mit den Gastgebern
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Beste Preise ohne Vermittlungsgebühren
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Flexible Buchungsbedingungen
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
