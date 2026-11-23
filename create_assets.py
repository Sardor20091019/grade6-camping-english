#!/usr/bin/env python3
"""Generate crisp, beautiful SVG assets for the Camping project."""
import os

os.makedirs('assets/items', exist_ok=True)

# 1. Tent
tent_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#CDE7D8"/>
  <rect x="65" y="380" width="382" height="16" rx="8" fill="#75B667"/>
  <!-- Guy lines -->
  <line x1="256" y1="120" x2="55" y2="415" stroke="#2D3748" stroke-width="6" stroke-linecap="round"/>
  <line x1="256" y1="120" x2="457" y2="415" stroke="#2D3748" stroke-width="6" stroke-linecap="round"/>
  <!-- Tent outer -->
  <polygon points="256,120 75,385 437,385" fill="#E26D2D"/>
  <polygon points="256,120 256,385 437,385" fill="#C9551C"/>
  <!-- Tent inner entrance -->
  <polygon points="256,215 185,385 327,385" fill="#4A2511"/>
  <!-- Flag pole & flag -->
  <rect x="252" y="70" width="8" height="55" fill="#2D3748" rx="2"/>
  <polygon points="260,75 305,92 260,110" fill="#E53E3E"/>
</svg>'''

# 2. Campfire
campfire_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#FCEBD4"/>
  <!-- Crossed logs -->
  <g stroke="#2D3748" stroke-width="5" stroke-linejoin="round">
    <rect x="110" y="335" width="280" height="42" rx="10" transform="rotate(-15 250 355)" fill="#6E4327"/>
    <rect x="122" y="335" width="280" height="42" rx="10" transform="rotate(15 262 355)" fill="#54331C"/>
    <!-- Stones -->
    <ellipse cx="115" cy="405" rx="24" ry="16" fill="#88929A"/>
    <ellipse cx="160" cy="415" rx="22" ry="14" fill="#A0AAB2"/>
    <ellipse cx="352" cy="415" rx="22" ry="14" fill="#A0AAB2"/>
    <ellipse cx="397" cy="405" rx="24" ry="16" fill="#88929A"/>
  </g>
  <!-- Flame Outer -->
  <path d="M256,110 C290,180 370,240 360,335 C350,370 320,380 256,380 C192,380 162,370 152,335 C142,240 222,180 256,110 Z" fill="#E84A27"/>
  <!-- Flame Middle -->
  <path d="M256,170 C280,225 330,265 320,345 C310,370 285,378 256,378 C227,378 202,370 192,345 C182,265 232,225 256,170 Z" fill="#FFA200"/>
  <!-- Flame Inner Core -->
  <path d="M256,245 C270,280 292,305 285,355 C280,372 268,375 256,375 C244,375 232,372 227,355 C220,305 242,280 256,245 Z" fill="#FFF275"/>
</svg>'''

# 3. Backpack
backpack_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#FCE5E8"/>
  <!-- Top Handle -->
  <path d="M200,120 C200,80 312,80 312,120" fill="none" stroke="#2D3748" stroke-width="14" stroke-linecap="round"/>
  <!-- Side Pockets -->
  <rect x="98" y="270" width="38" height="105" rx="14" fill="#845E56" stroke="#2D3748" stroke-width="6"/>
  <rect x="376" y="270" width="38" height="105" rx="14" fill="#845E56" stroke="#2D3748" stroke-width="6"/>
  <!-- Main Body -->
  <rect x="124" y="160" width="264" height="260" rx="48" fill="#D63031" stroke="#2D3748" stroke-width="6"/>
  <!-- Top Flap -->
  <path d="M144,215 C144,145 368,145 368,215 C368,255 144,255 144,215 Z" fill="#A81D1E" stroke="#2D3748" stroke-width="6"/>
  <!-- Buckle Strap -->
  <rect x="234" y="225" width="44" height="50" rx="8" fill="#F1C40F" stroke="#2D3748" stroke-width="5"/>
  <rect x="246" y="238" width="20" height="22" rx="4" fill="#34495E"/>
  <!-- Front Zipper Pocket -->
  <rect x="170" y="315" width="172" height="85" rx="18" fill="#FF7675" stroke="#2D3748" stroke-width="5"/>
  <line x1="180" y1="350" x2="332" y2="350" stroke="#2D3748" stroke-width="5" stroke-linecap="round"/>
</svg>'''

# 4. Flashlight
flashlight_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#E8E5F8"/>
  <!-- Light Beam -->
  <polygon points="310,240 460,70 475,225 390,285" fill="#FFF8B3" opacity="0.9"/>
  <!-- Flashlight Body at angle -->
  <g transform="rotate(-45 256 256)" stroke="#2D3748" stroke-width="6" stroke-linejoin="round">
    <!-- Tail Cap -->
    <rect x="120" y="235" width="28" height="42" rx="6" fill="#1E272E"/>
    <!-- Handle -->
    <rect x="145" y="238" width="140" height="36" rx="4" fill="#3D5A6C"/>
    <!-- Grip bands -->
    <line x1="180" y1="238" x2="180" y2="274" stroke="#2D3748" stroke-width="4"/>
    <line x1="210" y1="238" x2="210" y2="274" stroke="#2D3748" stroke-width="4"/>
    <line x1="240" y1="238" x2="240" y2="274" stroke="#2D3748" stroke-width="4"/>
    <!-- Head Base -->
    <polygon points="285,236 325,215 325,297 285,276" fill="#F1C40F"/>
    <!-- Head Rim -->
    <rect x="325" y="210" width="22" height="92" rx="5" fill="#D4AC0D"/>
    <!-- Switch -->
    <rect x="235" y="228" width="24" height="10" rx="3" fill="#E74C3C"/>
  </g>
</svg>'''

# 5. Compass
compass_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#E5DFDA"/>
  <!-- Outer Ring -->
  <circle cx="256" cy="256" r="170" fill="#755644" stroke="#2D3748" stroke-width="7"/>
  <circle cx="256" cy="256" r="150" fill="#F9F6E8" stroke="#2D3748" stroke-width="4"/>
  <!-- Compass Ticks -->
  <g stroke="#4A3B32" stroke-width="3" stroke-linecap="round">
    <line x1="256" y1="112" x2="256" y2="128"/>
    <line x1="256" y1="384" x2="256" y2="400"/>
    <line x1="112" y1="256" x2="128" y2="256"/>
    <line x1="384" y1="256" x2="400" y2="256"/>
    <line x1="154" y1="154" x2="166" y2="166"/>
    <line x1="358" y1="358" x2="346" y2="346"/>
    <line x1="358" y1="154" x2="346" y2="166"/>
    <line x1="154" y1="358" x2="166" y2="346"/>
  </g>
  <!-- Letter N -->
  <text x="256" y="130" font-family="Arial, sans-serif" font-weight="900" font-size="28" fill="#C0392B" text-anchor="middle">N</text>
  <!-- Needles -->
  <g stroke="#2D3748" stroke-width="4" stroke-linejoin="round">
    <!-- North Needle (Red) -->
    <polygon points="256,135 272,256 240,256" fill="#E74C3C"/>
    <!-- South Needle (White) -->
    <polygon points="256,377 272,256 240,256" fill="#ECEFF1"/>
  </g>
  <!-- Center Pivot -->
  <circle cx="256" cy="256" r="16" fill="#2C3E50" stroke="#2D3748" stroke-width="4"/>
  <circle cx="256" cy="256" r="6" fill="#7F8C8D"/>
</svg>'''

# 6. Sleeping Bag
sleeping_bag_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#CDECF8"/>
  <rect x="90" y="370" width="332" height="16" rx="8" fill="#75B667"/>
  <!-- Bag Body -->
  <g stroke="#2D3748" stroke-width="6" stroke-linejoin="round">
    <path d="M140,210 C140,165 372,165 372,210 C372,210 395,210 395,280 C395,350 372,350 372,350 L140,350 C110,350 110,210 140,210 Z" fill="#0984E3"/>
    <!-- Pillow / Head opening -->
    <rect x="135" y="225" width="45" height="55" rx="14" fill="#FFF9E6"/>
    <!-- Body stitch / separator -->
    <line x1="200" y1="210" x2="200" y2="350" stroke="#2D3748" stroke-width="5"/>
    <!-- Zipper -->
    <line x1="200" y1="280" x2="365" y2="280" stroke="#2D3748" stroke-width="5"/>
    <line x1="230" y1="274" x2="230" y2="286" stroke="#2D3748" stroke-width="4"/>
    <line x1="260" y1="274" x2="260" y2="286" stroke="#2D3748" stroke-width="4"/>
    <line x1="290" y1="274" x2="290" y2="286" stroke="#2D3748" stroke-width="4"/>
    <line x1="320" y1="274" x2="320" y2="286" stroke="#2D3748" stroke-width="4"/>
    <!-- Zipper Pull -->
    <circle cx="370" cy="280" r="12" fill="#F1C40F"/>
  </g>
</svg>'''

# 7. Map
map_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#FFF8D6"/>
  <!-- Folded Map panels -->
  <g stroke="#2D3748" stroke-width="6" stroke-linejoin="round">
    <!-- Panel 1 -->
    <polygon points="120,130 190,145 190,405 120,390" fill="#FBF5D5"/>
    <!-- Panel 2 -->
    <polygon points="190,145 320,130 320,390 190,405" fill="#EAE2B7"/>
    <!-- Panel 3 -->
    <polygon points="320,130 392,145 392,405 320,390" fill="#FBF5D5"/>
  </g>
  <!-- Map Features: Lakes & Hills -->
  <ellipse cx="155" cy="190" rx="20" ry="14" fill="#A8D5BA"/>
  <rect x="235" y="270" width="46" height="34" rx="8" fill="#74B9FF" transform="rotate(-10 258 287)"/>
  <circle cx="355" cy="325" r="22" fill="#A8D5BA"/>
  <!-- Trail Line -->
  <path d="M140,340 Q170,300 200,310 T265,240 T320,250 T360,190" fill="none" stroke="#D63031" stroke-width="6" stroke-dasharray="10,6" stroke-linecap="round"/>
  <!-- Target X -->
  <g stroke="#D63031" stroke-width="8" stroke-linecap="round">
    <line x1="350" y1="180" x2="370" y2="200"/>
    <line x1="370" y1="180" x2="350" y2="200"/>
  </g>
</svg>'''

# 8. Water Bottle
water_bottle_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#CDECF8"/>
  <g stroke="#2D3748" stroke-width="6" stroke-linejoin="round">
    <!-- Red Cap -->
    <rect x="200" y="125" width="112" height="42" rx="10" fill="#E84118"/>
    <!-- Neck -->
    <rect x="220" y="167" width="72" height="34" fill="#74B9FF"/>
    <!-- Bottle Body -->
    <path d="M170,240 C170,205 342,205 342,240 L342,400 C342,425 325,435 295,435 L217,435 C187,435 170,425 170,400 Z" fill="#0984E3"/>
    <!-- Upper Highlight zone -->
    <path d="M170,240 C170,205 342,205 342,240 L342,285 L170,285 Z" fill="#74B9FF"/>
    <!-- Specular highlight streak -->
    <rect x="188" y="230" width="16" height="150" rx="8" fill="#FFFFFF" opacity="0.6"/>
    <!-- Center Label -->
    <rect x="195" y="275" width="122" height="110" rx="12" fill="#FFF9E6"/>
    <!-- Water Drop Icon -->
    <path d="M256,305 C256,305 236,335 236,350 C236,362 245,370 256,370 C267,370 276,362 276,350 C276,335 256,305 256,305 Z" fill="#0984E3"/>
  </g>
</svg>'''

# 9. Marshmallows
marshmallows_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#FCE5ED"/>
  <!-- Campfire at bottom -->
  <rect x="135" y="425" width="140" height="22" rx="10" fill="#54331C" stroke="#2D3748" stroke-width="4"/>
  <path d="M205,315 C220,360 250,380 235,425 C210,425 180,420 175,395 C170,360 195,340 205,315 Z" fill="#FF7675"/>
  <path d="M205,345 C215,375 235,390 225,425 C210,425 190,420 185,405 C180,380 195,365 205,345 Z" fill="#F1C40F"/>
  <!-- Roasting Stick -->
  <line x1="150" y1="435" x2="395" y2="105" stroke="#755644" stroke-width="12" stroke-linecap="round"/>
  <!-- Marshmallow 1 (Lower) -->
  <g transform="rotate(-53 250 250)" stroke="#2D3748" stroke-width="5" stroke-linejoin="round">
    <rect x="220" y="235" width="55" height="70" rx="10" fill="#FFFFFF"/>
    <!-- Toasted spot -->
    <rect x="220" y="235" width="18" height="70" rx="6" fill="#E1B12C" opacity="0.4"/>
  </g>
  <!-- Marshmallow 2 (Upper) -->
  <g transform="rotate(-53 325 150)" stroke="#2D3748" stroke-width="5" stroke-linejoin="round">
    <rect x="295" y="135" width="55" height="70" rx="10" fill="#FFFFFF"/>
    <!-- Golden brown toast corner -->
    <path d="M295,135 L330,135 L330,165 L295,150 Z" fill="#C67D32"/>
  </g>
</svg>'''

# 10. Binoculars
binoculars_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#CDE7D8"/>
  <g stroke="#2D3748" stroke-width="6" stroke-linejoin="round">
    <!-- Center Bridge -->
    <rect x="230" y="240" width="52" height="42" rx="8" fill="#3D5A6C"/>
    <!-- Focus Wheel -->
    <rect x="242" y="215" width="28" height="28" rx="5" fill="#1E272E"/>
    <!-- Left Barrel -->
    <rect x="135" y="150" width="95" height="210" rx="42" fill="#3D5A6C"/>
    <rect x="150" y="125" width="65" height="30" rx="10" fill="#1E272E"/>
    <rect x="130" y="345" width="105" height="40" rx="16" fill="#1E272E"/>
    <ellipse cx="182" cy="365" rx="36" ry="12" fill="#74B9FF"/>
    <ellipse cx="170" cy="363" rx="12" ry="5" fill="#FFFFFF" opacity="0.7"/>
    <!-- Right Barrel -->
    <rect x="282" y="150" width="95" height="210" rx="42" fill="#3D5A6C"/>
    <rect x="297" y="125" width="65" height="30" rx="10" fill="#1E272E"/>
    <rect x="277" y="345" width="105" height="40" rx="16" fill="#1E272E"/>
    <ellipse cx="330" cy="365" rx="36" ry="12" fill="#74B9FF"/>
    <ellipse cx="318" cy="363" rx="12" ry="5" fill="#FFFFFF" opacity="0.7"/>
  </g>
</svg>'''

# 11. Fishing Rod
fishing_rod_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#CDECF8"/>
  <!-- Water wave arc -->
  <path d="M150,420 Q280,390 420,420" fill="none" stroke="#74B9FF" stroke-width="5" stroke-linecap="round"/>
  <!-- Rod Handle & Shaft -->
  <g stroke="#2D3748" stroke-width="6" stroke-linejoin="round">
    <rect x="110" y="410" width="22" height="32" rx="4" transform="rotate(-40 121 426)" fill="#2D3748"/>
    <!-- Pole -->
    <line x1="120" y1="420" x2="350" y2="150" stroke="#8D6E63" stroke-width="12" stroke-linecap="round"/>
    <!-- Reel -->
    <rect x="195" y="325" width="45" height="38" rx="8" fill="#546E7A"/>
    <!-- Guide Line -->
    <path d="M350,150 L415,200 L415,350" fill="none" stroke="#455A64" stroke-width="4"/>
    <!-- Hook -->
    <path d="M415,350 C415,365 395,365 395,350" fill="none" stroke="#2D3748" stroke-width="6" stroke-linecap="round"/>
    <!-- Fish -->
    <path d="M330,350 C360,320 420,320 450,350 L450,320 L425,350 L450,380 L450,350 C420,380 360,380 330,350 Z" fill="#0984E3"/>
    <circle cx="355" cy="348" r="6" fill="#FFFFFF"/>
    <circle cx="353" cy="348" r="3" fill="#000000"/>
  </g>
</svg>'''

# 12. Lantern
lantern_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <rect width="512" height="512" rx="64" fill="#D5E8D8"/>
  <g stroke="#2D3748" stroke-width="6" stroke-linejoin="round">
    <!-- Top Carry Loop -->
    <path d="M195,160 C195,100 317,100 317,160" fill="none" stroke="#3D5A6C" stroke-width="14" stroke-linecap="round"/>
    <!-- Cap & Roof -->
    <rect x="180" y="150" width="152" height="35" rx="14" fill="#3D5A6C"/>
    <!-- Glass Chamber -->
    <rect x="195" y="185" width="122" height="190" rx="8" fill="#FFF8B3"/>
    <!-- Metal Grill Bars -->
    <line x1="225" y1="185" x2="225" y2="375" stroke="#2D3748" stroke-width="5"/>
    <line x1="256" y1="185" x2="256" y2="375" stroke="#2D3748" stroke-width="5"/>
    <line x1="287" y1="185" x2="287" y2="375" stroke="#2D3748" stroke-width="5"/>
    <!-- Inner Flame -->
    <path d="M256,260 C272,300 290,325 285,360 C280,370 268,375 256,375 C244,375 232,370 227,360 C222,325 240,300 256,260 Z" fill="#E84A27"/>
    <path d="M256,290 C266,320 276,335 272,360 C268,368 262,370 256,370 C250,370 244,368 240,360 C236,335 246,320 256,290 Z" fill="#FFF275"/>
    <!-- Heavy Base -->
    <rect x="175" y="375" width="162" height="40" rx="16" fill="#3D5A6C"/>
  </g>
</svg>'''

items = [
    ('tent', tent_svg),
    ('campfire', campfire_svg),
    ('backpack', backpack_svg),
    ('flashlight', flashlight_svg),
    ('compass', compass_svg),
    ('sleeping_bag', sleeping_bag_svg),
    ('map', map_svg),
    ('water_bottle', water_bottle_svg),
    ('marshmallows', marshmallows_svg),
    ('binoculars', binoculars_svg),
    ('fishing_rod', fishing_rod_svg),
    ('lantern', lantern_svg),
]

for name, svg in items:
    with open(f'assets/items/{name}.svg', 'w', encoding='utf-8') as f:
        f.write(svg.strip())

print(f"Created {len(items)} item SVGs successfully.")
