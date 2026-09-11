# Test Plan

## 1. Objective

Verify the core functionality of the Library Management System and identify defects before release.

## 2. Test Items

- Login page
- Library search
- Borrow workflow
- Return workflow
- Validation and error messages
- Book availability state

## 3. Test Types

### Functional Testing
Checks whether each requirement behaves according to specification.

### Negative Testing
Uses invalid credentials, unavailable books, missing input, and unmatched searches.

### Integration / Workflow Testing
Checks complete flows such as:

`Login → Search → Borrow → Return`

### Regression Testing
Previously passed functionality is rechecked after a defect fix.

## 4. Test Levels

### System Testing
The complete prototype is tested from the user interface.

### Integration Testing
The interaction between login state, search, borrow state, and return state is checked.

## 5. Test Environment

- OS: Windows / Linux / macOS
- Browser: Chrome, Edge, Firefox
- Application: Local HTML/CSS/JavaScript prototype
- Data: `test-data/users-and-books.csv`

## 6. Entry Criteria

- Prototype is available.
- Requirements are documented.
- Test data is prepared.
- Test cases are reviewed.

## 7. Exit Criteria

- All planned test cases are executed.
- Critical defects are either fixed and retested or formally accepted.
- Test results are recorded.
- Release recommendation is documented.

## 8. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Invalid input is not validated | Medium | Execute negative tests |
| Book state becomes inconsistent | High | Test borrow/return transitions |
| Login state is lost | Medium | Execute workflow tests |
| Search returns incorrect records | Medium | Use known test data |
| Error messages are unclear | Low | Review negative scenarios |

## 9. Deliverables

- Requirements
- Test plan
- Test cases
- Traceability matrix
- Defect log
- Execution report
- Test data
