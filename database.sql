CREATE TABLE "toDoList" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar,
	"completed" varchar,
	"delete" varchar
);

INSERT INTO "toDoList" 
("task", "completed", "delete")
VALUES
('Load the dishwasher', 'N', '')