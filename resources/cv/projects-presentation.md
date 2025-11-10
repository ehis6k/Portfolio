---
marp: true
theme: default
paginate: true
style: |
  section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1 {
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    border-bottom: 4px solid #ffd700;
    padding-bottom: 20px;
    font-size: 3em;
  }
  h2 {
    color: #ffd700;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    margin-bottom: 15px;
    font-size: 2.2em;
  }
  h3 {
    color: #ffeb99;
    font-style: italic;
    margin-top: -10px;
    font-size: 1.5em;
  }
  ul {
    line-height: 1.8;
    font-size: 1.1em;
  }
  li {
    margin-bottom: 10px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  }
  strong {
    color: #ffd700;
    font-weight: 700;
  }
  section.title {
    text-align: center;
    justify-content: center;
  }
  section.thank-you {
    text-align: center;
    justify-content: center;
    font-size: 1.5em;
  }
  footer {
    color: rgba(255,255,255,0.7);
  }
---

<!-- _class: title -->

# Projects Portfolio

A showcase of diverse technical projects

---

## Asset Management System (AMS)

- **Web-based platform** for tracking IT assets, locations, and users
- Built with **.NET 9.0, Blazor Server, SQL Server**
- Device inventory, unique serial tracking, and transaction history
- **Integrated Windows Authentication/Active Directory**
- Role-based access control for admin, engineer, user
- Deployed on enterprise infrastructure, security best practices

---

## KDG Restaurant Backend
### Keep Dishes Going

- **Spring Boot backend** for restaurant ordering and management
- **Hexagonal architecture**, strong domain-driven design
- Adds/edits/publishes dishes, manages restaurant info
- Orders/basket flows, **Stripe payments, Keycloak auth**
- PostgreSQL, Dockerized setup, ready for CI/CD pipelines

---

## KDG Food Delivery Frontend

- **React + TypeScript SPA** for restaurant platform
- Material-UI, React Query for state and data
- Browse/filter restaurants, **responsive design**
- Secure owner dashboard with **Keycloak OIDC auth**
- REST API integration, mock API support

---

## LLL Sentiment Project

- **Aspect-Based Sentiment Analysis (ABSA)** toolkit in Python
- Implements lexicon, transformer, and LLM analyzers
- **Unified interface**: analyze texts for aspect sentiment
- Uses a real annotated reviews dataset for benchmarking
- Compares practical results and performance across methods

---

## Credit Card Fraud Detection
### ML Lifecycle

- Complete **ML pipeline** on Kaggle credit card fraud data
- Handles extreme class imbalance with **SMOTE**
- Evaluates RandomForest, XGBoost, Logistic Regression
- **FastAPI microservice** deployment with health and prediction endpoints
- Notebook-driven, explainable evaluation and reporting

---

## EvaleBike
### Electric Bike Evaluation System

- **Spring Boot platform** for e-bike test bench data and evaluations
- Multi-environment, environment variable/CICD managed
- **Azure cloud-native**: Container Apps, PostgreSQL, Redis, Blob Storage
- Automated **GitLab CI/CD pipelines**: validate, build, deploy, infra
- External API integration, strong security and secrets management

---

<!-- _class: thank-you -->

# Thank You

Questions?


