import { useEffect, useState } from "react";
import MusicCursor from "@/components/MusicCursor";
import CookieConsent from "@/components/CookieConsent";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Menu, X } from "lucide-react";

const LOGO = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp_Image_2025-10-13_at_15.21.50-removebg-preview-150x150.png";
const HERO_IMG = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-15.09.43-1024x575.jpeg";
const OEA_IMG = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-19.50.43.jpeg";
const SARAU_IMG = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-04-at-16.18.24-1.jpeg";
const LUCIA = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-16.53.04.jpeg";
const LEONARDO = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-09-at-23.00.36.jpeg";
const ISRAEL = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-19.29.15-1-682x1024.jpeg";
const ANTONIO = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/ChatGPT-Image-21-de-out.-de-2025-15_18_21-1-2-683x1024.png";
const RODOLFO = "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-04-at-16.16.37.jpeg";
const WHATSAPP = "https://wa.me/5511941724423?text=quero%20mais%20informa%C3%A7%C3%A3o%20sobre%20a%20orquestra";

const SUPPORTERS = [
  "https://sinfonicaaruja.free.nf/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-10-21-at-19.39.37-rdjyt7qjha1jke9aqyqjomyi1jkqf45r4zfmm80r80.jpeg",
  "https://sinfonicaaruja.free.nf/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-06-04-at-12.27.38-rdjytplh34pzozjcuoggi0g9bv4phd4njftuqha9xs.jpeg",
  "https://sinfonicaaruja.free.nf/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-10-21-at-19.39.36-rdjyt23ic9ttmqhhnwas9odqh8cj4xjd47ipqk949c.jpeg",
];

const GALLERY = [
  "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-19.32.50-2-768x1024.jpeg",
  "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-19.32.50-1-768x1024.jpeg",
  "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-19.32.50-768x1024.jpeg",
  "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-16.53.04-768x1024.jpeg",
  "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-19.32.52-768x1024.jpeg",
  "https://sinfonicaaruja.free.nf/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-19.32.50-3-768x1024.jpeg",
];

const NAV = [
  { label: "Orquestra Experimental", href: "#orquestra" },
  { label: "Sarau de Música de Câmara", href: "#sarau" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Galeria", href: "#galeria" },
];

const CTAButton = ({ children, href = WHATSAPP }: { children: React.ReactNode; href?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white shadow-soft transition-transform hover:scale-105 focus:scale-105"
  >
    <MessageCircle className="h-5 w-5" aria-hidden="true" />
    {children}
  </a>
);

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
    {children}
  </h2>
);

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Orquestra Sinfônica de Arujá";
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <MusicCursor />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur" role="banner">
        <div className="container mx-auto flex items-center justify-between gap-4 py-3">
          <a href="#" aria-label="Orquestra Sinfônica de Arujá - Início" className="flex items-center gap-3">
            <img src={LOGO} alt="Logo Orquestra Sinfônica de Arujá" className="h-14 w-14 rounded-full" />
            <span className="hidden font-display text-lg font-bold text-primary sm:block">
              Orquestra Sinfônica<br /><span className="text-sm font-medium text-secondary">de Arujá</span>
            </span>
          </a>
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-muted">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="rounded-md p-2 text-primary lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Navegação móvel" className="border-t border-border lg:hidden">
            <ul className="container mx-auto flex flex-col py-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-3 py-3 text-primary hover:bg-muted"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section className="bg-muted/40 py-16 md:py-24" aria-labelledby="hero-title">
          <div className="container mx-auto grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 id="hero-title" className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
                Sinta a energia da música que inspira Arujá
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Em uma iniciativa inovadora e envolvente, o projeto Orquestra Sinfônica de Arujá (OSA)
                propõe a criação de grupos musicais que promovem a cultura artística da cidade,
                a integração da comunidade e a formação profissional de músicos locais.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Unimos talentos e amantes da música, incentivando a participação ativa de moradores
                de Arujá e região e valorizando a rica diversidade cultural brasileira.
              </p>
              <div className="mt-8">
                <CTAButton>Venha conhecer nossa Orquestra</CTAButton>
              </div>
            </div>
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Maestro regendo a Orquestra Sinfônica de Arujá - Projeto Peixinhos Musicais"
                className="w-full rounded-2xl shadow-soft"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className="py-16 md:py-24" aria-labelledby="projetos-title">
          <div className="container mx-auto">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-secondary">Projetos da orquestra</p>
            <SectionTitle id="projetos-title">Nossas Iniciativas</SectionTitle>

            <article id="orquestra" className="grid items-center gap-10 md:grid-cols-2">
              <img src={OEA_IMG} alt="Orquestra Experimental Arujaense em apresentação" className="rounded-2xl shadow-soft" loading="lazy" />
              <div>
                <h3 className="text-2xl font-bold text-primary md:text-3xl">Orquestra Experimental Arujaense</h3>
                <p className="mt-4 text-muted-foreground">
                  A Orquestra Experimental Arujaense (OEA) é um projeto artístico-pedagógico que integra o
                  movimento de formação orquestral do Alto Tietê, sob a direção do maestro Israel Cardoso.
                  Atua como braço formativo da Orquestra Sinfônica de Arujá, oferecendo a jovens músicos
                  e instrumentistas amadores a vivência prática da música orquestral e camerística.
                </p>
                <p className="mt-4 text-muted-foreground">
                  A OEA promove ensaios tutti, ensaios de naipe, música de câmara e master classes,
                  com repertório que vai do barroco ao contemporâneo. Realiza apresentações didáticas,
                  ensaios abertos e concertos em espaços culturais, igrejas e escolas.
                </p>
                <ul className="mt-6 space-y-1 text-sm text-primary">
                  <li><strong>Direção Artística e Regência:</strong> Maestro Israel Cardoso</li>
                  <li><strong>Coordenação Pedagógica:</strong> Prof. Antonio Beltran</li>
                  <li><strong>Cidade:</strong> Arujá – São Paulo, Brasil</li>
                  <li><strong>Redes sociais:</strong> @orquestrasinfonicadearuja</li>
                </ul>
              </div>
            </article>

            <article id="sarau" className="mt-20 grid items-center gap-10 md:grid-cols-2">
              <div className="md:order-2">
                <img src={SARAU_IMG} alt="Sarau de Música de Câmara" className="rounded-2xl shadow-soft" loading="lazy" />
              </div>
              <div className="md:order-1">
                <h3 className="text-2xl font-bold text-primary md:text-3xl">Sarau de Música de Câmara</h3>
                <p className="mt-4 text-muted-foreground">
                  Iniciativa artística e pedagógica voltada à formação e valorização dos músicos da
                  comunidade. Os participantes se apresentam em formações camerísticas — duos, trios,
                  quartetos e quintetos — explorando do popular ao clássico, em ambiente intimista
                  e inspirador.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Mais do que uma mostra musical, é uma experiência formativa: os participantes
                  assumem o protagonismo, desenvolvendo escuta, expressão e sensibilidade artística
                  sob orientação dos professores do projeto.
                </p>
                <div className="mt-6">
                  <CTAButton>Venha conhecer nossa Orquestra</CTAButton>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Missão Visão Valores */}
        <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24" aria-labelledby="mvv-title">
          <div className="container mx-auto">
            <SectionTitle id="mvv-title">
              <span className="text-primary-foreground">Missão, Visão e Valores</span>
            </SectionTitle>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { t: "Missão", d: "Promover o desenvolvimento integral de crianças e jovens da região por meio da arte, com foco na criatividade, inclusão e aprendizado colaborativo, fortalecendo a economia criativa local." },
                { t: "Visão", d: "Criar grupos musicais que promovam a cultura artística da cidade, integrem a comunidade e proporcionem formação profissional de músicos locais, valorizando a diversidade cultural." },
                { t: "Valores", d: "Criatividade, Educação, Colaboração e Transformação — acreditamos no poder da arte para promover mudanças positivas na vida dos jovens e na sociedade." },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl bg-background/10 p-6 backdrop-blur ring-1 ring-background/20">
                  <h3 className="text-2xl font-bold text-secondary">{b.t}</h3>
                  <p className="mt-3 leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-16 md:py-24" aria-labelledby="dep-title">
          <div className="container mx-auto max-w-5xl">
            <SectionTitle id="dep-title">Depoimentos</SectionTitle>

            <div className="grid gap-8 md:grid-cols-2">
              <figure className="rounded-2xl bg-muted/40 p-6 shadow-soft">
                <img src={LUCIA} alt="Professora Lucia, pianista" className="mb-4 h-24 w-24 rounded-full object-cover" loading="lazy" />
                <blockquote className="text-lg italic text-foreground">
                  “Um sonho realizado, pra todo profissional de música participar de uma Orquestra é um ápice!”
                </blockquote>
                <figcaption className="mt-4 font-semibold text-primary">Professora Lucia<br /><span className="text-sm font-normal text-muted-foreground">Piano</span></figcaption>
              </figure>

              <figure className="rounded-2xl bg-muted/40 p-6 shadow-soft">
                <img src={LEONARDO} alt="Leonardo dos Santos, flautista" className="mb-4 h-24 w-24 rounded-full object-cover" loading="lazy" />
                <blockquote className="text-foreground">
                  “Quando vi o edital do projeto da Orquestra Experimental Arujaense, decidi tirar a flauta da aposentadoria.
                  Pude experimentar o fazer musical, estudar com mais afinco e compartilhar experiências com outros músicos.
                  Essa iniciativa é inovadora na cidade.”
                </blockquote>
                <figcaption className="mt-4 font-semibold text-primary">Leonardo dos Santos<br /><span className="text-sm font-normal text-muted-foreground">Flautista</span></figcaption>
              </figure>
            </div>

            <div className="mt-10 text-center">
              <CTAButton>Venha conhecer nossa Orquestra</CTAButton>
            </div>
          </div>
        </section>

        {/* Por que investir */}
        <section className="bg-muted/40 py-16 md:py-24" aria-labelledby="invest-title">
          <div className="container mx-auto max-w-4xl">
            <SectionTitle id="invest-title">Por que investir?</SectionTitle>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Para cada R$ 1 investido com a Lei Rouanet, existe R$ 1,59 de retorno, ou seja, 59% de retorno.
                É alto o payback dos projetos culturais frutos de incentivo fiscal. A lei gerou R$ 31 bilhões
                em renúncia fiscal, e esses R$ 31 bilhões não só retornaram à economia, como também foram
                gerados mais R$ 18,56 bilhões. Então, o impacto total da Lei Rouanet desde que ela existe é de R$ 51 bilhões.
              </p>
              <p className="text-sm font-semibold text-primary">Fonte: Jornal USP, 2019</p>

              <h3 className="pt-4 text-2xl font-bold text-primary">Lei Paulo Gustavo</h3>
              <p>
                Paralelamente, a pesquisa da Fundação Getúlio Vargas (FGV) sobre a Lei Paulo Gustavo (LPG) revela
                o impacto significativo dessa política no setor cultural. Para cada R$ 1 investido pela lei, o
                retorno é de R$ 6,51, demonstrando a capacidade do setor cultural e da economia criativa de
                impulsionar a atividade econômica local. A LPG viabiliza o maior investimento direto no setor
                cultural da história do Brasil, com R$ 3,9 bilhões destinados a ações e projetos em todo o território nacional.
              </p>
              <p className="text-sm font-semibold text-primary">Fonte: Ministério da Cultura, 2025</p>

              <h3 className="pt-4 text-2xl font-bold text-primary">Geração de empregos e renda em toda a cadeia de valor</h3>
              <p>
                Segundo a pesquisa elaborada pela Fundação Getulio Vargas, entre 2012 e 2016, os investimentos
                ao ProAC ICMS movimentaram R$ 715,4 milhões na economia brasileira, com aumento de R$ 360,3
                milhões no PIB brasileiro. Ao todo, foram gerados mais de quatro mil empregos, correspondentes
                a 0,4% dos empregos do setor de cultura, esporte e recreação, com retorno de R$ 93,6 milhões
                para os cofres públicos, via contribuição de impostos.
              </p>
              <p>
                A cada R$ 1 milhão produzido pelo setor de atividades artísticas, criativas e de espetáculos
                pelo ProAC-SP, são gerados 28,5 postos de trabalho por ano.
              </p>
              <p>
                Dados revelam que, a cada R$ 1 milhão produzido pelo setor de atividades artísticas, criativas
                e de espetáculos pelo programa, são gerados, por ano, 28,5 postos de trabalho, enquanto nos
                demais setores de serviços esse número é de apenas 11,8 empregos. Um resultado expressivo que
                indica que o setor cultural representa um elevado potencial de geração de emprego a nível nacional.
              </p>
              <p className="text-sm font-semibold text-primary">Fonte: Numen Produtora – LinkedIn</p>

              <div className="pt-4 text-center">
                <CTAButton>Venha conhecer nossa Orquestra</CTAButton>
              </div>
            </div>
          </div>
        </section>


        {/* Idealizadores */}
        <section className="py-16 md:py-24" aria-labelledby="ideal-title">
          <div className="container mx-auto">
            <SectionTitle id="ideal-title">Idealizadores da Orquestra</SectionTitle>

            <div className="space-y-16">
              {[
                { name: "Israel Cardoso", role: "Direção Artística e Regência", img: ISRAEL,
                  bio: "Regente, educador e músico atuante no cenário artístico no Brasil e no exterior. MBA em Gestão de Projetos (USP), pós-graduado em Regência (FAMOSP), bacharel (FAAM) e licenciado em Música (FZAYN). Vencedor de dois prêmios do Concurso para Regentes da Academia Chnee 2024 — Escolha do Público e Prêmio do Júri." },
                { name: "Antonio Beltran", role: "Coordenação Pedagógica", img: ANTONIO,
                  bio: "Natural de Arujá-SP, clarinetista e claronista com sólida formação. Bacharel em Música (Faculdade Cantareira), com especialização na EMESP Tom Jobim e estudos na França com Lilian Hariemsed. Atua como coordenador pedagógico e professor do curso de madeiras na Orquestra Municipal de Santa Isabel." },
                { name: "Rodolfo Freitas", role: "Spalla / Professor de Cordas", img: RODOLFO,
                  bio: "Violinista e professor, graduado em Música pela FMU/FIAM-FAAM. Integra o Musykanto Ensemble e atua em projetos camerísticos sob direção de Elina Suris. Professor de Cordas da Orquestra Experimental Arujaense (OEA) e Spalla da Orquestra Sinfônica de Arujá (OSA)." },
              ].map((p) => (
                <article key={p.name} className="grid items-start gap-8 md:grid-cols-[300px,1fr]">
                  <img src={p.img} alt={`Retrato de ${p.name}`} className="w-full rounded-2xl object-cover shadow-soft" loading="lazy" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{p.name}</h3>
                    <p className="mt-1 text-secondary font-semibold">{p.role}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{p.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Apoiadores */}
        <section className="bg-muted/40 py-12" aria-labelledby="apoia-title">
          <div className="container mx-auto">
            <h2 id="apoia-title" className="mb-8 text-center text-2xl font-bold text-primary">Apoiadores</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {SUPPORTERS.map((s, i) => (
                <img key={i} src={s} alt={`Logo apoiador ${i + 1}`} className="h-24 w-auto rounded-md object-contain transition hover:scale-105" loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section id="galeria" className="bg-muted/40 py-16 md:py-24" aria-labelledby="gal-title">
          <div className="container mx-auto">
            <SectionTitle id="gal-title">Galeria da Orquestra</SectionTitle>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {GALLERY.map((g, i) => (
                <a key={i} href={g} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl shadow-soft">
                  <img src={g} alt={`Foto da galeria ${i + 1}`} className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground" role="contentinfo">
        <div className="container mx-auto py-12">
          <h2 className="text-center text-2xl font-bold text-secondary md:text-3xl">Venha conhecer mais sobre nossa orquestra!</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Localização e contato</h3>
              <ul className="mt-4 space-y-3 text-primary-foreground/90">
                <li className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" /><span>CDL Arujá – R. Adhemar de Barros, 95 – Jardim Modelo, Arujá – SP, 07401-290</span></li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-secondary" /><a href="mailto:contatoisraelcardoso@gmail.com" className="hover:underline">contatoisraelcardoso@gmail.com</a></li>
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-secondary" /><a href="tel:+5511941724423" className="hover:underline">(11) 94172-4423</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Nos siga nas redes sociais</h3>
              <div className="relative z-10 mt-4 flex gap-3">
                <a href="https://www.facebook.com/people/Orquestra-Sinf%C3%B4nica-de-Aruj%C3%A1/61577942764525" target="_blank" rel="noopener noreferrer" aria-label="Facebook" onClick={(e) => { e.preventDefault(); window.open("https://www.facebook.com/people/Orquestra-Sinf%C3%B4nica-de-Aruj%C3%A1/61577942764525", "_blank", "noopener,noreferrer"); }} className="cursor-pointer rounded-full bg-background/10 p-3 transition hover:bg-secondary hover:text-primary"><Facebook /></a>
                <a href="https://www.instagram.com/orquestrasinfonicadearuja" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={(e) => { e.preventDefault(); window.open("https://www.instagram.com/orquestrasinfonicadearuja", "_blank", "noopener,noreferrer"); }} className="cursor-pointer rounded-full bg-background/10 p-3 transition hover:bg-secondary hover:text-primary"><Instagram /></a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" onClick={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank", "noopener,noreferrer"); }} className="cursor-pointer rounded-full bg-background/10 p-3 transition hover:bg-secondary hover:text-primary"><MessageCircle /></a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/80">
            <p>Todos os direitos reservados a Orquestra Sinfônica de Arujá</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        onClick={(e) => { e.preventDefault(); window.open(WHATSAPP, "_blank", "noopener,noreferrer"); }}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-whatsapp text-white shadow-soft transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <AccessibilityWidget />
      <CookieConsent />
    </>
  );
};

export default Index;
