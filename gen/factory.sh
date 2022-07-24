# Desde el directorio /gen, ejecutar : ./factory.sh project ctm ---
rm -rf out
rm -rf ../src/containers/entities/$1
hygen test-api api --name $1 --prefix $2
hygen test-api actions --name $1
hygen test-api indexreducer --name $1
hygen test-api reducer --name $1
hygen test-api routes --name $1
hygen test-api pages --name $1
hygen test-api tree --name $1
hygen test-api labels --name $1
