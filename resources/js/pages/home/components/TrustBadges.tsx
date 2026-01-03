const TrustBadges = () => {
  const badges = [
    {
      name: 'Cambridge Assessment International Education',
      logo: '/logos/cambridge-logo.png',
      alt: 'Cambridge Assessment Logo'
    },
    {
      name: 'Edexcel',
      logo: '/logos/edexcellogo.png',
      alt: 'Edexcel Logo'
    },
    {
      name: 'ELITES - Education Excellence Leadership',
      logo: '/logos/ELITES.png',
      alt: 'ELITES Logo'
    }
  ];

  return (
    <section className="py-12 bg-background border-t border-border">
      <div className="container-max section-padding">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            Trusted by leading educational institutions and examination bodies
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={badge.logo}
                alt={badge.alt}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
