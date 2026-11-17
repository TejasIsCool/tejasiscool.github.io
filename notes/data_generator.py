from pathlib import Path

dir_path = Path(__file__).resolve().parent
notes_folder = dir_path / "notes"

data: dict[str, dict[str, list[str]]] = {}

courses_list = list(f.name for f in notes_folder.glob("*"))
for course in courses_list:
    data[course] = {}
    course_folder = notes_folder / course
    topics_list = list(f.name for f in course_folder.glob("*"))
    for topic in topics_list:
        topic_folder = course_folder / topic
        files = list(f.name for f in topic_folder.glob("*"))
        data[course][topic] = files

import json 
print(json.dumps(data, indent=4))

# Future thing: Show write html instead of json?
# So js isint needed to show stuff.