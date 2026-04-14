import { Mail, Phone, MapPin, Github, GraduationCap, Code, Users, Globe, ExternalLink, Briefcase, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <header className="animate-fade-up mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Disponível para oportunidades</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-3">
            Alexandre <span className="text-gradient">Gomes</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-6">
            Estudante de Ciências da Computação
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-muted-foreground">
            <ContactItem icon={<Phone className="w-4 h-4" />} text="(11) 91483-3720" />
            <ContactItem icon={<Mail className="w-4 h-4" />} text="algaalexandre@gmail.com" href="mailto:algaalexandre@gmail.com" />
            <ContactItem icon={<MapPin className="w-4 h-4" />} text="Vila Mariana/SP" />
            <ContactItem icon={<Github className="w-4 h-4" />} text="alexandregomes01" href="https://github.com/alexandregomes01" />
          </div>
        </header>

        {/* About */}
        <Section title="Sobre" delay={1} icon={<Sparkles className="w-4 h-4" />}>
          <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
            Estudante de Ciência da Computação, com experiência em projetos pessoais de desenvolvimento web utilizando HTML, CSS, JavaScript e GitHub. Focado em aprendizado contínuo, resolução de problemas e boas práticas de código. Busco aplicar e aprimorar meus conhecimentos em programação, contribuir com projetos reais e evoluir profissionalmente.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Habilidades" delay={2} icon={<Code className="w-4 h-4" />}>
          <div className="space-y-6">
            <SkillGroup title="Programação" skills={["JavaScript", "HTML", "CSS", "Git/GitHub", "MySQL", "Python"]} />
            <SkillGroup title="Interpessoais" skills={["Resolução de problemas", "Curioso", "Trabalho em equipe", "Analítico", "Comunicação"]} />
            <SkillGroup title="Idiomas" skills={["Inglês"]} />
          </div>
        </Section>

        {/* Education */}
        <Section title="Formação" delay={3} icon={<GraduationCap className="w-4 h-4" />}>
          <div className="space-y-4">
            <TimelineItem
              title="Bacharelado em Ciências da Computação"
              subtitle="Faculdades Metropolitanas Unidas"
              period="2023 – 2026"
              active
            />
            <TimelineItem
              title="Ensino Médio Completo"
              subtitle=""
              period="Conclusão: dez/2022"
            />
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projetos" delay={4} icon={<Briefcase className="w-4 h-4" />}>
          <div className="grid sm:grid-cols-2 gap-4">
            <ProjectCard
              title="DayBuy"
              type="E-commerce"
              description="Site de loja virtual inspirado no Mercado Livre, com listagem de produtos, página de detalhes, simulação de carrinho de compras e design responsivo."
              techs={["HTML", "CSS", "JavaScript"]}
              link="https://marte687.github.io/DayBuy/index.html"
            />
            <ProjectCard
              title="Tabuada Online"
              type="Educacional"
              description="Aplicação web que gera automaticamente a tabuada de um número informado pelo usuário, com interface simples e intuitiva."
              techs={["HTML", "CSS", "JavaScript"]}
              link="https://marte687.github.io/Tabuada/"
            />
          </div>
        </Section>

        {/* Footer */}
        <footer className="animate-fade-up-delay-5 mt-20 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          Alexandre Gomes · {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) => {
  const content = (
    <span className="flex items-center gap-2 transition-colors hover:text-foreground">
      {icon}
      {text}
    </span>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : <span>{content}</span>;
};

const Section = ({ title, children, delay, icon }: { title: string; children: React.ReactNode; delay: number; icon: React.ReactNode }) => (
  <section className={`mb-14 animate-fade-up-delay-${delay}`}>
    <div className="flex items-center gap-2 section-title">
      {icon}
      {title}
    </div>
    {children}
  </section>
);

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h3 className="text-sm font-medium text-foreground/60 mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="skill-tag">{skill}</span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ title, subtitle, period, active }: { title: string; subtitle: string; period: string; active?: boolean }) => (
  <div className="glass-card p-4 sm:p-5 flex items-start gap-4">
    <div className={`mt-1 h-3 w-3 rounded-full shrink-0 ${active ? "bg-primary shadow-[0_0_12px_hsl(210_100%_56%/0.5)]" : "bg-muted-foreground/30"}`} />
    <div>
      <h3 className="font-semibold text-foreground">{title}</h3>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      <p className="text-xs text-muted-foreground/70 mt-1">{period}</p>
    </div>
  </div>
);

const ProjectCard = ({ title, type, description, techs, link }: { title: string; type: string; description: string; techs: string[]; link: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="glass-card p-5 sm:p-6 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(210_100%_56%/0.08)] block">
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold text-foreground group-hover:text-gradient transition-colors">{title}</h3>
      <div className="flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">{type}</span>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-1.5">
      {techs.map((tech) => (
        <span key={tech} className="text-xs px-2 py-0.5 rounded bg-secondary/80 text-secondary-foreground font-mono">{tech}</span>
      ))}
    </div>
  </a>
);

export default Index;
