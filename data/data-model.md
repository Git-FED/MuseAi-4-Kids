# Proposed Data Model — Muse 4 Kids

This is a conceptual model for discussion, not a migration-ready schema.

## ParentAccount

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary identifier |
| `email` | string | Parent login/contact; validation and verification TBD |
| `status` | enum | `active`, `suspended`, `closed` |
| `created_at` | timestamp | Creation time |
| `updated_at` | timestamp | Last update |

## KidProfile

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary identifier |
| `parent_account_id` | UUID | Required owner relationship |
| `display_name` | string | Product display name; naming rules TBD |
| `status` | enum | `active`, `paused`, `archived` |
| `created_at` | timestamp | Creation time |
| `updated_at` | timestamp | Last update |

## FamilyChatEntitlement

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary identifier |
| `parent_account_id` | UUID | Account holder and purchaser |
| `status` | enum | `trial`, `active`, `past_due`, `canceled`, `expired` |
| `provider_reference` | string/null | Billing provider reference; TBD |
| `started_at` | timestamp/null | Entitlement start |
| `ends_at` | timestamp/null | End/cancellation time |

## FamilyChat

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary identifier |
| `parent_account_id` | UUID | Owning parent account |
| `entitlement_id` | UUID | Paid entitlement relationship |
| `status` | enum | `active`, `paused`, `closed` |
| `created_at` | timestamp | Creation time |

## ChatParticipant

| Field | Type | Notes |
|---|---|---|
| `chat_id` | UUID | Family chat |
| `participant_type` | enum | `parent`, `kid_profile`, `muse` |
| `participant_id` | UUID/null | Null or system ID for Muse |
| `status` | enum | `active`, `removed` |

## ChatMessage

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary identifier |
| `chat_id` | UUID | Family chat |
| `sender_type` | enum | `parent`, `kid_profile`, `muse`, `system` |
| `sender_id` | UUID/null | Sender reference |
| `content` | text | Encryption/retention requirements TBD |
| `delivery_status` | enum | `pending`, `delivered`, `blocked`, `failed` |
| `created_at` | timestamp | Submission time |

## ModerationEvent

| Field | Type | Notes |
|---|---|---|
| `id` | UUID | Primary identifier |
| `message_id` | UUID | Reviewed message |
| `decision` | enum | `allow`, `rewrite`, `warn`, `block`, `escalate` |
| `policy_version` | string | Policy version used |
| `reason_code` | string | Structured reason, not raw sensitive notes |
| `created_at` | timestamp | Decision time |

## Data principles

- Collect the minimum data needed to operate the account, profiles, chat, billing, and safety workflows.
- Do not add external messaging identifiers until those integrations are explicitly approved.
- Final retention, encryption, access logging, export, and deletion rules require privacy/legal review.
