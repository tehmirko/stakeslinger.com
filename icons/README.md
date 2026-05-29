# icons/

PWA + favicon icons generated from the logo. Add:

```
icon-16.png  icon-32.png  icon-48.png  icon-72.png  icon-96.png
icon-128.png icon-144.png icon-152.png icon-192.png icon-384.png icon-512.png
```

Quick generation (with ImageMagick), from a square `logo-square.png`:

```sh
for s in 16 32 48 72 96 128 144 152 192 384 512; do
  magick logo-square.png -resize ${s}x${s} icon-${s}.png
done
```

Also place `favicon.ico` in the site root.
