import { redirect } from "next/navigation";

/**
 * Contact Us has been combined with About Us (/about#contact)
 * per executive design and architecture directives.
 */
export default function ContactPage() {
  redirect("/about#contact");
}
