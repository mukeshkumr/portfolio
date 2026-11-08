# Pre-deployment change plan

**Reviewed:** 2026-11-08  
**Project:** Mukesh Kumar portfolio (Next.js)

## Assessment

The current source passes `npm run lint` and `npm run build`. `npm audit --omit=dev` reports no production dependency vulnerabilities. A full `npm audit` reports 10 moderate findings in the development-tool dependency tree, all stemming from `minimatch`; `npm ls` also reports ESLint 10 outside peer-version ranges declared by some installed ESLint plugins. This does not indicate a known vulnerability in the shipped application, but the toolchain should be reconciled before release.

One user-facing failure mode needs attention: the full-screen loader is rendered visible in the initial HTML and only removed by client-side JavaScript. If the client bundle fails or JavaScript is unavailable, the page remains covered by the loader. Make the loader progressive-enhancement-only so the portfolio stays usable without it.

An existing Lighthouse report for `http://localhost:3000/` scored Performance 85, Accessibility 100, Best Practices 100, and SEO 100. It recorded 580 ms Total Blocking Time and 10 long tasks. This is local evidence, not a production-domain check or a security test. No exploitable application vulnerability was confirmed in this source/configuration review; this was not a penetration test.

## Mandatory before production

- [ ] **Prevent the loader from blocking the page.** Show it only after client-side motion setup is ready, and ensure it is hidden when JavaScript fails or is disabled. Verify first visits, repeat visits, reduced-motion preference, and mobile.
- [ ] **Resolve the dependency/tooling findings.** Align ESLint with versions supported by `eslint-config-next` and update the vulnerable transitive `minimatch` dependency through compatible package versions. Avoid applying `npm audit fix --force` blindly. Then run `npm ci`, `npm audit`, `npm ls eslint eslint-config-next minimatch`, `npm run lint`, and `npm run build`; review and commit the updated lockfile.
- [ ] **Confirm the hosting mode before uploading.** The project is configured for a normal Next.js build, not static export. Use a host that supports Next.js or intentionally configure and verify static export; uploading the source files alone is not a deployment. Confirm the host's supported Node version and build/start settings.
- [ ] **Check the deployed origin.** Enforce HTTPS, confirm the home page and not-found route work, and smoke-test navigation, mobile layout, external social links, and the contact links on the actual deployment URL. Confirm the public profile and project details are accurate.

## Recommended, not current release blockers

- [ ] Re-run Lighthouse against the production preview on mobile and desktop. Investigate the 580 ms TBT / long tasks if they persist; the saved local score is not a production performance guarantee.
- [ ] Correct `README.md`: it says the site uses Tailwind CSS, Three.js, and GSAP, but those packages are not declared and the current implementation does not use them.
- [ ] Consider adding production social-sharing metadata (canonical URL and Open Graph image) and replacing the default-looking app icon.
- [ ] Review the hosting provider's security-header options (for example, `X-Content-Type-Options`, a suitable `Referrer-Policy`, and clickjacking protection). Add a Content Security Policy only after validating it against Next.js output and the site's styling.

## Scope and limitations

This review covered the checked-in application source, configuration, dependency audit output, build/lint results, and the existing local Lighthouse report. It did not test a live deployment, DNS/TLS configuration, hosting permissions, or perform penetration testing.
