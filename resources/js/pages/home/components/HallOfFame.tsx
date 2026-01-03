const students = [
  { name: "Arfan Rahman", achievement: "A* in Bengali", initials: "AR" },
  { name: "Radit Islam", achievement: "A* in Literature", initials: "RI" },
  { name: "Nafisa Uddin", achievement: "A* in Essay", initials: "NU" },
  { name: "Tasfia Hasan", achievement: "A* in Grammar", initials: "TH" },
  { name: "Naem Khan", achievement: "A* in Bengali", initials: "NK" },
];

const HallOfFame = () => {
  return (
    <section className="py-12 bg-surface border-y border-border">
      <div className="container-max section-padding">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            ★ Recent Hall of Fame
          </span>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          {students.map((student, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-background rounded-full px-4 py-2 shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <span className="text-sm font-semibold text-primary">
                  {student.initials}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {student.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {student.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
