#!/bin/bash
set -e

git pull

export HUBOT_BEARYCHAT_TOKENS=3a7fb71fce149f73d2606e6981a2005e
export PORT=80

setsid bin/hubot -a bearychat &
