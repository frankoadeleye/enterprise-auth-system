import { Link } from "react-router";

interface AuthFooterLinksProps {
  text: string;
  linkText: string;
  to: string;
}

function AuthFooterLinks({ text, linkText, to }: AuthFooterLinksProps) {
  return (
    <p className="mt-6 text-center">
      {text}{" "}
      <Link to={to} className="font-semibold text-(--color-primary-text)">
        {linkText}
      </Link>
    </p>
  );
}

export default AuthFooterLinks;
