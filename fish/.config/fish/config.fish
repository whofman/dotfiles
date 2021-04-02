# Fish setup {{{
set -U fish_user_paths $fish_user_paths $HOME/.local/bin/
set fish_greeting                      # Supresses fish's intro message
set TERM "xterm-256color"              # Sets the terminal type
fish_vi_key_bindings
# }}}

# Set environment variables {{{
set -x EDITOR nvim
set -x TERMINAL st
set -x FILE lf
set -x BROWSER firefox
set -x READER zathura
set -x TRUEBROWSER firefox

set -x NOTMUCH_CONFIG "$HOME/.config/notmuch-config"
set -x GTK2_RC_FILES "$HOME/.config/gtk-2.0/gtkrc-2.0"
set -x LESSHISTFILE "-"
export INPUTRC="$HOME/.config/inputrc"
#set -x ZDOTDIR $HOME/.config/zsh
set -x  PASSWORD_STORE_DIR $HOME/.local/share/password-store
set -x JPSOFT_DESCR descript.ion
set -x  DESCR .description
# }}}

# Fish prompt {{{
function fish_prompt
  set -l last_status $status
  set -l cyan (set_color -o 98be65)
  set -l yellow (set_color -o yellow)
  set -g red (set_color -o 98be65)
  set -g blue (set_color -o blue)
  set -l green (set_color -o green)
  set -g normal (set_color magenta)

  set -l ahead (_git_ahead)
  set -g whitespace ' '

  if test $last_status = 0
    set initial_indicator "$green◆"
    set status_indicator "$normal❯$cyan❯$green❯"
  else
    set initial_indicator "$red✖ $last_status"
    set status_indicator "$red❯$red❯$red❯"
  end
  set -l cwd $cyan(basename (prompt_pwd))

  if [ (_git_branch_name) ]
    if test (_git_branch_name) = 'master'
      set -l git_branch (_git_branch_name)
      set git_info "$normal git:($red$git_branch$normal)"
    else
      set -l git_branch (_git_branch_name)
      set git_info "$normal git:($blue$git_branch$normal)"
    end
    if [ (_is_git_dirty) ]
      set -l dirty "$yellow ✗"
      set git_info "$git_info$dirty"
    end
  end
  # Notify if a command took more than 5 minutes
  if [ "$CMD_DURATION" -gt 300000 ]
    echo The last command took (math "$CMD_DURATION/1000") seconds.
  end

  echo -n -s $initial_indicator $whitespace $cwd $git_info $whitespace $ahead $status_indicator $whitespace
end

function _git_ahead
  set -l commits (command git rev-list --left-right '@{upstream}...HEAD' ^/dev/null)
  if [ $status != 0 ]
    return
  end
  set -l behind (count (for arg in $commits; echo $arg; end | grep '^<'))
  set -l ahead  (count (for arg in $commits; echo $arg; end | grep -v '^<'))
  switch "$ahead $behind"
    case ''     # no upstream
    case '0 0'  # equal to upstream
      return
    case '* 0'  # ahead of upstream
      echo "$blue↑$normal_c$ahead$whitespace"
    case '0 *'  # behind upstream
      echo "$red↓$normal_c$behind$whitespace"
    case '*'    # diverged from upstream
      echo "$blue↑$normal$ahead $red↓$normal_c$behind$whitespace"
  end
end

function _git_branch_name
  echo (command git symbolic-ref HEAD ^/dev/null | sed -e 's|^refs/heads/||')
end

function _is_git_dirty
  echo (command git status -s --ignore-submodules=dirty ^/dev/null)
end

function fish_mode_prompt
  switch $fish_bind_mode
    case default
      set_color --bold red
      echo '(N) '
    case insert
      set_color --bold green
      echo '(I) '
    case replace_one
      set_color --bold green
      echo '(R) '
    case visual
      set_color --bold brmagenta
      echo '(V) '
    case '*'
      set_color --bold red
      echo '(?) '
  end
  set_color normal
end
# }}}

# Funtions {{{
# Functions needed for !! and !$
function __history_previous_command
  switch (commandline -t)
  case "!"
    commandline -t $history[1]; commandline -f repaint
  case "*"
    commandline -i !
  end
end

function __history_previous_command_arguments
  switch (commandline -t)
  case "!"
    commandline -t ""
    commandline -f history-token-search-backward
  case "*"
    commandline -i '$'
  end
end

# The bindings for !! and !$
if [ $fish_key_bindings = fish_vi_key_bindings ];
  bind -Minsert ! __history_previous_command
  bind -Minsert '$' __history_previous_command_arguments
else
  bind ! __history_previous_command
  bind '$' __history_previous_command_arguments
end

function pd
	command grep -i $argv ~/Documents/Other/db/diskcat.db | awk -F';' -f ~/Documents/Other/db/diskcat.awk
end

function se
	command du -a ~/.scripts/* ~/.config/* | awk '{print $2}' | fzf | xargs -r $EDITOR
end

function sv
	command vcopy "(du -a ~/.scripts/* ~/.config/* | awk '{print $2}' | fzf )"
end

function fv
	command fzf | xargs -r -I % $EDITOR %
end

function mdless
	command glow $argv -s dark | less -r
end
# }}}

# System maintenance {{{
alias sdn="sudo shutdown now"
alias sr="sudo reboot"
alias ss="sudo systemctl"
alias sp="sudo pacman -S"
alias update="sudo pacman -Syuu"
alias pksyua="yay -Syu --noconfirm"
alias unlock='sudo rm /var/lib/pacman/db.lck'    # remove pacman lock
alias cleanup='sudo pacman -Rns (pacman -Qtdq)'  # remove orphaned packages
alias psgr="ps axu | grep"
# }}}

# get fastest mirrors {{{
alias mirror="sudo reflector -f 30 -l 30 --number 10 --verbose --save /etc/pacman.d/mirrorlist"
alias mirrord="sudo reflector --latest 50 --number 20 --sort delay --save /etc/pacman.d/mirrorlist"
alias mirrors="sudo reflector --latest 50 --number 20 --sort score --save /etc/pacman.d/mirrorlist"
alias mirrora="sudo reflector --latest 50 --number 20 --sort age --save /etc/pacman.d/mirrorlist"
# }}}

# Colorize grep output {{{
alias grep='grep --color=auto'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
# }}}

# youtube-dl {{{
alias yta-aac="youtube-dl --extract-audio --audio-format aac "
alias yta-best="youtube-dl --extract-audio --audio-format best "
alias yta-flac="youtube-dl --extract-audio --audio-format flac "
alias yta-m4a="youtube-dl --extract-audio --audio-format m4a "
alias yta-mp3="youtube-dl --extract-audio --audio-format mp3 "
alias yta-opus="youtube-dl --extract-audio --audio-format opus "
alias yta-vorbis="youtube-dl --extract-audio --audio-format vorbis "
alias yta-wav="youtube-dl --extract-audio --audio-format wav "
alias ytv-best="youtube-dl -f bestvideo+bestaudio "
# }}}

# switch between shells {{{
alias tobash="sudo chsh $USER -s /bin/bash && echo 'Now log out.'"
alias tozsh="sudo chsh $USER -s /bin/zsh && echo 'Now log out.'"
alias tofish="sudo chsh $USER -s /bin/fish && echo 'Now log out.'"
# }}}

# Miscellaneous {{{
alias r='ranger'
alias h='history'
#alias vim='nvim'
alias v='vim'
alias sv='sudo vim'
alias wiki='vim ~/Dropbox/Wiki/index.md'
alias md='mkdir -p'
alias rd='rmdir'
alias cl='clear'
alias df="df -h"
alias free="free -m"
alias nm='notmuch'
alias nms='notmuch search'
alias da='cd ~/Archive'
alias dl='cd ~/Downloads;ls'
alias dw='cd /srv/http/'
alias doc='cd ~/Documents;ls'
alias dom='cd ~/Documents/Markdown;ls'
alias dog='cd ~/Documents/Groff;ls'
alias dol='cd ~/Documents/LaTex;ls'
alias don='cd ~/Documents/Notes;ls'
alias dow='cd ~/Wallpapers'
alias p='cd ~/Pictures;ls'
alias wiki='vim ~/Documents/Wiki/index.md'
alias ping='ping -c 3'
alias list='less'
alias subl='subl3'
alias bw="wal -i ~/.config/wall.png" # Rerun pywal
alias sizes="du -sh * | sort -n"
alias pr="enscript  --header='$n||%D{%d-%m-%Y}' --footer='footer' --lines-per-page=66 --color"
alias pastebinit='pastebinit -a "hanska32"'
alias yt='youtube-dl --add-metadata -ic'
alias ytm='youtube-dl --extracr-audio --audio-format m4a'
alias YT='youtube-viewer --add-metadata -icx'
alias t='~/.local/bin/todo.sh'
alias jls="echo 'Journal'; jrnl -n 10 | sort -r | sed '/^\s*\$/d'" # fish error
alias j='jrnl'
alias la='exa -al --group-directories-first'
alias merge='xrdb -merge ~/.Xresources'
# }}}

# Login {{{
alias omega='ssh omega -l admin'			# Synology DS-412+
alias moon='ssh moon -l admin'				# Qnap TS-435A
# }}}

# Configuration files {{{
alias cf='cd ~/.config && ls -a'
alias cfa='vim ~/.zshrc-personal'
alias cfd="vim ~/.local/src/ls/dwm/config.h"
alias cfb='vim ~/.config/bspwm/bspwmrc'
alias cff='vim ~/.config/fish/config.fish'
alias cfh='vim ~/.config/bspwmrc/sxhkd/sxhkd_keys.sh'
alias cfl='vim ~/.config/lf/lfrc'
alias cfm='vim ~/.config/mutt/muttrc'
alias cfp='vim ~/.config/polybar/config'
alias cfr='vim ~/.config/ranger/rc.conf'
alias cfs='vim ~/.config/bspwm/sxhkd/sxhkdrc'
alias cft='vim ~/.tmux.conf'
alias cfu='vim ~/.config/newsboat/urls'
alias cfv='vim ~/.config/nvim/init.vim'
alias cfw='vim /srv/http/hb/hb'
alias cfx='vim ~/.Xdefaults'
alias cfz='vim ~/.config/zsh/.zshrc'
# }}}

# Copy/Paste {{{
alias pbcopy='xclip -selection clipboard'		# copy to clipboard, ctrl+c, ctrl+shift+c
alias pbpaste='xclip -selection clipboard -o'	# paste from clipboard, ctrl+v, ctrl+shitt+v
alias pbselect='xclip -selection primary -o'	# paste from highlight, middle click, shift+insert
alias pbdump='pbpaste | pastebinit | pbcopy'	# dump text to pastebin serverase "$distro" in
# }}}

# Abbreviations {{{
# }}}

# End of Config
