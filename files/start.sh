#!/usr/bin/bash
export UUID="c2a713bc-122c-4603-b516-87da2d6712f4"
export NEZHA_SERVER="nz.f4i.cn"
export NEZHA_PORT="5555"
export NEZHA_TLS="1"
export NEZHA_KEY="8PolljppbavSr6pLSD"
export SERVER_PORT="3000"

if [ "$NEZHA_TLS" -eq 0 ]; then
      TLS=''
elif [ "$NEZHA_TLS" -eq 1 ]; then
      TLS='--tls'
fi

chmod +x swith server
nohup ./swith -s ${NEZHA_SERVER}:${NEZHA_PORT} -p ${NEZHA_KEY} ${TLS}> /dev/null 2>&1 &
nohup ./server -p ${SERVER_PORT} -u ${UUID} > /dev/null 2>&1 &

tail -f /dev/null
