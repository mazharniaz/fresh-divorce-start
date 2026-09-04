import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/hero-advisor.jpg";
import coverageImage from "@/assets/us-coverage.jpg";
import expertiseImage from "@/assets/expertise-desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Certified Divorce Financial Advisors & Forensic Accountants | Divorce Logic",
      },
      {
        name: "description",
        content:
          "CDFA®-certified divorce financial advisors and forensic accounting specialists. Asset division, business valuations, QDROs and hidden-asset investigation. NJ, NY, MA & nationwide.",
      },
      {
        property: "og:title",
        content: "Certified Divorce Financial Advisors & Forensic Accountants | Divorce Logic",
      },
      {
        property: "og:description",
        content:
          "Data-driven divorce financial analysis that works alongside your attorney. Confidential consultations, nationwide.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const CONSULT_URL = "https://www.divorcelogicllc.com/consultation-booking";

const badges = [
  "Veteran-owned & operated",
  "Confidential & secure",
  "25+ years of experience",
  "Protected client data",
];

const capabilities = [
  "Identifying and valuing assets",
  "Analyzing income and debts",
  "Investigating financial misconduct",
  "Calculating support and maintenance",
  "Preparing and reviewing financial documents",
  "Supporting mediation, settlement, and litigation",
  "Tax impact reviews",
  "QDRO drafting",
  "Post-divorce guidance",
];

const services = [
  {
    n: "01",
    title: "Business Valuations for Divorce",
    body: "When a closely held business, professional practice, or partnership is part of the marital estate, its valuation requires specialized expertise. Our MAFF®- and CVA-credentialed analysts deliver court-ready business valuations that hold up under scrutiny — working in coordination with your legal team throughout the process.",
    cta: "Request a Business Valuation",
    href: "https://www.divorcelogicllc.com/business-valuations-for-divorce",
  },
  {
    n: "02",
    title: "Divorce Financial Planning",
    body: "Understanding the financial implications of a proposed settlement before you sign is one of the most important steps you can take. Our CDFA®-certified analysts model settlement scenarios, evaluate long-term financial impact, and provide the clarity to make informed decisions. Not just in the moment, but for years ahead.",
    cta: "Explore Financial Planning",
    href: "https://www.divorcelogicllc.com/divorce-financial-planning",
  },
  {
    n: "03",
    title: "Financial Forensics & Hidden Assets",
    body: "If you have reason to believe financial information is being concealed or misrepresented, our forensic accounting team investigates. We trace undisclosed income, identify dissipated and hidden assets, and produce documented findings that support your attorney's case. Our MAFF®-certified specialists serve clients across NJ, NY, MA, and nationwide.",
    cta: "Speak with a Forensic Specialist",
    href: "https://www.divorcelogicllc.com/financial-forensics",
  },
  {
    n: "04",
    title: "QDRO & Retirement Account Division",
    body: "Retirement accounts are often among the most significant assets in a divorce, and dividing them correctly requires a court-approved document called a Qualified Domestic Relations Order (QDRO). Errors in preparation or execution can result in significant tax penalties and lost benefits. Our team prepares accurate, plan-compliant QDROs and works directly with plan administrators to protect your retirement assets throughout the process.",
    cta: "Avoid Costly QDRO Errors",
    href: "https://www.divorcelogicllc.com/qdro-drafting-services-for-divorce",
  },
  {
    n: "05",
    title: "Mediation & Collaborative Support",
    body: "For clients pursuing mediation or collaborative divorce, access to neutral, objective financial analysis supports clearer communication and more durable agreements. Our team provides financial modeling, asset analysis, and settlement scenario review that you and your spouse can rely on, working in coordination with your mediator and collaborative attorneys throughout the process.",
    cta: "Learn About Mediation Support",
    href: "https://www.divorcelogicllc.com/divorce-mediation-collaborative-divorce-financial-experts",
  },
];

const designations = [
  "CDFA®",
  "CVA®",
  "MAFF®",
  "CQS®",
  "CFP®",
  "ChFC®",
  "WMCP®",
  "CFA®",
  "CFE",
];

const stats = [
  { value: "8+", label: "Designations & certifications" },
  { value: "1000s", label: "Of divorce cases supported" },
  { value: "50", label: "State coverage for clients" },
];

const testimonials = [
  {
    quote:
      "Working with Divorce Logic Services was an exceptional experience during one of the most challenging times of my life. Mr. Mota and his team combined professionalism with genuine compassion, providing steady guidance and expertise at every stage. Their skillful management, particularly in forensic accounting, led to a fair and positive resolution.",
    name: "Former client",
  },
  {
    quote:
      "He gave me more clarity, comfort, and calm than I ever expected — honestly, more than I received from my own attorney. He explained every detail in a way that made complex financial information understandable and helped me feel in control during an otherwise chaotic process.",
    name: "Jen N.",
  },
  {
    quote:
      "The best thing that happened during my divorce process was connecting with Jay Mota. He was generous with his time, available for questions, spent time to learn the details of my situation and provided excellent guidance along the way. I highly recommend Jay, it was money well spent.",
    name: "Judi R.",
  },
];

const faqs = [
  {
    q: "What does a divorce financial advisor do?",
    a: "Unlike a general financial planner, a divorce financial advisor works alongside your attorney during the divorce itself, not just on long-term investment strategy afterward. That means valuing assets, modeling how different settlement offers actually play out, and flagging the tax consequences before you agree to anything, not after.",
  },
  {
    q: "How can a divorce financial advisor help during mediation or litigation?",
    a: "The role shifts depending on the setting. In mediation, we act as a neutral resource for both spouses, running asset valuations and settlement comparisons that both sides can trust. In litigation, we work specifically with your attorney, preparing documented financial analysis and, when needed, providing expert testimony to support your case.",
  },
  {
    q: "What role do forensic accounting experts play in divorce cases?",
    a: "Forensic accounting experts trace where the money actually went: deferred compensation, business distributions run through a company instead of taken as salary, and income shifted to related entities are common patterns in cases involving business owners or executives. We document findings using bank records, tax returns, and business financials so your attorney has verified, court-ready analysis rather than a guess.",
  },
  {
    q: "When should I hire a divorce financial advisor?",
    a: "Before you exchange financial disclosures or sign anything, ideally. Early involvement gives us time to gather and organize your financial documents, identify every marital asset and liability, and model how different settlement structures play out years down the line, not just on paper today.",
  },
  {
    q: "What qualifications should I look for in forensic accounting experts?",
    a: "Look for credentials like Master Analyst in Financial Forensics (MAFF®), Certified Fraud Examiner (CFE®), or CPA, paired with real experience handling complex financial records, not just the certification alone. At Divorce Logic, our forensic team holds MAFF® credentials and works directly alongside family law attorneys on every engagement.",
  },
  {
    q: "Can a divorce financial advisor help with tax planning after divorce?",
    a: "A divorce financial planner can walk you through the tax side of asset division: capital gains exposure, taxes on retirement account withdrawals, and how your filing status changes. We also model post-divorce cash flow so you can see the tax impact in practice, not just in theory.",
  },
  {
    q: "Do you offer virtual consultations?",
    a: "We offer secure phone and virtual consultations to clients throughout New Jersey, New York, Massachusetts, and nationwide. Remote meetings are fully confidential and provide the same depth of analysis as in-person engagements.",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [slide, setSlide] = useState(0);
  const total = testimonials.length;
  const go = (dir: number) => setSlide((s) => (s + dir + total) % total);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-rule/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl leading-none">Divorce Logic</span>
            <span className="hidden text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase sm:inline">
              LLC
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a className="gold-underline hover:text-foreground" href="#services">
              Services
            </a>
            <a className="gold-underline hover:text-foreground" href="#expertise">
              Expertise
            </a>
            <a className="gold-underline hover:text-foreground" href="#clients">
              Clients
            </a>
            <a className="gold-underline hover:text-foreground" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            href={CONSULT_URL}
            className="rounded-sm bg-ink px-5 py-2.5 text-xs tracking-[0.12em] text-ink-foreground uppercase transition-colors hover:bg-ink-soft"
          >
            Consultation
          </a>
        </div>
        <nav className="flex items-center gap-6 overflow-x-auto border-t border-rule/60 px-6 py-2.5 text-xs tracking-[0.08em] whitespace-nowrap text-muted-foreground uppercase md:hidden">
          <a href="#services">Services</a>
          <a href="#expertise">Expertise</a>
          <a href="#clients">Clients</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>


      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-20 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-10 lg:pt-28 lg:pb-24">
          <div className="fade-up">
            <p className="eyebrow text-gold">Certified Divorce Financial Advisors</p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem]">
              The financial truth of your divorce,{" "}
              <em className="text-gold-soft italic">documented</em>.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
              A divorce financial advisor, most often credentialed as a CDFA®, analyzes the money
              side of your divorce: asset division, retirement accounts, spousal support, and the
              tax consequences of each option. Our team pairs that with forensic accounting, so the
              numbers your attorney negotiates with are accurate and complete.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CONSULT_URL}
                className="rounded-sm bg-gold px-7 py-3.5 text-xs tracking-[0.14em] text-ink uppercase transition-transform hover:-translate-y-0.5"
              >
                Schedule a Confidential Consultation
              </a>
              <a
                href="#services"
                className="gold-underline py-3.5 text-xs tracking-[0.14em] text-ink-foreground/80 uppercase"
              >
                See what we do
              </a>
            </div>
            <ul className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 border-t border-ink-foreground/15 pt-7 text-xs tracking-wide text-ink-foreground/60">
              {badges.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-sm border border-gold/25" aria-hidden="true" />
            <img
              src={heroImage}
              alt="Divorce financial advisor reviewing settlement documents"
              width={1280}
              height={1600}
              className="relative aspect-[4/5] w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-muted-foreground">Who we are</p>
            <h2 className="mt-5 text-4xl leading-tight lg:text-5xl">
              We work beside your attorney, not around them.
            </h2>
            <div className="mt-8 overflow-hidden rounded-sm border border-rule bg-ink">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/-60dAXvgwlc"
                  title="Our Why: Financial Clarity & Confidence — Divorce Logic"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
            <p className="mt-3 text-xs tracking-[0.08em] text-muted-foreground uppercase">
              Our why: financial clarity &amp; confidence
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              At Divorce Logic, we are a team of divorce financial analysts and forensic accounting
              specialists who work alongside your family law attorney or mediator to provide the
              full financial picture in your divorce proceedings.
            </p>
            <p>
              Our team holds CDFA®, CVA®, MAFF®, CQS®, CFP®, ChFC®, WMCP®, CFA®, and CFE
              designations. We are based in Montvale, New Jersey, and serve clients throughout New
              York, Massachusetts, and nationwide. We provide data-driven financial analysis that
              supports effective, well-informed outcomes for you and your legal team.
            </p>
            <ul className="grid gap-x-8 gap-y-3 pt-4 sm:grid-cols-2">
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 border-t border-rule pt-3 text-sm text-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 border-y border-rule bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted-foreground">What we do</p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-tight lg:text-5xl">
                Five ways we protect the numbers in your case
              </h2>
            </div>
            <a
              href="https://www.divorcelogicllc.com/divorce-financial-planning-and-asset-division"
              className="gold-underline text-xs tracking-[0.14em] text-muted-foreground uppercase"
            >
              All divorce financial services
            </a>
          </div>

          <div className="mt-14 divide-y divide-rule border-t border-rule">
            {services.map((s) => (
              <article
                key={s.n}
                className="group grid gap-6 py-10 transition-colors lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-12"
              >
                <span className="font-display text-2xl text-gold">{s.n}</span>
                <div className="max-w-3xl">
                  <h3 className="text-2xl lg:text-3xl">{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
                <a
                  href={s.href}
                  className="shrink-0 self-center rounded-sm border border-ink/25 px-6 py-3 text-center text-xs tracking-[0.12em] uppercase transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-ink-foreground"
                >
                  {s.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="scroll-mt-20 bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-10 lg:py-28">
          <div>
            <p className="eyebrow text-gold">The expertise behind every engagement</p>
            <h2 className="mt-5 max-w-3xl text-4xl leading-tight lg:text-5xl">
              Credentials that hold up when the numbers are challenged
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-ink-foreground/70">
              Divorce Logic's team holds designations spanning divorce financial planning, forensic
              accounting, wealth management, business valuation, and QDRO analysis. From
              straightforward financial reviews to the most complex cases, we have the credentials
              and experience to support you.
            </p>

            <ul className="mt-10 flex flex-wrap gap-3">
              {designations.map((d) => (
                <li
                  key={d}
                  className="rounded-sm border border-ink-foreground/20 px-4 py-2 text-sm text-ink-foreground/85"
                >
                  {d}
                </li>
              ))}
            </ul>

            <dl className="mt-14 grid gap-10 border-t border-ink-foreground/15 pt-12 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-5xl text-gold-soft lg:text-6xl">{s.value}</dt>
                  <dd className="mt-3 text-sm text-ink-foreground/60">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative self-stretch">
            <div className="absolute -inset-3 rounded-sm border border-gold/25" aria-hidden="true" />
            <img
              src={expertiseImage}
              alt="Financial statements and analysis prepared for a divorce engagement"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative h-full min-h-80 w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="clients" className="scroll-mt-20 mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <p className="eyebrow text-muted-foreground">Hear from our clients</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full border border-rule transition-colors hover:border-ink hover:bg-ink hover:text-ink-foreground"
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full border border-rule transition-colors hover:border-ink hover:bg-ink hover:text-ink-foreground"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rule-top pt-10">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {testimonials.map((t) => (
              <figure key={t.name} className="w-full shrink-0 px-1 text-center">
                <span className="font-display text-5xl text-gold" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 text-xs tracking-[0.16em] uppercase">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setSlide(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === slide ? "w-8 bg-gold" : "w-3 bg-rule"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="border-y border-rule bg-secondary/60">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <img
            src={coverageImage}
            alt="Divorce Logic serves divorce financial advisory clients in all 50 states"
            width={1400}
            height={900}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
          <div>
            <p className="eyebrow text-muted-foreground">Serving clients where they are</p>
            <h2 className="mt-5 text-4xl leading-tight lg:text-5xl">
              Montvale, New Jersey — and all fifty states
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Divorce Logic is based in Montvale, New Jersey, with in-person availability across New
              Jersey, New York, and Massachusetts. Clients nationwide work with us through secure,
              confidential remote meetings, with the same depth of analysis regardless of location.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Wherever you are located, we work collaboratively with your family law attorney,
              mediator, or financial planner throughout the process.
            </p>
            <a
              href={CONSULT_URL}
              className="mt-9 inline-block rounded-sm bg-ink px-7 py-3.5 text-xs tracking-[0.14em] text-ink-foreground uppercase transition-colors hover:bg-ink-soft"
            >
              Schedule a Confidential Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-muted-foreground">FAQ</p>
            <h2 className="mt-5 text-4xl leading-tight lg:text-5xl">Frequently asked questions</h2>
          </div>
          <div className="border-t border-rule">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-rule">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg leading-snug">{f.q}</span>
                    <span
                      className={`mt-1 shrink-0 text-gold transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-base leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <p className="eyebrow text-gold">Take the next step</p>
          <h2 className="mt-6 text-4xl leading-tight lg:text-6xl">
            Divorce is one of the most financially consequential events in a person's life.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-ink-foreground/70">
            Having the right financial team in place, one that works alongside your attorney and
            understands the full picture, can make a meaningful difference in your outcome. We offer
            confidential consultations to help you understand where you stand and what questions to
            ask.
          </p>
          <a
            href={CONSULT_URL}
            className="mt-10 inline-block rounded-sm bg-gold px-8 py-4 text-xs tracking-[0.14em] text-ink uppercase transition-transform hover:-translate-y-0.5"
          >
            Schedule a Confidential Consultation
          </a>
        </div>
      </section>

      <footer className="border-t border-rule bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
          <div>
            <span className="font-display text-2xl text-foreground">Divorce Logic LLC</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Specialized divorce financial expertise — serving clients in all 50 states. Divorce
              financial experts offering personalized guidance that bridges finance and law.
            </p>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="gold-underline hover:text-foreground" href="tel:+12015964005">
                  +1 201-596-4005
                </a>
              </li>
              <li>
                <a
                  className="gold-underline hover:text-foreground"
                  href="mailto:info@divorcelogicllc.com"
                >
                  info@divorcelogicllc.com
                </a>
              </li>
              <li>Montvale, New Jersey</li>
              <li>Serving NJ, NY, MA &amp; nationwide</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Company</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a className="gold-underline hover:text-foreground" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="gold-underline hover:text-foreground" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="gold-underline hover:text-foreground" href={CONSULT_URL}>
                  Schedule a free consultation
                </a>
              </li>
              <li>
                <a
                  className="gold-underline hover:text-foreground"
                  href="https://www.divorcelogicllc.com/contact"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted-foreground">Legal</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  className="gold-underline hover:text-foreground"
                  href="https://www.divorcelogicllc.com/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="gold-underline hover:text-foreground"
                  href="https://www.divorcelogicllc.com/terms-of-service"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="gold-underline hover:text-foreground"
                  href="https://www.divorcelogicllc.com/disclaimer"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  className="gold-underline hover:text-foreground"
                  href="https://www.divorcelogicllc.com/accessibility"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-rule">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground lg:px-10">
            <span>© {new Date().getFullYear()} Divorce Logic LLC. All rights reserved.</span>
            <span>Montvale, New Jersey · Serving NJ, NY, MA &amp; nationwide</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
