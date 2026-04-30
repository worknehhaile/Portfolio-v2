"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "${process.env.NEXT_PUBLIC_API_URL}/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSuccess(""), 4000);
      } else {
        setError(data.error || "Failed to send");

        setTimeout(() => setError(""), 4000);
      }
    } catch (err) {
      setError("Something went wrong");

      setTimeout(() => setError(""), 4000);
    }

    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen px-6 py-24 scroll-mt-20 flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 uppercase tracking-[4px] mb-3">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Let Us Build Something Together
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Whether you have a project idea, collaboration opportunity, or
            simply want to connect, feel free to send a message.
          </p>

          <div className="mt-8 space-y-4 text-gray-300">
            <p>📧 Email: worknehhaile123@gmail.com</p>
            <p>📍 Addis Ababa, Ethiopia</p>
            <p>💼 Open to freelance & opportunities</p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Success Notification */}
          {success && (
            <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
              <div className="bg-green-500/15 border border-green-500 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold">Message Sent</h4>
                  <p className="text-sm text-gray-300">
                    Your message was delivered successfully.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Notification */}
          {error && (
            <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
              <div className="bg-red-500/15 border border-red-500 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center font-bold">
                  !
                </div>

                <div>
                  <h4 className="font-semibold">Failed</h4>
                  <p className="text-sm text-gray-300">
                    Something went wrong. Try again.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/70 backdrop-blur-md p-8 rounded-3xl border border-gray-800 shadow-2xl space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-800 text-white outline-none border border-transparent focus:border-gray-500 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-800 text-white outline-none border border-transparent focus:border-gray-500 transition"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-800 text-white outline-none h-36 border border-transparent focus:border-gray-500 transition"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-white text-black font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
