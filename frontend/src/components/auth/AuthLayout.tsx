import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/layout/Container";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <>
      <Navbar />

      <section className="py-6">
        <Container>
          <div className="mx-auto max-w-md">
            <div className="card bg-base-100 border border-base-300 rounded-2xl shadow-sm">
              <div className="card-body">
                <h1 className="text-center text-3xl font-bold">{title}</h1>

                <p className="text-center opacity-70">{subtitle}</p>

                {children}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default AuthLayout;
