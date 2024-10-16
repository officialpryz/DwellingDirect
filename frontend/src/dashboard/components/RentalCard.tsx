/*import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import KingBedRoundedIcon from '@mui/icons-material/KingBedRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import Star from '@mui/icons-material/Star';

type RentalCardProps = {
  category: React.ReactNode;
  image: string;
  liked?: boolean;
  rareFind?: boolean;
  title: React.ReactNode;
};

export default function RentalCard(props: RentalCardProps) {
  const { category, title, rareFind = false, liked = false, image } = props;
  const [isLiked, setIsLiked] = React.useState(liked);
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        bgcolor: 'neutral.softBg',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': {
          boxShadow: 'lg',
          borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)',
        },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >
        <AspectRatio
          ratio="1"
          flex
          sx={{
            minWidth: { sm: 120, md: 160 },
            '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
          }}
        >
          <img alt="" src={image} />
          <Stack
            direction="row"
            sx={{
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              width: '100%',
              p: 1,
            }}
          >
            {rareFind && (
              <Chip
                variant="soft"
                color="success"
                startDecorator={<WorkspacePremiumRoundedIcon />}
                size="md"
              >
                Rare find
              </Chip>
            )}
            <IconButton
              variant="plain"
              size="sm"
              color={isLiked ? 'danger' : 'neutral'}
              onClick={() => setIsLiked((prev) => !prev)}
              sx={{
                display: { xs: 'flex', sm: 'none' },
                ml: 'auto',
                borderRadius: '50%',
                zIndex: '20',
              }}
            >
              <FavoriteRoundedIcon />
            </IconButton>
          </Stack>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack
          spacing={1}
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}
        >
          <div>
            <Typography level="body-sm">{category}</Typography>
            <Typography level="title-md">
              <Link
                overlay
                underline="none"
                href="#interactive-card"
                sx={{ color: 'text.primary' }}
              >
                {title}
              </Link>
            </Typography>
          </div>
          <IconButton
            variant="plain"
            size="sm"
            color={isLiked ? 'danger' : 'neutral'}
            onClick={() => setIsLiked((prev) => !prev)}
            sx={{ display: { xs: 'none', sm: 'flex' }, borderRadius: '50%' }}
          >
            <FavoriteRoundedIcon />
          </IconButton>
        </Stack>
        <Stack
          spacing="0.25rem 1rem"
          direction="row"
          useFlexGap
          sx={{ flexWrap: 'wrap', my: 0.25 }}
        >
          <Typography level="body-xs" startDecorator={<FmdGoodRoundedIcon />}>
            Lagos State VI
          </Typography>
          <Typography level="body-xs" startDecorator={<KingBedRoundedIcon />}>
            2 bed
          </Typography>
          <Typography level="body-xs" startDecorator={<WifiRoundedIcon />}>
            Wi-Fi
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ mt: 'auto' }}>
          <Typography
            level="title-sm"
            startDecorator={
              <React.Fragment>
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.400' }} />
                <Star sx={{ color: 'warning.200' }} />
              </React.Fragment>
            }
            sx={{ display: 'flex', gap: 1 }}
          >
            4.0
          </Typography>
          <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: 'right' }}>
            <strong>$540</strong> <Typography level="body-md">total</Typography>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}*/


import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WifiIcon from '@mui/icons-material/Wifi';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BoltIcon from '@mui/icons-material/Bolt';

type RentalCardProps = {
  id: string;
  propertyTitle: string;
  state: string;
  address: string;
  description: string;
  water: boolean;
  wifi: boolean;
  power: boolean;
  rentType: string;
  rentPrice: string;
  agencyPrice: string;
  images: string;
  rareFind: boolean;
};

export default function RentalCard(props: RentalCardProps) {
  const {
    propertyTitle,
    state,
    address,
    description,
    water,
    wifi,
    power,
    rentType,
    rentPrice,
    //agencyPrice,
    images,
  } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 320,
        m: 2,
      }}
    >
      <AspectRatio ratio="4/3">
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <Box
            component="img"
            src={images[currentImageIndex]}
            alt={`${propertyTitle} - Image ${currentImageIndex + 1}`}
            sx={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
          <IconButton
            aria-label="Like"
            variant="solid"
            color={isLiked ? 'danger' : 'neutral'}
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            sx={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              zIndex: 2,
            }}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          {images.length > 1 && (
            <>
              <IconButton
                aria-label="Previous image"
                variant="soft"
                color="neutral"
                size="sm"
                onClick={prevImage}
                sx={{
                  position: 'absolute',
                  left: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                aria-label="Next image"
                variant="soft"
                color="neutral"
                size="sm"
                onClick={nextImage}
                sx={{
                  position: 'absolute',
                  right: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
        </Box>
      </AspectRatio>
      <CardContent>
        <Typography level="title-lg">{propertyTitle}</Typography>
        <Typography level="body-sm">{`${state}, ${address}`}</Typography>
        <Typography level="body-sm" sx={{ mt: 1, mb: 2 }}>
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {wifi && <Chip variant="soft" color="primary" size="sm" startDecorator={<WifiIcon />}>WiFi</Chip>}
          {water && <Chip variant="soft" color="primary" size="sm" startDecorator={<WaterDropIcon />}>Water</Chip>}
          {power && <Chip variant="soft" color="primary" size="sm" startDecorator={<BoltIcon />}>Power</Chip>}
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography level="title-lg">
            ₦{rentPrice}
            <Typography level="body-sm">{rentType === 'yearly' ? '/year' : '/day'}</Typography>
          </Typography>
          <Button variant="solid" color="primary" size="sm">
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}