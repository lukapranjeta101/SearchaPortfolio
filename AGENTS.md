<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

When making UI edits:

- Never claim a change was made unless the file was actually edited.
- Always identify the exact rendered source file before editing.
- Prefer the file currently imported by the active route/page.
- Show the exact file path changed.
- Show a before/after diff snippet for the edited lines.
- If multiple matching components exist, verify which one is rendered before editing.
- If a style change does not appear, check for CSS override, theme tokens, Tailwind class conflicts, inline styles, and duplicate components.
- If uncertain, say the change was not completed.
- For tiny changes, edit only the minimum lines required.