# `secureSourceManagerBranchRule` Submodule <a name="`secureSourceManagerBranchRule` Submodule" id="@cdktf/provider-google.secureSourceManagerBranchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerBranchRule <a name="SecureSourceManagerBranchRule" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule google_secure_source_manager_branch_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/securesourcemanagerbranchrule"

securesourcemanagerbranchrule.NewSecureSourceManagerBranchRule(scope Construct, id *string, config SecureSourceManagerBranchRuleConfig) SecureSourceManagerBranchRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig">SecureSourceManagerBranchRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig">SecureSourceManagerBranchRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetAllowStaleReviews">ResetAllowStaleReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumApprovalsCount">ResetMinimumApprovalsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumReviewsCount">ResetMinimumReviewsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireCommentsResolved">ResetRequireCommentsResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireLinearHistory">ResetRequireLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequirePullRequest">ResetRequirePullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts"></a>

```go
func PutTimeouts(value SecureSourceManagerBranchRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

---

##### `ResetAllowStaleReviews` <a name="ResetAllowStaleReviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetAllowStaleReviews"></a>

```go
func ResetAllowStaleReviews()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetId"></a>

```go
func ResetId()
```

##### `ResetMinimumApprovalsCount` <a name="ResetMinimumApprovalsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumApprovalsCount"></a>

```go
func ResetMinimumApprovalsCount()
```

##### `ResetMinimumReviewsCount` <a name="ResetMinimumReviewsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetMinimumReviewsCount"></a>

```go
func ResetMinimumReviewsCount()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRequireCommentsResolved` <a name="ResetRequireCommentsResolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireCommentsResolved"></a>

```go
func ResetRequireCommentsResolved()
```

##### `ResetRequireLinearHistory` <a name="ResetRequireLinearHistory" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequireLinearHistory"></a>

```go
func ResetRequireLinearHistory()
```

##### `ResetRequirePullRequest` <a name="ResetRequirePullRequest" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetRequirePullRequest"></a>

```go
func ResetRequirePullRequest()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/securesourcemanagerbranchrule"

securesourcemanagerbranchrule.SecureSourceManagerBranchRule_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/securesourcemanagerbranchrule"

securesourcemanagerbranchrule.SecureSourceManagerBranchRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/securesourcemanagerbranchrule"

securesourcemanagerbranchrule.SecureSourceManagerBranchRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/securesourcemanagerbranchrule"

securesourcemanagerbranchrule.SecureSourceManagerBranchRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SecureSourceManagerBranchRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecureSourceManagerBranchRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecureSourceManagerBranchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerBranchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference">SecureSourceManagerBranchRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviewsInput">AllowStaleReviewsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleIdInput">BranchRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePatternInput">IncludePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCountInput">MinimumApprovalsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCountInput">MinimumReviewsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolvedInput">RequireCommentsResolvedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistoryInput">RequireLinearHistoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequestInput">RequirePullRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviews">AllowStaleReviews</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleId">BranchRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePattern">IncludePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCount">MinimumApprovalsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCount">MinimumReviewsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolved">RequireCommentsResolved</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistory">RequireLinearHistory</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequest">RequirePullRequest</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeouts"></a>

```go
func Timeouts() SecureSourceManagerBranchRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference">SecureSourceManagerBranchRuleTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AllowStaleReviewsInput`<sup>Optional</sup> <a name="AllowStaleReviewsInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviewsInput"></a>

```go
func AllowStaleReviewsInput() interface{}
```

- *Type:* interface{}

---

##### `BranchRuleIdInput`<sup>Optional</sup> <a name="BranchRuleIdInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleIdInput"></a>

```go
func BranchRuleIdInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludePatternInput`<sup>Optional</sup> <a name="IncludePatternInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePatternInput"></a>

```go
func IncludePatternInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MinimumApprovalsCountInput`<sup>Optional</sup> <a name="MinimumApprovalsCountInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCountInput"></a>

```go
func MinimumApprovalsCountInput() *f64
```

- *Type:* *f64

---

##### `MinimumReviewsCountInput`<sup>Optional</sup> <a name="MinimumReviewsCountInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCountInput"></a>

```go
func MinimumReviewsCountInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `RequireCommentsResolvedInput`<sup>Optional</sup> <a name="RequireCommentsResolvedInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolvedInput"></a>

```go
func RequireCommentsResolvedInput() interface{}
```

- *Type:* interface{}

---

##### `RequireLinearHistoryInput`<sup>Optional</sup> <a name="RequireLinearHistoryInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistoryInput"></a>

```go
func RequireLinearHistoryInput() interface{}
```

- *Type:* interface{}

---

##### `RequirePullRequestInput`<sup>Optional</sup> <a name="RequirePullRequestInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequestInput"></a>

```go
func RequirePullRequestInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowStaleReviews`<sup>Required</sup> <a name="AllowStaleReviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.allowStaleReviews"></a>

```go
func AllowStaleReviews() interface{}
```

- *Type:* interface{}

---

##### `BranchRuleId`<sup>Required</sup> <a name="BranchRuleId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.branchRuleId"></a>

```go
func BranchRuleId() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludePattern`<sup>Required</sup> <a name="IncludePattern" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.includePattern"></a>

```go
func IncludePattern() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MinimumApprovalsCount`<sup>Required</sup> <a name="MinimumApprovalsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumApprovalsCount"></a>

```go
func MinimumApprovalsCount() *f64
```

- *Type:* *f64

---

##### `MinimumReviewsCount`<sup>Required</sup> <a name="MinimumReviewsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.minimumReviewsCount"></a>

```go
func MinimumReviewsCount() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `RequireCommentsResolved`<sup>Required</sup> <a name="RequireCommentsResolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireCommentsResolved"></a>

```go
func RequireCommentsResolved() interface{}
```

- *Type:* interface{}

---

##### `RequireLinearHistory`<sup>Required</sup> <a name="RequireLinearHistory" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requireLinearHistory"></a>

```go
func RequireLinearHistory() interface{}
```

- *Type:* interface{}

---

##### `RequirePullRequest`<sup>Required</sup> <a name="RequirePullRequest" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.requirePullRequest"></a>

```go
func RequirePullRequest() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerBranchRuleConfig <a name="SecureSourceManagerBranchRuleConfig" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/securesourcemanagerbranchrule"

&securesourcemanagerbranchrule.SecureSourceManagerBranchRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BranchRuleId: *string,
	IncludePattern: *string,
	Location: *string,
	RepositoryId: *string,
	AllowStaleReviews: interface{},
	Disabled: interface{},
	Id: *string,
	MinimumApprovalsCount: *f64,
	MinimumReviewsCount: *f64,
	Project: *string,
	RequireCommentsResolved: interface{},
	RequireLinearHistory: interface{},
	RequirePullRequest: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.branchRuleId">BranchRuleId</a></code> | <code>*string</code> | The ID for the BranchRule. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.includePattern">IncludePattern</a></code> | <code>*string</code> | The BranchRule matches branches based on the specified regular expression. Use .* to match all branches. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.location">Location</a></code> | <code>*string</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.allowStaleReviews">AllowStaleReviews</a></code> | <code>interface{}</code> | Determines if allow stale reviews or approvals before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Determines if the branch rule is disabled or not. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount">MinimumApprovalsCount</a></code> | <code>*f64</code> | The minimum number of approvals required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumReviewsCount">MinimumReviewsCount</a></code> | <code>*f64</code> | The minimum number of reviews required for the branch rule to be matched. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireCommentsResolved">RequireCommentsResolved</a></code> | <code>interface{}</code> | Determines if require comments resolved before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireLinearHistory">RequireLinearHistory</a></code> | <code>interface{}</code> | Determines if require linear history before merging to the branch. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requirePullRequest">RequirePullRequest</a></code> | <code>interface{}</code> | Determines if the branch rule requires a pull request or not. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BranchRuleId`<sup>Required</sup> <a name="BranchRuleId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.branchRuleId"></a>

```go
BranchRuleId *string
```

- *Type:* *string

The ID for the BranchRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#branch_rule_id SecureSourceManagerBranchRule#branch_rule_id}

---

##### `IncludePattern`<sup>Required</sup> <a name="IncludePattern" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.includePattern"></a>

```go
IncludePattern *string
```

- *Type:* *string

The BranchRule matches branches based on the specified regular expression. Use .* to match all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#include_pattern SecureSourceManagerBranchRule#include_pattern}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#location SecureSourceManagerBranchRule#location}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#repository_id SecureSourceManagerBranchRule#repository_id}

---

##### `AllowStaleReviews`<sup>Optional</sup> <a name="AllowStaleReviews" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.allowStaleReviews"></a>

```go
AllowStaleReviews interface{}
```

- *Type:* interface{}

Determines if allow stale reviews or approvals before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#allow_stale_reviews SecureSourceManagerBranchRule#allow_stale_reviews}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Determines if the branch rule is disabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#disabled SecureSourceManagerBranchRule#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#id SecureSourceManagerBranchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimumApprovalsCount`<sup>Optional</sup> <a name="MinimumApprovalsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumApprovalsCount"></a>

```go
MinimumApprovalsCount *f64
```

- *Type:* *f64

The minimum number of approvals required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#minimum_approvals_count SecureSourceManagerBranchRule#minimum_approvals_count}

---

##### `MinimumReviewsCount`<sup>Optional</sup> <a name="MinimumReviewsCount" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.minimumReviewsCount"></a>

```go
MinimumReviewsCount *f64
```

- *Type:* *f64

The minimum number of reviews required for the branch rule to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#minimum_reviews_count SecureSourceManagerBranchRule#minimum_reviews_count}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#project SecureSourceManagerBranchRule#project}.

---

##### `RequireCommentsResolved`<sup>Optional</sup> <a name="RequireCommentsResolved" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireCommentsResolved"></a>

```go
RequireCommentsResolved interface{}
```

- *Type:* interface{}

Determines if require comments resolved before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#require_comments_resolved SecureSourceManagerBranchRule#require_comments_resolved}

---

##### `RequireLinearHistory`<sup>Optional</sup> <a name="RequireLinearHistory" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requireLinearHistory"></a>

```go
RequireLinearHistory interface{}
```

- *Type:* interface{}

Determines if require linear history before merging to the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#require_linear_history SecureSourceManagerBranchRule#require_linear_history}

---

##### `RequirePullRequest`<sup>Optional</sup> <a name="RequirePullRequest" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.requirePullRequest"></a>

```go
RequirePullRequest interface{}
```

- *Type:* interface{}

Determines if the branch rule requires a pull request or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#require_pull_request SecureSourceManagerBranchRule#require_pull_request}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleConfig.property.timeouts"></a>

```go
Timeouts SecureSourceManagerBranchRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts">SecureSourceManagerBranchRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#timeouts SecureSourceManagerBranchRule#timeouts}

---

### SecureSourceManagerBranchRuleTimeouts <a name="SecureSourceManagerBranchRuleTimeouts" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/securesourcemanagerbranchrule"

&securesourcemanagerbranchrule.SecureSourceManagerBranchRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#create SecureSourceManagerBranchRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#delete SecureSourceManagerBranchRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/secure_source_manager_branch_rule#update SecureSourceManagerBranchRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerBranchRuleTimeoutsOutputReference <a name="SecureSourceManagerBranchRuleTimeoutsOutputReference" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/securesourcemanagerbranchrule"

securesourcemanagerbranchrule.NewSecureSourceManagerBranchRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecureSourceManagerBranchRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secureSourceManagerBranchRule.SecureSourceManagerBranchRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



