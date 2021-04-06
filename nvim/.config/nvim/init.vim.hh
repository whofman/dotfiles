" ~/.config/nvim/init.vim by /ThePrimagen

let mapleader = ' '

call plug#begin('~/.vim/plugged')
Plug 'morhetz/gruvbox'
Plug 'jremmen/vim-ripgrep'
Plug 'tpope/vim-fugitive'
Plug 'vim-airline/vim-airline'
"Plug 'leafgarland/typescript-vim'
Plug 'vim-utils/vim-man'
"Plug 'lyuts/vim-rtags'
Plug 'kien/ctrlp.vim'
"Plug 'Valloric/YouCompleteMe'
Plug 'mbbill/undotree'
"Plug 'nvim-telescope/telescope.nvim'
call plug#end()

syntax on
set noerrorbells
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set smartindent
set nu
set relativenumber
set hidden
set nowrap
set smartcase
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set incsearch
set noshowmode
set scrolloff=8
set termguicolors
set guicursor=
set completeopt=menuone,noinsert,noselect
set cmdheight=2
set nohlsearch

set colorcolumn=80
set signcolumn=yes
highlight ColorColumn ctermbg=0 guibg=lightgrey

colorscheme gruvbox
set background=dark


if executable('rg')
    let g:rg_derive_root='true'
endif

let g:ctrlo_user_command = ['.git/', 'git --git-dir=%s/.git ls-files -oc --exclude-standard']
let g:netrw_browse_split = 2
let g:netrw_banner = 0
let g:netrw_winsize = 25

let g:ctrlp_use_caching = 0


nnoremap <leader>h  :wincmd h<CR>
nnoremap <leader>j  :wincmd j<CR>
nnoremap <leader>k  :wincmd k<CR>
nnoremap <leader>l  :wincmd l<CR>
nnoremap <leader>u  :UndotreeShow<CR>
nnoremap <leader>pv :wincmd v<bar> :Ex <bar> :vertical resize 30>CR>
nnoremap <leader>ps :Rg<SPACE>   
nnoremap <silent> <leader>+ :vertical resize +5<CR>
nnoremap <silent> <leader>- :vertical resize -5<CR>
nnoremap <leader><CR> :so ~/.vimrc

"YouCompleteMe
set encoding=utf-8 
nnoremap <silent> <leader>gd :YcmCompleter GoTo<CR>
nnoremap <silent> <leader>gf :YcmCompleter FixIt<CR>

"Fugitive
nmap <leader>gh :diffget //3<CR>
nmap <leader>gw :diffget //2<CR>
nmap <leader>gs :G<CR>

"Telescope
"nnoremap <leader>ps :lua require('telescope.builtin').grep_string({ search= "vim.fn.input("grep for > ")})<CR>





