'use client';
import React from 'react';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { Skeleton } from '../../components/ui/Skeleton';

export default function DesignSystemPage() {
  return (
    <div className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
      <h1>Design System</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Verification route for UI components and tokens.
      </p>

      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2>Typography</h2>
        <hr style={{ marginBottom: 'var(--space-6)', borderColor: 'var(--color-stone)', borderTop: 0 }} />
        <h1>Heading 1 (h1)</h1>
        <h2>Heading 2 (h2)</h2>
        <h3>Heading 3 (h3)</h3>
        <h4>Heading 4 (h4)</h4>
        <p>This is a paragraph (p). The quick brown fox jumps over the lazy dog. Ducex Solicitors represents the pinnacle of legal service, blending traditional authority with modern efficiency.</p>
        <p className="text-body text-slate">Body Text: This is a paragraph of standard body text. It is used for long-form content, descriptions, and general information. The spacing is optimized for readability.</p>
        <p style={{ color: 'var(--text-secondary)' }}>This is secondary text, used for less important information.</p>
        <p style={{ color: 'var(--text-muted)' }}>This is muted text, used for meta information or labels.</p>
      </section>

      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2>Colors</h2>
        <hr style={{ marginBottom: 'var(--space-6)', borderColor: 'var(--color-stone)', borderTop: 0 }} />
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <ColorSwatch name="Ink" variable="var(--color-ink)" />
          <ColorSwatch name="Slate" variable="var(--color-slate)" />
          <ColorSwatch name="Slate Light" variable="var(--color-slate-light)" />
          <ColorSwatch name="Brass" variable="var(--color-brass)" />
          <ColorSwatch name="Brass Light" variable="var(--color-brass-light)" />
          <ColorSwatch name="Parchment" variable="var(--color-parchment)" />
          <ColorSwatch name="Linen" variable="var(--color-linen)" />
          <ColorSwatch name="Stone" variable="var(--color-stone)" />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2>Buttons</h2>
        <hr style={{ marginBottom: 'var(--space-6)', borderColor: 'var(--color-stone)', borderTop: 0 }} />
        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" isLoading>Loading</Button>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2>Form Elements</h2>
        <hr style={{ marginBottom: 'var(--space-6)', borderColor: 'var(--color-stone)', borderTop: 0 }} />
        <div style={{ maxWidth: '400px' }}>
          <Input label="Email Address" type="email" placeholder="john@example.com" hint="We will never share your email." />
          <Input label="Password" type="password" error="Password must be at least 8 characters long." />
          <Input label="Disabled Input" disabled value="Cannot edit me" />
          <Textarea label="Message" placeholder="How can we help you?" />
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2>Cards</h2>
        <hr style={{ marginBottom: 'var(--space-6)', borderColor: 'var(--color-stone)', borderTop: 0 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
          <Card variant="base">
            <h3>Base Card</h3>
            <p>Standard white card with a subtle border. Used for generic content panels.</p>
          </Card>
          <Card variant="base" elevated>
            <h3>Elevated Card</h3>
            <p>Base card with a shadow drop instead of a border. Used for floating elements.</p>
          </Card>
          <Card variant="service" onClick={() => alert('Clicked!')}>
            <h3>Service Card</h3>
            <p>Interactive service card with a top brass accent and linen background. Hover me!</p>
          </Card>
          <Card variant="testimonial">
            <p style={{ fontStyle: 'italic', marginBottom: 'var(--space-4)' }}>"Ducex Solicitors provided exceptional legal counsel during our merger."</p>
            <h4 style={{ marginBottom: 0 }}>John Doe</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>CEO, Example Corp</p>
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--space-12)' }}>
        <h2>Skeletons (Loading States)</h2>
        <hr style={{ marginBottom: 'var(--space-6)', borderColor: 'var(--color-stone)', borderTop: 0 }} />
        <div style={{ maxWidth: '400px' }}>
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            <Skeleton variant="circular" width="48px" height="48px" />
            <div style={{ flex: 1 }}>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </div>
          </div>
          <Skeleton variant="rectangular" height="200px" />
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div style={{ width: '120px' }}>
      <div 
        style={{ 
          height: '80px', 
          backgroundColor: variable, 
          borderRadius: 'var(--radius-md)', 
          border: '1px solid var(--color-stone)',
          marginBottom: 'var(--space-2)'
        }} 
      />
      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)' }}>{name}</div>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>{variable}</div>
    </div>
  );
}
