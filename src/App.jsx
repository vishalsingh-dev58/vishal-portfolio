import { motion } from "framer-motion";
import { MapPin, Award, BadgeCheck, X } from "lucide-react";
import { useState } from "react";

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-700 bg-slate-900/60 shadow-lg backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

function Button({ children, variant = "default" }) {
  const base = "px-5 py-2 rounded-lg font-medium transition";
  const styles =
    variant === "outline"
      ? "border border-slate-600 hover:bg-slate-800"
      : "bg-cyan-600 hover:bg-cyan-500 text-black";

  return <button className={`${base} ${styles}`}>{children}</button>;
}

function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid" />
      </div>
      <style>{`
        @keyframes gridMove { from { transform: translateY(0); } to { transform: translateY(60px); } }
        .animate-grid { animation: gridMove 20s linear infinite; }
      `}</style>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const [preview, setPreview] = useState(null);

  const certifications = [
    { name: "AWS Cloud Practitioner Essentials — AWS Skill Builder (2025)", image: "/certs/aws-cloud-practitioner.png", link: null },
    { name: "MySQL Bootcamp — Udemy (2023)", image: "/certs/mysql-bootcamp.png", link: "https://www.udemy.com/certificate/UC-6fa360d0-20de-45e2-85ad-c763e76c4511/" },
    //{ name: "Cloud & DevOps Specialization — Coursera (2023)", image: "/certs/cloud-devops.png", link: null },
    { name: "Security Fundamentals — Microsoft (2019)", image: "/certs/microsoft-security.png", link: null },
  ];

  const badges = [
    { name: "AWS Knowledge: Cloud Essentials", image: "/badges/aws-cloud-essentials.png", link: "https://www.credly.com/badges/bb1ea324-6840-470d-b8ae-919aa8af69f9/linked_in_profile" },
    { name: "AWS Educate Introduction to Cloud 101", image: "/badges/aws-cloud-101.png", link: "https://www.credly.com/badges/02e6be05-78bf-4887-9a5c-68440ef6c3ba/linked_in_profile" },
    { name: "AWS Educate Getting Started with Storage", image: "/badges/aws-storage.png", link: "https://www.credly.com/badges/9873e5b1-08bb-4c0b-9915-78ae74010d55/linked_in_profile" },
    { name: "AWS Educate Getting Started with Compute", image: "/badges/aws-compute.png", link: "https://www.credly.com/badges/d49b7670-bbfa-4ffe-af49-3a0a8945b9f2/linked_in_profile" },
    { name: "AWS Educate Getting Started with Databases", image: "/badges/aws-database.png", link: "https://www.credly.com/badges/b2b20730-4894-4e1a-81d0-9f6cc85a7985/linked_in_profile" },
    { name: "AWS Educate Getting Started with Networking", image: "/badges/aws-networking.png", link: "https://www.credly.com/badges/cfaa05db-99dd-47a7-8e68-970e7b65d344/linked_in_profile" },
    { name: "AWS Educate Getting Started with Cloud Ops", image: "/badges/aws-cloudops.png", link: "https://www.credly.com/badges/01e6f32d-6892-44f8-abb5-61d2d9f40a27/linked_in_profile" },
    { name: "AWS Educate Getting Started with Security", image: "/badges/aws-security.png", link: "https://www.credly.com/badges/932338e5-e58e-45b9-8e47-62531a20e568/linked_in_profile" },
    { name: "AWS Educate Getting Started with Serverless", image: "/badges/aws-serverless.png", link: "https://www.credly.com/badges/410247a9-7013-4e8c-b092-41567d66ce45/linked_in_profile" },
    { name: "Introduction to Cloud Computing", image: "/badges/intro-cloud.png", link: "https://www.credly.com/badges/27e22ff2-79f1-4fa5-a590-6b009c7e9ee5/linked_in_profile" },
    { name: "DevOps Essentials", image: "/badges/devops.png", link: "https://www.credly.com/badges/3fe9b45a-5293-41fb-b9aa-b72c253c5dc7/linked_in_profile" },
    { name: "Linux Commands & Shell Scripting Essentials", image: "/badges/linux.png", link: "https://www.credly.com/badges/5d5d96aa-dd07-44a9-b195-531dad7dba78/linked_in_profile" },
    { name: "Software Engineering Essentials", image: "/badges/software-engineering.png", link: "https://www.credly.com/badges/11c65ee6-2222-4bbb-b30c-757e19fe7598/linked_in_profile" },
    { name: "Git and GitHub Essentials", image: "/badges/git-github.png", link: "https://www.credly.com/badges/b834a215-e1e4-45fb-ba93-f0fd2bcc0a64/linked_in_profile" },
    { name: "ISC2 Candidate", image: "/badges/isc2.png", link: "https://www.credly.com/badges/a1bc5bd8-bb87-44d0-a1ee-0bb2e1c7b9ba/linked_in_profile" },
    { name: "MTA: Security Fundamentals", image: "/badges/mta-security.png", link: "https://www.credly.com/badges/2f499d68-d5a2-476e-a91d-db6f7beda3f7/public_url" },
  ];

  return (
    <div className="relative min-h-screen text-white p-6">
      <BackgroundGrid />

      <div className="max-w-6xl mx-auto space-y-24">

        {/* Hero */}
        <motion.section variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Vishal Singh</h1>
            <p className="text-xl text-slate-300 mb-6">SOC Engineer | Cloud Security | GRC-Aligned Security Operations</p>
            <p className="text-slate-400 leading-relaxed">
              SOC Engineer with hands-on experience in SIEM integration, cloud security engineering, and compliance-driven security architecture across AWS and hybrid environments.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="mailto:vishalsingh.dev58@gmail.com"><Button>Contact</Button></a>
              <a href="https://linkedin.com/in/vishal-singh-7556491b9" target="_blank"><Button variant="outline">LinkedIn</Button></a>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl opacity-30 animate-pulse" />
              <img src="/profile.png" alt="Vishal Singh" className="relative w-64 h-64 rounded-full object-cover border-4 border-cyan-500 shadow-2xl" />
            </div>
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-semibold mb-6">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["SIEM & SOC Operations", "Cloud Security (AWS)", "GRC & Compliance"].map((skill, i) => (
              <motion.div key={i} whileHover={{ y: -6 }}>
                <Card><CardContent className="text-center text-lg font-medium">{skill}</CardContent></Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
          <div className="space-y-6">
            <Card><CardContent>
              <h3 className="text-xl font-semibold">ControlCase International — Appliance Integration Engineer</h3>
              <p className="text-slate-400 mb-2">Feb 2025 – Present</p>
              <ul className="list-disc ml-5 text-slate-300 space-y-1">
                <li>Integrated Windows, Linux, databases into Rapid7 InsightIDR SIEM.</li>
                <li>Automated AWS log ingestion using Lambda.</li>
                <li>Optimized NxLog and Fluent Bit for high-fidelity detections.</li>
              </ul>
            </CardContent></Card>

            <Card><CardContent>
              <h3 className="text-xl font-semibold">ControlCase International — Cloud Infrastructure Engineer</h3>
              <p className="text-slate-400 mb-2">Feb 2024 – Jan 2025</p>
              <ul className="list-disc ml-5 text-slate-300 space-y-1">
                <li>Designed secure AWS architectures aligned with compliance frameworks.</li>
                <li>Integrated monitoring and SIEM for security visibility.</li>
                <li>Deployed CrowdStrike EDR across regulated environments.</li>
              </ul>
            </CardContent></Card>

            <Card><CardContent>
              <h3 className="text-xl font-semibold">Larsen & Toubro Corporate — Industrial Intern</h3>
              <p className="text-slate-400 mb-2">May 2019 – Jun 2019</p>
              <ul className="list-disc ml-5 text-slate-300 space-y-1">
                <li>Exposure to enterprise governance and industrial risk management.</li>
                <li>Worked on MCQ-based examination web application.</li>
              </ul>
            </CardContent></Card>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Award /> Certifications</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, i) => {
              const Wrapper = cert.link ? motion.a : motion.div;
              return (
                <Wrapper key={i} href={cert.link || undefined} target={cert.link ? "_blank" : undefined} whileHover={{ scale: 1.08 }} className="block" onClick={() => !cert.link && setPreview(cert)}>
                  <Card className="text-center cursor-pointer">
                    <CardContent>
                      <img src={cert.image} alt={cert.name} className="w-full h-32 object-contain mb-4" />
                      <p className="font-medium text-sm">{cert.name}</p>
                      {cert.link ? <p className="text-cyan-400 text-sm mt-2">Verify →</p> : <p className="text-slate-400 text-xs mt-2">Click to preview</p>}
                    </CardContent>
                  </Card>
                </Wrapper>
              );
            })}
          </div>
        </motion.section>

        {preview && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-slate-900 rounded-2xl max-w-4xl w-full p-6 relative">
              <button onClick={() => setPreview(null)} className="absolute top-4 right-4"><X /></button>
              <h3 className="text-lg font-semibold mb-4">{preview.name}</h3>
              <img src={preview.image} alt={preview.name} className="w-full rounded-lg" />
            </div>
          </div>
        )}

        {/* Badges */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><BadgeCheck /> Digital Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {badges.map((badge, i) => (
              <motion.a key={i} href={badge.link} target="_blank" whileHover={{ scale: 1.15, rotate: 1 }}>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-4 text-center shadow-xl hover:shadow-cyan-500/30 transition">
                  <img src={badge.image} alt={badge.name} className="w-20 h-20 mx-auto mb-3" />
                  <p className="text-xs">{badge.name}</p>
                  <p className="text-xs text-cyan-400 mt-1">Verify →</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <footer className="text-center text-slate-500 pt-10 border-t border-slate-800">
          <div className="flex justify-center gap-6 mb-4"><span className="flex items-center gap-2"><MapPin size={16}/> Mumbai, India</span></div>
          <p>© {new Date().getFullYear()} Vishal Singh — Cybersecurity Portfolio</p>
        </footer>
      </div>
    </div>
  );
}
