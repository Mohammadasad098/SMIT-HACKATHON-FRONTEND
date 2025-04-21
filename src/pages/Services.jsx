import { useState } from "react"
import {Link} from "react-router-dom"
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CreditCard,
  DollarSign,
  HelpCircle,
  Landmark,
  PiggyBank,
  Shield,
  Users,
  ChevronDown,
} from "lucide-react"

export default function ServicesPage() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("loans")

  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Tailored financial solutions designed to meet your needs and help you achieve your goals.
              </p>
            </div>
          </div>

          {/* Custom Tabs */}
          <div className="mt-12">
            <div className="grid w-full grid-cols-2 md:grid-cols-4 bg-purple-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveTab("loans")}
                className={`py-3 px-4 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset ${
                  activeTab === "loans" ? "bg-purple-600 text-white" : "text-gray-700 hover:text-purple-700"
                }`}
              >
                Loans
              </button>
              <button
                onClick={() => setActiveTab("savings")}
                className={`py-3 px-4 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset ${
                  activeTab === "savings" ? "bg-purple-600 text-white" : "text-gray-700 hover:text-purple-700"
                }`}
              >
                Savings
              </button>
              <button
                onClick={() => setActiveTab("insurance")}
                className={`py-3 px-4 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset ${
                  activeTab === "insurance" ? "bg-purple-600 text-white" : "text-gray-700 hover:text-purple-700"
                }`}
              >
                Insurance
              </button>
              <button
                onClick={() => setActiveTab("payments")}
                className={`py-3 px-4 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset ${
                  activeTab === "payments" ? "bg-purple-600 text-white" : "text-gray-700 hover:text-purple-700"
                }`}
              >
                Payments
              </button>
            </div>

            {/* Loans Tab Content */}
            {activeTab === "loans" && (
              <div className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    icon={<DollarSign className="h-8 w-8 text-purple-600" />}
                    title="Microloans"
                    description="Small loans for entrepreneurs"
                    content="Access small loans from $50 to $500 to start or expand your business with flexible repayment terms and competitive interest rates."
                    features={[
                      "No collateral required",
                      "Repayment periods of 3-12 months",
                      "Interest rates from 10-15% p.a.",
                    ]}
                    link="/services/microloans"
                  />

                  <ServiceCard
                    icon={<Users className="h-8 w-8 text-purple-600" />}
                    title="Group Loans"
                    description="Collective borrowing power"
                    content="Join forces with others in your community to access larger loan amounts with shared responsibility and mutual support."
                    features={[
                      "Groups of 5-10 members",
                      "Loans up to $5,000 per group",
                      "Weekly or bi-weekly repayments",
                    ]}
                    link="/services/group-loans"
                  />

                  <ServiceCard
                    icon={<Landmark className="h-8 w-8 text-purple-600" />}
                    title="Agricultural Loans"
                    description="Financing for farmers"
                    content="Specialized loans for farmers with seasonal repayment schedules aligned with harvest cycles and agricultural needs."
                    features={[
                      "Seasonal repayment options",
                      "Loans for seeds, equipment, and livestock",
                      "Technical assistance included",
                    ]}
                    link="/services/agricultural-loans"
                  />
                </div>
              </div>
            )}

            {/* Savings Tab Content */}
            {activeTab === "savings" && (
              <div className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    icon={<PiggyBank className="h-8 w-8 text-purple-600" />}
                    title="Savings Accounts"
                    description="Secure your future"
                    content="Build your savings with flexible deposit options, competitive interest rates, and easy access to your funds when needed."
                    features={["No minimum balance required", "Interest rates up to 5% p.a.", "Mobile banking access"]}
                    link="/services/savings"
                  />

                  <ServiceCard
                    icon={<BarChart3 className="h-8 w-8 text-purple-600" />}
                    title="Goal-Based Savings"
                    description="Save for specific goals"
                    content="Set specific savings goals like education, housing, or business expansion with dedicated accounts and automated savings plans."
                    features={[
                      "Automated savings schedules",
                      "Progress tracking tools",
                      "Bonus interest for completed goals",
                    ]}
                    link="/services/goal-savings"
                  />

                  <ServiceCard
                    icon={<Users className="h-8 w-8 text-purple-600" />}
                    title="Group Savings"
                    description="Save together, achieve more"
                    content="Join a savings group to pool resources, build discipline, and access your funds on a rotating basis or for emergencies."
                    features={[
                      "Traditional ROSCA model",
                      "Digital tracking and transparency",
                      "Emergency fund options",
                    ]}
                    link="/services/group-savings"
                  />
                </div>
              </div>
            )}

            {/* Insurance Tab Content */}
            {activeTab === "insurance" && (
              <div className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    icon={<Shield className="h-8 w-8 text-purple-600" />}
                    title="Microinsurance"
                    description="Affordable protection"
                    content="Low-cost insurance products designed to protect you and your family from unexpected events and financial hardships."
                    features={[
                      "Health insurance from $2/month",
                      "Life insurance with loan protection",
                      "Simple claims process",
                    ]}
                    link="/services/microinsurance"
                  />

                  <ServiceCard
                    icon={<Landmark className="h-8 w-8 text-purple-600" />}
                    title="Crop Insurance"
                    description="Protection for farmers"
                    content="Protect your agricultural investments against weather events, pests, and other risks with affordable crop insurance."
                    features={["Weather index-based coverage", "Seasonal payment options", "Quick claim settlements"]}
                    link="/services/crop-insurance"
                  />

                  <ServiceCard
                    icon={<Users className="h-8 w-8 text-purple-600" />}
                    title="Business Insurance"
                    description="Protect your enterprise"
                    content="Comprehensive coverage for your small business, including inventory, equipment, and liability protection."
                    features={[
                      "Property and inventory coverage",
                      "Business interruption insurance",
                      "Flexible payment options",
                    ]}
                    link="/services/business-insurance"
                  />
                </div>
              </div>
            )}

            {/* Payments Tab Content */}
            {activeTab === "payments" && (
              <div className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    icon={<CreditCard className="h-8 w-8 text-purple-600" />}
                    title="Mobile Payments"
                    description="Convenient transactions"
                    content="Send and receive money, pay bills, and make purchases using your mobile phone with low transaction fees."
                    features={["No smartphone required", "USSD and app-based options", "Fees as low as 0.5%"]}
                    link="/services/mobile-payments"
                  />

                  <ServiceCard
                    icon={<DollarSign className="h-8 w-8 text-purple-600" />}
                    title="Bill Payments"
                    description="Simplified utilities management"
                    content="Pay your utility bills, school fees, and government services through our platform with instant confirmation."
                    features={[
                      "Over 200 service providers",
                      "Automated recurring payments",
                      "Digital receipts and records",
                    ]}
                    link="/services/bill-payments"
                  />

                  <ServiceCard
                    icon={<Landmark className="h-8 w-8 text-purple-600" />}
                    title="Remittances"
                    description="International transfers"
                    content="Send and receive money internationally with competitive exchange rates and lower fees than traditional services."
                    features={["Transfers to 100+ countries", "Up to 70% lower fees", "Same-day delivery options"]}
                    link="/services/remittances"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our approach to microfinance is built on these core principles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Users className="h-6 w-6 text-purple-600" />}
              title="Community-Focused"
              description="We design our services with local communities in mind, addressing their specific needs and challenges."
            />

            <FeatureCard
              icon={<Shield className="h-6 w-6 text-purple-600" />}
              title="Transparent & Fair"
              description="No hidden fees or complicated terms. We believe in complete transparency in all our services."
            />

            <FeatureCard
              icon={<BarChart3 className="h-6 w-6 text-purple-600" />}
              title="Financial Education"
              description="We provide training and resources to help you make informed financial decisions."
            />

            <FeatureCard
              icon={<CreditCard className="h-6 w-6 text-purple-600" />}
              title="Digital First"
              description="Access our services anytime, anywhere through our mobile app and USSD services."
            />

            <FeatureCard
              icon={<PiggyBank className="h-6 w-6 text-purple-600" />}
              title="Sustainable Growth"
              description="We focus on long-term financial health, not just quick fixes or temporary solutions."
            />

            <FeatureCard
              icon={<BadgeCheck className="h-6 w-6 text-purple-600" />}
              title="Responsible Lending"
              description="We ensure our clients can repay comfortably without falling into debt traps."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                See how our services have transformed lives and communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              image="/placeholder.svg?height=80&width=80"
              name="Maria T."
              role="Small Business Owner"
              quote="With a $300 microloan, I was able to purchase inventory for my small grocery store. My income has increased by 40% and I've hired two employees from my community."
            />

            <TestimonialCard
              image="/placeholder.svg?height=80&width=80"
              name="John K."
              role="Farmer"
              quote="The agricultural loan and crop insurance gave me the confidence to expand my farm. Even when we faced drought, the insurance payout helped us recover without falling into debt."
            />

            <TestimonialCard
              image="/placeholder.svg?height=80&width=80"
              name="Sarah M."
              role="Community Group Leader"
              quote="Our women's savings group has transformed our village. We've funded 15 small businesses, built a community center, and created an emergency fund that has helped many families."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Find answers to common questions about our microfinance services.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-12">
            <div className="space-y-4">
              <FaqItem
                question="Who is eligible for a microloan?"
                answer="Our microloans are available to individuals aged 18 and above with a viable business idea or existing small business. We focus on serving those who typically cannot access traditional banking services. No formal credit history is required, but you'll need to demonstrate your ability to repay through your business plan or existing income."
              />

              <FaqItem
                question="How do group loans work?"
                answer="Group loans operate on a collective responsibility model. A group of 5-10 individuals from the same community form a group, receive financial training, and then access loans together. Each member guarantees the others' loans, creating social collateral. Repayments are typically made weekly or bi-weekly in group meetings, and all members must be in good standing for the group to access larger loans in the future."
              />

              <FaqItem
                question="What are the interest rates on loans?"
                answer="Our interest rates range from 10-15% per annum, depending on the loan type and your repayment history. While this may be higher than traditional bank rates, it's significantly lower than informal lenders. We're transparent about our rates, with no hidden fees. The rate reflects the cost of providing small loans in underserved areas and includes business training and support services."
              />

              <FaqItem
                question="How can I access my account?"
                answer="You can access your account through multiple channels: our mobile app (available on Android and iOS), USSD service by dialing *123# (works on any phone), our web portal, or by visiting any of our branch locations. All digital channels are secured with two-factor authentication to protect your financial information."
              />

              <FaqItem
                question="What happens if I can't repay my loan?"
                answer="We understand that unexpected challenges can arise. If you're having difficulty making repayments, contact us immediately. We offer restructuring options for genuine hardship cases, including payment holidays or extended terms. Our goal is to help you succeed, not to penalize you. However, consistent non-payment without communication will affect your ability to access future services."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Take the first step toward financial empowerment today.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-purple-600 bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-transparent border border-white rounded-md shadow-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Custom Service Card Component
function ServiceCard({ icon, title, description, content, features, link }) {
  return (
    <div className="flex flex-col rounded-lg border border-purple-100 bg-white overflow-hidden hover:border-purple-200 hover:shadow-md transition-all">
      <div className="p-6">
        <div className="flex flex-row items-center gap-4 mb-4">
          {icon}
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">{content}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <BadgeCheck className="mr-2 h-4 w-4 text-pink-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto p-4 border-t border-purple-50">
        <Link
          href={link}
          className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

// Custom Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white border-purple-100 hover:border-purple-200 hover:shadow-md transition-all">
      <div className="p-3 rounded-full bg-purple-100">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  )
}

// Custom Testimonial Card Component
function TestimonialCard({ image, name, role, quote }) {
  return (
    <div className="flex flex-col rounded-lg border border-purple-100 bg-white p-6 hover:border-purple-200 hover:shadow-md transition-all">
      <div className="flex flex-col items-center space-y-4">
        <img src={image || "/placeholder.svg"} alt={name} className="rounded-full h-20 w-20 object-cover" />
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
          <p className="text-gray-500">"{quote}"</p>
        </div>
      </div>
    </div>
  )
}

// Custom FAQ Item Component with React state for accordion
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-purple-100 rounded-lg overflow-hidden hover:border-purple-200 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left font-medium text-gray-900 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
      >
        <div className="flex items-center">
          <HelpCircle className="mr-2 h-5 w-5 text-purple-600" />
          <span>{question}</span>
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t border-purple-50">
          <p className="text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  )
}
