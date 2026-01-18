const StatsSection = () => {
  const stats = [
    {
      value: "15+",
      label: "Years of Experience",
      description: "Providing quality mental health care",
    },
    {
      value: "2,500+",
      label: "Clients Helped",
      description: "On their journey to wellness",
    },
    {
      value: "8",
      label: "Licensed Therapists",
      description: "Specialized in diverse areas",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
      description: "Report improved well-being",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container-narrow mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-medium text-primary-foreground/90 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
