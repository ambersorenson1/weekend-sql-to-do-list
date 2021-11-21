CREATE TABLE "weekend-to-do-app" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR(255) NOT NULL,
    "complete" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR(255)
);

INSERT INTO "toDoList" 
("task", "complete", "notes")
VALUES
('Take son to Dr Appt', false, 'Yearly Checkup'),
('Get gas', false, 'Need to keep tank at least half while it is cold'),
('Wash Laundry', false, 'Need clean clothes for the week');