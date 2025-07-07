---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.S. in Data Science, Columbia University, 2022
* B.S. in Mathematics, Pennsylvania State University, 2021
* B.S. in Biomedical Engineering, Pennsylvania State University, 2021

Work Experience
======
### Data Scientist  
**Memorial Sloan Kettering Cancer Center** – New York, NY  
*Jan 2023 – Present*  
- Built robust, scalable pipelines in Python and R using Nextflow, streamlining single-cell RNA-seq workflows on HPC systems and increasing processing speed by 30%  
- Applied machine learning techniques (clustering, dimensionality reduction, gene signature scoring) to uncover regulatory patterns in patient samples  
- Visualized gene expression trends using Matplotlib and Seaborn, delivering insights to cross-disciplinary research teams  

**Skills**: Python, R, Nextflow, Scanpy, Seaborn, HPC, scRNA-seq

---

### Machine Learning Researcher  
**Columbia University** – New York, NY  
*Sep 2021 – Dec 2022*  
- Developed CNN-based models for fluorescent microscopy image analysis, achieving 97% segmentation accuracy using PyTorch and TensorFlow  
- Built a dataset of 300+ microscopy masks, improving annotation accuracy and reducing labeling time by 25%  
- Conducted hyperparameter tuning and data augmentation, resulting in a 15% increase in model accuracy  
- Communicated results across interdisciplinary teams of scientists and clinicians  

**Skills**: PyTorch, TensorFlow, Python, Deep Learning, Image Segmentation

---

### Machine Learning Research Intern  
**National Institutes of Health (NIH)** – Bethesda, MD  
*May 2021 – Aug 2021*  
- Implemented a 3D CNN in TensorFlow to predict hemorrhagic transformation from MRI, achieving 80% classification accuracy  
- Streamlined preprocessing of 100+ clinical images, reducing preparation time by 40%  
- Collaborated with physicians, engineers, and lab technicians to refine data pipelines  

**Skills**: TensorFlow, Python, 3D CNN, Medical Imaging, MRI

---

### Undergraduate Data Analyst  
**Pennsylvania State University** – University Park, PA  
*Dec 2017 – May 2021*  
- Designed ML-based workflows for diagnosing bloodstream infections, reducing diagnostic turnaround time by 20%  
- Conducted clustering analyses to identify pathogen growth trends, improving reproducibility by 15%  
- Supervised a team of 3 undergraduates for data processing and project execution  

**Skills**: Python, Clustering, Machine Learning, Research Supervision

---

### Machine Learning Research Intern  
**National Institutes of Health (NIH)** – Bethesda, MD  
*May 2019 – Aug 2019*  
- Improved diffusion MRI processing by developing image-enhancement algorithms, increasing speed by 30%  
- Processed and analyzed 100+ MRI datasets in Python and C, improving robustness by 25%  
- Delivered presentations to multidisciplinary teams, translating complex data into actionable insight  

**Skills**: Python, C, Diffusion MRI, Image Processing, Scientific Communication
  
Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
#* Currently signed in to 43 different slack teams
