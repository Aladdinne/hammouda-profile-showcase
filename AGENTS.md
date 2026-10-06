# Architecture rules

- Keep portfolio presentation in dedicated components with bilingual content shared in a data module, so both languages remain consistent.
- Store language and appearance preferences locally only; they are display preferences, never identity or authorization data.
- Import uploaded media through Lovable Assets JSON pointers to avoid storing binaries in the repository.
- Use semantic CSS tokens for both appearance modes and the existing Button component for controls.