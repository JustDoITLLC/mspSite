"use client"

import { motion } from "framer-motion"
import { Check, X, AlertTriangle, Zap, Cloud, Shield, Award, BookOpen, HardDrive } from "lucide-react"

const packages = [
  {
    name: "Basic Plan",
    price: 40,
    description: "Essential security for businesses needing only antivirus and basic monitoring.",
    warning: "No proactive security, no IT support, no backups.",
    features: [
      {
        title: "Security & Endpoint Protection",
        items: [
          {
            name: "Standard Antivirus & Malware Protection",
            included: true,
            description: "Signature-based threat detection",
          },
          { name: "Basic Web Protection", included: true, description: "Blacklist-based filtering only" },
          { name: "Ransomware Protection", included: false, description: "No rollback, only detection" },
          { name: "Advanced Threat Detection", included: false, description: "No AI-based analysis" },
        ],
      },
      {
        title: "Remote Monitoring & System Maintenance",
        items: [
          { name: "Basic Device Monitoring", included: true, description: "Tracks CPU, memory, and disk usage" },
          { name: "Basic Patch Management", included: true, description: "OS updates only, no third-party apps" },
          { name: "Automated Fixes", included: false, description: "Issues must be manually reported" },
          { name: "Compliance Reports", included: false, description: "No audit logs or insights" },
        ],
      },
      {
        title: "Backup & Recovery",
        items: [
          { name: "Cloud backup", included: false },
          { name: "Disaster recovery support", included: false },
        ],
      },
    ],
  },
  {
    name: "Advanced Plan",
    price: 60,
    description: "Complete security, proactive monitoring, ransomware protection, and IT support.",
    highlight: "Best Value",
    recommendation: "Recommended for businesses that need real protection.",
    features: [
      {
        title: "Security & Endpoint Protection",
        items: [
          {
            name: "Advanced Threat Protection",
            included: true,
            description: "Behavior-based detection, AI-driven analysis",
          },
          {
            name: "Full Ransomware Protection",
            included: true,
            description: "Rollback capabilities, automatic threat neutralization",
          },
          { name: "Real-Time Exploit Prevention", included: true, description: "Protects against zero-day attacks" },
          {
            name: "Application Control & Software Whitelisting",
            included: true,
            description: "Blocks unauthorized software",
          },
        ],
      },
      {
        title: "Remote Monitoring & Automated Maintenance",
        items: [
          { name: "24/7 Monitoring & Automated Fixes", included: true, description: "Proactively prevents issues" },
          { name: "Full Patch Management", included: true, description: "OS & third-party application updates" },
          { name: "Live Remote IT Support", included: true, description: "Priority response, under 4-hour SLA" },
          {
            name: "Security & Compliance Reports",
            included: true,
            description: "Tracks HIPAA, NIST, PCI DSS compliance",
          },
        ],
      },
      {
        title: "Backup & Recovery",
        items: [
          { name: "Full-System Image Backup", included: true, description: "Restore full systems, not just files" },
          { name: "Secure Cloud Backup", included: true, description: "Automated offsite storage" },
          {
            name: "Fast Disaster Recovery",
            included: true,
            description: "Guaranteed system restoration within 12 hours",
          },
          { name: "Ransomware-Proof Backups", included: true, description: "Automatic rollback for infected files" },
        ],
      },
    ],
  },
  {
    name: "Premium Plan",
    price: 80,
    description: "Enterprise-grade cybersecurity, compliance, and disaster recovery.",
    recommendation: "For businesses that need top-tier security and compliance.",
    features: [
      {
        title: "Security & Endpoint Protection",
        items: [
          { name: "Everything in Advanced, plus:", included: true },
          { name: "Extended Threat Detection", included: true, description: "Monitors threats across all devices" },
          {
            name: "Dedicated Security Expert Support",
            included: true,
            description: "Proactive risk assessments & response",
          },
          { name: "Full-Disk Encryption & Remote Wipe", included: true, description: "For lost/stolen devices" },
          { name: "Dark Web Monitoring", included: true, description: "Scans for compromised business credentials" },
        ],
      },
      {
        title: "Remote Monitoring & IT Management",
        items: [
          { name: "Everything in Advanced, plus:", included: true },
          {
            name: "24/7 Security Operations Monitoring",
            included: true,
            description: "Live security analysis & response",
          },
          { name: "Log & Compliance Auditing", included: true, description: "Meets high-security industry standards" },
          {
            name: "Custom Network Hardening",
            included: true,
            description: "Firewall tuning, VPN security, IDS/IPS tuning",
          },
        ],
      },
      {
        title: "Backup & Recovery",
        items: [
          { name: "Everything in Advanced, plus:", included: true },
          { name: "Instant Failover", included: true, description: "Run business operations from backups instantly" },
          {
            name: "Geo-Redundant Backup Replication",
            included: true,
            description: "Stored in multiple secure data centers",
          },
          {
            name: "Business Continuity Planning",
            included: true,
            description: "Annual security & recovery simulations",
          },
        ],
      },
    ],
  },
]

const addOns = [
  {
    title: "Technology Training (Microsoft 365 & Google Workspace)",
    description: "Designed for business owners & employees with no IT experience.",
    items: [
      {
        name: "Basic Email & Cloud Storage Training",
        price: 15,
        unit: "user/month",
        description: "How to send secure emails, manage files, and avoid phishing scams.",
      },
      {
        name: "Collaboration & Productivity Training",
        price: 20,
        unit: "user/month",
        description: "How to share documents, schedule meetings, and work efficiently.",
      },
      {
        name: "Cybersecurity Awareness & Phishing Training",
        price: 10,
        unit: "user/month",
        description: "Recognizing scams, creating strong passwords, and protecting data.",
      },
    ],
  },
  {
    title: "Additional IT & Security Add-Ons",
    items: [
      {
        name: "Virtual CISO & Compliance Advisory",
        price: 500,
        unit: "month",
        description: "Security policy guidance for HIPAA, PCI, NIST, etc.",
      },
      {
        name: "Security Awareness Training & Phishing Simulations",
        price: 5,
        unit: "user/month",
        description: "Test your employees against real-world threats",
      },
      {
        name: "Advanced Network Hardening & Firewall Management",
        price: 100,
        unit: "device/month",
        description: "Custom security policies, VPN setup, network segmentation",
      },
    ],
  },
]

const ServicePackages = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Service Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                {pkg.highlight && (
                  <span className="bg-teal-500 text-white text-sm font-bold py-1 px-2 rounded-full mb-2 inline-block">
                    {pkg.highlight}
                  </span>
                )}
                <p className="text-3xl font-bold mb-4">
                  ${pkg.price}
                  <span className="text-sm font-normal">/device/month</span>
                </p>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                {pkg.warning && (
                  <p className="text-red-500 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    {pkg.warning}
                  </p>
                )}
                {pkg.recommendation && (
                  <p className="text-green-600 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    {pkg.recommendation}
                  </p>
                )}
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="mb-4">
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          {item.included ? (
                            <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          ) : (
                            <X className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                          )}
                          <span className={item.included ? "text-gray-800" : "text-gray-400"}>
                            {item.name}
                            {item.description && (
                              <span className="block text-sm text-gray-500">{item.description}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-gray-100">
                <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mt-16 mb-12">Add-On Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {addOns.map((addOn, index) => (
            <motion.div
              key={addOn.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{addOn.title}</h3>
                {addOn.description && <p className="text-gray-600 mb-4">{addOn.description}</p>}
                <ul className="space-y-4">
                  {addOn.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      {addOn.title.includes("Training") ? (
                        <BookOpen className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      ) : (
                        <Shield className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <span className="font-semibold">{item.name}</span>
                        <span className="block text-sm text-gray-500">
                          ${item.price}/{item.unit}
                        </span>
                        {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicePackages

