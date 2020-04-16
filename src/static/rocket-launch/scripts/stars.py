from random import randint

NUM_STARS = 100
IMAGE_SIZE = 1000
MIN_SIZE = 1
MAX_SIZE = 3


def main():
    for _ in range(NUM_STARS):
        radius = randint(MIN_SIZE, MAX_SIZE)
        x = randint(0, IMAGE_SIZE - radius)
        y = randint(0, IMAGE_SIZE - radius)

        print(f'<circle cx="{x}" cy="{y}" r="{radius}" fill="white" />')


if __name__ == '__main__':
    main()
