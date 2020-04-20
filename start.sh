#!/bin/bash

# make sure to cleanup pid file
rm -f /app/tmp/pids/server.pid

bundle exec rails server -b 0.0.0.0