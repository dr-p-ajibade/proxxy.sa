import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy notice", description: "How Proxxy Media handles the personal information you send through this website." };
const SECTIONS: [string, string][] = [
  ["What we collect", "When you use the consultation form we collect what you need help with, your name, organisation, email address, type of organisation and country, and anything you choose to add, such as a phone number or a note."],
  ["Why we collect it", "Only to reply to you and arrange your consultation. We do not sell it or share it for marketing."],
  ["Where it is kept", "Your request is sent to our business mailbox and a copy is stored on our web hosting account, both with Hostinger. Only Proxxy Media can see them."],
  ["How long we keep it", "If you do not become a client, we delete your details within 12 months of your last contact with us. If you do, they become part of your client file and follow the retention period agreed with you."],
  ["Your rights", `You can ask to see, correct or delete what we hold about you by emailing ${SITE.email}. You may complain to the Information Regulator of South Africa or, in the EU, to your national data protection authority.`],
  ["Cookies", "This site sets no tracking or advertising cookies. It remembers your currency choice in your own browser only."],
];
export default function Privacy() {
  return (
    <>
      <PageHead label="Privacy notice" title={<>Your information, <em>handled carefully.</em></>}>Last updated 19 November 2026. This notice follows POPIA and, for clients in Europe, the GDPR.</PageHead>
      <div className="wrap py-14 md:py-20">
        <div className="max-w-[44rem]">
          {SECTIONS.map(([h, t]) => (
            <section key={h} className="border-t border-ink/15 py-6"><h2 className="font-display text-2xl">{h}</h2><p className="mt-2 leading-relaxed text-ink/80">{t}</p></section>
          ))}
        </div>
      </div>
    </>
  );
}
