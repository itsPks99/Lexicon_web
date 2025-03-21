import "./ourServices.css"

const OurServices = () => {
  // Service data for the first row - Our Solutions
  const solutionsData = [
    {
      id: 1,
      title: "Cyber Security",
      icon: "/icons/cyber-security.svg",
      items: [
        "SSL SASE Anti APT ZNTA",
        "Next Generation Firewall",
        "NGIS HIPS",
        "WAF",
        "DDAN",
        "ADC",
        "Specialized Security for Virtual Infrastructure",
        "D-DoS Security solutions and Intrusion Prevention Systems",
      ],
      url: "/services/cyber-security",
    },
    {
      id: 2,
      title: "Cloud Solutions",
      icon: "/icons/cloud-solutions.svg",
      items: ["Public Cloud", "Cloud Security", "Infrastructure As A Service (IaaS)", "Platform As A Service (PaaS)"],
      url: "/services/cloud-solutions",
    },
    {
      id: 3,
      title: "Open Source Technology",
      icon: "/icons/open-source.svg",
      items: [
        "Enterprise Linux Operating System Platforms",
        "In-memory Caching Databases and noSQL Databases",
        "Enterprise Middleware",
      ],
      url: "/services/open-source",
    },
  ]

  // Service data for the second row - Modern Data Centre Solutions
  const dataCentreData = [
    {
      id: 4,
      title: "Data Protection",
      icon: "/icons/data-protection.svg",
      items: [
        "Appliance with Built-in Storage and Data Protection Software",
        "Archiving Solutions",
        "Backup & Receovery Solutions",
        "Encryption",
        "Dataloss Prevention",
      ],
      url: "/services/data-protection",
    },
    {
      id: 5,
      title: "Virtualization & HCI",
      icon: "/icons/virtualization.svg",
      items: [
        "Server Virtualization",
        "Modern Data Center",
        "Digital Workspace",
        "HCI - Hybrid Cloud",
        "Private Cloud",
        "Mobility Management",
        "Application Modernization",
        "Intrinsic Security",
      ],
      url: "/services/virtualization",
    },
    {
      id: 6,
      title: "Core Infrastructure",
      icon: "/icons/core-infrastructure.svg",
      items: [
        "Servers and Storage",
        "Data Center Networks",
        "WAN Networks",
        "Mobility Solutions",
        "Wi-fi Networks",
        "End Points",
      ],
      url: "/services/core-infrastructure",
    },
  ]

  // Function to render a service card
  const renderServiceCard = (service) => (
    <a href={service.url} className="ourServices_card" key={service.id}>
      <div className="ourServices_cardContent">
        <div className="ourServices_iconContainer">
          <img src={service.icon || "/placeholder.svg"} alt={service.title} className="ourServices_icon" />
        </div>
        <h3 className="ourServices_cardTitle">{service.title}</h3>
        <ul className="ourServices_list">
          {service.items.map((item, index) => (
            <li key={index} className="ourServices_listItem">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )

  return (
    <section className="ourServices_section">
      <div className="ourServices_container">
        {/* Our Solutions Section */}
        <div className="ourServices_sectionHeader">
          <h2 className="ourServices_sectionTitle">Our Solutions</h2>
        </div>

        <div className="ourServices_cardsContainer">{solutionsData.map((service) => renderServiceCard(service))}</div>

        {/* Modern Data Centre Solutions Section */}
        <div className="ourServices_sectionHeader">
          <h2 className="ourServices_sectionTitle">Modern Data Centre Solutions</h2>
        </div>

        <div className="ourServices_cardsContainer">{dataCentreData.map((service) => renderServiceCard(service))}</div>
      </div>
    </section>
  )
}

export default OurServices

