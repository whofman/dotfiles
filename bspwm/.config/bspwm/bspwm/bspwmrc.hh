#!/bin/sh

#LAUNCHERS
$HOME/.config/bspwm/autostart.sh

#BSPWM configuration
#bspc config border_radius       8
bspc config border_width         2
bspc config window_gap           10
bspc config top_padding          30
bspc config bottom_padding       10
bspc config left_padding         10
bspc config right_padding        10
bspc config single_monocle       false
#bspc config click_to_focus       true
bspc config split_ratio          0.50
bspc config borderless_monocle   true
bspc config gapless_monocle      true
#bspc config focus_by_distance    true
bspc config focus_follows_pointer true
#bspc config history_aware_focus  true
bspc config pointer_modifier mod4
bspc config pointer_action1 move
bspc config pointer_action2 resize_side
bspc config pointer_action3 resize_corner
bspc config remove_disabled_monitors true
bspc config merge_overlapping_monitors true

#BSPWM coloring
bspc config normal_border_color		"#4c566a"
bspc config active_border_color		"#1e1e1e"
bspc config focused_border_color	"#5e81ac"
bspc config presel_feedback_color	"#5e81ac"
#bspc config urgent_border_color 	"#dd2727"


#Single monitor
bspc monitor -d 1 2 3 4 5 6 7 8 9 10

#Fullscreen applications
bspc rule -a inkscape state=fullscreen
bspc rule -a Spotify state=fullscreen
bspc rule -a Vlc state=fullscreen
bspc rule -a VirtualBox Manager state=fullscreen
bspc rule -a VirtualBox Machine state=fullscreen
#bspc rule -a Gimp state=fullscreen

#Floating applications
bspc rule -a Arandr state=floating
bspc rule -a Arcolinux-tweak-tool.py state=floating
bspc rule -a Arcolinux-welcome-app.py state=floating
bspc rule -a feh state=floating
#bspc rule -a mpv state=floating sticky=on
#bspc rule -a Font-manager state=floating
bspc rule -a Galculator state=floating
#bspc rule -a Gpick state=floating sticky=on
#bspc rule -a Nitrogen state=floating
bspc rule -a Oblogout state=floating
#bspc rule -a Pavucontrol state=floating sticky=on
#bspc rule -a Peek state=floating
#bspc rule -a rofi state=floating sticky=on
#bspc rule -a Skype state=floating
#bspc rule -a Stacer state=floating
#bspc rule -a Xfce4-appfinder state=floating sticky=on
bspc rule -a Xfce4-terminal state=floating

#Tiled applications
bspc rule -a Gnome-disks state=tiled
bspc rule -a Xfce4-settings-manager state=tiled

#open applications on specific workspaces
bspc rule -a Firefox desktop='^1' follow=on
bspc rule -a Google-chrome desktop='^1' follow=on
bspc rule -a Chromium desktop='^1'  follow=on
bspc rule -a Brave-browser desktop='^1'  follow=on
bspc rule -a Subl3 desktop='^2' follow=on
#bspc rule -a Atom desktop='^2' follow=on
#bspc rule -a Steam desktop='^5'
bspc rule -a vlc desktop='^6'  follow=on
bspc rule -a mpv desktop='^6'  follow=on
bspc rule -a kristall desktop='^6' follow=on
bspc rule -a Virt-manager desktop='^7' follow=on
#bspc rule -a Transmission-gtk desktop='^7' follow=on
bspc rule -a Thunar desktop='^8' follow=on
bspc rule -a discord desktop='^9' follow=on
#bspc rule -a Spotify desktop='^10' follow=on

###External rules
##Pseudo automatic mode: always splits focused window when opening new window
#bspc config external_rules_command ~/.config/bspwm/scripts/pseudo_automatic_mode
##Adjust new window: splits biggest windows to keep windows about the same size
#bspc config external_rules_command ~/.config/bspwm/scripts/adjust-new-window
