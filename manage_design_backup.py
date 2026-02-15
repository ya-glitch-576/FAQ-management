import os
import shutil
import datetime
import sys

BACKUP_ROOT = 'backups'
FILES_TO_BACKUP = [
    'generate_site.py',
    'generate_data.py',
    'sync_faq.py',
    'faq_source.json',
    'FAQ_checked_fixed.csv',
    'data.js',
    'data_v2.js'
]
DIRS_TO_BACKUP = [
    'site',
    'chat-style' # if exists
]

def create_backup(label):
    if not label:
        label = "backup"
    
    timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
    backup_dir = os.path.join(BACKUP_ROOT, f"{timestamp}_{label}")
    
    if os.path.exists(backup_dir):
        print(f"Backup directory {backup_dir} already exists.")
        return

    os.makedirs(backup_dir)
    print(f"Creating backup at: {backup_dir}")

    # Copy files
    for file in FILES_TO_BACKUP:
        if os.path.exists(file):
            shutil.copy2(file, backup_dir)
            print(f"Copied {file}")
        else:
            print(f"Skipped {file} (not found)")

    # Copy directories
    for d in DIRS_TO_BACKUP:
        if os.path.exists(d):
            dest_path = os.path.join(backup_dir, d)
            shutil.copytree(d, dest_path)
            print(f"Copied directory {d}")
        else:
            print(f"Skipped directory {d} (not found)")

    print(f"Backup completed successfully: {backup_dir}")
    print(f"To restore, copy files from {backup_dir} back to current directory.")

def list_backups():
    if not os.path.exists(BACKUP_ROOT):
        print("No backups found.")
        return
    
    backups = sorted(os.listdir(BACKUP_ROOT))
    print("Available backups:")
    for b in backups:
        print(f" - {b}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python manage_design_backup.py [save <label> | list]")
    else:
        command = sys.argv[1]
        if command == "save":
            label = sys.argv[2] if len(sys.argv) > 2 else "auto"
            create_backup(label)
        elif command == "list":
            list_backups()
        else:
            print("Unknown command. Use 'save <label>' or 'list'.")
