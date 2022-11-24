import yaml
with open('melonkube.yaml')as f:
    melonkube = yaml.load(f, Loader = yaml.FullLoader)
    