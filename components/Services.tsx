import { MapPin } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-start px-6 py-40"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4  winky-font">Mobile Notary Services & Pricing</h2>
        <p className="text-lg text-foreground/80  winky-font">
          Convenient notarization on your schedule, whether Finess comes to you, or you
          meet at her office in Menifee.
        </p>
      </div>

      {/* 3 CARDS HERE */}
      <div className="mt-12 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">

        {/* CARD 1 – Services Offered */}
        <div className="rounded-2xl p-8 text-left">
          <h3 className="text-2xl font-semibold mb-3  winky-font">Services Offered</h3>

          <ul className="list-disc list-inside space-y-6 text-sm text-foreground/80  winky-font">
            <li>General acknowledgments & jurats</li>
            <li>Loan signing & real estate documents</li>
            <li>Power of attorney (POA)</li>
            <li>Healthcare directives</li>
            <li>Trusts, wills & estate documents</li>
            <li>Identity verification forms</li>
            <li>School forms & permission slips</li>
            <li>DMV / vehicle transfer documents</li>
          </ul>
        </div>

        {/* CARD 2 – Pricing */}
        <div className="rounded-2xl p-8 text-left">
          <h3 className="text-2xl font-semibold mb-3  winky-font">Pricing</h3>

          <ul className="space-y-6 text-sm text-foreground/80  winky-font">
            <li>
             $15 per signature
            </li>
            <li>
              $15+ per signature
            </li>
            <li>
             $15+ per signature
            </li>
            <li>
            $15+ per signature
            </li>
            <li>
            $15 per signature
            </li>
            <li>
            $15+ per signature
            </li>
            <li>
            $15 per signature
            </li>
            <li>
            $15 per signature
            </li>

            <li className="text-xs text-foreground/70 italic mt-2  winky-font">
              *Pricing depends on leght of documents.
            </li>
            <li className="text-xs text-foreground/70 italic mt-2  winky-font">
              After-hours appointments (5–10 PM) include an additional fee of $40–$80 depending on location.
            </li>
          </ul>
        </div>

        {/* CARD 3 – What to Bring */}
        <div className="rounded-2xl p-8 text-left">
          <h3 className="text-2xl font-semibold mb-3  winky-font">What to Bring</h3>

          <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80  winky-font">
            <li>Valid government-issued photo ID</li>
            <li>Completed but unsigned documents</li>
            <li>All signers must be present</li>
            <li>Any required witnesses</li>
            <li>Payment for services</li>
          </ul>

          <h4 className="font-semibold mt-5 mb-2  winky-font">In-Office Option</h4>
          <p className="text-sm text-foreground/80  winky-font">
            Meet at her Menifee office (by appointment only):
          </p>

          <p className="text-sm text-foreground/80 mt-1  winky-font">
            33480 Wright Rd.<br />
            Menifee, CA 92584
          </p>

          <div className="w-full h-40 rounded-2xl overflow-hidden shadow-sm mt-4 border border-foreground/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.464570157583!2d-117.169194!3d33.669906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db7f83deffedfd%3A0x83971e2c431e14f!2s33480%20Wright%20Rd%2C%20Menifee%2C%20CA%2092584!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=33480+Wright+Rd,+Menifee,+CA+92584"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-600 hover:underline mt-2  winky-font"
          >
            <MapPin size={16} />
            Get Directions
          </a>

          <p className="italic text-xs text-foreground/60 mt-1  winky-font">By appointment only.</p>
        </div>

      </div>
    </section>
  );
};

export default Services;

