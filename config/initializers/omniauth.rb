Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, 'dZGjlaHNf6R9sUbzLazYvw', '5d6Ccj8SFZAFdiS0KU79bfkw6bQvctdMv8kw5VZ1dck'
  provider :github, "abc3fd6f0b457e487a0b", "a9f52489b5d4bd4edeb7b984fc0124d328516a3b"
  provider :vimeo, ENV['VIMEO_KEY'], ENV['VIMEO_SECRET']
end
