# Software Requirements Specification

## Library Management System

**Version:** 1.0  
**Date:** July 2023

## Functional Requirements

### FR-01 – User Login
The system shall allow a registered user to log in with a valid username and password.

**Validation:**
- Username is required.
- Password is required.
- Invalid credentials must display an error.
- Valid credentials must open the library dashboard.

### FR-02 – Book Search
The system shall allow an authenticated user to search for books by title or author.

**Validation:**
- Matching books should be displayed.
- A search with no matches should show a clear message.
- Empty search should not crash the application.

### FR-03 – Borrow Book
The system shall allow an authenticated user to borrow an available book.

**Validation:**
- An available book can be borrowed.
- The book status changes to borrowed.
- A borrowed/unavailable book cannot be borrowed again.
- A confirmation message should be displayed.

### FR-04 – Return Book
The system shall allow a user to return a book previously borrowed by that user.

**Validation:**
- A borrowed book can be returned.
- The book status changes to available.
- A confirmation message should be displayed.

### FR-05 – Input Validation
The system shall reject missing or invalid input where required.

### FR-06 – Error Handling
The system shall display understandable error messages instead of failing silently or crashing.

## Non-Functional Requirements

### NFR-01 – Usability
Messages and controls should be understandable to a beginner user.

### NFR-02 – Reliability
Core login and book-management actions should complete without application crashes.

### NFR-03 – Data Integrity
Borrow and return operations should maintain the correct book availability state.

## Acceptance Criteria

The release is considered acceptable when:

1. All critical login tests pass.
2. Search works for matching and non-matching queries.
3. Borrow and return state changes are correct.
4. No open Critical defects remain.
5. Known lower-severity defects are documented and accepted.
