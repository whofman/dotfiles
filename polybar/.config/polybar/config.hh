;=====================================================
;
;   To learn more about how to configure Polybar
;   go to https://github.com/jaagr/polybar
;
;   The README contains alot of information
;	Themes : https://github.com/jaagr/dots/tree/master/.local/etc/themer/themes
;   https://github.com/jaagr/polybar/wiki/
;   https://github.com/jaagr/polybar/wiki/Configuration
;   https://github.com/jaagr/polybar/wiki/Formatting
;
;=====================================================

[global/wm]
;https://github.com/jaagr/polybar/wiki/Configuration#global-wm-settings
margin-top = 0
margin-bottom = 0

[settings]
;https://github.com/jaagr/polybar/wiki/Configuration#application-settings
throttle-output = 5
throttle-output-for = 10
throttle-input-for = 30
screenchange-reload = true
compositing-background = over
compositing-foreground = over
compositing-overline = over
compositing-underline = over
compositing-border = over

; Define fallback values used by all module formats
format-foreground = #FF0000
format-background = #00FF00
format-underline =
format-overline =
format-spacing =
format-padding =
format-margin =
format-offset =

[colors]
; Nord theme ============
background = #2F343F
foreground = #f3f4f5
alert = #d08770
volume-min = #a3be8c
volume-med = #ebcb8b
volume-max = #bf616a
; =======================

; Gotham theme ==========
; background = #0a0f14
; foreground = #99d1ce
; alert = #d26937
; volume-min = #2aa889
; volume-med = #edb443
; volume-max = #c23127
; =======================

; INTRCPTR theme ============
;background = ${xrdb:color0:#222}
;background = #aa000000
;background-alt = #444
;foreground = ${xrdb:color7:#222}
;foreground = #fff
;foreground-alt = #555
;primary = #ffb52a
;secondary = #e60053
;alert = #bd2c40

################################################################################
################################################################################
############                         MAINBAR-I3                     ############
################################################################################
################################################################################

[bar/mainbar-i3]
;https://github.com/jaagr/polybar/wiki/Configuration

monitor = ${env:MONITOR}
;monitor-fallback = HDMI1
monitor-strict = false
override-redirect = false
bottom = false
fixed-center = true
width = 100%
height = 30
;offset-x = 1%
;offset-y = 1%

background = ${colors.background}
foreground = ${colors.foreground}

; Background gradient (vertical steps)
;   background-[0-9]+ = #aarrggbb
;background-0 =

radius = 0.0
line-size = 2
line-color = #000000

border-size = 0
;border-left-size = 25
;border-right-size = 25
;border-top-size = 0
;border-bottom-size = 25
border-color = #000000

padding-left = 1
padding-right = 1

module-margin-left = 3
module-margin-right = 3

;https://github.com/jaagr/polybar/wiki/Fonts
font-0 = "Noto Sans:size=10;0"
font-1 = "FontAwesome:size=10;0"
font-2 = "Noto Sans:size=10;0"
font-3 = "Noto Sans Mono:size=10;0"

modules-left = i3 xwindow
modules-center =
modules-right = mpd weather pavolume memory2 cpu2 wired-network pacman-updates date

separator = |

;dim-value = 1.0

tray-detached = false
tray-offset-x = 0
tray-offset-y = 0
tray-padding = 2
tray-maxsize = 20
tray-scale = 1.0
tray-position = right
tray-background = ${colors.background}

#i3: Make the bar appear below windows
;wm-restack = i3
;override-redirect = true

; Enable support for inter-process messaging
; See the Messaging wiki page for more details.
enable-ipc = true

; Fallback click handlers that will be called if
; there's no matching module handler found.
click-left =
click-middle =
click-right =
scroll-up = i3wm-wsnext
scroll-down = i3wm-wsprev
double-click-left =
double-click-middle =
double-click-right =

; Requires polybar to be built with xcursor support (xcb-util-cursor)
; Possible values are:
; - default   : The default pointer as before, can also be an empty string (default)
; - pointer   : Typically in the form of a hand
; - ns-resize : Up and down arrows, can be used to indicate scrolling
cursor-click =
cursor-scroll =


################################################################################
################################################################################
############                  MAINBAR-BSPWM                         ############
################################################################################
################################################################################

[bar/mainbar-bspwm]
monitor = ${env:MONITOR}
;monitor-fallback = HDMI1
width = 100%
height = 30
;offset-x = 1%
;offset-y = 1%
radius = 0.0
fixed-center = true
bottom = false
separator = |

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 2
line-color = #f00

wm-restack = bspwm
override-redirect = true

; Enable support for inter-process messaging
; See the Messaging wiki page for more details.
enable-ipc = true

border-size = 0
;border-left-size = 0
;border-right-size = 25
;border-top-size = 0
;border-bottom-size = 25
border-color = #00000000

padding-left = 0
padding-right = 1

module-margin-left = 3
module-margin-right = 3

;https://github.com/jaagr/polybar/wiki/Fonts
font-0 = "Noto Sans:size=10;0"
font-1 = "FontAwesome:size=13;0"
font-2 = "Noto Sans:size=10;0"
font-3 = "Noto Sans Mono:size=10;0"

modules-left = bspwm xwindow
modules-center =
modules-right = mpd weather pavolume memory2 cpu2 wired-network pacman-updates date

tray-detached = false
tray-offset-x = 0
tray-offset-y = 0
tray-padding = 2
tray-maxsize = 20
tray-scale = 1.0
tray-position = right
tray-background = ${colors.background}

scroll-up = bspwm-desknext
scroll-down = bspwm-deskprev

################################################################################
################################################################################
############                  MAINBAR-HERBSTLUFTWM                  ############
################################################################################
################################################################################

[bar/mainbar-herbstluftwm]
monitor = ${env:MONITOR}
;monitor-fallback = HDMI1
width = 100%
height = 30
;offset-x = 1%
;offset-y = 1%
radius = 0.0
fixed-center = true
bottom = false
separator = |

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 2
line-color = #f00

wm-restack = bspwm
override-redirect = true

; Enable support for inter-process messaging
; See the Messaging wiki page for more details.
enable-ipc = true

border-size = 0
;border-left-size = 0
;border-right-size = 25
;border-top-size = 0
;border-bottom-size = 25
border-color = #00000000

padding-left = 0
padding-right = 1

module-margin-left = 3
module-margin-right = 3

;https://github.com/jaagr/polybar/wiki/Fonts
font-0 = "Noto Sans:size=10;0"
font-1 = "FontAwesome:size=13;0"
font-2 = "Noto Sans:size=10;0"
font-3 = "Noto Sans Mono:size=10;0"

modules-left = ewmh xwindow
modules-center = kernel
modules-right = mpd weather pavolume memory2 cpu2 wired-network pacman-updates date

tray-detached = false
tray-offset-x = 0
tray-offset-y = 0
tray-padding = 2
tray-maxsize = 20
tray-scale = 1.0
tray-position = right
tray-background = ${colors.background}

scroll-up = herbstclient use_index -1
scroll-down = herbstclient use_index +1


################################################################################
################################################################################
############                  MAINBAR-HERBSTLUFTWM-EXTRA            ############
################################################################################
################################################################################

[bar/mainbar-herbstluftwm-extra]
monitor = ${env:MONITOR}
;monitor-fallback = HDMI1
width = 100%
height = 30
;offset-x = 1%
;offset-y = 1%
radius = 0.0
fixed-center = true
bottom = true
separator = |

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 2
line-color = #f00

wm-restack = bspwm
override-redirect = true

; Enable support for inter-process messaging
; See the Messaging wiki page for more details.
enable-ipc = true

border-size = 0
;border-left-size = 0
;border-right-size = 25
;border-top-size = 0
;border-bottom-size = 25
border-color = #00000000

padding-left = 0
padding-right = 1

module-margin-left = 3
module-margin-right = 3

;https://github.com/jaagr/polybar/wiki/Fonts
font-0 = "Noto Sans:size=10;0"
font-1 = "FontAwesome:size=13;0"
font-2 = "Noto Sans:size=10;0"
font-3 = "Noto Sans Mono:size=10;0"

modules-left = load-average
modules-center = networkspeeddown networkspeedup
modules-right = filesystem

;tray-detached = false
;tray-offset-x = 0
;tray-offset-y = 0
;tray-padding = 2
;tray-maxsize = 20
;tray-scale = 1.0
;tray-position = right
;tray-background = ${colors.background}

scroll-up = herbstclient use_index -1
scroll-down = herbstclient use_index +1

################################################################################
################################################################################
############                  MAINBAR-XMONAD                        ############
################################################################################
################################################################################

[bar/mainbar-xmonad]
monitor = ${env:MONITOR}
;monitor-fallback = HDMI1
monitor-strict = false
override-redirect = false
width = 100%
height = 30
;offset-x = 1%
;offset-y = 1%
radius = 0.0
fixed-center = true
bottom = false
separator = |

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 2
line-color = #f00

;border-size = 2
;border-left-size = 25
;border-right-size = 25
;border-top-size = 0
;border-bottom-size = 25
border-color = #00000000

padding-left = 0
padding-right = 1

module-margin-left = 3
module-margin-right = 3

; Enable support for inter-process messaging
; See the Messaging wiki page for more details.
enable-ipc = true

;https://github.com/jaagr/polybar/wiki/Fonts
font-0 = "Noto Sans:size=10;0"
font-1 = "FontAwesome:size=13;0"
font-2 = "Noto Sans:size=10;0"
font-3 = "Noto Sans Mono:size=10;0"
font-4 = "FontAwesome5Brands:size=13;0"

modules-left = ewmh
modules-center = kernel
modules-right = mpd-weather pavolume memory2 cpu2 date

tray-detached = false
tray-offset-x = 0
tray-offset-y = 0
tray-padding = 2
tray-maxsize = 20
tray-scale = 1.0
tray-position = right
tray-background = ${colors.background}


################################################################################
################################################################################
############                  MAINBAR-XMONAD-EXTRA                  ############
################################################################################
################################################################################

[bar/mainbar-xmonad-extra]
monitor = ${env:MONITOR}
;monitor-fallback = HDMI1
monitor-strict = false
override-redirect = false
width = 100%
height = 30
;offset-x = 1%
;offset-y = 1%
radius = 0.0
fixed-center = true
bottom = true
separator = |

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 2
line-color = #f00

;border-size = 2
;border-left-size = 25
;border-right-size = 25
border-top-size = 10
;border-bottom-size = 25
border-color = #00000000

padding-left = 0
padding-right = 1

module-margin-left = 3
module-margin-right = 3

; Enable support for inter-process messaging
; See the Messaging wiki page for more details.
enable-ipc = true

;https://github.com/jaagr/polybar/wiki/Fonts
font-0 = "Noto Sans:size=10;0"
font-1 = "FontAwesome:size=13;0"
font-2 = "Noto Sans:size=10;0"
font-3 = "Noto Sans Mono:size=10;0"
font-4 = "FontAwesome5Brands:size=13;0"

modules-left = load-average
modules-center = networkspeeddown networkspeedup
modules-right = filesystem

;tray-detached = false
;tray-offset-x = 0
;tray-offset-y = 0
;tray-padding = 2
;tray-maxsize = 20
;tray-scale = 1.0
;tray-position = right
;tray-background = ${colors.background}


################################################################################
################################################################################
############                  MAINBAR-SPECTRWM                      ############
################################################################################
################################################################################

[bar/mainbar-spectrwm]
monitor = ${env:MONITOR}
;monitor-fallback = HDMI1
width = 100%
height = 30
;offset-x = 1%
;offset-y = 1%
radius = 0.0
fixed-center = true
bottom = false
separator = |

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 2
line-color = #f00

wm-restack = bspwm
override-redirect = true

; Enable support for inter-process messaging
; See the Messaging wiki page for more details.
enable-ipc = true

border-size = 0
;border-left-size = 0
;border-right-size = 25
;border-top-size = 0
;border-bottom-size = 25
border-color = #00000000

padding-left = 0
padding-right = 1

module-margin-left = 3
module-margin-right = 3

;https://github.com/jaagr/polybar/wiki/Fonts
font-0 = "Noto Sans:size=10;0"
font-1 = "FontAwesome:size=10;0"
font-2 = "Noto Sans:size=10;0"
font-3 = "Noto Sans Mono:size=10;0"

modules-left = ewmh xwindow
modules-center = kernel
modules-right = pavolume memory2 cpu2 date

tray-detached = false
tray-offset-x = 0
tray-offset-y = 0
tray-padding = 2
tray-maxsize = 20
tray-scale = 1.0
tray-position = right
tray-background = ${colors.background}

scroll-up = spectrwm-desknext
scroll-down = spectrwm-deskprev


################################################################################
################################################################################
############                  MAINBAR-SPECTRWM-EXTRA                ############
################################################################################
################################################################################

[bar/mainbar-spectrwm-extra]
monitor = ${env:MONITOR}
;monitor-fallback = HDMI1
width = 100%
height = 30
;offset-x = 1%
;offset-y = 1%
radius = 0.0
fixed-center = true
bottom = true
separator = |

background = ${colors.background}
foreground = ${colors.foreground}

line-size = 2
line-color = #f00

wm-restack = bspwm
override-redirect = true

; Enable support for inter-process messaging
; See the Messaging wiki page for more details.
enable-ipc = true

border-size = 0
;border-left-size = 0
;border-right-size = 25
;border-top-size = 0
;border-bottom-size = 25
border-color = #00000000

padding-left = 0
padding-right = 1

module-margin-left = 3
module-margin-right = 3

;https://github.com/jaagr/polybar/wiki/Fonts
font-0 = "Noto Sans:size=10;0"
font-1 = "FontAwesome:size=13;0"
font-2 = "Noto Sans:size=10;0"
font-3 = "Noto Sans Mono:size=10;0"

modules-left = xwindow
modules-center = filesystem
modules-right =

;tray-detached = false
;tray-offset-x = 0
;tray-offset-y = 0
;tray-padding = 2
;tray-maxsize = 20
;tray-scale = 1.0
;tray-position = right
;tray-background = ${colors.background}

scroll-up = spectrwm-desknext
scroll-down = spectrwm-deskprev



################################################################################
################################################################################
############                       MODULE I3                        ############
################################################################################
################################################################################

[module/i3]
;https://github.com/jaagr/polybar/wiki/Module:-i3
type = internal/i3

; Only show workspaces defined on the same output as the bar
;
; Useful if you want to show monitor specific workspaces
; on different bars
;
; Default: false
pin-workspaces = true

; This will split the workspace name on ':'
; Default: false
strip-wsnumbers = false

; Sort the workspaces by index instead of the default
; sorting that groups the workspaces by output
; Default: false
index-sort = false

; Create click handler used to focus workspace
; Default: true
enable-click = true

; Create scroll handlers used to cycle workspaces
; Default: true
enable-scroll = true

; Wrap around when reaching the first/last workspace
; Default: true
wrapping-scroll = false

; Set the scroll cycle direction
; Default: true
reverse-scroll = false

; Use fuzzy (partial) matching on labels when assigning
; icons to workspaces
; Example: code;♚ will apply the icon to all workspaces
; containing 'code' in the label
; Default: false
fuzzy-match = false

;extra icons to choose from
;http://fontawesome.io/cheatsheet/
;       v     

# Original bspwm icons
#ws-icon-0 = 1;
#ws-icon-1 = 2;
#ws-icon-2 = 3;
#ws-icon-3 = 4;
#ws-icon-4 = 5;
#ws-icon-5 = 6;
#ws-icon-6 = 7;
#ws-icon-7 = 8;
#ws-icon-8 = 9;
#ws-icon-9 = 10;
#ws-icon-default = " "

# Workspaces
ws-icon-0 = 1;
ws-icon-1 = 2;
ws-icon-2 = 3;
ws-icon-3 = 4;
ws-icon-4 = 5;
ws-icon-5 = 6;
ws-icon-6 = 7;
ws-icon-7 = 8;
ws-icon-8 = 9;
ws-icon-9 = 10;:
ws-icon-default = " "

; Available tags:
;   <label-state> (default) - gets replaced with <label-(focused|unfocused|visible|urgent)>
;   <label-mode> (default)
format = <label-state> <label-mode>

label-mode = %mode%
label-mode-padding = 2
label-mode-foreground = #000000
label-mode-background = #FFBB00

; Available tokens:
;   %name%
;   %icon%
;   %index%
;   %output%
; Default: %icon%  %name%
; focused = Active workspace on focused monitor
label-focused = %icon% %name%
label-focused-background = ${colors.background}
label-focused-foreground = ${colors.foreground}
label-focused-underline = #6790eb
label-focused-padding = 2

; Available tokens:
;   %name%
;   %icon%
;   %index%
; Default: %icon%  %name%
; unfocused = Inactive workspace on any monitor
label-unfocused = %icon% %name%
label-unfocused-padding = 2
label-unfocused-background = ${colors.background}
label-unfocused-foreground = ${colors.foreground}
label-unfocused-underline =

; visible = Active workspace on unfocused monitor
label-visible = %icon% %name%
label-visible-background = ${self.label-focused-background}
label-visible-underline = ${self.label-focused-underline}
label-visible-padding = 2

; Available tokens:
;   %name%
;   %icon%
;   %index%
; Default: %icon%  %name%
; urgent = Workspace with urgency hint set
label-urgent = %icon% %name%
label-urgent-background = ${self.label-focused-background}
label-urgent-foreground = #db104e
label-urgent-padding = 2

format-foreground = ${colors.foreground}
format-background = ${colors.background}

################################################################################
################################################################################
############                       MODULE BSPWM                     ############
################################################################################
################################################################################

[module/bspwm]
type = internal/bspwm

enable-click = true
enable-scroll = true
reverse-scroll = true
pin-workspaces = true

;extra icons to choose from
;http://fontawesome.io/cheatsheet/
;       v     

# Original bspwm icons
#ws-icon-0 = 1;
#ws-icon-1 = 2;
#ws-icon-2 = 3;
#ws-icon-3 = 4;
#ws-icon-4 = 5;
#ws-icon-5 = 6;
#ws-icon-6 = 7;
#ws-icon-7 = 8;
#ws-icon-8 = 9;
#ws-icon-9 = 10;
#ws-icon-default = " "

# Workspaces
ws-icon-0 = 1;
ws-icon-1 = 2;
ws-icon-2 = 3;
ws-icon-3 = 4;
ws-icon-4 = 5;
ws-icon-5 = 6;
ws-icon-6 = 7;
ws-icon-7 = 8;
ws-icon-8 = 9;
ws-icon-9 = 10;:
ws-icon-default = " "


format = <label-state> <label-mode>

label-focused = %icon%
label-focused-background = ${colors.background}
label-focused-underline= #6790eb
label-focused-padding = 4
label-focused-foreground = ${colors.foreground}

label-occupied = %icon%
label-occupied-padding = 2
label-occupied-background = ${colors.background}

label-urgent = %icon%
label-urgent-padding = 2

label-empty = %icon%
label-empty-foreground = ${colors.foreground}
label-empty-padding = 2
label-empty-background = ${colors.background}
label-monocle = "  "
label-monocle-foreground = ${colors.foreground}
label-tiled = "  "
label-tiled-foreground = ${colors.foreground}
label-fullscreen = "  "
label-fullscreen-foreground = ${colors.foreground}
label-floating = "  "
label-floating-foreground = ${colors.foreground}
label-pseudotiled = "  "
label-pseudotiled-foreground = ${colors.foreground}
label-locked = "  "
label-locked-foreground = ${colors.foreground}
label-sticky = "  "
label-sticky-foreground = ${colors.foreground}
label-private =  "     "
label-private-foreground = ${colors.foreground}

; Separator in between workspaces
;label-separator = |
;label-separator-padding = 10
;label-separator-foreground = #ffb52a

format-foreground = ${colors.foreground}
format-background = ${colors.background}


################################################################################
###############################################################################
############                       MODULES A-Z                      ############
################################################################################
################################################################################

[module/arch-aur-updates]
type = custom/script
exec = ~/.config/polybar/scripts/check-all-updates.sh
interval = 1000
label = Updates: %output%
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = "  "
format-prefix-foreground = #FFBB00
format-underline = #FFBB00


[module/aur-updates]
type = custom/script
exec = cower -u | wc -l
interval = 1000
label = Aur: %output%
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = "  "
format-prefix-foreground = #FFBB00
format-underline = #FFBB00

################################################################################

[module/backlight-acpi]
inherit = module/xbacklight
type = internal/backlight
card = intel_backlight
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix-foreground = #7D49B6
format-prefix-underline = #7D49B6
format-underline = #7D49B6
################################################################################

[module/backlight]
;https://github.com/jaagr/polybar/wiki/Module:-backlight

type = internal/backlight

; Use the following command to list available cards:
; $ ls -1 /sys/class/backlight/
card = intel_backlight

; Available tags:
;   <label> (default)
;   <ramp>
;   <bar>
format = <label>
format-foreground = ${colors.foreground}
format-background = ${colors.background}

; Available tokens:
;   %percentage% (default)
label = %percentage%%

; Only applies if <ramp> is used
ramp-0 = 🌕
ramp-1 = 🌔
ramp-2 = 🌓
ramp-3 = 🌒
ramp-4 = 🌑

; Only applies if <bar> is used
bar-width = 10
bar-indicator = |
bar-fill = ─
bar-empty = ─

################################################################################

[module/battery]
;https://github.com/jaagr/polybar/wiki/Module:-battery
type = internal/battery
battery = BAT0
adapter = AC0
full-at = 100

format-charging = <animation-charging> <label-charging>
label-charging =  %percentage%%
format-charging-foreground = ${colors.foreground}
format-charging-background = ${colors.background}
format-charging-underline = #a3c725

format-discharging = <ramp-capacity> <label-discharging>
label-discharging =  %percentage%%
format-discharging-underline = #c7ae25
format-discharging-foreground = ${colors.foreground}
format-discharging-background = ${colors.background}

format-full-prefix = " "
format-full-prefix-foreground = #a3c725
format-full-underline = #a3c725
format-foreground = ${colors.foreground}
format-background = ${colors.background}

ramp-capacity-0 = 
ramp-capacity-1 = 
ramp-capacity-2 = 
ramp-capacity-3 = 
ramp-capacity-4 = 
ramp-capacity-foreground = #c7ae25

animation-charging-0 = 
animation-charging-1 = 
animation-charging-2 = 
animation-charging-3 = 
animation-charging-4 = 
animation-charging-foreground = #a3c725
animation-charging-framerate = 750

################################################################################

[module/compton]
;https://github.com/jaagr/polybar/wiki/User-contributed-modules#compton
type = custom/script
exec = ~/.config/polybar/scripts/compton.sh
click-left = ~/.config/polybar/scripts/compton-toggle.sh
interval = 5
format-foreground = ${colors.foreground}
format-background = ${colors.background}
;format-underline = #00AF02

################################################################################

[module/cpu1]
;https://github.com/jaagr/polybar/wiki/Module:-cpu
type = internal/cpu
; Seconds to sleep between updates
; Default: 1
interval = 1
format-foreground = ${colors.foreground}
format-background = ${colors.background}
;   
format-prefix = " "
format-prefix-foreground = #cd1f3f
format-underline = #cd1f3f

; Available tags:
;   <label> (default)
;   <bar-load>
;   <ramp-load>
;   <ramp-coreload>
format = <label> <ramp-coreload>

format-padding = 2

; Available tokens:
;   %percentage% (default) - total cpu load
;   %percentage-cores% - load percentage for each core
;   %percentage-core[1-9]% - load percentage for specific core
label-font = 3
label = Cpu %percentage:3%%
ramp-coreload-0 = ▁
ramp-coreload-0-font = 3
ramp-coreload-0-foreground = #aaff77
ramp-coreload-1 = ▂
ramp-coreload-1-font = 3
ramp-coreload-1-foreground = #aaff77
ramp-coreload-2 = ▃
ramp-coreload-2-font = 3
ramp-coreload-2-foreground = #aaff77
ramp-coreload-3 = ▄
ramp-coreload-3-font = 3
ramp-coreload-3-foreground = #aaff77
ramp-coreload-4 = ▅
ramp-coreload-4-font = 3
ramp-coreload-4-foreground = #fba922
ramp-coreload-5 = ▆
ramp-coreload-5-font = 3
ramp-coreload-5-foreground = #fba922
ramp-coreload-6 = ▇
ramp-coreload-6-font = 3
ramp-coreload-6-foreground = #ff5555
ramp-coreload-7 = █
ramp-coreload-7-font = 3
ramp-coreload-7-foreground = #ff5555

################################################################################

[module/cpu2]
;https://github.com/jaagr/polybar/wiki/Module:-cpu
type = internal/cpu
; Seconds to sleep between updates
; Default: 1
interval = 1
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = "  "
format-prefix-foreground = #cd1f3f
format-underline = #cd1f3f

label-font = 3

; Available tags:
;   <label> (default)
;   <bar-load>
;   <ramp-load>
;   <ramp-coreload>
format = <label>

format-padding = 2

; Available tokens:
;   %percentage% (default) - total cpu load
;   %percentage-cores% - load percentage for each core
;   %percentage-core[1-9]% - load percentage for specific core
label = Cpu %percentage:3%%

################################################################################

[module/date]
;https://github.com/jaagr/polybar/wiki/Module:-date
type = internal/date
; Seconds to sleep between updates
interval = 5
; See "http://en.cppreference.com/w/cpp/io/manip/put_time" for details on how to format the date string
; NOTE: if you want to use syntax tags here you need to use %%{...}
date = " %a %d %b"
date-alt = " %d-%m-%Y"
time = %H:%M
time-alt = %H:%M
format-prefix = " "
format-prefix-foreground = #c1941a
format-underline = #c1941a
format-foreground = ${colors.foreground}
format-background = ${colors.background}
label = %date% %time%

#################################################################

[module/discord]
type = custom/script
exec = echo " Discord "
;exec = echo " "
interval = 1
tail = true
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix-foreground = #738adb
format-underline = #738adb
click-left = discord &
click-right = killall Discord && killall Discord
format-prefix = ""

#################################################################

[module/ewmh]
type = internal/xworkspaces

pin-workspaces = false
enable-click = true
enable-scroll = true
reverse-scroll = true


icon-0 = 1;
icon-1 = 2;
icon-2 = 3;
icon-3 = 4;
icon-4 = 5;
#icon-5 = 6;
format = <label-state>
label-monitor = %name%

label-active = %name%
label-active-foreground = ${colors.foreground}
label-active-background = ${colors.background}
label-active-underline= #6790eb
label-active-padding = 2

label-occupied = %name%
label-occupied-background = ${colors.background}
label-occupied-padding = 2

label-urgent = %name%
label-urgent-foreground = ${colors.foreground}
label-urgent-background = ${colors.alert}
label-urgent-underline = ${colors.alert}
label-urgent-padding = 2


label-empty = %name%
label-empty-foreground = ${colors.foreground}
label-empty-padding = 2
format-foreground = ${colors.foreground}
format-background = ${colors.background}


################################################################################

[module/filesystem]
;https://github.com/jaagr/polybar/wiki/Module:-filesystem
type = internal/fs

; Mountpoints to display
mount-0 = /
;mount-1 = /home
;mount-2 = /var

; Seconds to sleep between updates
; Default: 30
interval = 30

; Display fixed precision values
; Default: false
fixed-values = false

; Spacing between entries
; Default: 2
spacing = 4

; Available tags:
;   <label-mounted> (default)
;   <bar-free>
;   <bar-used>
;   <ramp-capacity>
format-mounted = <label-mounted>
format-mounted-foreground = ${colors.foreground}
format-mounted-background = ${colors.background}
format-mounted-underline = #fe0000


; Available tokens:
;   %mountpoint%
;   %type%
;   %fsname%
;   %percentage_free%
;   %percentage_used%
;   %total%
;   %free%
;   %used%
; Default: %mountpoint% %percentage_free%%
label-mounted = %mountpoint% : %used% used of %total%

; Available tokens:
;   %mountpoint%
; Default: %mountpoint% is not mounted
label-unmounted = %mountpoint% not mounted
format-unmounted-foreground = ${colors.foreground}
format-unmounted-background = ${colors.background}
;format-unmounted-underline = ${colors.alert}

################################################################################

[module/kernel]
type = custom/script
exec = uname -r
tail = false
interval = 1024

format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = "  "
format-prefix-foreground = #0084FF
format-underline = #0084FF

################################################################################

[module/jgmenu]
type = custom/script
interval = 120
exec = echo "ArcoLinux"
click-left = "jgmenu_run >/dev/null 2>&1 &"
format-foreground = ${colors.foreground}
format-background = ${colors.background}

################################################################################

[module/load-average]
type = custom/script
exec = uptime | grep -ohe 'load average[s:][: ].*' | awk '{ print $3" "$4" "$5"," }' | sed 's/,//g'
interval = 100

;HOW TO SET IT MINIMAL 10 CHARACTERS - HIDDEN BEHIND SYSTEM ICONS
;label = %output%
label = %output:10%

format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = "  "
format-prefix-foreground = #62FF00
format-underline = #62FF00

################################################################################

[module/memory1]
;https://github.com/jaagr/polybar/wiki/Module:-memory
type = internal/memory
interval = 1
; Available tokens:
;   %percentage_used% (default)
;   %percentage_free%
;   %gb_used%
;   %gb_free%
;   %gb_total%
;   %mb_used%
;   %mb_free%
;   %mb_total%
label = %percentage_used%%
bar-used-indicator =
bar-used-width = 10
bar-used-foreground-0 = #3384d0
bar-used-fill = 
bar-used-empty = 
bar-used-empty-foreground = #ffffff

format = <label> <bar-used>
format-prefix = "  "
format-prefix-foreground = #3384d0
format-underline = #3384d0
format-foreground = ${colors.foreground}
format-background = ${colors.background}

################################################################################

[module/memory2]
;https://github.com/jaagr/polybar/wiki/Module:-memory
type = internal/memory
interval = 1
; Available tokens:
;   %percentage_used% (default)
;   %percentage_free%
;   %gb_used%
;   %gb_free%
;   %gb_total%
;   %mb_used%
;   %mb_free%
;   %mb_total%
label = %percentage_used%%

format = Mem <label>
format-prefix = "  "
format-prefix-foreground = #3384d0
format-underline = #3384d0
format-foreground = ${colors.foreground}
format-background = ${colors.background}

################################################################################

[module/memory3]
;https://github.com/jaagr/polybar/wiki/Module:-memory
type = internal/memory
interval = 1
; Available tokens:
;   %percentage_used% (default)
;   %percentage_free%
;   %gb_used%
;   %gb_free%
;   %gb_total%
;   %mb_used%
;   %mb_free%
;   %mb_total%
label = %gb_used%/%gb_free%

format = Mem <label>
format-prefix = "  "
format-prefix-foreground = #3384d0
format-underline = #3384d0
format-foreground = ${colors.foreground}
format-background = ${colors.background}


################################################################################

[module/mpd]
;https://github.com/jaagr/polybar/wiki/Module:-mpd
type = internal/mpd
;format-online =  "<label-song>   <icon-prev>  <icon-stop>  <toggle>  <icon-next>"
format-online =  "<label-song>  <bar-progress>"
;format-online =  "<label-song>  <bar-progress> <icon-prev>  <icon-stop>  <toggle>  <icon-next>"
icon-prev = 
icon-stop = 
icon-play = 
icon-pause = 
icon-next = 
label-song-maxlen = 40
label-song-ellipsis = true
bar-progress-width = 10
bar-progress-indicator = 
bar-progress-fill = 
bar-progress-empty = 
bar-progress-fill-foreground = #ff0
bar-progress-fill-background = ${colors.background}
bar-progress-indicator-foreground = ${colors.foreground}
format-online-foreground = ${colors.foreground}
format-online-background = ${colors.background}
################################################################################

[module/networkspeedup]
;https://github.com/jaagr/polybar/wiki/Module:-network
type = internal/network
;interface = wlp3s0
;interface = enp14s0
interface = eno1
;interface = enp4s0
label-connected = "%upspeed:7%"
format-connected = <label-connected>
format-connected-prefix = ""
format-connected-prefix-foreground = #FE522C
format-connected-foreground = ${colors.foreground}
format-connected-background = ${colors.background}
;format-connected-underline = #62FF00

################################################################################

[module/networkspeeddown]
;https://github.com/jaagr/polybar/wiki/Module:-network
type = internal/network
;interface = wlp3s0
;interface = enp14s0
interface = eno1
;interface = enp4s0
label-connected = "%downspeed:7%"
format-connected = <label-connected>
format-connected-prefix = ""
format-connected-prefix-foreground = #3EC13F
format-connected-foreground = ${colors.foreground}
format-connected-background = ${colors.background}
;format-connected-underline = #62FF00

################################################################################

[module/pacman-updates]
type = custom/script
;exec = pacman -Qu | wc -l
exec = checkupdates | wc -l
interval = 10
label =  %output%
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = "   "
format-prefix-foreground = #FFBB00
format-underline = #FFBB00
click-left = pamac-manager

################################################################################

[module/pamac-manager]
type = custom/script
exec = pamac checkupdates -q | wc -l
interval = 10
label = Pamac : %output%
tail = true
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix-foreground = #738adb
format-underline = #738adb
click-left = pamac-manager
format-prefix = " "

################################################################################

[module/pavolume]
type = custom/script
tail = true
label = %output%
exec = ~/.config/polybar/scripts/pavolume.sh --listen
click-right = exec pavucontrol
click-left = ~/.config/polybar/scripts/pavolume.sh --togmute
scroll-up = ~/.config/polybar/scripts/pavolume.sh --up
scroll-down = ~/.config/polybar/scripts/pavolume.sh --down
format-underline = #3EC13F
format-foreground = ${colors.foreground}
format-background = ${colors.background}



################################################################################

[module/pub-ip]
;https://linuxconfig.org/polybar-a-better-wm-panel-for-your-linux-system
type = custom/script
exec = ~/.config/polybar/scripts/pub-ip.sh
interval = 100
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-underline = #FFBB00
label = %output%
format-prefix = "  "
format-prefix-foreground = #FFBB00

################################################################################

[module/release]
type = custom/script
exec = (lsb_release -d | awk {'print $2'} ;echo " "; lsb_release -r | awk {'print $2'}) | tr -d '\n'
interval = 6000

format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = "  "
format-prefix-foreground = #62FF00
format-underline = #62FF00

################################################################################

[module/sep]
; alternative separator
type = custom/text
content = 
content-foreground = ${colors.foreground}
content-background =  ${colors.background}
format-foreground = ${colors.foreground}
format-background = ${colors.background}

################################################################################

[module/spotify1]
;https://github.com/NicholasFeldman/dotfiles/blob/master/polybar/.config/polybar/spotify.sh
type = custom/script
exec = ~/.config/polybar/scripts/spotify1.sh
interval = 1

;format = <label>
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-padding = 2
format-underline = #0f0
format-prefix = "  "
format-prefix-foreground = #0f0
label = %output:0:150%

################################################################################

[module/temperature1]
;https://github.com/jaagr/polybar/wiki/Module:-temperature
type = internal/temperature
; Thermal zone to use
; To list all the zone types, run
; $ for i in /sys/class/thermal/thermal_zone*; do echo "$i: $(<$i/type)"; done
; Default: 0
thermal-zone = 0

; Full path of temperature sysfs path
; Use `sensors` to find preferred temperature source, then run
; $ for i in /sys/class/hwmon/hwmon*/temp*_input; do echo "$(<$(dirname $i)/name): $(cat ${i%_*}_label 2>/dev/null || echo $(basename ${i%_*})) $(readlink -f $i)"; done
; to find path to desired file
; Default reverts to thermal zone setting
hwmon-path = /sys/devices/platform/coretemp.0/hwmon/hwmon1/temp1_input

warn-temperature = 70
format = <ramp> <label>
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-underline = #c72581
format-warn = <ramp> <label-warn>
format-warn-underline = #c7254f
label = %temperature%
label-warn =  %temperature%
label-warn-foreground = #c7254f

ramp-0 = 
ramp-1 = 
ramp-2 = 
ramp-3 = 
ramp-4 = 
ramp-foreground =${colors.foreground}

################################################################################

[module/temperature2]
type = custom/script
exec = ~/.config/polybar/scripts/tempcores.sh
interval = 2
format-padding = 1
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-underline = #C1B93E
format-prefix-foreground = #C1B93E
label =  %output:0:150:%

################################################################################

[module/uptime]
;https://github.com/jaagr/polybar/wiki/User-contributed-modules#uptime
type = custom/script
exec = uptime | awk -F, '{sub(".*up ",x,$1);print $1}'
interval = 100
label = Uptime : %output%

format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = " "
format-prefix-foreground = #C15D3E
format-underline = #C15D3E

################################################################################

[module/variety]
type = custom/script
exec = echo " Variety"
;exec = echo " "
interval = 1
tail = true
format-foreground = ${colors.foreground}
format-background = ${colors.background}
format-prefix = ""
format-prefix-foreground = #FFFFF
format-underline = #0084FF
click-right = variety --preferences
click-left = variety --selector

################################################################################

[module/volume]
;https://github.com/jaagr/polybar/wiki/Module:-volume
type = internal/volume
format-volume = "<label-volume>  <bar-volume>"

label-volume = " "
label-volume-foreground = #40ad4b
label-muted = muted

bar-volume-width = 10
bar-volume-foreground-0 = #40ad4b
bar-volume-foreground-1 = #40ad4b
bar-volume-foreground-2 = #40ad4b
bar-volume-foreground-3 = #40ad4b
bar-volume-foreground-4 = #40ad4b
bar-volume-foreground-5 = #40ad4b
bar-volume-foreground-6 = #40ad4b
bar-volume-gradient = false
bar-volume-indicator = 
bar-volume-indicator-font = 2
bar-volume-fill = 
bar-volume-fill-font = 2
bar-volume-empty = 
bar-volume-empty-font = 2
bar-volume-empty-foreground = ${colors.foreground}
format-volume-foreground = ${colors.foreground}
format-volume-background = ${colors.background}
format-muted-prefix = "  "
format-muted-prefix-foreground = "#ff0000"
format-muted-foreground = ${colors.foreground}
format-muted-background = ${colors.background}

################################################################################

[module/weather]
type = custom/script
interval = 10
format = <label>
format-prefix = " "
format-prefix-foreground = #3EC13F
format-underline = #3EC13F
format-foreground = ${colors.foreground}
format-background = ${colors.background}
exec = python -u ~/.config/polybar/scripts/weather.py
tail = true

#################################################################################

[module/wired-network]
;https://github.com/jaagr/polybar/wiki/Module:-network
type = internal/network
interface = enp0s3
;interface = enp14s0
interval = 3.0

; Available tokens:
;   %ifname%    [wireless+wired]
;   %local_ip%  [wireless+wired]
;   %essid%     [wireless]
;   %signal%    [wireless]
;   %upspeed%   [wireless+wired]
;   %downspeed% [wireless+wired]
;   %linkspeed% [wired]
; Default: %ifname% %local_ip%
label-connected =  %local_ip%
label-disconnected = %ifname% disconnected

format-connected-foreground = ${colors.foreground}
format-connected-background = ${colors.background}
format-connected-underline = #55aa55
format-connected-prefix = " "
format-connected-prefix-foreground = #55aa55
format-connected-prefix-background = ${colors.background}

format-disconnected = <label-disconnected>
format-disconnected-underline = ${colors.alert}
label-disconnected-foreground = ${colors.foreground}

################################################################################

[module/wireless-network]
;https://github.com/jaagr/polybar/wiki/Module:-network
type = internal/network
interface = wlp2s0
interval = 3.0
label-connected = %essid%

format-connected = <label-connected>
;format-connected = <ramp-signal> <label-connected>
format-connected-foreground = ${colors.foreground}
format-connected-background = ${colors.background}
format-connected-prefix = "  "
format-connected-prefix-foreground = #7e52c6
format-connected-prefix-background = ${colors.background}
format-connected-underline = #7e52c6

label-disconnected = %ifname% disconnected
label-disconnected-foreground = ${colors.alert}
label-disconnected-background = ${colors.background}

format-disconnected = <label-disconnected>
format-disconnected-foreground = ${colors.alert}
format-disconnected-background = ${colors.background}
format-disconnected-prefix = "  "
format-disconnected-prefix-foreground = ${colors.alert}
format-disconnected-prefix-background = ${colors.background}
format-disconnected-underline =${colors.alert}

ramp-signal-0 = ▁
ramp-signal-1 = ▂
ramp-signal-2 = ▃
ramp-signal-3 = ▄
ramp-signal-4 = ▅
ramp-signal-5 = ▆
ramp-signal-6 = ▇
ramp-signal-7 = █
ramp-signal-foreground = #7e52c6

################################################################################

[module/xbacklight]
;https://github.com/jaagr/polybar/wiki/Module:-xbacklight
type = internal/xbacklight
format = <label> <bar>
format-prefix = "   "
format-prefix-foreground = ${colors.foreground}
format-prefix-background = ${colors.background}
format-prefix-underline = #9f78e1
format-underline = #9f78e1
label = %percentage%%
bar-width = 10
bar-indicator = 
bar-indicator-foreground = #fff
bar-indicator-font = 2
bar-fill = 
bar-fill-font = 2
bar-fill-foreground = #9f78e1
bar-empty = 
bar-empty-font = 2
bar-empty-foreground = #fff
format-foreground = ${colors.foreground}
format-background = ${colors.background}

################################################################################

[module/xkeyboard]
;https://github.com/jaagr/polybar/wiki/Module:-xkeyboard
type = internal/xkeyboard
blacklist-0 = num lock

format-prefix = " "
format-prefix-foreground = ${colors.foreground}
format-prefix-background = ${colors.background}
format-prefix-underline = #3ecfb2
format-foreground = ${colors.foreground}
format-background = ${colors.background}

label-layout = %layout%
label-layout-underline = #3ecfb2
label-indicator-padding = 2
label-indicator-margin = 1
label-indicator-background = ${colors.background}
label-indicator-underline = ${colors.foreground}

################################################################################

[module/xwindow]
;https://github.com/jaagr/polybar/wiki/Module:-xwindow
type = internal/xwindow

; Available tokens:
;   %title%
; Default: %title%
label = %title%
label-maxlen = 50

format-foreground = ${colors.foreground}
format-background = ${colors.background}

###############################################################################
