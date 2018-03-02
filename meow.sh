#!/bin/bash
echo "asd"
pkill -9 node
git pull
npm install
HUBOT_BEARYCHAT_TOKENS=3a7fb71fce149f73d2606e6981a2005e PORT=80 setsid bin/hubot -a bearychat
