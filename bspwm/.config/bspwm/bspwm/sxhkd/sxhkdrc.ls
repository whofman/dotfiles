# Basic binds (~/.config/bspwm/sxhkd/sxhkdrc) copied from Luke Smith

super + Return
	$TERMINAL
super + q
	bspc node -c
super + d
	dmenu_run
super + r
	$TERMINAL -e $FILE
super + e
	$TERMINAL -e neomutt && bspc desktop 7
super + m
	$TERMINAL -e ncmpcpp && bspc desktop 5
super + n
	$TERMINAL -e newsboat && bspc desktop 7
super + i
	$TERMINAL -e htop
super + y
	$TERMINAL -e calcurse -D ~/.config/calcurse
super + shift + a
	$TERMINAL -e pulsemixer; pkill -RTMIN+10 polybar
super + shift + c
	camtoggle
super + shift + e
	tutorialvids
super + w
	$BROWSER
super + g
	gimp
super + shift + w
	arcolinux-tweak-tool

# Et cetera...
super + grave
	dmenuunicode
super + shift + x
	prompt "Shutdown computer?" "sudo -A shutdown -h now"
super + shift + BackSpace
	prompt "Reboot computer?" "sudo -A shutdown -r now"
super + shift + Escape
	prompt "Are you sure to quit this Xsession" "bspc quit"
super + x
	arcolinux-logout
# mpc pause; pauseallmpv; i3lock -e -f -c 1d2021; xset dpms force off

# Take screenshot
Print
	maim pic-full-$(date '+%y%m%d-%H%M-%S').png
# Pick screenshot type
shift + Print
	maimpick
# Record audio or video
super + Print
	dmenurecord
# kill active recording
super + Delete
	dmenurecord kill

# Pause audio
super + {_,shift +} p
	lmc {toggle,pause}
# Changes to next/previous tracks
super + {comma,period}
	lmc {prev,next}
# Restart track
super + shift + less
	lmc replay
# Increase volume
super + {equal,plus}
	lmc up {5,15}
# Decrease volume
super {_,shift +} + minus
	lmc down {5,15}
# Seek foward in song
super + {_,shift +} bracketright
	lmc forward {10,120}
# Seek backward in song
super + {_,shift +} bracketleft
	lmc back {10,120}

# Function keys
# Show readme
super + F1
	$TERMINAL -e $HOME/.local/share/larbs/bspwm-keys.sh
super + shift + F1
	groff -mom $HOME/.local/share/larbs/readme.mom -Tpdf | zathura -
# Restart bspwm
super + F2
	bspc wm -r
# Change display
super + F3
	displayselect
# Hibernate
super + F4
	prompt 'Hibernate computer?' 'sudo systemctl suspend'
# Restart/rescan wifi/eth networks
super + F5
	sudo -A systemctl restart NetworkManager
# Start torrent daemon/open interface
super + F6
	torwrap
# toggle torrent daemon
super + F7
	td-toggle
# sync email
super + F8
	mailsync
# Mount a USB drive or Android device
super + F9
	dmenumount
# Unmount a USB drive or Android device
super + F10
	dmenuumount
# Search with Duckduckgo
super + F11
	ducksearch
# Network Manager interface
super + F12
	$TERMINAL -e sudo -A nmtui

# Bspwm specific binds

# Kill Window
super + shift + q
  xdo close && bspunhide

# Reload sxhkd
super + shift + s
	pkill -USR1 -x sxhkd

# Focus on window in direction
super + {h,j,k,l}
	bspc node -f {west,south,north,east}

#	Send window to desktop
super + shift + {0-9}
  bspc node -d {0-9} && bspunhide

# Send window to desktop and swap to desktop
super + control + {0-9}
  bspc node -d {0-9} && bspunhide && bspc desktop -f {0-9}

# Toggle fullscreen on and off
super + f
  bspfullscreen

# Toggle floating on and off
super + o
  bspc node focused.tiled -t floating || bspc node focused.floating -t tiled

# Swap window with direction
super + shift + {h,j,k,l}
	bspc node -s {west,south,north,east}

# Focus on desktop
super + {0-9}
	bspc desktop -f {0-9}

# Expand a window by moving one of its side outward
ctrl + alt + {h,j,k,l}
	bspc node -z {left -20 0,bottom 0 20,top 0 -20,right 20 0}
  #xdo resize {-w -20, -h +20, -h -20, -w +20}

# Contract a window by moving one of its side inward
ctrl + super + {h,j,k,l}
	bspc node -z {right -20 0,top 0 20,bottom 0 -20,left 20 0}
  #xdo resize {-w +20, -h -20, -h +20, -w -20}

# Move a floating window
ctrl + alt + {Left,Right,Up,Down}
  xdo move {-x -20, -x +20, -y -20, -y +20}

#---System Control---#
#super + shift + c
#  toggleprogram "picom" "-b"

#---Script Keys---#
#super + {a, x, u, y, t, w, i, c, g}
#  {mntandroid, multimonitor, updatepackages, pyshell, notifytorrents, devenv, importandroid, timer, openterminalin}

#super + {b, e}
#  {bm, sch} firefox

#---Application Launchers---#

super + alt + {o, g, b, e, f}
  {obs, gimp, firefox, brave, pcmanfm}

super + alt + {a, r, t, p, n, c}
  $TERMINAL -e {alsamixer, lf, transmission-remote-cli, htop, nvim, calcurse}



