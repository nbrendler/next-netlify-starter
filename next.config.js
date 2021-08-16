module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.shift(new webpack.IgnorePlugin(/^pg-native$/));
    return config;
  }
}
