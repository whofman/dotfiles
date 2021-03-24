#!/bin/bash
whiptail --title "BSPWM KEYBINDINGS"
whiptail --msgbox "                  BSPWM KEYBINDINGS

super + shift + q..................quit
ctrl + alt + r.....................refresh
super + shift + c..................kill window
super + t..........................program full screen
alt + b............................balance frames
alt + g............................balance layouts
super + {d,f}......................toggle floating/fullscreen
super + ctrl + space...............floating
super + {grave,Tab}................previous
super + apostrophe.................swaps previous
super + {y,o}......................toggles history
super + g..........................moves to maximum window
ctrl + {Directional}...............switch focus
ctrl + {k,j,h,l}...................switchfocus
super + shift + n..................focus to next window
super + {comma,period}.............swap with last focused
alt + {h,j,k,l}....................swap with vim keys
super + {Left, Right}..............navigate tags
super + ctrl + {h,j,k,l}...........highlight split
super + ctrl + {1-9}...............ratio split
super + alt + {k,j,h,l}............resize titled window
super + ctrl + {Directional}.......move floating
super + alt + {Directional}........resize floating
super + shift + {0-9}..............send to another tag
super + {_, shift} + b.............chromium / qutebrowser
super + e..........................email (mutt)
super + f..........................full screen
super + space......................90 degree rotation
alt + space........................180 rotation
super + {_,shift} + r..............ranger / reload bspwm
super + ctrl + w...................private sticky
super + z..........................toggle visibility
super + w..........................add padding (40)
super + q..........................remove padding
super + left bracket...............add padding (30)
super + right bracket..............remove padding
super + {_,shift} + u..............htop, filemanager (thunar)
super + m..........................spawn termite
super + i..........................spawn xterm terminal" 60 65 
 whiptail --msgbox "                  BSPWM KEYBINDINGS

super + c..........................calculator
super + {_, shift} + s.............catfisch /  reload sxhkd
super + alt + s....................pcmanfm
super + b..........................firefox
super + shift + b..................luakit
super + ctrl + b...................chromium
super + alt + space................hides chromium
super + alt + b....................xombrero 
super + o..........................libreoffice
super + v..........................pavucontrol
super + p..........................pianobar
super + shift + p..................kills pianobar
super + Menu.......................dmenu
super + ctrl + Escape..............xmobar
super + alt + Escape...............kill xmobar
alt + Ctrl + Escape................panel_applauncher
alt + Escape.......................kill panel_applauncher
ctrl + F1..........................top  panel
ctrl + Escape......................kill top panel
super + shift + s..................test screen xephyr
super + shift + v..................kill xephyr
super + {_,shift} + a..............test awesomewm
super + {_,shift} + x..............test xmonad
super + {_,shift} + r..............test ratpoison
super + {_,shift} + z..............test bspwm
super + {_,shift} + w..............test windowmaker
super + {_,shift} + d..............test dwm
super + shift + F2.................xfce4-appfinder
Shift_L + F3.......................xlock
super + F4.........................speak command
F11................................toggle scratchpad
F12................................mad key
F12 + shift........................theme sounds" 60 65 
