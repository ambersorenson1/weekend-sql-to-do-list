CREATE TABLE "toDoList" (
    "id" SERIAL PRIMARY KEY,
    "task" VARCHAR(255) NOT NULL,
    "complete" VARCHAR NOT NULL,
    "notes" VARCHAR(255)
);

INSERT INTO "toDoList" 
("task", "complete", "notes")
VALUES
('Take son to Dr Appt', 'N', 'Yearly Checkup'),
('Get gas', 'N', 'Need to keep tank at least half while it is cold'),
('Wash Laundry', 'N', 'Need clean clothes for the week');