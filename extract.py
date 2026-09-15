import json

with open('My workflow N8N.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for node in data.get('nodes', []):
    name = node.get('name', '')
    if name in ['Protocol Switcher', 'Robotic Arm', 'Backup Surgeon']:
        print(f"--- {name} ---")
        print(node.get('parameters', {}).get('text', ''))
