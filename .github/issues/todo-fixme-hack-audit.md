# Code Quality Audit — TODO / FIXME / HACK Scan

**Date:** 2026-06-29  
**Run by:** opencode agent (big-pickle)

---

## Summary

- **TODO:** 1 finding (low severity)
- **FIXME:** 0 findings
- **HACK:** 0 findings

All prior actionable items remain unresolved. No regressions (new items) detected.

---

## Actionable Findings

| # | Type | File | Line | Text | Severity |
|---|------|------|------|------|----------|
| 1 | TODO | `backend/src/main/java/com/appointments/backend/mapper/UserMapper.java` | 26 | `//TODO Check if we really need this` | LOW |

### Details

**1. `UserMapper.java:26` — `//TODO Check if we really need this`**

The `toEntity(UserDto)` method in the MapStruct mapper is flagged for review. It questions whether the DTO-to-entity reverse mapping is actually used/necessary. If unused, it could be removed to reduce maintenance surface.

---

## Non-Actionable References

These files mention TODO/FIXME/HACK but are configuration or prompt text, not code debt:

| File | Line | Content |
|------|------|---------|
| `backend/config/checkstyle/checkstyle.xml` | 69 | `<property name="highlights" value="TODO,FIXME,XXX"/>` |
| `.github/workflows/opencode-weekly.yml` | 29 | Prompt text instructing this scan |

---

## Related Existing Issues

- **PR #3** — "1 TODO found in UserMapper.java" (open, created 2026-06-01) — same finding reported previously.
- **Issue #1** — unrelated bug report about past time slots appearing in slot list.
- **PR #2** — fix for Issue #1 (still open).
