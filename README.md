# react-skeleton-generator

Generate amazing and animated loading skeletons that will automate and help your work.

![Gif of skeleton in action](https://media4.giphy.com/media/xKOZHXdms7Y9boZkEC/giphy.gif?cid=790b7611f676cdbbc359fdb46c1f054096d02d3179c187b7&rid=giphy.gif&ct=g)

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

## Props

Common props you may want to specify include:

- ## ```<Skeleton.SkeletonThemeProvider />```
  - ### Color
    `color`: String, defaults to #F1EFF1

    ```javascript
    <Skeleton.SkeletonThemeProvider color="#C0C0C0" />
    ```

    The color of skeleton, the animation color will be generated automatically depending on the passed color, it can be lighter or darker (generate automatically).

  - ### Animation
    `animation`: 'opacity' | 'shimmer', defaults to 'shimmer'

    ```javascript
    <Skeleton.SkeletonThemeProvider animation="opacity" />
    ```

    There are two types of effects, `shimmer` is like an wave and `opacity` will appear and disappear.

  - ### Animation Duration
    `animationDuration`: Number, defaults to 1

    ```javascript
    <Skeleton.SkeletonThemeProvider animationDuration={3} />
    ```

    How long it takes do one cycle of the skeleton animation.

  - ### Highlight
    `highlight`: 'light' | 'dark' | undefined, defaults to undefined

    ```javascript
    <Skeleton.SkeletonThemeProvider highlight="dark" />
    ```

    There are two types, if passed the `light` or `dark` value it will override the skeleton color value, and the animation color will be based on this prop (darker or lighter).

  - ### Style
    `style`: React.CSSProperties, defaults to undefined

    ```javascript
    <Skeleton.SkeletonThemeProvider style={{ padding: '10px' }} />
    ```

    Free style when it's possible add any style here.

  - ### Children
    `children`: React.ReactNode

    ```javascript
    <Skeleton.SkeletonThemeProvider>
      <Skeleton />
    </Skeleton.SkeletonThemeProvider>
    ```

     it will used to add the skeleton here.

  - ### DataTestId
    `dataTestId`: String, defaults to SkeletonThemeProvider

    ```javascript
    <Skeleton.SkeletonThemeProvider dataTestId="anyTestId" />
    ```

    used for test component.

- ## ```<Skeleton />```
  - ### Width
  `width`: String, defaults to 100%

  ```javascript
  <Skeleton width="80%" />
  ```

  Used to set the width of skeleton.

  - ### Height
  `height`: String, defaults to 30px

  ```javascript
  <Skeleton height="500px" />
  ```

  Used to set the width of skeleton.

  - ### BorderRadius
  `borderRadius`: String, defaults to 4px

  ```javascript
  <Skeleton borderRadius="10px" />
  ```

  Used to set the borderRadius of skeleton.

  - ### Count
  `count`: Number, defaults to 1

  ```javascript
  <Skeleton count={3} />
  ```

  Used to set how many lines will be generate.

  - ### SpaceBetween
  `spaceBetween`: String, defaults to 10px

  ```javascript
  <Skeleton spaceBetween="20px" />
  ```

  Used to set the space that will be generate each lines if `count > 1`

  - ### WidthMultiple
  `widthMultiple`: String, defaults to undefined

  ```javascript
  <Skeleton widthMultiple=["100px", "200px", "300px"] />
  ```

  Used to set the width for each skeleton if `count > 1`

  - ### HeightMultiple
  `heightMultiple`: String, defaults to undefined

  ```javascript
  <Skeleton heightMultiple=["100px", "200px", "300px"] />
  ```

  Used to set the height for each skeleton if `count > 1`

  - ### DataTestId
    `dataTestId`: String, defaults to Skeleton

    ```javascript
    <Skeleton dataTestId="anyTestId" />
    ```

    used for test component.

    Used to set the width of skeleton.

## Example

`react-skeleton-generator` need zero configuration, it is only install and use.

To generate an skeleton loader like the image below, here is an example for you:

![GitHub Logo](https://i.imgur.com/kZiEUD6.png)

```javascript
import { Skeleton } from 'react-skeleton-generator';

<Skeleton.SkeletonThemeProvider>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Skeleton
      width="50px"
      height="50px"
      borderRadius="50%"
    />

    <div style={{ width: '400px' }}>
      <Skeleton
        borderRadius="10px"
        count={3}
        widthMultiple={['100%', '50%', '75%']}
        heightMultiple={['50px', '20px', '15px']}
      />
    </div>
  </div>

  <div style={{ marginTop: '20px' }}>
    <Skeleton
      borderRadius="10px"
      count={3}
      widthMultiple={['100%', '100%', '80%']}
      heightMultiple={['20px', '20px', '20px']}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
    <Skeleton
      width="48%"
      height="50px"
      borderRadius="10px"
      />

    <Skeleton
      width="48%"
      height="50px"
      borderRadius="10px"
    />
  </div>
</Skeleton.SkeletonThemeProvider>
```

## License

MIT
