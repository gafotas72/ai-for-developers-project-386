# Code Quality Audit — TODO / FIXME / HACK

## Summary

**Date**: 2026-06-01
**Scope**: Full codebase (excluding `node_modules`, `tsp-output`, `.git`)
**Total actionable findings**: 1

---

## Findings by File

### `backend/src/main/java/com/appointments/backend/mapper/UserMapper.java:26`

| Field     | Value                                          |
|-----------|------------------------------------------------|
| **Type**  | TODO                                           |
| **Severity** | LOW                                        |
| **Line**  | 26                                             |
| **Text**  | `//TODO Check if we really need this`          |
| **Description** | The `toEntity(UserDto)` method in the MapStruct `UserMapper` interface is flagged for review — questioning whether a DTO-to-entity conversion is actually required. |

---

## Non-actionable / Configuration

| File | Reason |
|------|--------|
| `backend/config/checkstyle/checkstyle.xml:69` | Checkstyle rule `<property name="highlights" value="TODO,FIXME,XXX"/>` — this is enforcement config, not a code issue. |
| `.github/workflows/opencode-weekly.yml:29` | Workflow prompt text — not a code annotation. |

---

## Existing Issues

No existing issues found in the repository referencing these patterns.

---

## Recommendations

- **UserMapper.java:26** — Either implement the method body if it is needed, or remove the method declaration if unused. Resolve the TODO during the next sprint.
