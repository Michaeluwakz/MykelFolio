
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export interface ContactFormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
  success: boolean;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation Error: Please check your input.",
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;
  const emailTo = 'Michaeluwakz23@gmail.com'; // Your email address to receive submissions

  // Nodemailer transport configuration
  // IMPORTANT: You MUST set these environment variables in your hosting environment
  // for email sending to work.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
    port: Number(process.env.SMTP_PORT || 587), // e.g., 587 for TLS, 465 for SSL
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your email address from the provider
      pass: process.env.SMTP_PASS, // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM || `"MykelFolio Contact" <noreply@example.com>`, // Sender address (must be a verified address with your provider)
    replyTo: email, // User's email address
    to: emailTo, // Your email address to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `
      You have received a new message from your portfolio contact form:

      Name: ${name}
      Email: ${email}
      Message:
      ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    // Check if essential SMTP environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn(
        'SMTP environment variables are not set. Email will not be sent. Simulating success.'
      );
      // Fallback to console log if SMTP is not configured for development/testing
      console.log("Contact Form Submitted (SMTP not configured):", validatedFields.data);
      
      // Simulate a delay and success as if email was sent
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        message: `Thank you, ${name}! Your message has been received (simulated). Please configure SMTP for actual email sending.`,
        success: true,
      };
    }

    await transporter.sendMail(mailOptions);
    console.log("Contact Form Email Sent:", validatedFields.data);

    return {
      message: `Thank you, ${name}! Your message has been sent successfully.`,
      success: true,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    let errorMessage = "Server Error: Could not send message. Please try again later.";
    if (error instanceof Error) {
        // Be careful not to expose sensitive error details to the client
        if (error.message.includes('credentials')) {
            errorMessage = "Server Error: Email configuration issue. Please contact support.";
        }
    }
    return {
      message: errorMessage,
      success: false,
      errors: { _form: [errorMessage] },
    };
  }
}

