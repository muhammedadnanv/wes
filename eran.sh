#!/bin/bash

# USB Locker Script

# Define the path to your USB drive
usb_path="E:\"

# Check if the USB drive is connected
if [ -d "$usb_path" ]; then
    echo "USB drive found. Unlocking..."
    # Unlock the USB drive (perform necessary operations here)
    echo "Unlocking operations..."
else
    echo "USB drive not found. Locking..."
    # Lock the USB drive (perform necessary operations here)
    echo "Locking operations..."
fi
