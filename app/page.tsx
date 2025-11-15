
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeroSection />

      <section className="mt-10 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Where & how she works */}
        <div className="rounded-2xl p-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold winky-font">Mobile & In-Office Options</h3>
          <p className="text-sm text-foreground/80 winky-font">
            Flat mobile travel fee within:
            <br />
            <span className="font-medium winky-font">
              Menifee, Murrieta, Perris, Temecula, Lake Elsinore, and Wildomar.
            </span>
          </p>
          <p className="text-sm text-foreground/80 winky-font">
            Prefer to come to her instead? In-office appointments are available by
            appointment only in Menifee.
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=33480+Wright+Rd,+Menifee,+CA+92584"
            target="_blank"
            rel="noopener noreferrer"
            className="winky-font mt-2 inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition"
          >
            Get Directions
          </a>
        </div>

        {/*Schedule */}
        <div className="rounded-2xl p-6 flex flex-col gap-3">
          <h3 className="winky-font text-xl font-semibold">Availability & Hours</h3>
          <p className="winky-font text-sm text-foreground/80">
            Flexible scheduling to fit your day.
          </p>
          <ul className="winky-font text-sm text-foreground/80 space-y-1">
            <li>
              <span className="winky-font font-medium">Daytime:</span> Standard appointments by
              request.
            </li>
            <li>
              <span className="winky-font font-medium">After hours:</span> 5:00 PM – 10:00 PM
            </li>
          </ul>
          <p className="winky-font text-xs text-foreground/70">
            After-hours mobile appointments include an additional fee ranging from{" "}
            <span className="winky-font font-medium">$40 – $80</span>, depending on time and
            location.
          </p>
        </div>

        {/* reviews */}
        <div className="rounded-2xl p-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold winky-font">Our Reputation</h3>
          <p className="text-sm text-foreground/80 winky-font">
            Clients choose King&apos;s Signing for reliability, clear communication,
            and a calm, professional signing experience.
          </p>
          <p className="text-sm text-foreground/80 winky-font">
            See what others are saying and read real client feedback.
          </p>
          <a
            href="https://www.google.com/search?q=King%27s+Signing+Notary+Menifee"
            target="_blank"
            rel="noopener noreferrer"
            className="winky-font mt-2 inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-foreground hover:text-background transition"
          >
            View Google Reviews
          </a>
        </div>
      </div>
    </section>
    <Services/>
    </main>
    );
  }
