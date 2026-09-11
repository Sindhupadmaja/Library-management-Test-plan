# Test Execution Report

## Execution Summary

**Project:** Library Management System  
**Test cycle:** QA-2023-01  
**Execution type:** Manual functional testing  
**Environment:** Local browser prototype

| Metric | Result |
|---|---:|
| Total test cases | 12 |
| Passed | 9 |
| Failed | 2 |
| Blocked | 1 |
| Pass rate | 75% |
| Open Critical defects | 0 |

## Test Results

| Test Case | Result | Defect |
|---|---|---|
| TC-001 Valid login | PASS | |
| TC-002 Invalid login | PASS | |
| TC-003 Empty username | PASS | |
| TC-004 Empty password | PASS | |
| TC-005 Search matching book | PASS | |
| TC-006 Search no match | FAIL | DEF-001 |
| TC-007 Empty search | PASS | |
| TC-008 Borrow available book | PASS | |
| TC-009 Borrow unavailable book | FAIL | DEF-002 |
| TC-010 Borrow confirmation | PASS | |
| TC-011 Return borrowed book | PASS | |
| TC-012 Return unavailable book | BLOCKED | DEF-003 |

## Defect Summary

- DEF-001: No-results search displays an unclear message.
- DEF-002: Unavailable book can be selected for borrowing in a specific edge case.
- DEF-003: Return scenario requires a previously borrowed test state; execution was blocked in the isolated test session.

## Release Recommendation

**CONDITIONAL PASS**

Core login, search, borrow, and return flows are substantially functional, but the two failed cases should be corrected and retested before a production release.

This report is a portfolio test artifact based on the local prototype included in this repository.
