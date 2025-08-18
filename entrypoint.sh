#!/bin/sh
for i in $(env | grep -E 'VITE_BACKEND_URL')
do
    key=$(echo $i | cut -d '=' -f 1)
    value=$(echo $i | cut -d '=' -f 2-)
    echo "Replacing ${key} with ${value}"
    find /usr/share/nginx/html -type f \( -name '*.js' -o -name '*.css' \) -exec sed -i "s|${key}|${value}|g" '{}' +
done
exec nginx -g 'daemon off;'
