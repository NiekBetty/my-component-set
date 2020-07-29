(() => ({
  name: "MeContainer",
  type: "BODY_COMPONENT",
  allowedTypes: [],
  orientation: "HORIZONTAL",
  jsx: (
    <div>
      <h1 className={classes.root}>profile: {options.authProfile}</h1>
    </div>
  ),
  styles: (B) => ({ typography }) => ({}),
}))();
