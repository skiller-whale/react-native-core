echo "NOTE: You will need to edit the run_and_install.sh script to use the right IP address for your computer."
echo "NOTE: This should be the IP address of your computer on the network which it shares with your phone."
docker run -v `pwd`:/src  -i -t -p 19000:19000 -p 19001:19001 -p 19002:19002 skillerwhale/alpine-expo ./run_and_install.sh
