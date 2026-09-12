import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | CareerPilot",
  description:
    "Learn how CareerPilot collects, uses, protects, and manages your personal information.",
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="We believe privacy should be understandable. Here's what information CareerPilot collects, why we use it, and the choices you have."
      lastUpdated="September 12, 2026"
      sections={[
        {
          title: "What CareerPilot Is",
          content: (
            <>
              <p>
                CareerPilot is a career-focused platform designed to help people
                explore, organize, and improve their career journey.
              </p>

              <p>
                Depending on the features available at a given time, CareerPilot
                may provide tools such as career exploration, profile building,
                resume-related features, personalized recommendations, progress
                tracking, and AI-assisted career features.
              </p>

              <p>
                The specific features available to you may change as CareerPilot
                evolves.
              </p>
            </>
          ),
        },
        {
          title: "Information We Collect",
          content: (
            <>
              <p>
                We collect information that is necessary to provide and improve
                CareerPilot.
              </p>

              <p>
                <strong>Account information:</strong> When you create an
                account, we may collect your name, email address, password or
                authentication credentials, account preferences, and profile
                information.
              </p>

              <p>
                <strong>Career information:</strong> You may voluntarily provide
                information about your education, skills, work experience,
                projects, certifications, career interests, job preferences,
                career goals, resume or CV, and other professional information.
              </p>

              <p>
                <strong>AI feature information:</strong> Information you provide
                to an AI-powered feature may be processed to generate a
                response, recommendation, analysis, or other requested result.
              </p>

              <p>
                <strong>Technical information:</strong> We may collect limited
                technical and usage information such as IP address, browser
                type, device type, operating system, pages or features accessed,
                timestamps, authentication events, and error or performance
                information.
              </p>
            </>
          ),
        },
        {
          title: "Why We Use Your Information",
          content: (
            <>
              <p>We may use your information to:</p>

              <ul>
                <li>Create and manage your account</li>
                <li>Authenticate you</li>
                <li>Provide CareerPilot&apos;s features</li>
                <li>Personalize your experience</li>
                <li>Generate career-related recommendations</li>
                <li>Provide AI-assisted features</li>
                <li>Save your preferences and progress</li>
                <li>Maintain and improve the platform</li>
                <li>Detect and prevent fraud, abuse, and security threats</li>
                <li>Diagnose technical problems</li>
                <li>Communicate with you about your account or the service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </>
          ),
        },
        {
          title: "How We Share Information",
          content: (
            <>
              <p>We do not sell your personal information.</p>

              <p>
                We may share information with service providers that help us
                operate CareerPilot. Depending on the features you use, these
                providers may include services for cloud hosting, databases,
                authentication, email delivery, analytics, error monitoring, AI
                processing, security, and payments.
              </p>

              <p>
                These providers receive only the information reasonably
                necessary to perform their services and are expected to handle
                information according to applicable contractual and legal
                requirements.
              </p>

              <p>
                We may also disclose information when necessary to comply with
                applicable law, protect users, prevent fraud or abuse,
                investigate security incidents, enforce our Terms of Service, or
                complete a merger, acquisition, restructuring, financing, or
                sale of assets.
              </p>
            </>
          ),
        },
        {
          title: "AI and Third-Party AI Services",
          content: (
            <>
              <p>
                CareerPilot may use third-party AI infrastructure to provide
                certain features.
              </p>

              <p>
                When an AI feature is used, relevant information may be sent to
                the service provider required to process that request.
              </p>

              <p>
                We aim to minimize the information sent to third-party AI
                providers and will take reasonable measures to protect user
                information.
              </p>

              <p>
                AI-generated results may be inaccurate, incomplete, or
                inappropriate for a particular situation. CareerPilot does not
                guarantee that AI-generated career recommendations,
                classifications, summaries, or other outputs are correct.
              </p>
            </>
          ),
        },
        {
          title: "Data Retention",
          content: (
            <>
              <p>
                We retain personal information for as long as reasonably
                necessary to provide our services, maintain your account,
                fulfill the purposes described in this Privacy Policy, meet
                legal requirements, resolve disputes, and prevent fraud or
                abuse.
              </p>

              <p>
                When information is no longer reasonably required, we may delete
                it, anonymize it, or securely dispose of it.
              </p>

              <p>
                Certain information may remain temporarily in backups or
                security logs where necessary for legitimate operational or
                legal purposes.
              </p>
            </>
          ),
        },
        {
          title: "Your Rights",
          content: (
            <>
              <p>
                Depending on applicable law and your circumstances, you may have
                rights relating to your personal information, including the
                ability to:
              </p>

              <ul>
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent where applicable</li>
                <li>Request information about data processing</li>
                <li>Raise a complaint regarding our handling of your data</li>
              </ul>

              <p>
                For privacy-related requests, contact us at{" "}
                <a href="mailto:privacy@careerpilot.example">
                  privacy@careerpilot.example
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "Account Deletion",
          content: (
            <>
              <p>You may request deletion of your CareerPilot account.</p>

              <p>
                When an account is deleted, we will take reasonable steps to
                delete or anonymize information associated with that account,
                subject to information we are legally required or reasonably
                permitted to retain.
              </p>

              <p>
                Some information may be retained for security, fraud prevention,
                legal compliance, dispute resolution, or other legitimate
                purposes.
              </p>
            </>
          ),
        },
        {
          title: "Security",
          content: (
            <>
              <p>
                We take reasonable technical and organizational measures to
                protect information from unauthorized access, alteration,
                disclosure, loss, or destruction.
              </p>

              <p>
                However, no internet service can guarantee absolute security.
              </p>

              <p>
                You are responsible for protecting your account credentials and
                should notify us if you believe your account has been
                compromised.
              </p>
            </>
          ),
        },
        {
          title: "Children's Privacy",
          content: (
            <p>
              CareerPilot is intended for users who are legally able to use the
              service under applicable law. We do not knowingly collect personal
              information from children where doing so would violate applicable
              law.
            </p>
          ),
        },
        {
          title: "International Processing",
          content: (
            <p>
              CareerPilot and the service providers we use may operate in
              different countries. Your information may therefore be processed
              or stored outside the country in which you live. Where required,
              we will take appropriate steps to ensure that international
              transfers and processing comply with applicable law.
            </p>
          ),
        },
        {
          title: "Third-Party Links",
          content: (
            <p>
              CareerPilot may contain links to third-party websites or services.
              We are not responsible for the privacy practices, security, or
              content of third-party services. We encourage you to review their
              privacy policies before providing them with personal information.
            </p>
          ),
        },
        {
          title: "Changes",
          content: (
            <p>
              CareerPilot may update this Privacy Policy as the platform,
              technology, or applicable laws change. When we make significant
              changes, we may notify you through the website, your account,
              email, or another appropriate method.
            </p>
          ),
        },
        {
          title: "Contact Us",
          content: (
            <>
              <p>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or your personal information, contact us at:
              </p>

              <p>
                <strong>CareerPilot</strong>
                <br />
                Privacy:{" "}
                <a href="mailto:privacy@careerpilot.example">
                  privacy@careerpilot.example
                </a>
                <br />
                Grievance:{" "}
                <a href="mailto:grievance@careerpilot.example">
                  grievance@careerpilot.example
                </a>
                <br />
                Address: [Legal/Registered Address]
              </p>
            </>
          ),
        },
        {
          title: "Our Principle",
          content: (
            <p>
              Your career is personal. The information you give CareerPilot can
              tell us a lot about where you&apos;ve been, where you are, and
              where you want to go.
              <br />
              <br />
              We believe that comes with responsibility. Our goal is to build
              useful career tools without making privacy unnecessarily
              complicated.
            </p>
          ),
        },
      ]}
    />
  );
}
