const checkButLimitReached = (recipe, allowMoreChecks) => (
  !recipe.checked && !allowMoreChecks ? true : false
)

export default checkButLimitReached