# react-skeleton-generator

Generate amazing and animated loading skeletons that will automate and help your work.

![Gif of skeleton in action](/media/images/demo.gif)

## Coverage reports

![GitHub Logo](/badges/badge-branches.svg)
![GitHub Logo](/badges/badge-functions.svg)
![GitHub Logo](/badges/badge-lines.svg)
![GitHub Logo](/badges/badge-statements.svg)

## Basic usage

Installed by `npm`/`yarn` with `react-skeleton-generator`.

```javascript
import { Skeleton } from 'react-skeleton-generator';

<Skeleton.SkeletonThemeProvider>
  <Skeleton width="50px" height="50px" borderRadius="50%" /> // Simple, generated single line circle skeleton
  <Skeleton count={3} widthMultiple={['100%', '50%', '75%']} heightMultiple={['50px', '20px', '15px']} /> // Three skeleton lines
</Skeleton.SkeletonThemeProvider>
```


