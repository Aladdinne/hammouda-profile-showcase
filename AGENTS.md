# Architecture rules

- Keep portfolio presentation in dedicated components with bilingual content shared in a data module, so both languages remain consistent.
- Store language and appearance preferences locally only; they are display preferences, never identity or authorization data.
- Import uploaded media through Lovable Assets JSON pointers to avoid storing binaries in the repository.
- Use semantic CSS tokens for both appearance modes and the existing Button component for controls.
- Keep decorative marquee, introduction electricity and pointer effects isolated in PortfolioMotion; use animation-frame pointer updates, pause electricity offscreen and disable pointer decoration for touch and reduced motion to preserve usability.
- Keep the contact orbit in ContactOrbit with native clipboard copying and an Africa/Tunis clock; isolate its state from the other portfolio sections.