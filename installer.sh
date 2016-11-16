#!/usr/bin/env bash

# Most of this is taken from the Magic Mirror installer.
# It is an awesome smart mirror project on github.
# https://github.com/MichMich/MagicMirror
# https://github.com/MichMich/MagicMirror/blob/master/installers/raspberry.sh

# Define the tested version of Node.js.
NODE_TESTED="v5.1.0"

#Determine which Pi is running.
ARM=$(uname -m)

#Check the Raspberry Pi version.
if [ "$ARM" != "armv7l" ]; then
	echo -e "\e[91mSorry, your Raspberry Pi is not supported."
	echo -e "\e[91mPlease run mirrR on a Raspberry Pi 2 or 3."
	echo -e "\e[91mIf this is a Pi Zero, you are in the same boat as the original Raspberry Pi. You must run in server only mode."
	exit;
fi

#define helper methods.
function version_gt() { test "$(echo "$@" | tr " " "\n" | sort -V | head -n 1)" != "$1"; }
function command_exists () { type "$1" &> /dev/null ;}


# Check if we need to install or upgrade Node.js.
echo -e "\e[96mCheck current Node installation ...\e[0m"
NODE_INSTALL=false
if command_exists node; then
	echo -e "\e[0mNode currently installed. Checking version number.";
	NODE_CURRENT=$(node -v)
	echo -e "\e[0mMinimum Node version: \e[1m$NODE_TESTED\e[0m"
	echo -e "\e[0mInstalled Node version: \e[1m$NODE_CURRENT\e[0m"
	if version_gt $NODE_TESTED $NODE_CURRENT; then
    	echo -e "\e[96mNode should be upgraded.\e[0m"
    	NODE_INSTALL=true

    	#Check if a node process is currenlty running.
    	#If so abort installation.
    	if pgrep "node" > /dev/null; then
		    echo -e "\e[91mA Node process is currently running. Can't upgrade."
		    echo "Please quit all Node processes and restart the installer."
		    exit;
		fi

    else
    	echo -e "\e[92mNo Node.js upgrade nessecery.\e[0m"
	fi

else
	echo -e "\e[93mNode.js is not installed.\e[0m";
	NODE_INSTALL=true
fi

# Install or upgrade node if necessary.
if $NODE_INSTALL; then

	echo -e "\e[96mInstalling Node.js ...\e[90m"

	#Fetch the latest version of Node.js from the selected branch
	#The NODE_STABLE_BRANCH variable will need to be manually adjusted when a new branch is released. (e.g. 7.x)
	#Only tested (stable) versions are recommended as newer versions could break MagicMirror.

	NODE_STABLE_BRANCH="6.x"
	curl -sL https://deb.nodesource.com/setup_$NODE_STABLE_BRANCH | sudo -E bash -
	sudo apt-get install -y nodejs
	echo -e "\e[92mNode.js installation Done!\e[0m"
fi


cd ~
if [ -d "$HOME/mirrR" ] ; then
	echo -e "\e[93mIt seems like mirrR is already installed."
	echo -e "To prevent overwriting, the installer will be aborted."
	echo -e "Please rename the \e[1m~/mirrR\e[0m\e[93m folder and try again.\e[0m"
	echo ""
	echo -e "If you want to upgrade your installation run \e[1m\e[97mgit pull\e[0m from the ~/mirrR directory."
	echo ""
	exit;
fi

echo -e "\e[96mCloning mirrR ...\e[90m"
if git clone https://github.com/seanyesmunt/mirrR.git; then
	echo -e "\e[92mCloning mirrR Done!\e[0m"
else
	echo -e "\e[91mUnable to clone mirrR."
	exit;
fi

cd ~/mirrR  || exit
echo -e "\e[96mInstalling dependencies ...\e[90m"
if npm install; then
	echo -e "\e[92mDependencies installation Done!\e[0m"
else
	echo -e "\e[91mUnable to install dependencies!"
	exit;
fi

cd ~/mirrR
echo " "
echo -e "\e[92mGood to go. Run \e[1m\e[97mnpm start\e[0m\e[92m from the ~/mirrR directory to start the mirror.\e[0m"
echo " "
echo -e "\e[92mRun: \e[1m\e[97mcd ~/mirrR"
echo -e "\e[92mThen: \e[1m\e[97mnpm start"
echo " "
echo " "
