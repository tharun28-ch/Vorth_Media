import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Policies Vorth Media" },
      {
        name: "description",
        content: "Terms, conditions, refund policy and disclaimers for Vorth Media services.",
      },
    ],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    id: "intro",
    title: "1. Introduction",
    body: (
      <>
        <p>These Terms of Service govern all service engagements between Vorth Media (referred to as 'the Company') and its clients (referred to as 'the Client'). By signing a Scope of Work Agreement or making any payment to Vorth Media, the Client acknowledges and agrees to be fully bound by these terms.</p>
        <p className="mt-4">These terms apply to all services offered by Vorth Media including Content Consulting, Content Production, and Performance Marketing. Service-specific terms are outlined in the relevant sections below.</p>
        <p className="mt-4">Vorth Media reserves the right to update these terms at any time. Clients will be notified of material changes. Continued engagement after notification constitutes acceptance of the revised terms.</p>
      </>
    )
  },
  {
    id: "services",
    title: "2. Our Services",
    body: (
      <>
        <p>Vorth Media provides services in the following categories. Each engagement is governed by a Scope of Work Agreement that documents the specific deliverables, timelines, and fees applicable to the Client.</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li><strong>Content Consulting</strong> strategy sessions, content planning, script guidance, and growth accountability.</li>
          <li><strong>Content Production</strong> done-for-you scripting, shooting, editing, and social media management.</li>
          <li><strong>Performance Marketing</strong> Meta Ads campaign management across Facebook and Instagram.</li>
        </ul>
        <p className="mt-4">For detailed information about service deliverables and pricing, please contact Vorth Media directly. All service terms are outlined in the Scope of Work Agreement provided to each client before engagement begins.</p>
      </>
    )
  },
  {
    id: "general",
    title: "3. General Terms",
    body: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-white">3.1 Contract Duration</h3>
          <p className="mt-2 text-white/80">All service engagements are subject to a minimum contract period as specified in the individual Scope of Work Agreement. No refunds or credits are provided for unused months within the minimum contract period. Beyond the minimum period, the engagement continues on a monthly basis unless either party provides written notice of termination at least 30 days in advance.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">3.2 Payment Terms</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
            <li>All invoices must be settled within 7 days of issuance.</li>
            <li>Failure to pay within 7 days of invoice receipt will result in Vorth Media suspending all work, sessions, editing, shooting, and posting until full payment is received.</li>
            <li>All fees paid to Vorth Media are non-refundable once work has commenced, regardless of cancellation or early termination.</li>
            <li>Applicable taxes including GST are charged separately over and above the stated fees where applicable.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">3.3 Work Initiation</h3>
          <p className="mt-2 text-white/80">Work commences only upon receipt of the advance payment as specified in the agreement and confirmation of an onboarding session or session booking. No work will begin prior to payment being received and confirmed.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">3.4 Scope Changes</h3>
          <p className="mt-2 text-white/80">Any change request made after approval of deliverables or outside the agreed scope will be treated as a new Change Request and billed separately at a mutually agreed rate. All Change Requests must be confirmed in writing before additional work begins.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">3.5 Project Hold</h3>
          <p className="mt-2 text-white/80">If the Client places the engagement on hold after work has commenced, Vorth Media reserves the right to charge for all work, intellectual property, scripts, editing, strategy, and deliverables completed up to that point. A hold does not pause billing obligations already incurred.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">3.6 Cancellation and Termination</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
            <li>Either party may terminate any engagement by providing 30 days written notice.</li>
            <li>The Client must communicate intent to cancel at least 30 days before the intended last working month.</li>
            <li>Early termination before completion of the minimum contract period requires the Client to settle all outstanding fees for the remaining contract months.</li>
            <li>All fees paid for services rendered up to the date of cancellation or termination are non-refundable.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">3.7 Revision Policy</h3>
          <p className="mt-2 text-white/80">Each deliverable includes a defined number of revision rounds as specified in the Scope of Work Agreement. Revisions beyond the included rounds will be billed separately at a rate mutually agreed upon by both parties prior to commencing the additional revision work.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">3.8 Delivery Timelines</h3>
          <p className="mt-2 text-white/80">All timelines communicated by Vorth Media are provided in good faith and are indicative in nature. They do not constitute a binding guarantee or assurance. Delays arising from client-side factors including delayed approvals, unavailability for shoot days, delayed content submissions, payment delays, or circumstances outside Vorth Media's control shall not be held against Vorth Media and will result in a corresponding extension of delivery timelines.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">3.9 Additional Services</h3>
          <p className="mt-2 text-white/80">Any services requested beyond the agreed scope must be confirmed in writing by both parties before work begins and will be billed at a separately agreed rate.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">3.10 Travel Charges</h3>
          <p className="mt-2 text-white/80">Shoot days that require travel beyond 30 kilometres from Vorth Media's base location in Chennai will incur additional travel charges. These charges will be communicated to the Client in advance and must be approved before the shoot is confirmed.</p>
        </div>
      </div>
    )
  },
  {
    id: "consulting",
    title: "4. Content Consulting Specific Terms",
    body: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-white">4.1 Service Description</h3>
          <p className="mt-2 text-white/80">The Content Consulting service provides regular one-on-one strategy sessions to help clients plan, create, and grow their personal brand content. Sessions are conducted via Google Meet or Zoom. This service covers content strategy planning, script guidance, data analysis, growth accountability, and platform guidance.</p>
          <p className="mt-2 text-white/80">This service does not include scripting, shooting, production, or editing of content. The Client is responsible for creating their own content.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">4.2 Payment</h3>
          <p className="mt-2 text-white/80">The full consulting program fee is payable in full before the first session commences. No sessions will be scheduled or conducted prior to payment confirmation.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">4.3 Session Policy</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
            <li>Sessions are non-refundable once started, regardless of cancellation or early termination.</li>
            <li>Rescheduling is permitted with a minimum of 24 hours prior notice.</li>
            <li>Sessions cancelled without sufficient notice will be considered forfeited for that period and cannot be carried forward.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">4.4 Exclusions</h3>
          <p className="mt-2 text-white/80">This service explicitly excludes scripting, shooting, production, editing, social media management, and paid advertising services. Ad spend, domain charges, third-party tool subscriptions, and external platform fees are not included.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">4.5 Results Disclaimer</h3>
          <p className="mt-2 text-white/80"><strong>Important:</strong> Vorth Media does not guarantee specific outcomes from the consulting program including but not limited to follower growth, views, reach, engagement, leads, or revenue. Content performance is influenced by multiple factors outside Vorth Media's control including platform algorithm changes, audience behaviour, and the consistency with which the Client implements guidance. Vorth Media commits to delivering professional strategy and guidance but cannot be held liable for specific performance outcomes not being achieved.</p>
        </div>
      </div>
    )
  },
  {
    id: "production",
    title: "5. Content Production Specific Terms",
    body: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-white">5.1 Service Description</h3>
          <p className="mt-2 text-white/80">Vorth Media's Content Production packages are done-for-you monthly services covering scripting, shooting, editing, and social media management. The specific deliverables for each package are outlined in the Client's Scope of Work Agreement.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">5.2 Minimum Contract</h3>
          <p className="mt-2 text-white/80">Content Production packages require a minimum commitment period as specified in the Scope of Work Agreement. Early termination before completion of the minimum period requires settlement of all outstanding fees for the remaining months.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">5.3 Payment Structure</h3>
          <p className="mt-2 text-white/80">Payment for Content Production packages is collected in two equal instalments each month. Fifty percent of the monthly fee is payable before work commences each month. The remaining fifty percent is payable before content goes live. No work will begin prior to receipt of the advance payment.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">5.4 Script and Shoot Process</h3>
          <p className="mt-2 text-white/80">Scripts will be prepared and sent to the Client for approval before any shoot day is scheduled. Shoot days are confirmed only after script approval is received in writing. The Client must be available on all confirmed shoot dates. Cancellation or rescheduling of a confirmed shoot day with less than 48 hours notice may result in a rescheduling fee.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">5.5 Exclusions</h3>
          <p className="mt-2 text-white/80">Content Production packages do not include paid advertising, ad spend, ad creative production for paid campaigns, domain charges, third-party tool subscriptions, or external platform fees.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">5.6 Results Disclaimer</h3>
          <p className="mt-2 text-white/80"><strong>Important:</strong> Vorth Media does not guarantee specific results from content production services including but not limited to follower growth, views, reach, engagement, leads, or revenue generated. Content performance on social media platforms is influenced by factors outside Vorth Media's control including algorithm changes, platform policy updates, market conditions, and audience behaviour. Vorth Media commits to delivering high-quality content but cannot be held liable for specific performance outcomes not being achieved. A minimum of 3 months of consistent content production is recommended before meaningful benchmarks can be established.</p>
        </div>
      </div>
    )
  },
  {
    id: "performance",
    title: "6. Performance Marketing Specific Terms",
    body: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-white">6.1 Service Description</h3>
          <p className="mt-2 text-white/80">Vorth Media's Performance Marketing service covers Meta Ads campaign management across Facebook and Instagram. The scope includes campaign strategy, campaign setup, audience research, ongoing optimisation, A/B testing, and monthly performance reporting. The specific scope is outlined in the Client's Scope of Work Agreement.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">6.2 Ad Creative Policy</h3>
          <p className="mt-2 text-white/80">Vorth Media's Performance Marketing retainer does not include the production of ad creatives. The Client is responsible for providing ad creatives for all campaigns. If the Client requires ad creative production, this can be commissioned as a separate paid service at an additionally agreed rate. No campaigns will be launched without approved creatives in place.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">6.3 Ad Spend</h3>
          <p className="mt-2 text-white/80">Ad spend is paid directly by the Client to Meta and is entirely separate from Vorth Media's management retainer. Vorth Media does not handle, manage, or process client ad budgets. A minimum monthly ad spend is required for campaigns to generate meaningful performance data, as specified in the Scope of Work Agreement. Vorth Media is not responsible for campaign performance resulting from insufficient ad spend provided by the Client.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">6.4 Payment Structure</h3>
          <p className="mt-2 text-white/80">The full monthly retainer fee is payable in full before the commencement of each month's campaign work. No campaigns will be launched or managed prior to payment confirmation.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">6.5 Access Requirements</h3>
          <p className="mt-2 text-white/80">The Client must provide Vorth Media with full access to their Meta Business Manager, Ad Account, Facebook Page, Instagram Account, and Meta Pixel on Day 1 of the engagement. Delays in providing access will result in corresponding delays to campaign launch and will not reduce the billable period.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">6.6 Results Disclaimer</h3>
          <p className="mt-2 text-white/80"><strong>Important:</strong> Performance marketing results including impressions, click-through rates, lead volume, cost per lead, conversions, and return on ad spend are not guaranteed. Campaign performance is subject to multiple factors outside Vorth Media's control including Meta platform algorithm changes, market conditions, audience behaviour, ad creative quality, landing page performance, and budget levels. Vorth Media applies professional expertise and best practices to optimise campaign performance but cannot be held responsible for specific outcome targets not being met. Past performance does not guarantee future results.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">6.7 Exclusions</h3>
          <p className="mt-2 text-white/80">This service excludes ad creative production (unless separately commissioned), website development, landing page creation, CRM setup, third-party tool subscriptions, and any services outside the Meta platform.</p>
        </div>
      </div>
    )
  },
  {
    id: "refund",
    title: "7. Refund Policy",
    body: (
      <>
        <p><strong>No Refunds:</strong> All fees paid to Vorth Media are strictly non-refundable once payment has been made. This applies to all services including Content Consulting, Content Production, and Performance Marketing. No refunds will be issued under any circumstances including but not limited to early termination, project hold, dissatisfaction with results, change of mind, or cancellation of the engagement. By making payment to Vorth Media, the Client acknowledges and agrees to this refund policy in full.</p>
        <p className="mt-4">In the event of a dispute regarding service delivery, the Client may raise a formal complaint as outlined in the Dispute Resolution section. Vorth Media will review all complaints in good faith but refund eligibility is not applicable under any service category.</p>
      </>
    ),
    warn: true
  },
  {
    id: "results",
    title: "8. General Results Disclaimer",
    body: (
      <>
        <p><strong>Important:</strong> Vorth Media does not guarantee specific results from any of its services including follower growth, views, reach, engagement, leads, clients acquired, or revenue generated.</p>
        <p className="mt-4">Content performance on social media platforms is influenced by factors outside Vorth Media's control including algorithm changes, platform policy updates, market conditions, audience behaviour, and the quality of the Client's response to inbound interest. Vorth Media commits to delivering high-quality work and applying professional expertise, but cannot be held liable for specific performance outcomes not being achieved.</p>
        <p className="mt-4">Vorth Media recommends a minimum of 3 months of consistent content production before meaningful performance benchmarks can be established. The Client acknowledges that content marketing and social media growth require sustained effort and patience over time.</p>
      </>
    ),
    warn: true
  },
  {
    id: "ip",
    title: "9. Intellectual Property",
    body: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-white">9.1 Ownership of Deliverables</h3>
          <p className="mt-2 text-white/80">Upon full and final payment of all invoices under any engagement, ownership of all final scripts, edited reels, designed carousels, strategy documents, and content assets produced by Vorth Media transfers to the Client.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">9.2 Vorth Media Portfolio Rights</h3>
          <p className="mt-2 text-white/80">Vorth Media retains the full and irrevocable right to use deliverables, client growth metrics, results, and success achieved through Vorth Media's services for portfolio, case studies, social media content, advertisements, pitches, and other marketing purposes.</p>
          <p className="mt-2 text-white/80">By engaging Vorth Media, the Client grants unconditional and permanent permission for Vorth Media to publicly showcase and reference the following without requiring additional approval from the Client:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
            <li>The Client's brand name, logo, and identity</li>
            <li>Content performance metrics including views, followers, engagement rate, and reach</li>
            <li>Ad performance metrics including impressions, click-through rates, conversions, and return on ad spend</li>
            <li>Any growth milestones, results, or success achieved through Vorth Media's services</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">9.3 Original Work</h3>
          <p className="mt-2 text-white/80">All scripts, reels, carousels, strategy frameworks, and content produced by Vorth Media are original in nature and free from third-party intellectual property claims. The fees paid are for the development of intellectual property and services rendered and are non-refundable.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">9.4 Client Data at Termination</h3>
          <p className="mt-2 text-white/80">Upon termination or expiration of any engagement, Vorth Media shall either return to the Client or securely destroy all Client data, access credentials, social media account access, and intellectual property belonging to the Client. Vorth Media shall confirm this via a signed confirmation or compliance certificate.</p>
        </div>
      </div>
    )
  },
  {
    id: "nda",
    title: "10. Confidentiality and Data Protection",
    body: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-white">10.1 Confidentiality Obligations</h3>
          <p className="mt-2 text-white/80">Both parties shall keep all disclosed proprietary information confidential and not use or disclose such information except as required to perform their obligations under the engagement. Confidential Information includes but is not limited to the Client's business strategies, content plans, audience data, social media credentials, and performance analytics, as well as Vorth Media's pricing, processes, and internal operational information.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">10.2 Protection of Client Data</h3>
          <p className="mt-2 text-white/80">Vorth Media will not misuse, sell, or share the Client's data, social media credentials, performance metrics, or audience information with any third party. Such data will be used solely for executing the agreed-upon services.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">10.3 Exceptions</h3>
          <p className="mt-2 text-white/80">Confidentiality obligations do not apply to information that becomes publicly available without breach of this agreement, was already known by the receiving party prior to disclosure, was received from a third party without breach, or is independently developed by the receiving party.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">10.4 Post-Termination</h3>
          <p className="mt-2 text-white/80">Upon termination of any engagement, both parties shall return or destroy all data, access credentials, and intellectual property belonging to the other party. Vorth Media shall confirm the return or destruction of all Client data via a signed confirmation or compliance certificate.</p>
        </div>
      </div>
    )
  },
  {
    id: "liability",
    title: "11. Liability and Indemnity",
    body: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-white">11.1 Vorth Media Indemnity</h3>
          <p className="mt-2 text-white/80">Vorth Media agrees to indemnify and hold harmless the Client against claims, damages, or expenses arising from the gross negligence or wilful misconduct of Vorth Media personnel in the performance of services.</p>
        </div>
        <div>
          <h3 className="font-bold text-white">11.2 Client Indemnity</h3>
          <p className="mt-2 text-white/80">The Client agrees to indemnify and hold harmless Vorth Media against claims, damages, or expenses arising from:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
            <li>Content, claims, or representations provided and approved by the Client for use in content or advertising</li>
            <li>Any violations of applicable laws including advertising, privacy, or consumer protection laws, unless directly caused by Vorth Media's negligence</li>
            <li>Any platform policy violations arising from content or targeting approved by the Client</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white">11.3 Limitation of Liability</h3>
          <p className="mt-2 text-white/80">Vorth Media's total liability under any engagement shall not exceed the total fees paid by the Client for the month in which the claim arises. Vorth Media shall not be liable for any indirect, consequential, or incidental damages including but not limited to loss of revenue, loss of clients, or reputational harm.</p>
        </div>
      </div>
    )
  },
  {
    id: "legal",
    title: "12. Legal Compliance",
    body: (
      <p>Vorth Media agrees to perform all obligations in compliance with applicable laws, rules, ordinances, and codes in force at the local, state, and national level in India. The Client is responsible for ensuring that any content published through Vorth Media's services complies with all applicable laws and platform policies.</p>
    )
  },
  {
    id: "dispute",
    title: "13. Dispute Resolution",
    body: (
      <p>In the event of a dispute arising from any engagement with Vorth Media, both parties agree to first attempt resolution through good-faith negotiation. If negotiation does not resolve the matter within 30 days, both parties agree to binding arbitration in Chennai, India, conducted by a single mutually agreed arbitrator. If the parties cannot agree on an arbitrator within 30 days, one will be appointed by the relevant arbitration body. If arbitration fails to resolve the dispute, legal jurisdiction shall be with the courts of Chennai, India.</p>
    )
  },
  {
    id: "agreements",
    title: "14. Use of Agreement Documents",
    body: (
      <p>All Scope of Work Agreements, proposals, and documents issued by Vorth Media are strictly intended for the purpose of engaging Vorth Media as a service provider. Sharing these documents with external parties or using them for any purpose other than the intended engagement is legally prohibited.</p>
    )
  }
];

function Terms() {
  const [openId, setOpenId] = useState<string | null>("intro");

  return (
    <SiteLayout footerMinimal={true}>
      <section className="bg-black pt-32 pb-24">
        <div className="container-x">
          <h1 className="text-4xl font-bold md:text-5xl">Terms of Service & Policies</h1>
          <p className="mt-3 text-white/80">Effective Date: May 2026</p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-1 rounded-lg border-r border-brand bg-surface p-5">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setOpenId(s.id)}
                    className={`block border-l-2 px-3 py-2 text-sm transition ${
                      openId === s.id
                        ? "border-brand text-brand"
                        : "border-transparent text-white/75 hover:text-brand"
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-4">
              {SECTIONS.map((s) => {
                const isOpen = openId === s.id;
                return (
                  <div
                    key={s.id}
                    id={s.id}
                    className={`rounded-md border border-brand bg-surface/30 ${s.warn ? "border-l-4" : ""}`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : s.id)}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    >
                      <span className="text-lg font-bold md:text-xl">{s.title}</span>
                      <span
                        className={`text-brand transition-transform ${isOpen ? "rotate-90" : ""}`}
                      >
                        ›
                      </span>
                    </button>
                    {isOpen && <div className="px-6 pb-6 text-white/85">{s.body}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
