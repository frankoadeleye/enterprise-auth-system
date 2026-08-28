import Navbar from "@/components/Navbar";
import Container from "@/components/layout/Container";
import Footer from "@/components/Footer";
import { Link } from "react-router";

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "JWT",
  "Zustand",
  "Mailtrap",
  "Tailwind CSS",
  "DaisyUI",
];

const features = [
  "User Registration",
  "Secure Login",
  "Email Verification",
  "Password Reset",
  "Protected Routes",
  "JWT Authentication",
  "Cookie Sessions",
  "Global Auth State",
];

function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="hero min-h-[75vh]">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Enterprise Authentication System
            </h1>

            <p className="py-6 text-lg opacity-80 md:text-xl">
              A production-ready authentication platform demonstrating modern
              frontend and backend authentication workflows.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/signup" className="btn btn-primary rounded-full px-8">
                Try Live Demo
              </Link>

              <a href="#features" className="btn btn-outline rounded-full px-8">
                Explore Features
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}

      <section id="features" className="py-20">
        <Container>
          <h2 className="mb-10 text-center text-3xl font-bold">Features</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="card border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body items-center text-center">
                  <h3 className="font-semibold">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TECH STACK */}

      <section className="py-20">
        <Container>
          <h2 className="mb-10 text-center text-3xl font-bold">
            Technology Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <div key={tech} className="badge badge-primary badge-lg">
                {tech}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROJECT OVERVIEW */}

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-base-300 bg-base-200 p-10">
            <h2 className="text-3xl font-bold">About This Project</h2>

            <p className="mt-6 opacity-80">
              EAS demonstrates a complete authentication flow including account
              creation, email verification, login, logout, password recovery,
              protected routes, and persistent authentication state management.
            </p>

            <p className="mt-4 opacity-80">
              Built as a portfolio project to showcase production-style
              authentication architecture using React, TypeScript, Node.js,
              Express, MongoDB, Zustand, and JWT-based authentication.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-base-300 bg-base-200 p-10 text-center">
            <h2 className="text-3xl font-bold">Test The Authentication Flow</h2>

            <p className="mt-4 opacity-80">
              Create an account, verify your email, login, and test the password
              recovery workflow.
            </p>

            <Link
              to="/signup"
              className="btn btn-primary mt-8 rounded-full px-8"
            >
              Get Started
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
