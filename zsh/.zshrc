# ~/.zshrc - modified for ArcoLinux and Oh-my-zsh

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- or set to "random", 
ZSH_THEME="xiong-chiamiov"

# Plugins can be found in $ZSH/plugins/* or $ZSH/custom/plugins/
plugins=(fasd fzf zsh_reload z zsh-syntax-highlighting zsh-autosuggestions vscode ripgrep)

source $ZSH/oh-my-zsh.sh

setopt GLOB_DOTS

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

export HISTCONTROL=ignoreboth:erasedups

#PS1='[\u@\h \W]\$ '

# ArcoLinux specific
if [ -d "$HOME/.bin" ] ;
  then PATH="$HOME/.bin:$PATH"
fi

# Local (executasble) stuff if not specfied in ~/.profile
if [ ! -d "$HOME/.local/bin" ] ;
  then PATH="$HOME/.local/bin:$PATH"
fi

[[ -f ~/.arco.aliases ]] && source ~/.arco.aliases
[[ -f ~/.config/aliases ]] && source ~/.config/aliases
alias vim=nvim

eval "$(starship init zsh)"

neofetch
