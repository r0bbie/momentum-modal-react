# Momentum Modal (React)

Momentum Modal is a package that lets you implement backend-driven modal dialogs for Inertia apps with React.

## Installation

First you need to install the Laravel package.
You can find the full documentation of Momentum Modal [here](https://github.com/lepikhinb/momentum-modal).

Then install the react adapter:

```bash
npm i momentum-modal-react
```

> **Note**
> Version 2 requires Inertia 3 and React 19. The modal headers are sent through Inertia's own HTTP client, so `axios` is no longer needed. For Inertia 1 or 2, use version 1.

## Setup

[Modal](https://github.com/josemariagomez/momentum-modal-react) is a **headless** component, meaning you have full control over its look, whether it's a modal dialog or a slide-over panel. You are free to use any 3rd-party solutions to power your modals, such as [Headless UI](https://headlessui.com/) or [Radix](https://www.radix-ui.com/).

Put the `Modal` component somewhere within the layout. Also, you can pass the component resolver to the `Modal` component, or use it globally.

### Global

```jsx
// app.jsx
...
globalThis.resolveMomentumModal = (name) => {
    const modals = import.meta.glob("./modals/**/*.jsx", {eager: true});
    return modals[`./modals/${name}.jsx`];
};
createInertiaApp(...)
...

// YourLayout.jsx
import {Modal} from 'momentum-modal-react';

export function YourLayout({children}) {
  return <>
    {children}
    <Modal/>
  </>
}
```

### In the component

```jsx
// YourLayout.jsx
import {Modal} from 'momentum-modal-react';

const resolver = (name) => {
  const modals = import.meta.glob('../path/to/your/modals/**/*.jsx', {eager: true});
  return modals[`../path/to/your/modals/${name}.jsx`];
};

// or without eager loading;
// this returns a Promise wrapped in a function which then gets called in the modal hook
const resolver = (name) => {
    const modals = import.meta.glob('../path/to/your/modals/**/*.jsx');
    return modals[`../path/to/your/modals/${name}.jsx`];
}

export function YourLayout({children}) {
  return (
    <>
      {children}
      <Modal resolver={resolver} />
    </>
  );
}
```

The resolver can be the same you use to render Inertia pages.

## Usage

Modals have their own routes, letting you access them even via direct URLs. Define routes for your modal pages.

```php
// background context / base page
Route::get('{user}', ShowUser::class)
    ->name('users.show');

// modal route
Route::get('{user}/{tweet}', ShowTweet::class)
    ->name('users.tweets.show');
```

Render a modal from a controller. Specify the `base` route to render the background when the modal is accessed directly.

```php
class ShowTweet extends Controller
{
    public function __invoke(User $user, Tweet $tweet)
    {
        return Inertia::modal('Tweets/Show')
            ->with([
                'user' => $user,
                'tweet' => $tweet,
            ])
            ->baseRoute('users.show', $user);
    }
}
```

## Credits

- Creator of the original Laravel and Vue 3 packages [Boris Lepikhin](https://twitter.com/lepikhinb)
- [Jose María Gómez](https://twitter.com/josegmdev)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
