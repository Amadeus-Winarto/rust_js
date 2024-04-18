#!/usr/bin/env python3


import os

FILE_DIR = os.path.dirname(os.path.realpath(__file__))
BLACKLIST = set(["if_expr.rs", "shadowing.rs"])


def get_source_files():
    source_files = []
    for root, _, files in os.walk(os.path.join(FILE_DIR, "samples")):
        for file in files:
            if file.endswith(".rs") and file not in BLACKLIST:
                source_files.append(os.path.join(root, file))
    return sorted(source_files)


def get_expected_output_files(source_file: str):
    expected_output_file = source_file.replace("samples", "tests") + ".json"
    assert os.path.exists(
        expected_output_file
    ), f"Expected output file not found: {expected_output_file}"
    return expected_output_file


if __name__ == "__main__":
    import sys
    import subprocess
    import json
    from tqdm import tqdm

    num_tests = 0
    passed_tests = 0
    for file in tqdm(get_source_files()):
        num_tests += 1
        expect_error = "broken" in file

        results = subprocess.run(
            ["npm", "run", "main", f"--filename={file}"],
            check=False,
            capture_output=True,
        )
        error = results.stderr.decode("utf-8")

        if expect_error:
            if error:
                passed_tests += 1
            else:
                print(f"Expected error but got none for {file}")
                sys.exit(1)
        elif not expect_error:
            if error:
                print(f"Unexpected error in {file}: {error}")
                sys.exit(1)

            expected_output_file = get_expected_output_files(file)
            actual_output_file = [
                x
                for x in results.stdout.decode("utf-8").split("\n")
                if "Saving Program" in x
            ][0].split(" ")[-1]

            with open(expected_output_file, "r", encoding="utf-8") as f:
                expected = json.loads(f.read())

            with open(actual_output_file, "r", encoding="utf-8") as f:
                actual = json.loads(f.read())

            if expected == actual:
                passed_tests += 1
            else:
                print(f"Failed test for {file}")
                print(f"Expected: {expected}")
                print(f"Actual: {actual}")
                sys.exit(1)

    print(f"Passed {passed_tests}/{num_tests} tests")
