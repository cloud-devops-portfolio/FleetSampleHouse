# FleetSampleHouse
Production-grade Multi-Cloud DevOps Demo: 4 Real Instances (AWS + GCP), HAProxy LB, PostgreSQL, CI/CD, Monitoring, Auto-Backup. Zero-downtime deploy. Fully reproducible.
                 ┌──────────────────────────────┐
                 │         GitHub Actions        │
                 │ CI/CD Pipelines (lint/test)   │
                 └──────────────┬────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────┐
 │                    AWS Cloud                        │
 │ ┌────────────┐    ┌────────────┐    ┌────────────┐  │
 │ │ Control #1  │ → │ Web #2      │ ↔ │ DB/LB #3    │  │
 │ │ Ansible,TF  │   │ Nginx,App   │   │ MySQL,HAProxy│ │
 │ └────────────┘    └────────────┘    └────────────┘  │
 │                                                     │
 └─────────────────────────────────────────────────────┘
                                │
                                ▼
             ┌────────────────────────────────┐
             │             GCP Node (#4)      │
             │   - K3s Cluster (3 nodes)      │
             │   - ArgoCD GitOps Sync         │
             │   - Prometheus + Grafana       │
             │   - Sealed Secrets Encryption  │
             └────────────────────────────────┘
