(() => ({
  name: "MeContainer",
  type: "BODY_COMPONENT",
  allowedTypes: [],
  orientation: "HORIZONTAL",
  jsx: (
    <div>
      <h1 className={classes.root}>profile: {options.authProfile}</h1>
      {(() => {
        const { useMe } = B;
        const { data, loading, error } = useMe(options.authProfile);
        console.log({ data, loading, error });
      })()}
    </div>
  ),
  styles: (B) => ({ typography }) => ({}),
}))();
