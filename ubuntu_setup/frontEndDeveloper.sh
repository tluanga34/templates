#ADD GOOGLE CHROME
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

# ADD NVM
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

# ADD SUBLIME TEXT3
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
echo "deb https://download.sublimetext.com/apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

# ADD Visual studio code
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'



#INSTALL ADDED PACKAGES
sudo apt update
sudo apt dist-upgrade
sudo apt install -y code
sudo apt install -y apache2
sudo apt install -y google-chrome
sudo apt install -y sublime-text-installer
sudo apt install -y chromium-browser
sudo apt install -y default-jdk
sudo apt install -y jq
nvm install node
sudo apt install -y npm
npm install -g bower
npm install -g grunt-cli
npm install -g karma