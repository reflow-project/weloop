.PHONY: help 

init: 
	@echo "Running build script"

help: init
	@perl -nle'print $& if m{^[a-zA-Z_-]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

dev-l8n-extract: init ## Extract localisable strings from codebase
	yarn extract

dev-l8n-download: init ## Download localised strings from Transifex (requires the tx cli tool)
	tx pull --all --force --no-interactive
# Note: You should add any new language to `src/mn-constants.tsx` under `export const languages`

dev-l8n-compile: init ## Force recompile localised strings from PO files
	yarn compile

run: init ## Run the app in Docker
	docker-compose up 

run-bg: init ## Keep the app running in the background (with Docker)
	docker-compose up -d
