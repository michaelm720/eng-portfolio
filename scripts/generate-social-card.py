from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "assets" / "social-card-blueprint.png"
OUTPUT = ROOT / "public" / "og.png"

SCALE = 2
WIDTH, HEIGHT = 1200 * SCALE, 630 * SCALE

INK = "#111518"
PAPER = "#edf1f2"
MUTED = "#98a1a6"
SIGNAL = "#56b7c3"
LINE = (237, 241, 242, 50)

SANS = Path(r"C:\Windows\Fonts\segoeuil.ttf")
MONO = Path(r"C:\Windows\Fonts\consola.ttf")


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size * SCALE)


def tracked_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    face: ImageFont.FreeTypeFont,
    fill: str,
    tracking: int,
) -> None:
    x, y = xy[0] * SCALE, xy[1] * SCALE
    for character in text:
        draw.text((x, y), character, font=face, fill=fill)
        x += draw.textlength(character, font=face) + tracking * SCALE


def cover(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    target_ratio = size[0] / size[1]
    source_ratio = image.width / image.height
    if source_ratio > target_ratio:
        crop_width = round(image.height * target_ratio)
        left = (image.width - crop_width) // 2
        image = image.crop((left, 0, left + crop_width, image.height))
    else:
        crop_height = round(image.width / target_ratio)
        top = (image.height - crop_height) // 2
        image = image.crop((0, top, image.width, top + crop_height))
    return image.resize(size, Image.Resampling.LANCZOS)


background = cover(Image.open(SOURCE).convert("RGB"), (WIDTH, HEIGHT)).convert("RGBA")

# Keep the generated drafting detail while protecting the typography with the
# same matte graphite field used by the portfolio hero.
veil = Image.new("RGBA", (WIDTH, HEIGHT), (17, 21, 24, 0))
veil_pixels = veil.load()
for x in range(WIDTH):
    normalized = x / WIDTH
    alpha = int(178 * max(0, min(1, (0.71 - normalized) / 0.36)))
    for y in range(HEIGHT):
        veil_pixels[x, y] = (17, 21, 24, alpha)
background = Image.alpha_composite(background, veil)

draw = ImageDraw.Draw(background)
pad = 66

draw.line((pad * SCALE, 66 * SCALE, (1200 - pad) * SCALE, 66 * SCALE), fill=LINE, width=1 * SCALE)
draw.line((pad * SCALE, 564 * SCALE, (1200 - pad) * SCALE, 564 * SCALE), fill=LINE, width=1 * SCALE)

# Compact brand lockup, adapted directly from the redesigned site header.
tracked_text(draw, (pad, 25), "M", font(MONO, 20), PAPER, -1)
tracked_text(draw, (pad + 16, 25), "M", font(MONO, 20), SIGNAL, -1)
tracked_text(draw, (pad + 55, 24), "MICHAEL MARQUARDT", font(MONO, 10), PAPER, 1)
tracked_text(draw, (pad + 55, 39), "MECHANICAL ENGINEERING + FLIGHT TEST", font(MONO, 9), MUTED, 1)
tracked_text(draw, (893, 33), "PORTFOLIO / 2026", font(MONO, 10), MUTED, 1)

# Exact hero message. The short line lengths preserve readability in small link previews.
headline = font(SANS, 78)
draw.text((pad * SCALE, 143 * SCALE), "I take hardware", font=headline, fill=PAPER, spacing=0)
draw.text((pad * SCALE, 226 * SCALE), "from CAD", font=headline, fill=PAPER, spacing=0)
draw.text((pad * SCALE, 309 * SCALE), "to the field.", font=headline, fill=SIGNAL, spacing=0)

tracked_text(draw, (pad, 497), "DESIGN  ·  FABRICATION  ·  MECHATRONICS  ·  FIELD TEST", font(MONO, 10), MUTED, 1)
tracked_text(draw, (912, 583), "FRONT RANGE, COLORADO", font(MONO, 9), MUTED, 1)

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
final = background.convert("RGB").resize((1200, 630), Image.Resampling.LANCZOS)
final.save(OUTPUT, format="PNG", optimize=True)
print(f"Wrote {OUTPUT} ({final.width}x{final.height})")
