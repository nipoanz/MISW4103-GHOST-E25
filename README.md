# MISW4103-GHOST-E25
# Documentación Pruebas E2E MISW4103-GHOST-E25

docker compose down
docker compose up db -d --build
docker compose up ghost -d --build
npx playwright test --workers=1