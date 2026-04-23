"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Overview",
          id: "about",
        },
        {
          name: "Stats",
          id: "metrics",
        },
        {
          name: "Operations",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="UTlogistics"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      title="Excellence in Logistics, Delivered Daily."
      description="UTlogistics is your premier partner for high-scale logistics operations. We leverage data-driven insights to power the future of fast, reliable delivery at Amazon scale."
      testimonials={[
        {
          name: "Sarah Jenkins",
          handle: "@amazon-partner",
          testimonial: "Exceptional logistics precision and high-volume reliability.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/storage-room-supervisor-checking-customer-order_482257-76924.jpg",
          imageAlt: "logistics warehouse night tech",
        },
        {
          name: "Mark Thornton",
          handle: "@supply-chain",
          testimonial: "UTlogistics consistently exceeds throughput expectations.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/graph-going-up-red-arrow-bar-graph-with-arrow-business-concept_35913-3361.jpg",
          imageAlt: "logistics warehouse night tech",
        },
        {
          name: "Linda Wu",
          handle: "@retail-ops",
          testimonial: "Transformative delivery speeds and operations management.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/map-marked-with-pins-by-tourist_23-2148232411.jpg",
          imageAlt: "logistics warehouse night tech",
        },
        {
          name: "James Rivers",
          handle: "@fulfillment",
          testimonial: "Reliable data-driven logistics you can trust.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-coworkers-examine-parcels_482257-75336.jpg",
          imageAlt: "logistics warehouse night tech",
        },
        {
          name: "Elena Rodriguez",
          handle: "@logistics-head",
          testimonial: "Unmatched scale and efficiency for every shipment.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/seaforth-radar-tower-irish-sea-coast-liverpool-united-kingdom_1268-19732.jpg",
          imageAlt: "logistics warehouse night tech",
        },
      ]}
      buttons={[
        {
          text: "Explore Services",
          href: "#features",
        },
        {
          text: "View Statistics",
          href: "#metrics",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/storage-room-supervisor-checking-customer-order_482257-76924.jpg"
      imageAlt="logistics warehouse night tech"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/confident-entrepreneur-satisfied-with-own-success_1163-5474.jpg",
          alt: "Confident entrepreneur satisfied with own success",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-mature-businessman-looking-away_23-2147955371.jpg",
          alt: "Portrait of a smiling mature businessman looking away",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-businessman-imagines-great-career_1163-5478.jpg",
          alt: "Successful businessman imagines great career",
        },
        {
          src: "http://img.b2bpic.net/free-photo/confident-successful-middle-aged-business-leader_1262-4872.jpg",
          alt: "Confident Successful Middle-aged Business Leader",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-festive-plump-male-eyeglasses-bow-tie-dark-grey-background_613910-13747.jpg",
          alt: "Portrait of festive plump male in eyeglasses and bow tie over dark grey background.",
        },
      ]}
      avatarText="Trusted by 500+ Industry Leaders"
      marqueeItems={[
        {
          type: "text",
          text: "Real-time Tracking",
        },
        {
          type: "text",
          text: "Automated Sortation",
        },
        {
          type: "text",
          text: "Smart Routing",
        },
        {
          type: "text",
          text: "Inventory Optimization",
        },
        {
          type: "text",
          text: "Peak Scalability",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Built for High-Growth Logistics"
      description={[
        "Founded on the principles of speed and accuracy, UTlogistics empowers Amazon logistics networks with unparalleled efficiency.",
        "Our data-led approach ensures that every route is optimized, every package is prioritized, and every growth target is met with confidence.",
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "1.2M+",
          title: "Packages Delivered",
          description: "Reliable daily fulfillment across peak shipping periods.",
          imageSrc: "http://img.b2bpic.net/free-photo/graph-going-up-red-arrow-bar-graph-with-arrow-business-concept_35913-3361.jpg",
        },
        {
          id: "m2",
          value: "99.8%",
          title: "Delivery Success",
          description: "High-accuracy rate maintaining our commitment to Amazon standards.",
          imageSrc: "http://img.b2bpic.net/free-photo/map-marked-with-pins-by-tourist_23-2148232411.jpg",
        },
        {
          id: "m3",
          value: "45%",
          title: "Quarterly Growth",
          description: "Expanding our fleet capacity consistently every quarter.",
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-coworkers-examine-parcels_482257-75336.jpg",
        },
      ]}
      title="By The Numbers"
      description="Driving massive growth and record-breaking performance metrics."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Real-time Analytics",
          description: "Instant monitoring of fleet performance and delivery bottlenecks.",
          icon: Zap,
        },
        {
          title: "Capacity Expansion",
          description: "Rapidly scale driver and vehicle count to match demand cycles.",
          icon: Shield,
        },
        {
          title: "Precision Routing",
          description: "AI-optimized routes that maximize on-time delivery efficiency.",
          icon: Award,
        },
      ]}
      title="Optimized Operations"
      description="Our logistics engine provides the infrastructure to scale reliably."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Amazon Fulfillment",
        "Prime Delivery",
        "Logistics Tech Corp",
        "Express Dispatch",
        "Carrier Network Alpha",
        "Global Route Solutions",
        "LastMile Tech",
      ]}
      title="Trusted Partners"
      description="We work closely with the world's leading logistics ecosystems."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Efficiency",
          quote: "UTlogistics set the gold standard for our last-mile delivery operations.",
          name: "Alex Peterson",
          role: "Fulfillment Mgr",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-businessman-with-folded-arms-looking-camera_23-2147955314.jpg",
        },
        {
          id: "t2",
          title: "Reliability",
          quote: "The metrics speak for themselves. Incredible throughput and consistency.",
          name: "Samantha Chen",
          role: "Supply Chain Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-guy-glasses-holding-tablet-looking_74855-3039.jpg",
        },
        {
          id: "t3",
          title: "Growth",
          quote: "They enabled our holiday shipping surge without a single incident.",
          name: "David Miller",
          role: "Ops Director",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-thoughtful-young-businessman_23-2147900103.jpg",
        },
        {
          id: "t4",
          title: "Performance",
          quote: "The data insights provided allow us to optimize our entire workflow.",
          name: "Rebecca Foster",
          role: "Logistics Tech",
          imageSrc: "http://img.b2bpic.net/free-photo/young-delivery-man-red-polo-shirt-cap-standing-with-clipboard-pen-holding-pizza-box-looking-camera-with-smile-face-isolated-blue-background_141793-19550.jpg",
        },
        {
          id: "t5",
          title: "Trust",
          quote: "UTlogistics is a vital part of our delivery infrastructure success.",
          name: "Marcus Thorne",
          role: "Fleet Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-black-woman-communicating-with-courier-while-getting-her-package-delivered_637285-2278.jpg",
        },
      ]}
      title="Client Success Stories"
      description="Insights from our partners and the teams driving our growth."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split-description"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How does UTlogistics scale during peak?",
          content: "We utilize predictive data models to pre-scale our fleet and driver resources ahead of peak demand spikes.",
        },
        {
          id: "f2",
          title: "What geographical areas do you cover?",
          content: "We currently serve major metropolitan areas with a focus on high-density logistics corridors.",
        },
        {
          id: "f3",
          title: "How do I become a partner?",
          content: "Reach out through our contact portal; our logistics evaluation team will review your requirements.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/seaforth-radar-tower-irish-sea-coast-liverpool-united-kingdom_1268-19732.jpg"
      title="Frequently Asked Questions"
      description="Learn more about our logistics models and partnership potential."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Partner with UTlogistics"
      description="Ready to optimize your delivery network? Let's discuss a partnership."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Company Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we assist?",
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/employee-looking-pc-monitor-drinking-coffee-checking-data_482257-108285.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Metrics",
              href: "#metrics",
            },
          ],
        },
        {
          title: "Operations",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Partners",
              href: "#socialProof",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 UTlogistics. All rights reserved."
      bottomRightText="Built for efficiency."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
