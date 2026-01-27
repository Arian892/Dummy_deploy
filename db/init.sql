CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO items (name)
VALUES
  ('PERN stack ready'),
  ('Docker Compose working'),
  ('Hackathon mode ON');
