# Did U?

A reminder and task management system

## Database Pseudocode

### Tables
1. Users

    | Name | ID |
    | --- | --- |
    | `string` | `ID` |
2. Projects

    | Name | Date Created | Date Due | Reoccurring | Reoccurring-End | is complete | Note | ID | User-ID |
    |---|---|---|---|---|---|---|---|---|
    | `string` | `date` | `date` | `bool` | `date` | `bool` | `text`| `ID` | `ref to user table` |

3. Tasks

    | Name | Date Created | Date Due | Reoccurring | Reoccurring End | is complete | is subtask | Notes | ID | project-id |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | `String` | `date` | `date` | `bool` | `date` | `bool` | `bool` | `Text` | `ID` | `ref to project table` |