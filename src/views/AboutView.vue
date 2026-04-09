<script setup>
</script>

<template>
  <div class="about-page">
    <header class="page-header">
      <h1>About Norvan Reports</h1>
      <p class="lead">Committed to delivering accurate, unbiased journalism that matters.</p>
    </header>

    <section class="content-section">
      <h2>Our Mission</h2>
      <p>
        Norvan Reports was founded with a simple but powerful mission: to provide readers
        with trustworthy, in-depth journalism that helps them understand the world around them.
        In an era of information overload, we believe quality journalism is more important than ever.
      </p>
      <p>
        Our team of dedicated journalists and editors work around the clock to bring you
        breaking news, investigative reports, and thoughtful analysis on the issues that shape our lives.
      </p>
    </section>

    <section class="content-section">
      <h2>Our Values</h2>
      <div class="values-grid">
        <div class="value-card">
          <h3>Accuracy</h3>
          <p>Every story is thoroughly fact-checked and verified before publication.</p>
        </div>
        <div class="value-card">
          <h3>Independence</h3>
          <p>Our editorial decisions are never influenced by advertisers or outside interests.</p>
        </div>
        <div class="value-card">
          <h3>Transparency</h3>
          <p>We're open about our sources, methods, and any potential conflicts of interest.</p>
        </div>
        <div class="value-card">
          <h3>Accountability</h3>
          <p>When we make mistakes, we correct them promptly and prominently.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Contact Us</h2>
      <p>
        We value feedback from our readers. If you have a news tip, correction, or general inquiry,
        please don't hesitate to reach out.
      </p>
      <div class="contact-info">
        <p><strong>General Inquiries:</strong> info@norvanreports.com</p>
        <p><strong>News Tips:</strong> tips@norvanreports.com</p>
        <p><strong>Corrections:</strong> corrections@norvanreports.com</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #e5e5e5;
}

.page-header h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.25rem;
  color: #666;
  line-height: 1.5;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #1a1a1a;
}

.content-section p {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 1rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.value-card {
  background: #f8f8f8;
  padding: 1.5rem;
  border-left: 3px solid #0b57d4;
}

.value-card h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.value-card p {
  font-size: 0.9375rem;
  color: #555;
  margin-bottom: 0;
}

.contact-info {
  background: #f8f8f8;
  padding: 1.5rem;
  margin-top: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
  font-size: 0.9375rem;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.125rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
