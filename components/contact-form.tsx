"use client"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formId] = useState("manjwaqo") // Replace with your actual Formspree form ID
  const [state, handleSubmit] = useForm(formId)

  if (state.succeeded) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-8 text-center space-y-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="h-16 w-16 text-green-500" />
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        <Button onClick={() => window.location.reload()} className="mt-4 bg-red-600 hover:bg-red-700 text-white">
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <motion.input
          id="name"
          name="name"
          type="text"
          className="w-full px-3 py-2 bg-zinc-900 border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
          placeholder="Your Name"
          whileFocus={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.8)" }}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <motion.input
          id="email"
          name="email"
          type="email"
          className="w-full px-3 py-2 bg-zinc-900 border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
          placeholder="your@email.com"
          whileFocus={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.8)" }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 bg-zinc-900 border border-red-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
          placeholder="Your message..."
          whileFocus={{ scale: 1.02, borderColor: "rgba(239, 68, 68, 0.8)" }}
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      {state.errors?.length > 0 && (
        <motion.div
          className="p-3 bg-red-900/30 border border-red-500/30 rounded-md flex items-center gap-2 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="h-4 w-4 text-red-500" />
          <span className="text-red-400">Please fix the errors above and try again.</span>
        </motion.div>
      )}

      <Button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-all"
        disabled={state.submitting}
      >
        {state.submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
