#!/bin/sh

config=/root/app/config

sed -i "s/\$pg_host/${pg_host}/g" $config
sed -i "s/\$pg_user/${pg_user}/g" $config
sed -i "s/\$pg_pwd/${pg_pwd}/g" $config
sed -i "s/\$pg_db/${pg_db}/g" $config
sed -i "s/\$pg_port/${pg_port}/g" $config

rm -rf server/*
npm start