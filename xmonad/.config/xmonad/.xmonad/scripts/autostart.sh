#!/bin/bash

function run {
  if ! pgrep $1 ;
  then
    $@&
  fi
}

(sleep 2; run $HOME/.config/polybar/launch.sh) &


#cursor active at boot
xsetroot -cursor_name left_ptr &

#start ArcoLinux Welcome App
run dex $HOME/.config/autostart/arcolinux-welcome-app.desktop

#Some ways to set your wallpaper besides variety or nitrogen
feh --bg-fill /usr/share/backgrounds/arcolinux/arco-wallpaper.jpg &
#start the conky to learn the shortcuts
(conky -c $HOME/.xmonad/scripts/system-overview) &

#starting utility applications at boot time
run variety &
run nm-applet &
run pamac-tray &
run xfce4-power-manager &
run volumeicon &
numlockx on &
blueberry-tray &
picom --config $HOME/.xmonad/scripts/picom.conf &
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
/usr/lib/xfce4/notifyd/xfce4-notifyd &

#starting user applications at boot time
#nitrogen --restore &
#run caffeine &
#run vivaldi-stable &
run firefox &
run thunar &
#run spotify &
#run atom &

#run telegram-desktop &
run discord &
#run dropbox &
#run insync start &
#run ckb-next -b &

run mpd &
run transmission-daemon -c $HOME/Downloads
