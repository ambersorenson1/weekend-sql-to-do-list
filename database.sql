CREATE TABLE "toDoList" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar,
	"instructions" varchar,
	"completed" varchar,
	"delete" varchar
);

INSERT INTO "toDoList" 
("task", "instructions", "completed", "delete")
VALUES
('Load the dishwasher', 'Take all dirty dishes from kitchen sink and load the dishwasher', 'N', '')