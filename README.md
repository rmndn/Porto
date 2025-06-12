<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yilzi Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    body {
      background: linear-gradient(135deg, #1A1F2E, #2E3A59);
      font-family: 'Inter', sans-serif;
      color: #F0F8FF;
    }
    .banner-img {
      transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    }
    .banner-img:hover {
      transform: scale(1.05) rotate(1deg);
      box-shadow: 0 15px 50px rgba(30, 144, 255, 0.7), 0 0 25px rgba(0, 191, 255, 0.4);
    }
    .section {
      background: linear-gradient(145deg, #1A1F2E, #2E3A59);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(30, 144, 255, 0.15);
      border-radius: 20px;
      position: relative;
      overflow: hidden;
    }
    .glow-circle {
      position: absolute;
      background: radial-gradient(circle, rgba(30, 144, 255, 0.15) 0%, transparent 60%);
      border-radius: 50%;
    }
    .marquee {
      background: rgba(28, 37, 38, 0.8);
      box-shadow: 0 0 15px rgba(30, 144, 255, 0.2);
    }
    .btn-github {
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    .btn-github:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 25px rgba(30, 144, 255, 0.5);
    }
  </style>
</head>
<body class="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
  <!-- Banner Section -->
  <div class="text-center mb-12">
    <img src="https://qu.ax/qESyd.jpg" alt="Yilzi Portfolio Banner" class="banner-img mx-auto w-full max-w-4xl rounded-2xl" style="box-shadow: 0 10px 40px rgba(30, 144, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3);">
  </div>

  <!-- Header Section -->
  <div class="section py-16 px-8 mb-8 text-center">
    <h1 class="text-5xl sm:text-6xl font-extrabold text-[#00BFFF] mb-4" style="text-shadow: 0 0 25px rgba(30, 144, 255, 0.6);">
      <img src="https://qu.ax/qESyd.jpg" width="35" class="inline-block align-middle rounded-lg mr-2"> Yilzi Portfolio
    </h1>
    <p class="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
      🌌 <strong>A Dynamic Personal Portfolio</strong> 🚀 <br>
      Showcasing my skills, projects, and services with a modern, responsive design and interactive features.
    </p>
    <div class="mt-8 flex justify-center gap-4 flex-wrap">
      <a href="https://github.com/YilziiHCT/website-portofolio1/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
      <a href="https://github.com/YilziiHCT/website-portofolio1/stargazers"><img src="https://img.shields.io/github/stars/YilziiHCT/website-portofolio1" alt="Stars"></a>
      <a href="https://github.com/YilziiHCT/website-portofolio1/issues"><img src="https://img.shields.io/github/issues/YilziiHCT/website-portofolio1" alt="Issues"></a>
      <a href="https://github.com/YilziiHCT/website-portofolio1/network/members"><img src="https://img.shields.io/github/forks/YilziiHCT/website-portofolio1" alt="Forks"></a>
      <a href="https://portofolio1.yilziii.com"><img src="https://img.shields.io/badge/Live%20Demo-Vercel-1E90FF" alt="Live Demo"></a>
    </div>
    <p class="mt-6 text-lg">
      <marquee behavior="scroll" direction="left" class="marquee py-3 px-6 rounded-lg">
        🌟 Last Updated: 10:00 AM WIB, Thursday, June 12, 2025 🌟
      </marquee>
    </p>
    <div class="glow-circle w-32 h-32 top-4 left-4"></div>
    <div class="glow-circle w-48 h-48 bottom-4 right-4"></div>
  </div>

  <!-- Introduction Section -->
  <div class="section py-12 px-8 mb-8">
    <h2 class="text-4xl font-bold text-[#00BFFF] text-center mb-6" style="text-shadow: 0 0 15px rgba(30, 144, 255, 0.4);">🌌 Introduction</h2>
    <p class="text-lg leading-relaxed max-w-3xl mx-auto text-center">
      Welcome to my personal portfolio website! I am Yilzi, a Computer Network and Telecommunications student with a passion for web development, specializing in front-end and back-end technologies.
    </p>
    <div class="glow-circle w-20 h-20 top-4 left-4"></div>
    <div class="glow-circle w-32 h-32 bottom-4 right-4"></div>
  </div>

  <!-- Key Features Section -->
  <div class="section py-12 px-8 mb-8">
    <h2 class="text-4xl font-bold text-[#00BFFF] text-center mb-6" style="text-shadow: 0 0 15px rgba(30, 144, 255, 0.4);">🌟 Key Features</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
      <li class="flex items-start"><i class="fas fa-rocket text-[#00BFFF] mr-2 mt-1"></i> <strong>Responsive Design</strong>: Optimized for all devices</li>
      <li class="flex items-start"><i class="fas fa-paint-brush text-[#00BFFF] mr-2 mt-1"></i> <strong>Interactive Elements</strong>: Animations, smooth scrolling, mobile menu</li>
      <li class="flex items-start"><i class="fas fa-briefcase text-[#00BFFF] mr-2 mt-1"></i> <strong>Project Showcase</strong>: Highlighting latest projects</li>
      <li class="flex items-start"><i class="fas fa-envelope text-[#00BFFF] mr-2 mt-1"></i> <strong>Contact Form</strong>: Easy visitor communication</li>
      <li class="flex items-start"><i class="fas fa-code text-[#00BFFF] mr-2 mt-1"></i> <strong>Open-Source</strong>: MIT Licensed for customization</li>
      <li class="flex items-start"><i class="fas fa-bolt text-[#00BFFF] mr-2 mt-1"></i> <strong>Fast Performance</strong>: Minimal dependencies</li>
    </ul>
  </div>

  <!-- Tech Stack Section -->
  <div class="section py-12 px-8 mb-8">
    <h2 class="text-4xl font-bold text-[#00BFFF] text-center mb-6" style="text-shadow: 0 0 15px rgba(30, 144, 255, 0.4);">🛠 Tech Stack</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-gradient-to-r from-[#1E90FF] to-[#4682B4] text-white">
            <th class="p-4 rounded-tl-lg">Category</th>
            <th class="p-4 rounded-tr-lg">Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-[#4682B4]">
            <td class="p-4"><strong>🌐 Frontend</strong></td>
            <td class="p-4">HTML5, CSS3, JavaScript<br>Tailwind CSS<br>Font Awesome</td>
          </tr>
          <tr>
            <td class="p-4"><strong>⚙️ Tools</strong></td>
            <td class="p-4">Git<br>Visual Studio Code<br>Vercel</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Getting Started Section -->
  <div class="section py-12 px-8 mb-8">
    <h2 class="text-4xl font-bold text-[#00BFFF] text-center mb-6" style="text-shadow: 0 0 15px rgba(30, 144, 255, 0.4);">🚀 Getting Started</h2>
    <h3 class="text-2xl font-semibold text-[#00BFFF] mb-4">📋 Requirements</h3>
    <ul class="list-disc pl-6 mb-6">
      <li>Modern web browser (Chrome, Firefox, Edge)</li>
      <li>Git (for cloning repository)</li>
      <li>Text editor (VS Code recommended)</li>
    </ul>
    <h3 class="text-2xl font-semibold text-[#00BFFF] mb-4">🛠 Installation</h3>
    <ol class="list-decimal pl-6">
      <li><strong>Clone the repository</strong>:
        <pre class="bg-[#252c33] p-4 rounded-lg text-sm">git clone https://github.com/YilziiHCT/website-portofolio1.git
cd website-portofolio1</pre>
      </li>
      <li><strong>Open in browser</strong>:
        <pre class="bg-[#252c33] p-4 rounded-lg text-sm">Open index.html in your browser</pre>
      </li>
    </ol>
  </div>

  <!-- Project Structure Section -->
  <div class="section py-12 px-8 mb-8">
    <h2 class="text-4xl font-bold text-[#00BFFF] text-center mb-6" style="text-shadow: 0 0 15px rgba(30, 144, 255, 0.4);">📂 Project Structure</h2>
    <pre class="bg-[#252c33] p-4 rounded-lg text-sm">
website-portofolio1/
├── assets/           # Images and media files
├── css/              # Custom CSS files
├── js/               # JavaScript files
├── index.html        # Main HTML file
├── README.md         # Project documentation
└── LICENSE           # License file
    </pre>
  </div>

  <!-- Deployment Section -->
  <div class="section py-12 px-8 mb-8">
    <h2 class="text-4xl font-bold text-[#00BFFF] text-center mb-6" style="text-shadow: 0 0 15px rgba(30, 144, 255, 0.4);">🌐 Deployment</h2>
    <h3 class="text-2xl font-semibold text-[#00BFFF] mb-4">🚀 Deploy to Vercel</h3>
    <ol class="list-decimal pl-6">
      <li><strong>Push to GitHub</strong>:
        <pre class="bg-[#252c33] p-4 rounded-lg text-sm">git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YilziiHCT/website-portofolio1.git
git branch -M main
git push -u origin main</pre>
      </li>
      <li><strong>Deploy on Vercel</strong>:
        <ul class="list-disc pl-6">
          <li>Login to <a href="https://vercel.com" class="text-[#1E90FF] hover:underline">Vercel</a></li>
          <li>Import GitHub repository</li>
          <li>Configure as static site</li>
          <li>Deploy!</li>
        </ul>
      </li>
    </ol>
  </div>

  <!-- License Section -->
  <div class="section py-12 px-8 mb-8">
    <h2 class="text-4xl font-bold text-[#00BFFF] text-center mb-6" style="text-shadow: 0 0 15px rgba(30, 144, 255, 0.4);">📜 License</h2>
    <pre class="bg-[#252c33] p-4 rounded-lg text-sm">MIT License

Copyright (c) 2025 Yilzi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in theソフトウェア without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.</pre>
  </div>

  <!-- Footer Section -->
  <div class="text-center mt-12">
    <p class="text-lg mb-4">
      🌟 <strong>Yilzi Portfolio</strong> - Showcasing My Web Development Journey 🚀
    </p>
    <a href="https://github.com/YilziiHCT/website-portofolio1" class="btn-github inline-block bg-gradient-to-r from-[#1E90FF] to-[#4682B4] text-white py-3 px-8 rounded-lg font-bold">View on GitHub</a>
  </div>

  <script>
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  </script>
</body>
</html>