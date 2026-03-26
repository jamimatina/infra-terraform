# main.py
from infra_terraform import main as infra_main
from infra_ci import main as ci_main
from infra_cd import main as cd_main

def main():
    """This is a main entry point of the application."""
    infra_main()
    ci_main()
    cd_main()

if __name__ == "__main__":
    main()