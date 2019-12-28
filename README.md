# Did U?

A reminder and task management system

## Database Pseudocode

### Tables
1. Users

    | firstName | lastName |
    | --- | --- |
    | `string` | `string` |

2. Projects

    | Title | Date Created | Date Due | Reoccurring | Reoccurring-End | is complete | Note | User-ID |
    | --- | --- | --- | --- | --- | --- | --- | --- |
    | `string` | `date` | `date` | `bool` | `date` | `bool` | `Text` | `ref to user table` |

3. Project Tasks

    | Title | Date Created | Date Due | is complete | Notes | project-id |
    | --- | --- | --- | --- | --- | --- |
    | `String` | `date` | `date` | `bool` | `Text` | `ref to project table` |

4. Tasks

    | Title | Date Created | Date Due | Reoccurring | Reoccurring End | is complete | Notes |
    | --- | --- | --- | --- | --- | --- | --- |
    | `String` | `date` | `date` | `bool` | `date` | `bool` | `Text` |

## Passing Data

### Create
- User
```javascript
User.create({
    "firstName": data.firstName,
    "lastName": data.lastName
})
.then(user => {
    console.log("New user posted to database!");
});
```
- Project
```javascript
Project.create({
    "title": data.title,
    // date must be passed as UTC for storage in MySQL 
    "dateDue": data.dateDue,
    "reoccurring": data.reoccurring,
    "reoccurringEnd": data.reoccurringEnd,
    "isComplete": false,
    "note": data.note
})
.then(project => {
    console.log("New project posted");
});
```
- Project Task
```javascript
ProjectTask.create({
    "tite": data.title,
    // date must be passed as UTC for storage in MySQL 
    "dateDue": data.dateDue,
    "isComplete": false,
    "note": data.note
})
.then(projectTask => {
    console.log("New project task posted");
});
```
- Task
```javascript
Task.create({
    "title": data.title,
    // date must be passed as UTC for storage in MySQL 
    "dateDue": data.dateDue,
    "reoccurring": data.reoccurring,
    "reoccurringEnd": data.reoccurringEnd,
    "isComplete": false,
    "note": data.note
})
.then(task => {
    console.log("New task posted");
});
```
### Read
- Project
- Project Task
- Task

### Update
- Project
- Project Task
- Task

### Delete
- User
- Project
- Project Task
- Task
 