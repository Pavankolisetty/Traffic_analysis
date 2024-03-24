#!/bin/bash

# Get the directory where the script is located
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Check if 'data' directory does not exist and then create it
if [[ ! -e $DIR/data ]]; then
    mkdir "$DIR/data"
else
    echo "'data' directory already exists."
fi

# Download the traffic_analysis.mov file from Google Drive
# Replace the Google Drive URL with the correct URL for downloading traffic_analysis.mov
gdown -O "$DIR/data/traffic_analysis.mov" "https://drive.google.com/uc?id=1nDzzIaNG1w4hee3fA5WvDUEbyW3tuZui"

# Download the traffic_analysis.pt file from Google Drive
# Replace the Google Drive URL with the correct URL for downloading traffic_analysis.pt
gdown -O "$DIR/data/traffic_analysis.pt" "https://drive.google.com/uc?id=125jOeWl0DB_ZIhp2Wg1ZwL6bsXG_f-mg"






# # Download the traffic_analysis.mov file from Google Drive
# # Replace the Google Drive URL with the correct URL for downloading traffic_analysis.mov
# gdown -O "$DIR/data/traffic_analysis.mov" "https://drive.google.com/file/d/1nDzzIaNG1w4hee3fA5WvDUEbyW3tuZui/view?usp=drive_link"

# # Download the traffic_analysis.pt file from Google Drive
# # Replace the Google Drive URL with the correct URL for downloading traffic_analysis.pt
# gdown -O "$DIR/data/traffic_analysis.pt" "https://drive.google.com/file/d/125jOeWl0DB_ZIhp2Wg1ZwL6bsXG_f-mg/view?usp=drive_link"
