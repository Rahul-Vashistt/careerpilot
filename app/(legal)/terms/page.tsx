import type { Metadata } from "next";
import LegalPage from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | CareerPilot",
  description:
    "Read the terms governing your use of CareerPilot and its career-focused services.",
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description="These terms explain the rules for using CareerPilot, what you can expect from us, and what we expect from you."
      lastUpdated="September 12, 2026"
      sections={[
        {
          title: "About CareerPilot",
          content: (
            <>
              <p>
                CareerPilot is a career-focused platform designed to help users
                explore career opportunities, organize professional information,
                develop career-related skills, and make more informed career
                decisions.
              </p>

              <p>
                Features may include career exploration, profiles,
                resume-related tools, recommendations, AI-assisted features,
                progress tracking, and other career-development tools.
              </p>

              <p>
                CareerPilot is continuously evolving. Features may be added,
                changed, suspended, or removed over time.
              </p>
            </>
          ),
        },
        {
          title: "Eligibility",
          content: (
            <>
              <p>
                You may use CareerPilot only if you are legally permitted to
                enter into these Terms under the laws applicable to you.
              </p>

              <p>By using CareerPilot, you represent that:</p>

              <ul>
                <li>The information you provide is reasonably accurate.</li>
                <li>You have the legal capacity to agree to these Terms.</li>
                <li>You will comply with applicable laws.</li>
                <li>You will not use CareerPilot for unlawful purposes.</li>
              </ul>
            </>
          ),
        },
        {
          title: "Your Account",
          content: (
            <>
              <p>Some CareerPilot features require an account.</p>

              <p>You are responsible for:</p>

              <ul>
                <li>Providing accurate account information</li>
                <li>Keeping your login credentials secure</li>
                <li>Maintaining the security of your account</li>
                <li>
                  Activity that occurs through your account, unless caused by a
                  security issue outside your reasonable control
                </li>
              </ul>

              <p>
                Do not share your password or authentication credentials with
                other people.
              </p>
            </>
          ),
        },
        {
          title: "Acceptable Use",
          content: (
            <>
              <p>You agree not to use CareerPilot to:</p>

              <ul>
                <li>Break the law</li>
                <li>Violate another person&apos;s rights</li>
                <li>Impersonate another person</li>
                <li>Gain unauthorized access to systems or accounts</li>
                <li>Upload malware or malicious code</li>
                <li>Disrupt or interfere with the service</li>
                <li>Bypass security controls</li>
                <li>
                  Scrape or systematically collect data without permission
                </li>
                <li>Abuse automated systems or APIs</li>
                <li>Infringe intellectual-property rights</li>
                <li>
                  Upload fraudulent, threatening, abusive, or unlawful content
                </li>
                <li>Harass or harm another person</li>
                <li>Manipulate or exploit CareerPilot&apos;s AI systems</li>
              </ul>

              <p>
                We reserve the right to restrict or terminate access when
                reasonably necessary to protect CareerPilot, its users, or
                others.
              </p>
            </>
          ),
        },
        {
          title: "Your Content",
          content: (
            <>
              <p>
                You may provide information, text, documents, resumes, career
                history, preferences, and other content to CareerPilot
                (&quot;User Content&quot;).
              </p>

              <p>You retain ownership of the User Content you provide.</p>

              <p>
                By submitting User Content, you grant CareerPilot the limited
                rights necessary to host, store, process, display, analyze, and
                otherwise use that content to provide and improve the features
                you request.
              </p>

              <p>
                We do not claim ownership of your resume, career history, or
                other personal content merely because you upload it to
                CareerPilot.
              </p>

              <p>
                You are responsible for ensuring that you have the right to
                submit the content you provide.
              </p>
            </>
          ),
        },
        {
          title: "AI-Generated Content",
          content: (
            <>
              <p>
                CareerPilot may use artificial intelligence to provide
                recommendations, summaries, suggestions, analyses, or other
                outputs.
              </p>

              <p>
                AI-generated information is provided as assistance, not as a
                guarantee of accuracy.
              </p>

              <p>AI systems can make mistakes.</p>

              <p>
                CareerPilot does not guarantee that AI-generated information
                will be accurate, complete, current, suitable for your
                circumstances, or free from errors.
              </p>

              <p>
                You should independently verify important information before
                relying on it, especially for employment, education,
                immigration, financial matters, professional qualifications, or
                other significant decisions.
              </p>
            </>
          ),
        },
        {
          title: "Career Advice",
          content: (
            <>
              <p>
                CareerPilot is a career-support platform. It is not a
                replacement for a qualified career counselor, recruiter, lawyer,
                financial advisor, educational advisor, or other professional.
              </p>

              <p>CareerPilot does not guarantee:</p>

              <ul>
                <li>Employment</li>
                <li>Interviews</li>
                <li>Job offers</li>
                <li>Salary increases</li>
                <li>Admission to an educational institution</li>
                <li>Career advancement</li>
                <li>A particular career outcome</li>
              </ul>

              <p>Career decisions remain your responsibility.</p>
            </>
          ),
        },
        {
          title: "Third-Party Information",
          content: (
            <p>
              CareerPilot may display or reference information from third-party
              sources, including job listings, companies, educational
              institutions, career resources, or other websites. We do not
              guarantee that third-party information is accurate, complete,
              current, legitimate, or suitable for you.
            </p>
          ),
        },
        {
          title: "Intellectual Property",
          content: (
            <>
              <p>
                CareerPilot and its underlying technology, software, design,
                branding, logos, content, and other materials are owned by or
                licensed to CareerPilot unless otherwise stated.
              </p>

              <p>
                You may not copy, reproduce, distribute, modify, sell,
                sublicense, or commercially exploit CareerPilot&apos;s
                proprietary materials without permission, except where
                applicable law expressly permits such use.
              </p>
            </>
          ),
        },
        {
          title: "Feedback",
          content: (
            <p>
              If you voluntarily provide suggestions, ideas, feedback, or
              recommendations about CareerPilot, you agree that we may use that
              feedback without restriction or compensation to you.
            </p>
          ),
        },
        {
          title: "Service Availability",
          content: (
            <>
              <p>
                We work to keep CareerPilot available and reliable, but we do
                not guarantee that the service will always be available,
                uninterrupted, error-free, secure, or free from bugs.
              </p>

              <p>
                We may temporarily suspend the service for maintenance,
                upgrades, security reasons, infrastructure changes, or other
                operational requirements.
              </p>
            </>
          ),
        },
        {
          title: "Suspension and Termination",
          content: (
            <>
              <p>We may suspend or terminate your account if:</p>

              <ul>
                <li>You violate these Terms</li>
                <li>You misuse the service</li>
                <li>Your activity creates a security or legal risk</li>
                <li>We are required to do so by law</li>
                <li>Your account is involved in fraudulent activity</li>
                <li>Continued access could harm CareerPilot or other users</li>
              </ul>

              <p>You may stop using CareerPilot at any time.</p>
            </>
          ),
        },
        {
          title: "Disclaimer of Warranties",
          content: (
            <p>
              To the maximum extent permitted by applicable law, CareerPilot is
              provided on an &quot;as is&quot; and &quot;as available&quot;
              basis. We make no warranties that the service or its content will
              always be accurate, reliable, uninterrupted, secure, or suitable
              for your particular needs.
            </p>
          ),
        },
        {
          title: "Limitation of Liability",
          content: (
            <p>
              To the maximum extent permitted by applicable law, CareerPilot and
              its owners, employees, contractors, partners, and service
              providers will not be responsible for indirect, incidental,
              special, consequential, or similar losses arising from your use of
              the service.
            </p>
          ),
        },
        {
          title: "Indemnification",
          content: (
            <p>
              To the extent permitted by applicable law, you agree to be
              responsible for losses or claims arising from your unlawful use of
              CareerPilot, your violation of these Terms, or your infringement
              of another person&apos;s rights.
            </p>
          ),
        },
        {
          title: "Changes to CareerPilot",
          content: (
            <p>
              CareerPilot is being actively developed. We may modify, add,
              remove, or discontinue features at any time. We may also update
              these Terms when necessary to reflect changes to the service,
              legal requirements, or our practices.
            </p>
          ),
        },
        {
          title: "Governing Law",
          content: (
            <p>
              These Terms will be governed by the laws applicable to CareerPilot
              and its users, subject to any mandatory rights or protections
              provided by applicable law.
              <br />
              <br />
              <strong>Jurisdiction:</strong> [Insert applicable jurisdiction]
            </p>
          ),
        },
        {
          title: "Contact",
          content: (
            <>
              <p>If you have questions about these Terms, contact us at:</p>

              <p>
                <strong>CareerPilot</strong>
                <br />
                Legal:{" "}
                <a href="mailto:legal@careerpilot.example">
                  legal@careerpilot.example
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
              CareerPilot exists to help you navigate your career with more
              clarity.
              <br />
              <br />
              We can provide tools, information, recommendations, and
              assistance.
              <br />
              <br />
              We cannot make the decision for you.
              <br />
              <br />
              <strong>You stay in control of your career.</strong>
            </p>
          ),
        },
      ]}
    />
  );
}
