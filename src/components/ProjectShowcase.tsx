"use client"

import  HeroSection  from "../../src/components/Herosection"
import TechnologySection  from "../../src/components/Technologysection"
import { ProjectDetailsSection } from "../components/Projectdetailssection"
import { FeaturesSection } from "../components/Featuressection"
import DemoSection  from "../../src/components/Demosection"
import  ERPSystemSection  from "../../src/components/Erpsystem-section"
import ModernTechBrand from "./ModerBrand"
import TechStack from "./TechStack"

 function ProjectShowcase() {
  return (
    <div className="w-full ">
      {/* Hero Section */}
      <HeroSection />

      {/* Technology Stack Section */}
      <TechStack/>
        
        <ModernTechBrand/>
      {/* ERP System Section */}
      <ERPSystemSection />

      {/* Project Details Section */}
      <ProjectDetailsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Demo Section */}
      <DemoSection />
    </div>
  )
}



export  default ProjectShowcase