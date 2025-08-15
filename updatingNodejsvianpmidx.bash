# use this file if use see this error
# nvm is not compatible with the "NPM_CONFIG_PREFIX" environment variable:    currently set to "~/.global_modules"
# Run `unset NPM_CONFIG_PREFIX` to unset it. 
# first
# curl nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# unset NPM_CONFIG_PREFIX && export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion" && nvm install 22.12.0

unset NPM_CONFIG_PREFIX
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"
nvm use 22.12.0
