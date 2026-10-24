import { ContactFormData, QuoteFormData } from '../types';

export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.push('Please provide a valid business email address.');
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.push('Please select a service of interest.');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message description must be at least 10 characters.');
  }

  if (!data.consentGiven) {
    errors.push('You must accept the privacy policy to submit an inquiry.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateQuoteForm(data: QuoteFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name is required.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.push('Please provide a valid work email address.');
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.push('Please choose a primary service required.');
  }

  if (!data.projectScope || data.projectScope.trim().length < 10) {
    errors.push('Please provide details on your project scope (minimum 10 characters).');
  }

  if (!data.consentGiven) {
    errors.push('Please accept the proposal verification terms to continue.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
