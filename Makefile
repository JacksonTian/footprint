TESTS = $(shell ls -S `find test -type f -name "*.test.js" -print`)
REPORTER = spec
TIMEOUT = 3000
PATH := ./node_modules/.bin:$(PATH)
MOCHA = ./node_modules/.bin/_mocha
MOCHA_OPTS =

test:
	@NODE_ENV=test mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov:
	@NODE_ENV=test \
		istanbul cover --report html \
		$(MOCHA) -- \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)

test-coveralls:
	@NODE_ENV=test node \
		istanbul cover --report lcovonly \
		$(MOCHA) -- \
		--reporter $(REPORTER) \
		--require co-mocha \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)
	@echo TRAVIS_JOB_ID $(TRAVIS_JOB_ID)
	@cat ./coverage/lcov.info | coveralls && rm -rf ./coverage

.PHONY: test
