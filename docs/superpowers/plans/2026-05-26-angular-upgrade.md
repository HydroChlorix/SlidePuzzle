# Angular Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the legacy Angular 4 application to a modern Angular version to resolve security vulnerabilities and improve performance and maintainability.

**Architecture:** This plan follows the "Fresh Start" approach. We will create a new Angular project with the latest stable version and then migrate the existing application's components, services, and styles into the new structure. This avoids a complex and error-prone multi-version upgrade process.

**Tech Stack:**
- Angular (latest stable)
- Node.js (latest LTS)
- TypeScript
- Angular CLI

---

### Task 1: Environment Setup

- [x] **Step 1: Install nvm (Node Version Manager)**
  - If you don't have nvm, install it. It will be crucial for managing Node.js versions.
  - Run: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
  - Verify: `nvm --version`

- [x] **Step 2: Install and Use the Latest LTS Node.js**
  - Run: `nvm install --lts`
  - Run: `nvm use --lts`
  - Verify: `node -v` (should show the latest LTS version)

- [x] **Step 3: Install the Latest Angular CLI**
  - Run: `npm install -g @angular/cli@latest`
  - Verify: `ng version`

- [x] **Step 4: Create a New Angular Project**
  - This will be the new home for your application.
  - Run: `ng new slide-puzzle-v2 --style=css --routing=true --strict`
  - This creates a new directory `slide-puzzle-v2` with a modern Angular setup.

- [x] **Step 5: Commit Initial Project**
  - Run: `cd slide-puzzle-v2`
  - Run: `git init && git add . && git commit -m "feat: initial modern Angular project"`

### Task 2: Migrate Core Application Logic

This task involves moving the application's core components and services.

**Files:**
- Create: `slide-puzzle-v2/src/app/my-container/my-container.component.ts`
- Create: `slide-puzzle-v2/src/app/my-container/my-container.component.html`
- Create: `slide-puzzle-v2/src/app/my-container/my-container.component.css`
- Modify: `slide-puzzle-v2/src/app/app.module.ts`
- Modify: `slide-puzzle-v2/src/app/app.component.html`

- [x] **Step 1: Copy `my-container` Component**
  - Copy the contents of the following files from the old project to the new one:
    - `src/app/my-container/my-container.component.ts`
    - `src/app/my-container/my-container.component.html`
    - `src/app/my-container/my-container.component.css`

- [x] **Step 2: Update `my-container.component.ts` for Modern Angular**
  - The old component code will have syntax that needs updating.
  - In `slide-puzzle-v2/src/app/my-container/my-container.component.ts`, update the code. Key changes will likely be in how `Http` is used (now `HttpClient`) and how RxJS operators are imported.
  - You will need to add `HttpClientModule` to `app.module.ts`.

- [x] **Step 3: Declare the Component**
  - In `slide-puzzle-v2/src/app/app.module.ts`, add `MyContainerComponent` to the `declarations` array.
  - Also, add `HttpClientModule` to the `imports` array.
  - *Note: In Angular 21, used standalone components and updated app.ts instead.*

- [x] **Step 4: Use the Component**
  - In `slide-puzzle-v2/src/app/app.component.html`, replace the default content with `<app-my-container></app-my-container>`.

- [x] **Step 5: Copy Assets**
  - Copy the contents of `src/assets/png` from the old project to `slide-puzzle-v2/src/assets/png`.

- [x] **Step 6: Run and Verify**
  - Run: `ng serve`
  - The application should now run, but the puzzle logic may be broken.

- [x] **Step 7: Commit Migration**
  - Run: `git add . && git commit -m "feat: migrate my-container component"`

### Task 3: Fix Breaking Changes in RxJS (N/A)

RxJS 6 introduced "pipable operators," which is a major change from RxJS 5.

- [x] **Step 1: Identify RxJS 5 code**
  - Look for code like `Observable.of(...)` or `.map(...)` chained directly on an observable.
  - *Note: No RxJS usage found in the legacy codebase.*

- [x] **Step 2: Update RxJS imports and syntax**
  - Import operators from `rxjs/operators`.
  - Use the `.pipe()` method on observables.
  - Example:
    ```typescript
    // Old
    import 'rxjs/add/operator/map';
    myObservable.map(data => data * 2);

    // New
    import { map } from 'rxjs/operators';
    myObservable.pipe(map(data => data * 2));
    ```
  - Apply these changes to `my-container.component.ts`.

- [x] **Step 3: Run and Verify**
  - Run: `ng serve`
  - The application should now be working as expected.

- [x] **Step 4: Commit RxJS fixes**
  - Run: `git add . && git commit -m "fix: update RxJS to v6+ syntax"`

### Task 4: Testing

- [ ] **Step 1: Migrate Unit Tests**
  - Copy the contents of `src/app/my-container/my-container.component.spec.ts` from the old project.
  - Update the test file to work with the modern Angular testing setup. You will likely need to import `HttpClientTestingModule`.

- [ ] **Step 2: Run Unit Tests**
  - Run: `ng test`
  - All tests should pass.

- [ ] **Step 3: Commit Test Updates**
  - Run: `git add . && git commit -m "test: migrate and fix unit tests"`

### Task 5: Finalization

- [ ] **Step 1: Review and Clean Up**
  - Remove any unused files from the new project.
  - Ensure the styling and layout are correct.

- [ ] **Step 2: Replace Old Project**
  - Once the new project is fully functional, you can remove the old project and replace it with `slide-puzzle-v2`.

- [ ] **Step 3: Commit Final Project**
  - Run: `git add . && git commit -m "feat: complete Angular upgrade"`
