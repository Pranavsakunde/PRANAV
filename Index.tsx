import { useState, useEffect } from "react";
import { SlideNavigation } from "@/components/SlideNavigation";
import { SlideSection } from "@/components/SlideSection";
import { PartCard } from "@/components/PartCard";
import { Card } from "@/components/ui/card";
import { Cpu, HardDrive, MonitorPlay, Check, X } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import cpuImg from "@/assets/cpu.jpg";
import ramImg from "@/assets/ram.jpg";
import motherboardImg from "@/assets/motherboard.jpg";
import gpuImg from "@/assets/gpu.jpg";
import storageImg from "@/assets/storage.jpg";
import psuImg from "@/assets/psu.jpg";
import coolingImg from "@/assets/cooling.jpg";
import monitorImg from "@/assets/monitor.jpg";
import keyboardImg from "@/assets/keyboard.jpg";
import mouseImg from "@/assets/mouse.jpg";
import printerImg from "@/assets/printer.jpg";
import speakersImg from "@/assets/speakers.jpg";
import webcamImg from "@/assets/webcam.jpg";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 20;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const slides = [
    // Slide 1: Hero
    <section key="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Hero" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
      </div>
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Computer Hardware
        </h1>
        <p className="text-2xl text-muted-foreground mb-8">
          A Comprehensive Guide to Internal & External Components
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" />
            <span>Internal Components</span>
          </div>
          <div className="flex items-center gap-2">
            <MonitorPlay className="h-5 w-5 text-primary" />
            <span>External Devices</span>
          </div>
          <div className="flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-primary" />
            <span>Complete Analysis</span>
          </div>
        </div>
      </div>
    </section>,

    // Slide 2: Introduction
    <SlideSection
      key="intro"
      title="Understanding Computer Hardware"
      subtitle="The Foundation of Modern Computing"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="p-8 bg-gradient-to-br from-card to-secondary border-border">
          <h3 className="text-2xl font-bold mb-4 text-primary">What is Computer Hardware?</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Computer hardware refers to the physical components that make up a computer system. These components work together to process, store, and display information.
          </p>
        </Card>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card border-border">
            <h4 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <Cpu className="h-6 w-6 text-primary" />
              Internal Components
            </h4>
            <p className="text-muted-foreground">
              Hardware inside the computer case that processes and stores data
            </p>
          </Card>
          <Card className="p-6 bg-card border-border">
            <h4 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
              <MonitorPlay className="h-6 w-6 text-primary" />
              External Components
            </h4>
            <p className="text-muted-foreground">
              Peripheral devices that connect to the computer for input and output
            </p>
          </Card>
        </div>
      </div>
    </SlideSection>,

    // Slide 3-4: Internal Parts 1
    <SlideSection
      key="internal1"
      title="Internal Components"
      subtitle="The Brain and Heart of Your Computer"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <PartCard
          title="CPU (Central Processing Unit)"
          description="The brain of the computer that executes instructions and processes data."
          image={cpuImg}
          features={[
            "Processes billions of calculations per second",
            "Controls all computer operations",
            "Modern CPUs have multiple cores for multitasking"
          ]}
        />
        <PartCard
          title="RAM (Random Access Memory)"
          description="Temporary storage that provides quick access to data currently in use."
          image={ramImg}
          features={[
            "Faster than permanent storage",
            "Temporarily stores active programs and data",
            "More RAM allows better multitasking"
          ]}
        />
      </div>
    </SlideSection>,

    <SlideSection
      key="internal2"
      title="Internal Components"
      subtitle="Core System Components"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <PartCard
          title="Motherboard"
          description="The main circuit board connecting all computer components together."
          image={motherboardImg}
          features={[
            "Houses CPU, RAM, and expansion slots",
            "Provides power distribution",
            "Enables communication between components"
          ]}
        />
        <PartCard
          title="Graphics Card (GPU)"
          description="Processes and renders images, videos, and animations."
          image={gpuImg}
          features={[
            "Essential for gaming and video editing",
            "Accelerates visual computing tasks",
            "Supports multiple display outputs"
          ]}
        />
      </div>
    </SlideSection>,

    // Slide 4: Internal Parts 3
    <SlideSection
      key="internal3"
      title="Internal Components"
      subtitle="Storage and Power Management"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <PartCard
          title="Storage (HDD/SSD)"
          description="Permanent storage for your operating system, programs, and files."
          image={storageImg}
          features={[
            "HDD: Larger capacity, slower speeds",
            "SSD: Faster performance, more durable",
            "Stores data even when powered off"
          ]}
        />
        <PartCard
          title="Power Supply Unit (PSU)"
          description="Converts electrical power and distributes it to all components."
          image={psuImg}
          features={[
            "Provides stable power to components",
            "Protects against power surges",
            "Different wattages for different needs"
          ]}
        />
      </div>
    </SlideSection>,

    // Slide 5: Internal Parts 4
    <SlideSection
      key="internal4"
      title="Internal Components"
      subtitle="Cooling Systems"
    >
      <div className="max-w-2xl mx-auto">
        <PartCard
          title="Cooling System"
          description="Keeps components at optimal temperatures to prevent overheating."
          image={coolingImg}
          features={[
            "Air cooling with fans",
            "Liquid cooling for high-performance systems",
            "Prevents hardware damage from heat",
            "Ensures stable system performance"
          ]}
        />
      </div>
    </SlideSection>,

    // Slide 8: Uses of Internal Components
    <SlideSection
      key="internal-uses"
      title="Uses of Internal Components"
      subtitle="How Internal Hardware Powers Your Computer"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { component: "CPU", uses: ["Executes program instructions", "Performs mathematical calculations", "Controls data flow between components", "Manages system operations"] },
          { component: "RAM", uses: ["Stores currently running programs", "Provides fast data access", "Enables smooth multitasking", "Temporarily holds OS data"] },
          { component: "Motherboard", uses: ["Connects all components", "Distributes power", "Facilitates communication", "Houses expansion slots"] },
          { component: "GPU", uses: ["Renders graphics and videos", "Accelerates gaming performance", "Processes image editing", "Powers multiple displays"] },
          { component: "Storage", uses: ["Stores operating system", "Saves user files and documents", "Holds installed programs", "Maintains data permanently"] },
          { component: "PSU", uses: ["Converts AC to DC power", "Supplies consistent voltage", "Protects from power surges", "Powers all components"] }
        ].map((item, index) => (
          <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all">
            <h3 className="text-xl font-bold mb-4 text-primary">{item.component}</h3>
            <ul className="space-y-2">
              {item.uses.map((use, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 9: Advantages of Internal Components
    <SlideSection
      key="internal-advantages"
      title="Advantages of Internal Components"
      subtitle="Benefits of Internal Hardware Architecture"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { title: "High Performance", desc: "Direct connection to motherboard enables faster data transfer and processing speeds" },
          { title: "Protected Environment", desc: "Enclosed in case protects from physical damage, dust, and environmental factors" },
          { title: "Efficient Power Usage", desc: "Optimized power distribution reduces energy waste and heat generation" },
          { title: "Integrated Design", desc: "Components work seamlessly together for optimal system performance" },
          { title: "Upgradeable", desc: "Can replace or upgrade individual components to improve performance" },
          { title: "Cost Effective", desc: "Internal components generally offer better price-to-performance ratio" }
        ].map((adv, index) => (
          <Card key={index} className="p-6 bg-gradient-to-br from-card to-secondary border-border">
            <h3 className="text-xl font-bold mb-3 text-primary">{adv.title}</h3>
            <p className="text-muted-foreground">{adv.desc}</p>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 10: Disadvantages of Internal Components
    <SlideSection
      key="internal-disadvantages"
      title="Disadvantages of Internal Components"
      subtitle="Limitations and Challenges"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Complex Installation", desc: "Requires technical knowledge to install or replace components safely" },
          { title: "Compatibility Issues", desc: "Components must be compatible with motherboard and other hardware" },
          { title: "Limited Portability", desc: "Cannot be easily moved between different computer systems" },
          { title: "Heat Generation", desc: "High-performance components produce heat requiring adequate cooling" },
          { title: "Space Constraints", desc: "Physical size limitations in computer case restrict component choices" },
          { title: "Warranty Concerns", desc: "Opening case or replacing parts may void manufacturer warranty" }
        ].map((dis, index) => (
          <Card key={index} className="p-6 bg-card border-destructive/30">
            <div className="flex items-start gap-3 mb-3">
              <X className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <h3 className="text-xl font-bold text-foreground">{dis.title}</h3>
            </div>
            <p className="text-muted-foreground ml-9">{dis.desc}</p>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 11-12: External Parts
    <SlideSection
      key="external1"
      title="External Components"
      subtitle="Input and Output Devices"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <PartCard
          title="Monitor"
          description="Display device that shows visual output from your computer."
          image={monitorImg}
          features={[
            "Various sizes and resolutions available",
            "LCD, LED, and OLED technologies",
            "Refresh rates important for gaming"
          ]}
        />
        <PartCard
          title="Keyboard"
          description="Primary input device for typing and commanding the computer."
          image={keyboardImg}
          features={[
            "Mechanical or membrane switches",
            "Wired or wireless connectivity",
            "Customizable layouts and backlighting"
          ]}
        />
      </div>
    </SlideSection>,

    <SlideSection
      key="external2"
      title="External Components"
      subtitle="Peripherals and Accessories"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <PartCard
          title="Mouse"
          description="Pointing device for navigation and interaction with graphical interfaces."
          image={mouseImg}
          features={[
            "Optical or laser tracking",
            "Programmable buttons",
            "Ergonomic designs available"
          ]}
        />
        <PartCard
          title="Printer"
          description="Output device that produces physical copies of digital documents."
          image={printerImg}
          features={[
            "Inkjet for color printing",
            "Laser for fast black & white",
            "All-in-one with scanning capability"
          ]}
        />
      </div>
    </SlideSection>,

    // Slide 8: External Parts 3
    <SlideSection
      key="external3"
      title="External Components"
      subtitle="Audio and Video Peripherals"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <PartCard
          title="Speakers"
          description="Audio output devices for sound playback and multimedia."
          image={speakersImg}
          features={[
            "Stereo or surround sound systems",
            "Wired or Bluetooth connectivity",
            "Enhanced audio for entertainment"
          ]}
        />
        <PartCard
          title="Webcam"
          description="Video input device for video calls and content creation."
          image={webcamImg}
          features={[
            "HD and 4K resolution options",
            "Built-in or external models",
            "Essential for remote communication"
          ]}
        />
      </div>
    </SlideSection>,

    // Slide 15: Uses of External Components
    <SlideSection
      key="external-uses"
      title="Uses of External Components"
      subtitle="How Peripherals Enhance Computer Functionality"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { component: "Monitor", uses: ["Displays visual output", "Shows user interface", "Enables visual work", "Supports multimedia viewing"] },
          { component: "Keyboard", uses: ["Text and data input", "Executes shortcuts", "Controls applications", "Gaming input device"] },
          { component: "Mouse", uses: ["Navigation and selection", "Precise cursor control", "Gaming and design work", "Drag and drop operations"] },
          { component: "Printer", uses: ["Creates physical documents", "Prints photos and images", "Produces reports and forms", "Outputs labels and graphics"] },
          { component: "Speakers", uses: ["Audio output for media", "Gaming sound effects", "Video call audio", "Music and podcasts"] },
          { component: "Webcam", uses: ["Video conferencing", "Online meetings", "Content creation", "Security monitoring"] }
        ].map((item, index) => (
          <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all">
            <h3 className="text-xl font-bold mb-4 text-primary">{item.component}</h3>
            <ul className="space-y-2">
              {item.uses.map((use, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 16: Advantages of External Components
    <SlideSection
      key="external-advantages"
      title="Advantages of External Components"
      subtitle="Benefits of Peripheral Devices"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Easy Installation", desc: "Simple plug-and-play setup without opening computer case" },
          { title: "High Portability", desc: "Can be easily moved and shared between different computers" },
          { title: "Hot Swappable", desc: "Connect and disconnect while computer is running without restart" },
          { title: "Wide Compatibility", desc: "Universal standards like USB work across different systems and brands" },
          { title: "Easy Replacement", desc: "Simple to replace if damaged without affecting internal components" },
          { title: "Expandability", desc: "Add unlimited peripherals through USB hubs and expansion ports" }
        ].map((adv, index) => (
          <Card key={index} className="p-6 bg-gradient-to-br from-card to-secondary border-border">
            <h3 className="text-xl font-bold mb-3 text-primary">{adv.title}</h3>
            <p className="text-muted-foreground">{adv.desc}</p>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 17: Disadvantages of External Components
    <SlideSection
      key="external-disadvantages"
      title="Disadvantages of External Components"
      subtitle="Limitations of Peripheral Devices"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Cable Management", desc: "Multiple devices create clutter with numerous cables and connections" },
          { title: "Physical Vulnerability", desc: "Exposed to accidental damage, spills, and environmental hazards" },
          { title: "Port Limitations", desc: "Limited number of available ports may require hubs or adapters" },
          { title: "Performance Bottlenecks", desc: "USB bandwidth shared among devices can reduce data transfer speeds" },
          { title: "Additional Cost", desc: "Quality peripherals can be expensive and add to total system cost" },
          { title: "Desk Space", desc: "Requires significant desk space for keyboard, mouse, speakers, etc." }
        ].map((dis, index) => (
          <Card key={index} className="p-6 bg-card border-destructive/30">
            <div className="flex items-start gap-3 mb-3">
              <X className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <h3 className="text-xl font-bold text-foreground">{dis.title}</h3>
            </div>
            <p className="text-muted-foreground ml-9">{dis.desc}</p>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 18: Uses
    <SlideSection
      key="uses"
      title="Computer Uses"
      subtitle="How Computers Transform Our Daily Lives"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Education", desc: "Online learning, research, and digital classrooms" },
          { title: "Business", desc: "Data management, communication, and productivity" },
          { title: "Entertainment", desc: "Gaming, streaming, and multimedia content" },
          { title: "Communication", desc: "Email, video calls, and social networking" },
          { title: "Creative Work", desc: "Graphic design, video editing, and music production" },
          { title: "Scientific Research", desc: "Data analysis, simulations, and modeling" }
        ].map((use, index) => (
          <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all">
            <h3 className="text-xl font-bold mb-3 text-foreground">{use.title}</h3>
            <p className="text-muted-foreground">{use.desc}</p>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 10: Benefits
    <SlideSection
      key="benefits"
      title="Computer Benefits"
      subtitle="Transforming Modern Society"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          "Automation of repetitive tasks saving time and effort",
          "Global connectivity enabling instant communication",
          "Access to vast information and educational resources",
          "Enhanced productivity in professional environments",
          "Digital storage eliminating physical space requirements",
          "Advanced data processing for complex calculations",
          "Creative tools for artistic expression and design",
          "Entertainment and leisure activities at fingertips"
        ].map((benefit, index) => (
          <Card key={index} className="p-6 bg-card border-border flex items-start gap-4">
            <div className="mt-1">
              <Check className="h-6 w-6 text-primary flex-shrink-0" />
            </div>
            <p className="text-foreground leading-relaxed">{benefit}</p>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 11: Advantages
    <SlideSection
      key="advantages"
      title="Advantages of Computers"
      subtitle="Key Strengths in Modern Computing"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Speed", desc: "Performs millions of operations per second" },
          { title: "Accuracy", desc: "Minimal errors in calculations and data processing" },
          { title: "Storage Capacity", desc: "Stores massive amounts of data in small space" },
          { title: "Multitasking", desc: "Runs multiple programs simultaneously" },
          { title: "Consistency", desc: "Delivers same results for identical tasks" },
          { title: "Versatility", desc: "Adaptable to various tasks and industries" }
        ].map((adv, index) => (
          <Card key={index} className="p-8 bg-gradient-to-br from-card to-secondary border-border hover:border-primary transition-all">
            <h3 className="text-2xl font-bold mb-3 text-primary">{adv.title}</h3>
            <p className="text-muted-foreground text-lg">{adv.desc}</p>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 12: Disadvantages
    <SlideSection
      key="disadvantages"
      title="Disadvantages of Computers"
      subtitle="Challenges and Limitations to Consider"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          { title: "Health Issues", desc: "Eye strain, poor posture, and sedentary lifestyle" },
          { title: "Security Risks", desc: "Vulnerable to viruses, malware, and cyber attacks" },
          { title: "Dependency", desc: "Over-reliance on technology for daily tasks" },
          { title: "Cost", desc: "High initial investment and maintenance expenses" },
          { title: "Privacy Concerns", desc: "Data collection and potential misuse of information" },
          { title: "Environmental Impact", desc: "E-waste and energy consumption concerns" }
        ].map((dis, index) => (
          <Card key={index} className="p-8 bg-card border-destructive/30 hover:border-destructive transition-all">
            <div className="flex items-start gap-3 mb-3">
              <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-foreground">{dis.title}</h3>
            </div>
            <p className="text-muted-foreground text-lg ml-9">{dis.desc}</p>
          </Card>
        ))}
      </div>
    </SlideSection>,

    // Slide 13: Conclusion
    <section key="conclusion" className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Conclusion
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-2xl text-foreground font-semibold">
            Computers are indispensable tools in modern society
          </p>
          <p>
            Understanding both internal and external components helps us appreciate the complexity and capability of these machines.
          </p>
          <p>
            While computers offer tremendous advantages in speed, accuracy, and versatility, it's important to be aware of potential disadvantages and use them responsibly.
          </p>
          <p className="text-xl text-primary font-semibold pt-4">
            The future of computing continues to evolve, bringing new possibilities and innovations.
          </p>
        </div>
      </div>
    </section>
  ];

  return (
    <main className="relative">
      <div className="transition-opacity duration-500">
        {slides[currentSlide]}
      </div>
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={() => setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1))}
        onPrev={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
      />
    </main>
  );
};

export default Index;
