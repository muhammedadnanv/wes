const usb = require('usb');
const open = require('open');

// Define the USB device vendor and product IDs
const vendorId = 1234; // Replace with the actual vendor ID
const productId = 5678; // Replace with the actual product ID

// Function to check USB connection and open the corresponding URL
function checkUSBConnection() {
    // Find USB devices
    const devices = usb.getDeviceList();

    // Check if the USB device is connected
    const usbDevice = devices.find(device => device.deviceDescriptor.idVendor === vendorId && device.deviceDescriptor.idProduct === productId);

    if (usbDevice) {
        console.log('USB drive found. Opening Google...');
        open('https://www.google.com');
    } else {
        console.log('USB drive not found. Opening Bluetooth...');
        // Add code here to open Bluetooth (e.g., using a Bluetooth library)
        // In this example, we'll just print a message
        console.log('Opening Bluetooth...');
    }
}

// Initialize USB library
usb.on('attach', checkUSBConnection);
usb.on('detach', checkUSBConnection);

// Check USB connection initially
checkUSBConnection();

