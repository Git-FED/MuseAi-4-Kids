# Initial Requirements — Muse 4 Kids

## Account and profiles

### R1. Parent account

The system must associate the account with a parent account holder. The parent owns account settings, billing, and access management.

### R2. Kid profiles

The parent must be able to create, view, edit, and deactivate kid profiles within the parent account. A kid profile must not be represented as a separately owned account in the initial implementation.

### R3. Access boundaries

The product must distinguish parent controls from kid-profile participation. Exact permissions are TBD and require a UX and safety review.

## Family chat

### R4. Paid upsell

The product must present the family chat as a paid upsell. Pricing, trial behavior, cancellation, and entitlement rules are TBD.

### R5. Muse moderation

The family chat must route messages through Muse moderation or an equivalent moderation layer before or during delivery, according to the final technical design.

### R6. PG experience

The family chat must enforce a documented PG safety policy. The policy must define blocked content, allowed content, intervention language, escalation behavior, and appeal/support paths before launch.

### R7. Parent controls

The parent must have clearly labeled controls for enabling or disabling the paid family chat and managing kid-profile participation. Final controls and notification behavior are TBD.

## Safety and operations

### R8. Moderation traceability

The system should record moderation outcomes and operational events with the minimum data necessary for safety review, support, and incident response.

### R9. Failure behavior

If moderation is unavailable, the system must fail safely. The exact behavior—queue, block, or limited fallback—requires engineering and safety approval.

### R10. Reporting

The product should provide a mechanism for reporting a concerning message or moderation outcome to the parent/support workflow. Details are TBD.

## Integrations

### R11. Deferred integrations

WhatsApp, SMS, and other external integrations must not be presented as available launch features. They may be evaluated in a later test phase.

## Naming and presentation

### R12. Product identity

User-facing product, repository, and image references must use “Muse 4 Kids.” The program/workstream label may be shown as “FED-EDU * 4 KIDS” where appropriate.

## Non-functional requirements to confirm

- Privacy and child-safety review before launch.
- Auditability of moderation decisions.
- Accessibility requirements.
- Availability and latency targets.
- Data deletion and retention behavior.
- Regional/legal launch requirements.
