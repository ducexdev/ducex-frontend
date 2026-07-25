import { HeroSlider } from '../components/page/HeroSlider';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';
import { team } from '../data/team';
import { testimonials } from '../data/testimonials';
import Link from 'next/link';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer';
import { AttorneyCard } from '../components/page/AttorneyCard';
import { 
  Building2, 
  Scale, 
  Home as HomeIcon, 
  Users, 
  Briefcase, 
  ScrollText,
  ShieldCheck,
  MessageSquare,
  TrendingUp,
  Award,
  Clock,
  Landmark
} from 'lucide-react';

export default function Home() {
  const featuredServices = services.slice(0, 6);
  // Map icons for services (mockup specific)
  const getServiceIcon = (title: string) => {
    if (title.includes('Corporate')) return <Building2 size={24} color="var(--color-brass)" />;
    if (title.includes('Litigation')) return <Scale size={24} color="var(--color-brass)" />;
    if (title.includes('Real Estate')) return <HomeIcon size={24} color="var(--color-brass)" />;
    if (title.includes('Family')) return <Users size={24} color="var(--color-brass)" />;
    if (title.includes('Business')) return <Briefcase size={24} color="var(--color-brass)" />;
    if (title.includes('Wills')) return <ScrollText size={24} color="var(--color-brass)" />;
    return <Landmark size={24} color="var(--color-brass)" />;
  };

  // Limit team to exactly 4 members
  const featuredTeam = team.slice(0, 4);

  return (
    <>
      <HeroSlider />
      
      {/* Stats Bar */}
      <section style={{ padding: 'var(--space-8) 0', backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-stone)' }}>
        <StaggerContainer className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-8)' }}>
          <StaggerItem>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <Award size={32} color="var(--color-brass)" />
              <div>
                <h3 style={{ fontSize: 'var(--text-2xl)', margin: 0, color: 'var(--color-ink)' }}>10+</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)', margin: 0 }}>Years of Excellence</p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <Users size={32} color="var(--color-brass)" />
              <div>
                <h3 style={{ fontSize: 'var(--text-2xl)', margin: 0, color: 'var(--color-ink)' }}>500+</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)', margin: 0 }}>Clients Represented</p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <TrendingUp size={32} color="var(--color-brass)" />
              <div>
                <h3 style={{ fontSize: 'var(--text-2xl)', margin: 0, color: 'var(--color-ink)' }}>95%</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)', margin: 0 }}>Success Rate</p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <Clock size={32} color="var(--color-brass)" />
              <div>
                <h3 style={{ fontSize: 'var(--text-2xl)', margin: 0, color: 'var(--color-ink)' }}>24/7</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)', margin: 0 }}>Client Support</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Practice Areas */}
      <section style={{ padding: 'var(--space-20) 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0.1}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <p style={{ color: 'var(--color-brass)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>WHAT WE DO</p>
              <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-ink)', marginBottom: 'var(--space-4)' }}>Practice Areas</h2>
              <p style={{ color: 'var(--color-slate)', maxWidth: '600px', margin: '0 auto' }}>
                We provide expert legal services across a wide range of practice areas to individuals, businesses, and organizations.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
              {featuredServices.map(service => (
                <StaggerItem key={service.id}>
                  <Link href={`/services/${service.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                    <Card variant="service" className="clickable" style={{ backgroundColor: 'var(--color-smoke)', border: 'none', height: '100%' }}>
                      <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-slate)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                        {getServiceIcon(service.title)}
                      </div>
                      <h3 style={{ marginBottom: 'var(--space-3)', color: 'var(--color-ink)', fontSize: 'var(--text-lg)' }}>{service.title}</h3>
                      <p style={{ color: 'var(--color-slate)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', flexGrow: 1 }}>{service.shortDescription}</p>
                      <span style={{ color: 'var(--color-ink)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xs)', display: 'inline-flex', alignItems: 'center', textTransform: 'uppercase' }}>
                        Learn More &nbsp; <span style={{ color: 'var(--color-brass)' }}>&rarr;</span>
                      </span>
                    </Card>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
          
          <ScrollReveal direction="up" delay={0.4}>
            <div style={{ textAlign: 'center' }}>
              <Link href="/services">
                <Button variant="ghost" style={{ border: '2px solid var(--color-stone)', color: 'var(--color-slate)' }}>View All Practice Areas</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: 'var(--space-20) 0', backgroundColor: 'var(--color-parchment)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-12)' }}>
          <ScrollReveal direction="left">
            <div>
              <p style={{ color: 'var(--color-brass)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>WHY CHOOSE US</p>
              <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-ink)', marginBottom: 'var(--space-6)', lineHeight: 'var(--lh-tight)' }}>
                Trusted Legal Partner<br/>You Can Rely On
              </h2>
              <p style={{ color: 'var(--color-slate)', fontSize: 'var(--text-base)' }}>
                Our clients trust us for our legal expertise, integrity, and unwavering commitment to achieving the best outcomes.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-8)' }}>
              <StaggerItem>
                <div>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-slate)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                    <ShieldCheck size={20} color="var(--color-white)" />
                  </div>
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)', color: 'var(--color-ink)' }}>Experienced Attorneys</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)' }}>Our team brings decades of combined experience across various legal disciplines.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-slate)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                    <Users size={20} color="var(--color-white)" />
                  </div>
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)', color: 'var(--color-ink)' }}>Client-Centered Approach</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)' }}>We listen, understand, and tailor solutions that meet your unique needs.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-slate)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'var(--space-4) 0' }}>
                    <MessageSquare size={20} color="var(--color-white)" />
                  </div>
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)', color: 'var(--color-ink)' }}>Transparent Communication</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)' }}>We keep you informed every step of the way with clear and honest communication.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--color-slate)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'var(--space-4) 0' }}>
                    <TrendingUp size={20} color="var(--color-white)" />
                  </div>
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-bold)', marginBottom: 'var(--space-2)', color: 'var(--color-ink)' }}>Proven Track Record</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-slate)' }}>Our success is measured by the results we achieve for our clients.</p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* About Ducex Solicitors */}
      <section style={{ padding: 'var(--space-20) 0', backgroundColor: 'var(--color-slate)', color: 'var(--color-white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-12)', alignItems: 'center' }}>
          <ScrollReveal direction="up">
            <div>
              <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-white)', marginBottom: 'var(--space-4)' }}>About Ducex Solicitors</h2>
              <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--color-brass)', marginBottom: 'var(--space-6)' }}></div>
              <p style={{ color: 'var(--color-stone)', marginBottom: 'var(--space-8)' }}>
                Ducex Solicitors is a leading full-service law firm in Nigeria, providing innovative, ethical, and results-oriented legal services. Our mission is simple — to deliver exceptional legal solutions that help our clients succeed.
              </p>
              <Link href="/about">
                <Button variant="primary">Learn More About Us</Button>
              </Link>
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.2} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <StaggerItem>
              <div style={{ textAlign: 'center' }}>
                <Award size={40} color="var(--color-brass)" style={{ margin: '0 auto var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-5xl)', color: 'var(--color-white)', margin: '0 0 var(--space-2)' }}>10+</h3>
                <p style={{ color: 'var(--color-stone)', fontSize: 'var(--text-xs)' }}>Years of Experience</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{ textAlign: 'center' }}>
                <Users size={40} color="var(--color-brass)" style={{ margin: '0 auto var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-5xl)', color: 'var(--color-white)', margin: '0 0 var(--space-2)' }}>500+</h3>
                <p style={{ color: 'var(--color-stone)', fontSize: 'var(--text-xs)' }}>Clients Served</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div style={{ textAlign: 'center' }}>
                <Building2 size={40} color="var(--color-brass)" style={{ margin: '0 auto var(--space-4)' }} />
                <h3 style={{ fontSize: 'var(--text-5xl)', color: 'var(--color-white)', margin: '0 0 var(--space-2)' }}>20+</h3>
                <p style={{ color: 'var(--color-stone)', fontSize: 'var(--text-xs)' }}>Expert Attorneys</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Meet Our Attorneys */}
      <section style={{ padding: 'var(--space-20) 0', backgroundColor: 'var(--color-parchment)' }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <p style={{ color: 'var(--color-brass)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>OUR TEAM</p>
              <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-ink)', marginBottom: 'var(--space-4)' }}>Meet Our Attorneys</h2>
              <p style={{ color: 'var(--color-slate)', maxWidth: '600px', margin: '0 auto' }}>
                Our attorneys bring expertise, dedication, and a client-first mindset to every case.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
              {featuredTeam.map(member => (
                <StaggerItem key={member.id}>
                  <AttorneyCard member={member} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
          
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center' }}>
              <Link href="/team">
                <Button variant="ghost" style={{ border: '2px solid var(--color-stone)', color: 'var(--color-slate)' }}>View All Attorneys</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Testimonials */}
      <section style={{ padding: 'var(--space-20) 0', backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <p style={{ color: 'var(--color-brass)', fontWeight: 'var(--font-bold)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-2)' }}>WHAT CLIENTS SAY</p>
              <h2 style={{ fontSize: 'var(--text-4xl)', color: 'var(--color-ink)' }}>Client Testimonials</h2>
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-8)', maxWidth: '1000px', margin: '0 auto' }}>
              {testimonials.slice(0, 2).map(testimonial => (
                <StaggerItem key={testimonial.id}>
                  <div style={{ backgroundColor: 'var(--color-parchment)', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div style={{ color: 'var(--color-brass)' }}>
                        <MessageSquare size={48} />
                      </div>
                      <div>
                        <p style={{ color: 'var(--color-ink)', fontSize: 'var(--text-base)', fontStyle: 'italic', marginBottom: 'var(--space-6)', lineHeight: 'var(--lh-relaxed)' }}>
                          &quot;{testimonial.quote}&quot;
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                          <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-stone)', borderRadius: '50%' }}></div>
                          <div>
                            <h4 style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-ink)' }}>{testimonial.name}</h4>
                            <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--color-slate)' }}>{testimonial.title}, {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section style={{ padding: 'var(--space-12) 0', backgroundColor: 'var(--color-slate)', color: 'var(--color-white)', overflow: 'hidden' }}>
        <ScrollReveal direction="up">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
            <div>
              <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-white)', marginBottom: 'var(--space-2)' }}>Need Legal Assistance?</h2>
              <p style={{ color: 'var(--color-stone)', margin: 0 }}>Get in touch with us today for expert legal advice tailored to your needs.</p>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <Link href="/contact">
                <Button variant="primary">Book a Consultation</Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" style={{ color: 'var(--color-white)', border: '1px solid var(--color-stone)' }}>Contact Us</Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
