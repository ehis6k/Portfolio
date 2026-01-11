'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn, SlideUp, StaggeredFadeIn } from '@/components/ui/animated-components'

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-dark">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <SlideUp>
              <h2 className="text-4xl md:text-5xl font-bold text-theme-primary mb-6">
                About <span className="text-gradient-accent">Me</span>
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="text-xl text-theme-secondary max-w-2xl mx-auto">
                Passionate about technology, innovation, and creating meaningful digital experiences
              </p>
            </SlideUp>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <FadeIn delay={0.3}>
            <div className="space-y-6">
              <SlideUp delay={0.4}>
                <Card className="glass-effect hover:bg-gray-50 transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-theme-primary mb-4">My Journey</h3>
                    <p className="text-theme-secondary leading-relaxed mb-4">
                      Currently in my final year studying <strong className="text-blue-400">Applied Computer Science</strong> at 
                      Karel de Grote University College, I've developed a strong foundation in software development 
                      and a deep passion for creating innovative solutions.
                    </p>
                    <p className="text-theme-secondary leading-relaxed">
                      My interests span both <strong className="text-blue-400">software development</strong> and 
                      <strong className="text-blue-400"> audio engineering</strong>, giving me a unique perspective 
                      on how technology can enhance creative expression.
                    </p>
                  </CardContent>
                </Card>
              </SlideUp>

              <SlideUp delay={0.6}>
                <Card className="glass-effect hover:bg-gray-50 transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-theme-primary mb-4">Professional Experience</h3>
                    <p className="text-theme-secondary leading-relaxed mb-4">
                      Currently interning at <strong className="text-blue-400">Fujifilm</strong>, where I'm developing 
                      an Asset Management / CMDB tool using <strong className="text-blue-400">.NET and Blazor</strong>. 
                      This experience has given me valuable insights into enterprise-level software development 
                      and project management.
                    </p>
                  </CardContent>
                </Card>
              </SlideUp>
            </div>
          </FadeIn>

          {/* Current Focus & Interests */}
          <FadeIn delay={0.5}>
            <div className="space-y-6">
              <SlideUp delay={0.7}>
                <Card className="glass-effect hover:bg-gray-50 transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-theme-primary mb-6">Content Creation</h3>
                    <p className="text-theme-secondary leading-relaxed mb-4">
                      Beyond coding, I'm active in content creation through vlogging and music. 
                      I play <strong className="text-blue-400">bass guitar and drums</strong>, and publish 
                      tech and lifestyle videos on YouTube, building my personal brand and sharing 
                      my journey with the community.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="bg-gradient-card text-theme-secondary hover:bg-gradient-card">
                        Vlogging
                      </Badge>
                      <Badge variant="outline" className="bg-gradient-card text-theme-secondary hover:bg-gradient-card">
                        Bass Guitar
                      </Badge>
                      <Badge variant="outline" className="bg-gradient-card text-theme-secondary hover:bg-gradient-card">
                        Drums
                      </Badge>
                      <Badge variant="outline" className="bg-gradient-card text-theme-secondary hover:bg-gradient-card">
                        YouTube
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </SlideUp>

              <SlideUp delay={0.9}>
                <Card className="glass-effect hover:bg-gray-50 transition-all duration-300 border-l-4 border-blue-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-theme-primary mb-4">
                      <span className="text-blue-400">Now</span>
                    </h3>
                    <p className="text-theme-secondary leading-relaxed">
                      Interning at Fujifilm, finishing my final year at KdG, and building my personal brand 
                      through vlogging and tech projects. I'm focused on expanding my full-stack development 
                      skills and preparing for the next step in my career.
                    </p>
                  </CardContent>
                </Card>
              </SlideUp>
            </div>
          </FadeIn>
        </div>

        {/* Personal Values */}
        <FadeIn delay={0.8}>
          <div className="mt-16">
            <SlideUp delay={1.0}>
              <h3 className="text-3xl font-bold text-center text-theme-primary mb-8">
                What Drives <span className="text-gradient-accent">Me</span>
              </h3>
            </SlideUp>
            <StaggeredFadeIn delay={1.1}>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="glass-effect hover:bg-gray-50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h4 className="text-xl font-bold text-theme-primary mb-3">Innovation</h4>
                    <p className="text-theme-secondary">
                      Constantly exploring new technologies and pushing the boundaries of what's possible
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-effect hover:bg-gray-50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="text-xl font-bold text-theme-primary mb-3">Quality</h4>
                    <p className="text-theme-secondary">
                      Committed to writing clean, maintainable code and delivering exceptional user experiences
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-effect hover:bg-gray-50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h4 className="text-xl font-bold text-theme-primary mb-3">Collaboration</h4>
                    <p className="text-theme-secondary">
                      Believing in the power of teamwork and open communication to achieve great results
                    </p>
                  </CardContent>
                </Card>
              </div>
            </StaggeredFadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default About 