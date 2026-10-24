
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(event) {
    event.preventDefault();
    setMessage("");

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message || "Request completed.");
    } catch (error) {
      setMessage("Could not connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-6 md:px-10 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900">
          Stay Updated
        </h2>

        <p className="text-gray-600 mt-3">
          Want to see what I'm working on? Leave your email below.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mt-6 flex flex-col sm:flex-row justify-center gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
            className="px-4 py-3 border border-gray-300 rounded-md w-full sm:w-80 focus:outline-none focus:border-teal-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && (
          <p role="status" aria-live="polite" className="mt-4 text-gray-700">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
