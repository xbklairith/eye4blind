var config = {};

config.twitter = {};
config.redis = {};
config.web = {};


config.fb_token = 'EAAXzV14RozIBAIOWDkSL1wB2kIjG6Qo2O6FdxXPnR5ENEOUrllZC7dk5xGyWUbWsbTF1yYtJEogJ3Y1ZCvpRZBfiykqzovlsYhyHQaevgj8GCBpv83L8LUt4QipWL3haMfozLZBUybP7tZAGQkVPGZApzQmNsROiYSaIZAmDj8JkwZDZD'

config.default_stuff = ['red', 'green', 'blue', 'apple', 'yellow', 'orange', 'politics'];
config.twitter.user_name = process.env.TWITTER_USER || 'username';
config.twitter.password = process.env.TWITTER_PASSWORD || 'password';
config.redis.uri = process.env.DUOSTACK_DB_REDIS;
config.redis.host = 'hostname';
config.redis.port = 6379;
config.web.port = process.env.WEB_PORT || 9980;

module.exports = config;
