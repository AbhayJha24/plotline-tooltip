# Documentation

### The form on the left has options for changing values of different parameters of the tooltip

### A live preview of the tooltip is rendered in the mobile shown on the right or bottom depending on the device which you are using

###  Some constraints have been put on all parameters on the left side form so that user cannot enter arbitiary values or values for which the design doesn't look good

### This website is responsive upto phones having 300px horizontal screen width

## The website has been deployed to Vercel

```
https://plotline-tooltip.vercel.app
```

## Some constraints include

### The font size has a maximum value of 30 and can have also lower maximum values which depends on the element's width

### The width has a maximum value of 230 and a minimum limit of 70

### Corner radius has a max limit of 25 and a minimum value of 0

### Arrow width has a maximum value of 24 and a min value of 1. Arrow width also depends on the current width of the element

### Arrow height has a maximum value of 30 and a minimum value of 5

### The tooltip text the limited to first 25 characters to avoid too long text

### Padding is limited to a maximum value of 25 and a minimum value of 0

### The colours don't have any limitations as such but specifying a wrong hex colour code will fallback to the default one i.e. black (Basic colour names suported like blue green etc also work)
