DROP TABLE IF EXISTS posts;
CREATE TABLE posts(
    id INTEGER PRIMARY KEY autoincrement,
    name TEXT NOT NULL,
    content TEXT NOT NULL
);