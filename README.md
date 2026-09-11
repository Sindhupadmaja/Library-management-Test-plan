# Library Management Test Plan – QA Project

**Project type:** Beginner QA / Manual Testing Project  
**Timeline:** July 2023  
**Focus:** Requirements-based testing, manual test execution, defect reporting, SDLC fundamentals

## 1. Project Overview

This project demonstrates a beginner-level QA workflow for a small Library Management System. The system supports:

- User login
- Book search
- Borrowing books
- Returning books
- Basic validation and error handling

The project is intentionally structured as a practical QA portfolio project rather than a production application. It shows how a tester can convert requirements into test cases, execute them, identify defects, and summarize release quality.

## 2. QA Objective

The primary objective is to verify that the core library workflow behaves correctly for valid and invalid user actions.

### In scope

1. Login
2. Book search
3. Borrow book
4. Return book
5. Input validation
6. Error handling
7. Basic workflow integration

### Out of scope

- Performance/load testing
- Security penetration testing
- Mobile application testing
- Real payment processing
- Production database administration

## 3. Testing Approach

The project uses:

- Requirements-based test design
- Positive testing
- Negative testing
- Boundary/validation checks
- Workflow/integration checks
- Defect reporting
- Retesting
- Regression checks

## 4. Project Structure

```text
Library-Management-Test-Plan-Project/
├── README.md
├── docs/
│   ├── test-plan.md
│   ├── requirements.md
│   ├── traceability-matrix.md
│   └── test-execution-report.md
├── test-cases/
│   └── test-cases.csv
├── defects/
│   └── defect-log.csv
├── test-data/
│   └── users-and-books.csv
├── prototype/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── evidence/
│   └── README.md
└── .github/
    └── workflows/
        └── basic-validation.yml
```

## 5. How to Run the Prototype

No server or package installation is required.

1. Open the `prototype` folder.
2. Double-click `index.html`.
3. Use the sample credentials:
   - Username: `student`
   - Password: `library123`
4. Search for books.
5. Borrow an available book.
6. Return a borrowed book.

## 6. Sample Test Result

The included test execution report contains a realistic portfolio demonstration of test execution against the prototype.

The defect log includes deliberately documented defects discovered during testing. These defects are included to demonstrate the defect lifecycle and should not be interpreted as claims about a third-party product.

## 7. QA Deliverables

| Deliverable | Purpose |
|---|---|
| Test Plan | Defines scope, approach, risks, and exit criteria |
| Requirements | Defines expected system behavior |
| Traceability Matrix | Maps requirements to test cases |
| Test Cases | Defines executable verification steps |
| Defect Log | Records discovered issues |
| Test Execution Report | Summarizes execution and release quality |
| Test Data | Provides repeatable test inputs |
| Prototype | Provides a small system to test |

## 8. Resume Alignment

This project is designed to support the resume project entry:

> **Library Management Test Plan – LPU, India — Jul 2023**

It demonstrates requirements-based test cases for login, search, borrowing, and returns, plus manual execution, defect documentation, validation, and error-handling coverage.

## 9. Suggested GitHub Description

**Requirements-based manual QA project for a Library Management System, including test planning, test cases, traceability, defect tracking, execution reporting, test data, and a lightweight HTML/JavaScript prototype.**
