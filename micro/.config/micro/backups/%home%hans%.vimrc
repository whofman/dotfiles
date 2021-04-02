" ~/.vimrc

" Preamble {{{

" Setup
" Another example using pathogen can be found in
" http://stevelosh.com/blog/2010/09/coming-home-to-vim/
"
" see also mhartington/config/nvim for folding
" see also https://www.digitalocean.com/community/tutorials/how-to-use-vundle-to-manage-vim-plugins-on-a-linux-vps
"
" and https://dougblack.io/words/a-good-vimrc.html
" }}}

" Plugins {{{
filetype off

set rtp+=~/.vim/bundle/Vundle.vim/
call vundle#begin()


" let vundle manage vundle
Plugin 'gmarik/vundle'

" utilities
Plugin 'ctrlpvim/ctrlp.vim'   " fuzzy find files
Plugin 'scrooloose/nerdtree'  " file drawer, open with :NERDTreeToggle
Plugin 'tpope/vim-fugitive'   " the ultimate git helper
Plugin 'tpope/vim-commentary' " comment/uncomment lines with gcc or gc in visual mode
Plugin 'tpope/vim-surround'
Plugin 'tpope/vim-repeat'
Plugin 'scrooloose/syntastic' " Syntax check for lot of languages
Plugin 'mattn/emmet-vim'      " Web development tricks
Plugin 'godlygeek/tabular'    " Tabular must BEFORE vim-markdown
Plugin 'plasticboy/vim-markdown'
Plugin 'itspriddle/vim-marked'
Plugin 'jceb/vim-orgmode'
Plugin 'nelstrom/vim-markdown-folding'
Plugin 'bling/vim-airline'    " Awesome looking meta at bottom
Plugin 'mhinz/vim-tmuxify'    " tmux planes handling
Plugin 'christoomey/vim-tmux-navigator'
Plugin 'christoomey/vim-titlecase'
Plugin 'vimwiki/vimwiki'
Plugin 'suan/vim-instant-markdown'
Plugin 'editorconfig/editorconfig-vim'
Plugin 'majutsushi/tagbar'
Plugin 'Raimondi/delimitMate'
"Plugin 'xolox/vim-notes'
"Plugin 'xolox/vim-misc'
"Plugin 'xolox/vim-shell'
Plugin 'osyo-manga/vim-over'	" Substitue Preview
"Plugin 'xuhdev/vim-latex-live-preview'
Plugin 'mrtazz/simplenote.vim'
Plugin 'mrtazz/vim-misc'
call vundle#end()

filetype plugin indent on

" to activate the plugins enter :PluginInstall
" to update enter :PluginUpdate

" end of plugins here
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

" Basic Settings {{{
autocmd! bufwritepost .vimrc source % " auto reload .vimrc
set nocompatible              " not compatible with vi
set autoread                  " detect when a file is changed
set hidden                    " go easy on hidden files

" make backspace behave in a sane manner
set backspace=indent,eol,start

" guide to next text entry
"inoremap <Space><Space> <Esc>/(<>)<Enter>"_c4l
"inoremap <Space><Backspace> (<>)<Esc>/(<>)<Enter>"_c4l
"vnoremap <Space><Space> <Esc>/(<>)<Enter>"_c4l
"map <Space><Space> <Esc>/(<>)<Enter>"_c4l

" set a map leader for more key combos
let mapleader = ','

" Tab control
set noexpandtab                " tabs ftw
set smarttab                   " tab respects 'tabstop', 'shiftwidth', and 'softtabstop'
set tabstop=2                  " the visible width of tabs
set softtabstop=2              " edit as if the tabs are 4 characters wide
set shiftwidth=2               " number of spaces to use for indent and unindent
set shiftround                 " round indent to a multiple of 'shiftwidth'

set clipboard=unnamed          " allow OS clipboard access
set ttyfast                    " faster redrawing
set mouse=a
set ttymouse=xterm2

" Make it obvious where 80 characters is
set textwidth=80
set colorcolumn=+1

set magic                      " Set magic on, for regex

set showmatch                  " show matching braces
set mat=2                      " how many tenths of a second to blink

syntax on                      " switch syntax highlighting on

" iset encoding=utf8
let base16colorspace=256       " Access colors present in 256 colorspace"
set t_Co=256                   " Explicitly tell vim that the terminal supports 256 colors"
set background=dark

" Allow powerline symbols to show up
let g:airline_powerline_fonts = 1

" OS X Latex default preview
let g:livepreview_previewer = 'open -a Preview'   " evince | Preview
autocmd Filetype text setl updatetime=1
nnoremap <leader>pv :LLPStartPrevieuw<CR>              " call latexpreview#PreviewLatexAsPdf()<CR>

colorscheme xoria256           "  my favourite

set autoindent                 " automatically set indent of new line
set smartindent

set laststatus=2               " show the satus line all the time

" Spelling
nmap <silent> <leader>s :set spell!<CR>
set spelllang=en               " en or en_us or en_gb or nl or nl_nl

" Strip trailing spaces in the current file
nnoremap <leader>W :%s/\s\+$//<cr>:let @/=''<cr>

" Toggle between line numbers and relative line numbers
set number                     " default line numbers (:set nonum)
nnoremap <silent> <leader>u :set relativenumber! <bar> set nu!<CR>

" }}}

"" Copy/paste {{{
vnoremap <C-c> "+y :let @+=@*<CR>
map <C-p> "+P
" }}}

" SimpleNote {{{
let g:SimplenoteUsername = "hans@hahoweb.nl"
let g:SimplenotePassword = "C4valium"
" }}}

" Wiki Preview {{{
let g:vimwiki_list = [{'path': '~/Notes', 'syntax': 'markdown', 'ext': '.md'}]
"let g:vimwiki_ext2syntax = {'.md': 'markdown', '.markdown': 'markdown', '.mdown': 'markdown'}
let g:instant_markdown_autostart = 0
map <leader>md :InstantMarkdownPreview<CR>
" }}}

" Latex Preview {{{
" To be figured out via Tmux or otherwise
autocmd FileType tex nnoremap <C-p> :w<Enter>:!pdflatex<Space><C-R>%<Space>&><space>/dev/null&<Enter><Enter>
autocmd FileType tex nnoremap <C-t> :!biber<Space><C-R>%<Backspace><Backspace><Backspace><Backspace><Space>>/dev/null<Enter><Enter>
autocmd FileType tex nnoremap <C-o> :!open<Space>-a<Space>preview<Space><C-R>%<Backspace><Backspace><Backspace>pdf<Space>&><Space>/dev/null&<Enter><Enter>
" }}}

" Markdown Preview Settings {{{
" Automatic real-time display in Browser (html) using https://github.com/suan/vim-instant-markdown"
"}}}

" Folding settings {{{
set foldlevelstart=0
set foldmethod=marker
set foldmarker={{{,}}}

" space to toggle folds
nnoremap <Space> zi
vnoremap <Space> zi

function! MyFoldText()
    let line = getline(v:foldstart)

    let nucolwidth = &fdc + &number * &numberwidth
    let windowwidth = winwidth(0) - nucolwidth - 3
    let foldedlinecount = v:foldend - v:foldstart

    " expand tabs into spaces
    let onetab = strpart('          ', 0, &tabstop)
    let line = substitute(line, '\t', onetab, 'g')

    let line = strpart(line, 0, windowwidth - 2 -len(foldedlinecount))
    let fillcharcount = windowwidth - len(line) - len(foldedlinecount)
    return line
endfunction
set foldtext=MyFoldText()
" }}}

" Searching {{{
set ignorecase                 " case insensitive searching
set smartcase                  " case-sensitive if expresson contains a capital letter
set hlsearch                   " highlight search results
set incsearch                  " set incremental search, like modern browsers
set nolazyredraw               " don't redraw while executing macros
" }}}

" Key mappings {{{
" Mappings to open config files
nnoremap <leader>ev :tabnew $MYVIMRC<cr>
nnoremap <leader>et :tabnew ~/.tmux.conf<cr>
nnoremap <leader>ez :tabnew ~/.zshrc<cr>
nnoremap <leader>eg :tabnew ~/.gitconfig<cr>
nnoremap <leader>em :tabnew ~/Downloads/tmux.md<cr>

" Disable stupid backup and swap files - they trigger too many events
" for file system watchers
set nobackup
set nowritebackup
set noswapfile

"quick pairs
""map <leader>' ''<ESC>i
"imap <leader>" ""<ESC>i
""map <leader>( ()<ESC>i
""map <leader>[ []<ESC>i

map <C-h> <C-w>h                            " focus window to the left
map <C-j> <C-w>j                            " focus window to the left
map <C-k> <C-w>k                            " focus window to the left
nmap <C-l> <C-w>l                           " focus window to the left
" ctrl-w w                                  " cycle thru open windows
" <D-                                       " command key
" }}}

" HTML snippets {{{
" Navigation with guides
inoremap <Space><Tab>  <ESC>/<++><Enter>"_c4l
vnoremap <Space><Tab>  <ESC>/<++><Enter>"_c4l
map <Space><Tab>       <ESC>/<++><Enter>"_c4l

autocmd FileType php,html inoremap ;b <b></b><Space><++><ESC>FbT>i
autocmd FileType php,html inoremap ;i <em></em><Space><++><ESC>FeT>i
autocmd FileType php,html inoremap ;h1 <h1></h1><Enter><Enter><++><Esc>2kf<i
autocmd FileType php,html inoremap ;h2 <h2></h2><Enter><Enter><++><Esc>2kf<i
autocmd FileType php,html inoremap ;h3 <h3></h3><Enter><Enter><++><Esc>2kf<i
autocmd FileType php,html inoremap ;p <p></p><Enter><Enter><++><Esc>02kf>a
autocmd FileType php,html inoremap ;a <a<Space>href=""><++></a><Space><++><Esc>14hi
autocmd FileType php,html inoremap ;e <a<Space>target="_blank"<Space>href=""><++></a><Space><++><Esc>14hi
autocmd FileType php,html inoremap ;ul <ul><Enter><li></li><Enter></ul><Enter><Enter><++><Esc>03kf<i
autocmd FileType php,html inoremap ;li <Esc>o<li></li><Esc>F>a
autocmd FileType php,html inoremap ;ol <ol><Enter><li></li><Enter></ol><Enter><Enter><++><Esc>03kf<i
autocmd FileType php,html inoremap ;im <table<Space>class="image"><Enter><caption align="bottom"></caption><Enter><tr><td><a<space>href="pix/<++>"><img<Space>src="pix/<++>"<Space>width="<++>"></a></td></tr><Enter></table><Enter><Enter><++><Esc>4kf>a
autocmd FileType php,html inoremap ;td <td></td><++><Esc>Fdcit
autocmd FileType php,html inoremap ;tr <tr></tr><Enter><++><Esc>kf<i
autocmd FileType php,html inoremap ;th <th></th><++><Esc>Fhcit
autocmd FileType php,html inoremap ;tab <table><Enter></table><Esc>O
autocmd FileType php,html inoremap ;gr <font color="green"></font><Esc>F>a
autocmd FileType php,html inoremap ;rd <font color="red"></font><Esc>F>a
autocmd FileType php,html inoremap ;yl <font color="yellow"></font><Esc>F>a
autocmd FileType php,html inoremap ;dt <dt></dt><Enter><dd><++></dd><Enter><++><esc>2kcit
autocmd FileType php,html inoremap ;dl <dl><Enter><Enter></dl><enter><enter><++><esc>3kcc

"autocmd FileType php,html inoremap -- &ndash;
"autocmd FileType php,html inoremap --- &mdash;
" }}}

" NERDTree options {{{
let g:NERDTreeQuitOnOpen=0                   " close NERDTree after a file is opened
let NERDTreeShowHidden=1                     " show hidden files in NERDTree
let g:NERDTreeWinPos = "right"               " defaut left?:qa
nmap <silent> <leader>n :NERDTreeToggle<cr>  " Toggle NERDTree
" Open NERDTree if NO files apecified
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
" Close if only NERDTree open
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
" }}}

" Fuzzyfinder (CtrlP) options {{{
" nmap <silent> <leader>t :CtrlP<cr>
nmap <silent> <leader>r :CtrlPBuffer<cr>

let g:ctrlp_map='<leader>t'
let g:ctrlp_dotfiles=1
let g:ctrlp_working_path_mode = 'ra'

let g:ctrlp_working_path_mode = 2            " search nearest ancestor for .git, .hg, .svn

let g:ctrlp_max_height = 30
set wildignore+=*.pyc
set wildignore+=*_build/*
set wildignore+=*/coverage/*
" }}}

" Display Color Schemes {{{
function! DisplayColorSchemes()
   let currDir = getcwd()
   exec "cd ~/.vim/colors"                   " $VIMRUNTIME
   for myCol in split(glob("*"), '\n')
      if myCol =~ '\.vim'
         let mycol = substitute(myCol, '\.vim', '', '')
         exec "colorscheme " . mycol
         exec "redraw!"
         echo "colorscheme = ". myCol
         sleep 5
      endif
   endfor
   exec "cd " . currDir
endfunction
" }}}
