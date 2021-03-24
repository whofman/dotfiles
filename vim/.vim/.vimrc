" ~/.vimrc

" Plugins {{{
filetype off

set rtp+=~/.vim/bundle/Vundle.vim/
call vundle#begin()

Plugin 'gmarik/vundle'
"Plugin 'ctrlpvim/ctrlp.vim'        " fuzzy find files (incompatible copy/paste)
Plugin 'scrooloose/nerdtree'       " file drawer, open with :NERDTreeToggle
Plugin 'godlygeek/tabular'         " Tabular must BEFORE vim-markdown
Plugin 'plasticboy/vim-markdown'   " Vim folding, other enhancements
"Plugin 'itspriddle/vim-marked'     " Open markdown buffer in Marked (Apple)
Plugin 'vimwiki/vimwiki'           " Personal wiki
Plugin 'lukesmithxyz/vimling'      "dead characters/diacriticals
call vundle#end()

filetype plugin indent on

" to activate the plugins enter :PluginInstall
" to update enter :PluginUpdate

" end of plugins here
" }}}

let mapleader = ','

" Controls {{{
set noexpandtab                " tabs ftw
set smarttab                   " tab respects 'tabstop', 'shiftwidth', and 'softtabstop'
set tabstop=2                  " the visible width of tabs
set softtabstop=2              " edit as if the tabs are 4 characters wide
set shiftwidth=2               " number of spaces to use for indent and unindent
set shiftround                 " round indent to a multiple of 'shiftwidth'
set hidden                     " got easy on hidden files
set autoread                   " detect when a file is changed
set nowrap                     " disable line wrap
set showmatch                  " show matching braces
set laststatus=2               " show status line all the time
set autoindent                 " set indent on next line
set smartindent
set nobackup
set nowritebackup
set noswapfile
set splitbelow splitright
set lazyredraw
" }}}

" Split commands {{{
map <C-h> <C-w>h               " focus window to left
map <C-l> <C-w>l               " focus window to right
map <C-j> <C-w>j               " focus window to bottom
map <C-k> <C-w>k               " focus window to upper
"map <C-w>v                    " split vertical
"map <C-w>s                    " split horizontal
"map <C-w>q                    " close split
"map <C-w>{<,>}                " decrease/increase width current split
"map <C-w>{-,+}                " decrease/increase height current split
" }}}

" Folding settings {{{
set foldlevelstart=0
set foldmethod=marker
set foldmarker={{{,}}}

" Toggle folds
nnoremap <Space> zi
vnoremap <Space> zi
" }}}

" Other settings {{{
" Spelling
nmap <silent> <leader>s :set spell! spelllang=en_us<CR>
set spelllang=en               " en or en_us or en_gb or nl or nl_nl

" Strip trailing spaces in the current file
nnoremap <leader>W :%s/\s\+$//<cr>:let @/=''<cr>

" Toggle between line numbers and relative line numbers
set number                     " default line numbers (:set nonum)
nnoremap <silent> <leader>u :set relativenumber! <bar> set nu!<CR>

set clipboard=unnamed,unnamedplus " allow OS clipboard access
set ttyfast                    " faster redrawing
set mouse=a
set ttymouse=xterm2
" }}}

" Colors {{{
syntax on
"colorscheme xoria256           " my favourite
"colorscheme autumnleaf         " 256 color light scheme
colorscheme brookstream        " 256 color dark scheme
let base16colorspace=256       " Access colors present in 256 colorspace"
set t_Co=256                   " Explicitly tell vim that the terminal supports 256 colors"
set background=dark
" }}}

" Copy/Paste {{{
vnoremap <c-c> "+y :let @+=@*<CR>
map <C-p> "+P
" }}}

" Search {{{
set ignorecase
set smartcase
set hlsearch
set incsearch
set nolazyredraw
" }}}

" NerdTree {{{
nnoremap <leader>n :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>
nnoremap <C-f> :NERDTreeFind<CR>

let g:NERDTreeQuitOnOpen=0                   " close NERDTree after a file is opened
let NERDTreeShowHidden=1                     " show hidden files in NERDTree
let g:NERDTreeWinPos = "right"               " default left

autocmd StdinReadPre * let s:std_in=1        " Open if NO files specified
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
                                             " Close if only NERDTree open
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
" }}}

" Misc stuff from Luke {{{
" Disables automatic commenting on newline:
autocmd FileType * setlocal formatoptions-=c formatoptions-=r formatoptions-=o

" Compile document, be it groff/LaTeX/markdown/etc.
map <leader>c :w! \| !compiler <c-r>%<CR>

" Open corresponding .pdf/.html or preview
map <leader>p :!opout <c-r>%<CR><CR>

" Automatically deletes all trailing whitespace on save.
autocmd BufWritePre * %s/\s\+$//e

" vimling:
nm <leader>d   :call ToggleDeadKeys()<CR>
imap <leader>d <esc>:call ToggleDeadKeys()<CR>a
nm <leader>i   :call ToggleIPA()<CR>
imap <leader>i <esc>:call ToggleIPA()<CR>a
nm <leader>q   :call ToggleProse()<CR>

" When certain files are updated, restart corresponding programs
autocmd BufWritePost files,directories !shortcuts
autocmd BufWritePost *Xresources,*Xdefaults !xrdb %
autocmd BufWritePost *sxhkdrc !pkill -USR1 sxhkd
" }}}

" augroup {{{
if has("autocmd")
  " Enable file type detection
  filetype on

  " Syntax of these languages is fussy over tabs Vs spaces
  autocmd FileType make setlocal ts=8 sts=8 sw=8 noexpandtab
  autocmd FileType yaml setlocal ts=2 sts=2 sw=2 expandtab

  " Customisations based on house-style (arbitrary)
  autocmd FileType html setlocal ts=2 sts=2 sw=2 expandtab
  autocmd FileType css setlocal ts=2 sts=2 sw=2 expandtab
  autocmd FileType javascript setlocal ts=4 sts=4 sw=4 noexpandtab

  " Treat .rss files as XML
  autocmd BufNewFile,BufRead *.rss setfiletype xml

  autocmd BufEnter *.zsh-theme setlocal filetype=zsh
  autocmd BufEnter Makefile setlocal noexpandtab
  autocmd BufEnter *.sh setlocal tabstop=2
  autocmd BufEnter *.sh setlocal shiftwidth=2
  autocmd BufEnter *.sh setlocal softtabstop=2

  " Source the .vimrc file after saving it
  autocmd bufwritepost .vimrc source ~/.vimrc
endif
" }}}

