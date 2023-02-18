const products = [
  {
    name: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
    image: 'https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
    description:
      'Industry-leading noise canceling with Dual Noise Sensor technology Built-in Alexa and Google Assistant for voice control Touch Sensor controls to pause, play and skip tracks',
    brand: 'Sony',
    category: 'Electronics',
    price: 34999,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "iPhone 14 Pro 256GB Memory",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840519",
    description: "Introducing the iPhone 14 Pro. A transformative triple-camera system that captures stunning photos and videos. An all-new A16 Bionic chip delivers incredible performance and efficiency.",
    brand: "Apple",
    category: "Electronics",
    price: 1,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  },
  {
    name: "Samsung Galaxy Watch 4 Classic",
    image: "https://m.media-amazon.com/images/I/61ftRB6KycL._SX355_.jpg",
    description: "1.5-inch Super AMOLED display with 450 x 450 resolution Blood pressure and ECG monitoring, sleep tracking and stress management 1GB RAM and 16GB internal storage",
    brand: "Samsung",
    category: "Electronics",
    price: 33999,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Dell XPS 13 9310 Laptop',
    image: 'https://m.media-amazon.com/images/I/61IumT0bPFL._SL1000_.jpg',
    description:
      '11th Gen Intel Core i7-1185G7 processor with 16GB LPDDR4x RAM 13.4-inch FHD+ InfinityEdge display with touch support 512GB SSD storage',
    brand: 'Dell',
    category: 'Electronics',
    price: 119999,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'GoPro Hero 10 Black Camera',
    image: 'https://m.media-amazon.com/images/I/515vnoAN3vL._SL1500_.jpg',
    description:
      '5.3K video with 60fps and 4K video with 120fps support HyperSmooth 4.0 video stabilization with in-camera horizon leveling TimeWarp 3.0 for time-lapse videos',
    brand: 'GoPro',
    category: 'Electronics',
    price: 49999,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Apple MacBook Air M1",
    image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
    description: "Apple M1 chip with 8-core CPU and 7-core GPU 13.3-inch Retina display with True Tone technology 8GB RAM and 256GB SSD storage",
    brand: "Apple",
    category: "Electronics",
    price: 99900,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sony A7C Mirrorless Camera",
    image: "https://www.imastudent.com/images/thumbs/002/0021814_sony-alpha-a7c-mirrorless-camera-body-only_500.jpeg",
    description: "Full-frame 24.2MP CMOS sensor with 4K video recording 5-axis in-body image stabilization and real-time Eye AF 3-inch vari-angle LCD touchscreen",
    brand: "Sony",
    category: "Electronics",
    price: 179999,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Bose QuietComfort 35 II Wireless Headphones",
    image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc35_ii/product_silo_images/qc35_ii_black_EC_hero.PNG/jcr:content/renditions/cq5dam.web.1280.1280.png",
    description: "Active noise cancellation and Alexa voice control Bluetooth and NFC pairing with up to 20 hours of battery life Built-in dual-microphone system for clear calls",
    brand: "Bose",
    category: "Electronics",
    price: 29900,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "DJI Mavic 2 Pro Drone",
    image: "https://m.media-amazon.com/images/I/41AFFdCPrcL._SY355_.jpg",
    description: "20MP camera with 4K video recording and 3-axis gimbal stabilization 31-minute flight time and 8km transmission range Intelligent flight modes and obstacle avoidance sensors",
    brand: "DJI",
    category: "Electronics",
    price: 149999,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "HP Spectre x360 2-in-1 Laptop",
    image: "https://m.media-amazon.com/images/I/71AUvO1deeL._SL1500_.jpg",
    description: "11th Gen Intel Core i7 processor with Intel Iris Xe Graphics 13.3-inch FHD touchscreen with Corning Gorilla Glass 16GB RAM and 1TB PCIe NVMe SSD",
    brand: "HP",
    category: "Electronics",
    price: 129999,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "LG OLED65C1PUB OLED TV",
    image: "https://www.lg.com/us/images/tvs/md07521476/gallery/D-01.jpg",
    description: "65-inch OLED display with 4K resolution and AI Picture Pro and AI Sound Pro α9 Gen 4 AI Processor with HDMI 2.1 for gaming support and webOS 6.0 Smart TV platform",
    brand: "LG",
    category: "Electronics",
    price: 279999,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Microsoft Xbox Series X",
    image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=a707",
    description: "4K gaming at 60fps with 12 teraflops of processing power 1TB NVMe SSD storage and backward compatibility with Xbox One games Dolby Vision and Dolby Atmos for immersive gaming experience",
    brand: "Microsoft",
    category: "Electronics",
    price: 49999,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sony Alpha a7 III Mirrorless Camera",
    image: "https://www.sony.co.in/image/6888e27aa56d3635b8f306d2550d7574?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    description: "24.2MP full-frame Exmor R CMOS sensor with 5-axis image stabilization 4K HDR video recording and 693-point phase detection autofocus system Dual SD card slots and long battery life",
    brand: "Sony",
    category: "Electronics",
    price: 199998,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Fitbit Versa 3 Smartwatch",
    image: "https://m.media-amazon.com/images/I/61ZXwnqqOuS._SL1500_.jpg",
    description: "GPS-enabled smartwatch with built-in voice assistant and 6+ day battery life Heart rate, sleep and activity tracking, and over 20 exercise modes Available for music and contactless payments",
    brand: "Fitbit",
    category: "Electronics",
    price: 22995,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Samsung Galaxy Tab S7+ Tablet",
    image: "https://images.samsung.com/common/galaxy-note20/feature/galaxy-tab-s7/images/galaxy-tab-s7-s7plus-keyboard-spen-mystic-bronze-pc.jpg",
    description: "12.4-inch Super AMOLED display with 120Hz refresh rate and S Pen included Snapdragon 865+ processor and 5G connectivity 8GB RAM and 256GB internal storage",
    brand: "Samsung",
    category: "Electronics",
    price: 84999,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "DJI Mavic Air 2S Drone",
    image: "https://dji-official-fe.djicdn.com/cms/uploads/eead2358fecb94ceb86d412f4ca4b67d.png",
    description: "4K/60fps camera with 3-axis gimbal for smooth and stable footage Up to 31 minutes of flight time and obstacle avoidance features Built-in DJI Air 2S app for editing and sharing",
    brand: "DJI",
    category: "Electronics",
    price: 99900,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Garmin Forerunner 945 GPS Smartwatch",
    image: "https://www.garmin.co.in/m/in/g/products/Forerunner945-black-image-01.png",
    description: "Advanced running and multisport features with GPS, music storage, and contactless payments Up to 2 weeks of battery life and underwater heart rate monitoring VO2 max, training load, and recovery time tracking",
    brand: "Garmin",
    category: "Electronics",
    price: 59999,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Amazon Echo Show 10 Smart Display",
    image: "https://m.media-amazon.com/images/I/61KVpz9L0gL._SX425_.jpg",
    description: "10.1-inch HD screen with motion tracking and built-in Alexa voice assistant Smart home control and video calls with pan and zoom features High-quality audio with Dolby processing",
    brand: "Amazon",
    category: "Electronics",
    price: 24999,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Razer Huntsman Elite Gaming Keyboard",
    image: "https://m.media-amazon.com/images/I/81Vtb-0K3-L._SL1500_.jpg",
    description: "Optical switches with instant actuation and customizable Chroma RGB lighting Multi-function digital dial for media control and programmatic macro recording Hybrid on-board memory and cloud storage",
    brand: "Razer",
    category: "Electronics",
    price: 19999,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Canon EOS R6 Mirrorless Camera",
    image: "https://m.media-amazon.com/images/I/81HwzslD2oL._AC_SS450_.jpg",
    description: "20MP full-frame sensor with in-body image stabilization and 4K/60fps video recording Dual Pixel CMOS AF II for fast and accurate autofocus Wi-Fi, Bluetooth, and GPS connectivity",
    brand: "Canon",
    category: "Electronics",
    price: 249900,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Philips Hue Play HDMI Sync Box",
    image: "https://www.philips-hue.com/en-us/products/all-products/product-page/play-hdmi-sync-box/_jcr_content/root/responsivegrid/section_component_143183821/responsivegrid/story_component.signifyimg.82.360.jpeg/1665065923280.jpeg",
    description: "Syncs Philips Hue smart lights with movies, TV shows, and games via HDMI input Four HDMI inputs and one HDMI output with 4K/60Hz and HDR10+ compatibility Voice control with Alexa, Google Assistant, and Apple HomeKit",
    brand: "Philips",
    category: "Electronics",
    price: 22999,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Samsung Odyssey G7 Gaming Monitor",
    image: "https://m.media-amazon.com/images/I/81aWxlUqU4L._SL1500_.jpg",
    description: "32-inch QLED curved gaming monitor with 240Hz refresh rate and 1ms response time 1440p resolution and HDR600 support Tilt, swivel, and height-adjustable stand",
    brand: "Samsung",
    category: "Electronics",
    price: 69999,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Anker PowerCore+ 26800mAh Power Bank",
    image: "https://m.media-amazon.com/images/I/61sVfYYtZxL._SL1500_.jpg",
    description: "26800mAh capacity with USB-C and two USB-A ports for simultaneous charging PowerIQ and VoltageBoost technologies for optimized charging speed MultiProtect safety system for protection against overcharging, overheating, and short circuits",
    brand: "Anker",
    category: "Electronics",
    price: 6999,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Bose SoundLink Revolve+ Bluetooth Speaker",
    image: "https://m.media-amazon.com/images/I/71cU1KriEyL._SY355_.jpg",
    description: "360-degree sound with deep, loud, and immersive sound quality Up to 16 hours of battery life and water-resistant design Built-in microphone for speakerphone and Siri/Google Assistant voice control",
    brand: "Bose",
    category: "Electronics",
    price: 29999,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Lenovo ThinkPad X1 Carbon Gen 9 Laptop",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/12/BJ/UB/ZU/142128816/lenovo-think-pad-x1-carbon-gen-9-laptop-500x500.jpg",
    description: "11th Gen Intel Core processor with vPro technology and up to 16GB RAM 14-inch display with Dolby Vision and up to 4K resolution Dual far-field mics with noise-cancellation technology and Wi-Fi 6 and optional 5G connectivity",
    brand: "Lenovo",
    category: "Electronics",
    price: 149999,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Nest Learning Thermostat",
    image: "https://m.media-amazon.com/images/I/71mQb+Qg6iL._SX425_.jpg",
    description: "Smart thermostat with Wi-Fi connectivity and energy-saving features Learns your preferred temperature settings and adjusts to your schedule Can be controlled with a phone app or voice assistant for easy use",
    brand: "Nest",
    category: "Electronics",
    price: 24999,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Dyson V11 Absolute Cordless Vacuum",
    image: "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/india/2022/nov/primary-blue-sb.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=1920",
    description: "Powerful cordless vacuum with up to 60 minutes of run time LCD screen displays real-time battery life and filter maintenance alerts High torque cleaner head adapts to different floor types and removes 99.99% of particles",
    brand: "Dyson",
    category: "Electronics",
    price: 69999,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Ring Video Doorbell Pro",
    image: "https://m.media-amazon.com/images/I/712UDuT1yRL._SY550_.jpg",
    description: "1080p HD video and two-way talk for real-time communication with visitors Customizable motion detection zones and alerts with infrared night vision for clear images in low light conditions Compatible with Alexa for voice control",
    brand: "Ring",
    category: "Electronics",
    price: 24999,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sony PlayStation 5 Console",
    image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
    description: "Next-generation gaming console with lightning-fast SSD, 3D audio, and ultra-high-definition graphics Backwards compatibility with most PS4 games and accessories, and an exclusive line-up of PS5 games DualSense wireless controller with haptic feedback and adaptive triggers for immersive gameplay",
    brand: "Sony",
    category: "Electronics",
    price: 49999,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "iRobot Roomba i7+ Robot Vacuum",
    image: "https://m.media-amazon.com/images/I/61GexPb4P0L._SY355_.jpg",
    description: "Advanced robot vacuum with self-emptying Clean Base that automatically disposes of dirt, dust, and pet hair Up to 10 times the suction power of previous Roomba models, and navigation with vSLAM technology to map and clean your home Compatible with Alexa and Google Assistant for voice control",
    brand: "iRobot",
    category: "Electronics",
    price: 79900,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sonos Arc Soundbar",
    image: "https://m.media-amazon.com/images/I/61mnsKw0dyL._SX355_.jpg",
    description: "Immersive 3D sound with Dolby Atmos for a cinematic experience Eleven high-performance drivers for deep bass and crystal-clear dialogue Voice control with Amazon Alexa and Google Assistant",
    brand: "Sonos",
    category: "Electronics",
    price: 79999,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Razer Blade 15 Gaming Laptop",
    image: "https://m.media-amazon.com/images/I/81B54EwuLUL._SY450_.jpg",
    description: "15.6-inch Full HD display with 144Hz refresh rate for smooth gaming 10th Gen Intel Core i7 processor and NVIDIA GeForce RTX 2060 graphics for powerful performance RGB backlit keyboard with Razer Chroma for customizable lighting effects",
    brand: "Razer",
    category: "Electronics",
    price: 149999,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Philips Hue White and Color Ambiance A19 LED Smart Bulb",
    image: "https://m.media-amazon.com/images/I/71SJdkrPykL._SL1500_.jpg",
    description: "16 million colors and warm-to-cool white light for various moods and atmospheres Voice control with Alexa and Google Assistant and remote control with the Hue app Compatible with multiple smart home systems and Hue accessories",
    brand: "Philips",
    category: "Electronics",
    price: 4999,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "LG 27GL83A-B 27 Inch Ultragear QHD IPS Gaming Monitor",
    image: "https://www.lg.com/us/images/monitors/md07000489/gallery/desktop-01.jpg",
    description: "27-inch QHD IPS display with 144Hz refresh rate for smooth gaming NVIDIA G-Sync and AMD FreeSync technology for reduced screen tearing and stuttering Customizable crosshair and game mode settings for different game genres",
    brand: "LG",
    category: "Electronics",
    price: 54999,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  }
]

export default products