(() => ({
  name: 'MeContainer',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (<h1 className={classes.root}>profile: {options.authProfile}</h1>),
  styles: B => ({ typography }) => ({}),
}))();
